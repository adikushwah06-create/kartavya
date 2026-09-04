/**
 * LoginModal - Authentication modal overlay matching the Kartavya design system
 */
class LoginModal {
  constructor() {
    this.container = null;
    this.isOpen = false;
    this._unsubscribe = null;
  }

  mount(rootElement) {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.id = 'kartavya-login-modal';
    this.container.className = 'fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none';
    
    // Close modal when clicking backdrop
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) {
        this.close();
      }
    });

    rootElement.appendChild(this.container);

    // Subscribe to auth state updates to render loading/error
    this._unsubscribe = window.KartavyaAuthStore.subscribe((state) => {
      if (this.isOpen) {
        this.render(state);
      }
    });
  }

  open() {
    if (!this.container) return;
    this.isOpen = true;
    this.render(window.KartavyaAuthStore.getState());
    
    // Trigger transition
    requestAnimationFrame(() => {
      this.container.classList.remove('opacity-0', 'pointer-events-none');
      this.container.classList.add('opacity-100', 'pointer-events-auto');
    });
  }

  close() {
    if (!this.container) return;
    this.isOpen = false;
    this.container.classList.remove('opacity-100', 'pointer-events-auto');
    this.container.classList.add('opacity-0', 'pointer-events-none');
    
    // If URL is /login, update to / without reload
    if (window.location.pathname === '/login') {
      window.history.pushState(null, '', '/');
    }
  }

  async loginWithRole(role) {
    const defaultProfiles = {
      'Student': {
        uid: 'student-aditi',
        name: 'Aditi Kushwah',
        email: 'ak5617@srmist.edu.in',
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        roles: ['Student'],
        profileCompleted: true,
        skills: ['Edge AI', 'Geopolymer Concrete', 'IoT Sensors', 'CleanTech']
      },
      'Citizen': {
        uid: 'citizen-aditi',
        name: 'Aditi Kushwah',
        email: 'aditi.citizen@gmail.com',
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        roles: ['Citizen'],
        adhaar: '1234-5678-9012',
        profileCompleted: true
      },
      'Admin': {
        uid: 'admin-authority',
        name: 'Municipal Authority',
        email: 'triage@bbmp.gov.in',
        roles: ['Admin'],
        profileCompleted: true
      },
      'Industry': {
        uid: 'industry-partner',
        name: 'Tata Power R&D Lead',
        email: 'cleanwater.rnd@tatapower.com',
        roles: ['Industry / Organization'],
        profileCompleted: true
      }
    };

    const user = defaultProfiles[role] || defaultProfiles['Student'];

    // Update localStorage
    localStorage.setItem('kartavya_auth_user', JSON.stringify(user));
    localStorage.setItem('kartavya_user_name', user.name);

    if (role === 'Student') {
      window.sessionRole = 'citizen';
      localStorage.setItem('kartavya_session_role', 'student');
    } else if (role === 'Citizen') {
      window.sessionRole = 'citizen';
      window.sessionAdhaar = user.adhaar || '1234-5678-9012';
      localStorage.setItem('kartavya_session_role', 'citizen');
      localStorage.setItem('kartavya_session_adhaar', window.sessionAdhaar);
    } else if (role === 'Admin') {
      window.sessionRole = 'admin';
      localStorage.setItem('kartavya_session_role', 'admin');
    } else if (role === 'Industry') {
      window.sessionRole = 'citizen';
      localStorage.setItem('kartavya_session_role', 'industry');
    }

    // Update store state
    if (window.KartavyaAuthStore) {
      window.KartavyaAuthStore.setState({
        user,
        isAuthenticated: true,
        hasCompletedProfile: true,
        isLoading: false,
        error: null
      });
    }

    this.close();

    // Transition view to dashboard
    const aboutPage = document.getElementById('about-page');
    const appNav = document.getElementById('app-nav');
    const appFooter = document.getElementById('app-footer');
    const authGate = document.getElementById('auth-gate');

    if (aboutPage) aboutPage.classList.add('hidden');
    if (authGate) authGate.classList.add('hidden');
    if (appNav) appNav.classList.remove('hidden');
    if (appFooter) appFooter.classList.remove('hidden');

    if (window.KartavyaRouter) {
      window.KartavyaRouter.syncDashboardUser(user);
    }
    if (window.renderNavbar) {
      window.renderNavbar();
    }

    // Switch to target view
    if (window.switchTab) {
      if (role === 'Student' || role === 'Industry') {
        window.switchTab('student');
      } else if (role === 'Admin') {
        window.switchTab('triage');
      } else if (role === 'Citizen') {
        window.switchTab('report');
      } else {
        window.switchTab('map');
      }
    }

    window.showToast?.(`Logged in as ${user.name} (${role} Portal)`, 'success');
  }

  render(state) {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-150 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 transform scale-100 font-sans my-auto">
        
        <!-- Close Button -->
        <button id="login-modal-close-btn" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition focus:outline-none" title="Close">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>

        <!-- Brand Sun Icon & Header -->
        <div class="text-center mb-6">
          <div class="h-12 w-12 mx-auto rounded-2xl overflow-hidden flex items-center justify-center shadow-md border border-slate-200 mb-3">
            <img src="/sun-icon.jpg" class="h-full w-full object-cover" alt="Kartavya Sun Logo">
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit">
            Welcome to Kartavya
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-medium">
            One platform. One community. A better India. Choose your portal to proceed.
          </p>
        </div>

        <!-- Error Alert Banner -->
        ${
          state.error
            ? `
          <div class="mb-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-700 font-medium animate-shake">
            <i class="fa-solid fa-circle-exclamation text-rose-500 text-sm mt-0.5 flex-shrink-0"></i>
            <span>${state.error}</span>
          </div>
        `
            : ''
        }

        <!-- Portal Role Selector Grid -->
        <div class="space-y-3 mb-6">
          <span class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
            Choose Your Portal
          </span>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <!-- Option 1: Student Portal -->
            <button 
              onclick="window.KartavyaLoginModal.loginWithRole('Student')"
              class="p-4 rounded-2xl border-2 border-brand-200 hover:border-brand-500 bg-brand-50/40 hover:bg-brand-50 text-left transition-all duration-200 group flex items-start gap-3.5"
            >
              <div class="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 font-outfit">Student Portal</h4>
                  <span class="text-[9px] px-1.5 py-0.2 bg-brand-100 text-brand-700 font-bold rounded">Innovator</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">Solve citizen problems, apply for milestone grants & build prototypes.</p>
              </div>
            </button>

            <!-- Option 2: Citizen Portal -->
            <button 
              onclick="window.KartavyaLoginModal.loginWithRole('Citizen')"
              class="p-4 rounded-2xl border-2 border-blue-200 hover:border-blue-500 bg-blue-50/40 hover:bg-blue-50 text-left transition-all duration-200 group flex items-start gap-3.5"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 font-outfit">Citizen Portal</h4>
                  <span class="text-[9px] px-1.5 py-0.2 bg-blue-100 text-blue-700 font-bold rounded">Community</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">Report civic challenges, track ward budgets & earn Karma perks.</p>
              </div>
            </button>

            <!-- Option 3: Municipal Admin -->
            <button 
              onclick="window.KartavyaLoginModal.loginWithRole('Admin')"
              class="p-4 rounded-2xl border-2 border-slate-200 hover:border-slate-700 bg-slate-50 hover:bg-slate-100 text-left transition-all duration-200 group flex items-start gap-3.5"
            >
              <div class="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-building-shield"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 font-outfit">Municipal Admin</h4>
                  <span class="text-[9px] px-1.5 py-0.2 bg-slate-200 text-slate-700 font-bold rounded">Official</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">Triage reports, inspect telemetry proofs & dispatch municipal repairs.</p>
              </div>
            </button>

            <!-- Option 4: Industry & R&D Partner -->
            <button 
              onclick="window.KartavyaLoginModal.loginWithRole('Industry')"
              class="p-4 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50 text-left transition-all duration-200 group flex items-start gap-3.5"
            >
              <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-handshake-angle"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 font-outfit">Industry & R&D</h4>
                  <span class="text-[9px] px-1.5 py-0.2 bg-emerald-100 text-emerald-700 font-bold rounded">Sponsor</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">Sponsor citizen challenges, review student proposals & fund grants.</p>
              </div>
            </button>

          </div>
        </div>

        <!-- Divider: Or Google -->
        <div class="relative flex py-2 items-center mb-4">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="flex-shrink mx-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Or Continue With Google</span>
          <div class="flex-grow border-t border-slate-200"></div>
        </div>

        <!-- Primary Action: Google Authentication Button -->
        <div id="google-btn-container" class="mb-5"></div>

        <!-- Explanatory Trust Footer -->
        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div class="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <i class="fa-solid fa-shield-halved text-emerald-600"></i>
            <span>Encrypted Identity &bull; Smart India Hackathon 2026</span>
          </div>
          <button 
            onclick="window.KartavyaLoginModal.close(); window.showAboutPage?.()" 
            class="text-[11px] text-brand-600 hover:text-brand-700 font-bold transition underline underline-offset-2"
          >
            Explore About Initiative
          </button>
        </div>

      </div>
    `;

    // Bind Close Button
    const closeBtn = this.container.querySelector('#login-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Mount GoogleAuthButton into the container
    const btnSlot = this.container.querySelector('#google-btn-container');
    if (btnSlot) {
      const googleBtn = window.KartavyaGoogleAuthButton({
        isLoading: state.isLoading,
        disabled: state.isLoading,
        onClick: async () => {
          try {
            const { user, isNewUser } = await window.KartavyaAuthStore.loginWithGoogle();
            this.close();

            if (isNewUser || !user.profileCompleted) {
              window.KartavyaRouter.navigate('/onboarding');
            } else {
              window.KartavyaRouter.navigate('/dashboard');
            }
          } catch (err) {
            // Error is handled in store state
          }
        }
      });
      btnSlot.appendChild(googleBtn);
    }
  }
}

window.KartavyaLoginModal = new LoginModal();
