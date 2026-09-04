/**
 * Router & ProtectedRoute - Client-side SPA route controller for Kartavya
 */
class AppRouter {
  constructor() {
    this.currentPath = window.location.pathname || '/';
    window.addEventListener('popstate', () => this.handleRoute(window.location.pathname));
  }

  init() {
    this.handleRoute(window.location.pathname);
  }

  navigate(path) {
    if (path !== window.location.pathname) {
      window.history.pushState(null, '', path);
    }
    this.handleRoute(path);
  }

  handleRoute(path) {
    this.currentPath = path;
    const auth = window.KartavyaAuthStore.getState();

    // Elements
    const aboutPage = document.getElementById('about-page');
    const appNav = document.getElementById('app-nav');
    const appFooter = document.getElementById('app-footer');
    const authGate = document.getElementById('auth-gate');

    // Always ensure legacy auth gate is hidden
    if (authGate) authGate.classList.add('hidden');

    if (path === '/login') {
      // Show landing page with login modal overlay
      if (aboutPage) aboutPage.classList.remove('hidden');
      if (appNav) appNav.classList.add('hidden');
      if (appFooter) appFooter.classList.add('hidden');

      window.KartavyaOnboardingModal?.close();
      window.KartavyaLoginModal?.open();
      return;
    }

    if (path === '/onboarding') {
      // Protected Route: Must be authenticated
      if (!auth.isAuthenticated) {
        this.navigate('/login');
        return;
      }

      // If user already completed profile, skip onboarding to dashboard
      if (auth.hasCompletedProfile) {
        this.navigate('/dashboard');
        return;
      }

      if (aboutPage) aboutPage.classList.remove('hidden');
      if (appNav) appNav.classList.add('hidden');
      if (appFooter) appFooter.classList.add('hidden');

      window.KartavyaLoginModal?.close();
      window.KartavyaOnboardingModal?.open();
      return;
    }

    if (path === '/dashboard') {
      // Protected Route: Must be authenticated and completed onboarding
      if (!auth.isAuthenticated) {
        this.navigate('/login');
        return;
      }

      if (!auth.hasCompletedProfile) {
        this.navigate('/onboarding');
        return;
      }

      // Close all modals
      window.KartavyaLoginModal?.close();
      window.KartavyaOnboardingModal?.close();

      // Show main dashboard
      if (aboutPage) aboutPage.classList.add('hidden');
      if (appNav) appNav.classList.remove('hidden');
      if (appFooter) appFooter.classList.remove('hidden');

      // Update dashboard navbar user display
      this.syncDashboardUser(auth.user);

      // Default to student tab if student role is selected, else city map
      if (window.switchTab) {
        if (auth.user?.roles && auth.user.roles.includes('Student')) {
          window.switchTab('student');
        } else {
          window.switchTab('map');
        }
      }
      return;
    }

    // Default root path '/' -> Visitor Landing Page
    window.KartavyaLoginModal?.close();
    window.KartavyaOnboardingModal?.close();

    if (auth.isAuthenticated && auth.hasCompletedProfile) {
      // Returning authenticated user visiting root: still give access to dashboard or show landing
      // Keep on landing page until they click enter or navigate to /dashboard
      if (aboutPage) aboutPage.classList.remove('hidden');
      if (appNav) appNav.classList.add('hidden');
      if (appFooter) appFooter.classList.add('hidden');
    } else {
      if (aboutPage) aboutPage.classList.remove('hidden');
      if (appNav) appNav.classList.add('hidden');
      if (appFooter) appFooter.classList.add('hidden');
    }
  }

  syncDashboardUser(user) {
    if (!user) return;

    const nameEl = document.getElementById('nav-session-name');
    const roleEl = document.getElementById('nav-session-role');

    if (nameEl) {
      nameEl.innerText = user.name || 'Kartavya Member';
      nameEl.title = user.email || '';
    }

    if (roleEl) {
      const roles = user.roles || ['Citizen'];
      roleEl.innerText = roles.length > 1 ? `${roles[0]} +${roles.length - 1}` : (roles[0] || 'Member');
      roleEl.title = roles.join(', ');
    }

    // Also update citizen profile / wallet view if available
    const walletCitizenName = document.getElementById('wallet-citizen-name');
    if (walletCitizenName) {
      walletCitizenName.innerText = user.name;
    }

    const walletCitizenEmail = document.getElementById('wallet-citizen-email');
    if (walletCitizenEmail) {
      walletCitizenEmail.innerText = user.email;
    }
  }
}

window.KartavyaRouter = new AppRouter();
