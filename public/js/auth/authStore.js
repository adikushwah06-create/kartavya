/**
 * AuthStore - Centralized state management for Authentication (AuthProvider / AuthContext)
 */
class AuthStore {
  constructor() {
    this.user = null;
    this.isAuthenticated = false;
    this.isLoading = true;
    this.error = null;
    this.isNewUser = false;
    this.subscribers = new Set();
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this.getState());
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = this.getState();
    this.subscribers.forEach(cb => {
      try { cb(state); } catch (e) { console.error('AuthStore subscriber error:', e); }
    });
  }

  getState() {
    return {
      user: this.user,
      isAuthenticated: this.isAuthenticated,
      isLoading: this.isLoading,
      error: this.error,
      isNewUser: this.isNewUser,
      hasCompletedProfile: Boolean(this.user?.profileCompleted)
    };
  }

  async init() {
    this.isLoading = true;
    this.error = null;
    this.notify();

    await window.KartavyaAuthService.init();

    // Check for persisted session in localStorage
    const cached = localStorage.getItem('kartavya_auth_user');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.uid) {
          this.user = parsed;
          this.isAuthenticated = true;

          // Background sync with backend to get fresh data
          fetch(`/api/auth/profile/${parsed.uid}`)
            .then(res => res.ok ? res.json() : null)
            .then(fresh => {
              if (fresh) {
                this.user = fresh;
                localStorage.setItem('kartavya_auth_user', JSON.stringify(fresh));
                this.notify();
              }
            })
            .catch(err => console.warn('Could not refresh user profile:', err));
        }
      } catch (e) {
        console.warn('Failed to parse cached session:', e);
        localStorage.removeItem('kartavya_auth_user');
      }
    }

    this.isLoading = false;
    this.notify();
  }

  async loginWithGoogle() {
    this.isLoading = true;
    this.error = null;
    this.notify();

    try {
      const { user, isNewUser } = await window.KartavyaAuthService.signInWithGoogle();
      this.user = user;
      this.isAuthenticated = true;
      this.isNewUser = isNewUser;
      this.error = null;

      localStorage.setItem('kartavya_auth_user', JSON.stringify(user));
      this.isLoading = false;
      this.notify();

      return { user, isNewUser };
    } catch (err) {
      console.error('Login error in AuthStore:', err);
      this.isLoading = false;
      this.error = err.message || 'Google authentication failed.';
      this.notify();
      throw err;
    }
  }

  async submitOnboarding(roles, profileDetails) {
    if (!this.user || !this.user.uid) {
      throw new Error('No active authenticated session.');
    }

    this.isLoading = true;
    this.error = null;
    this.notify();

    try {
      const payload = {
        uid: this.user.uid,
        roles,
        ...profileDetails
      };

      const { user } = await window.KartavyaAuthService.completeOnboarding(payload);
      this.user = user;
      this.isNewUser = false;
      this.error = null;

      localStorage.setItem('kartavya_auth_user', JSON.stringify(user));
      this.isLoading = false;
      this.notify();

      return user;
    } catch (err) {
      console.error('Onboarding submission error:', err);
      this.isLoading = false;
      this.error = err.message || 'Failed to complete profile.';
      this.notify();
      throw err;
    }
  }

  async logout() {
    this.isLoading = true;
    this.notify();

    try {
      await window.KartavyaAuthService.signOut();
    } catch (e) {}

    this.user = null;
    this.isAuthenticated = false;
    this.isNewUser = false;
    this.error = null;
    this.isLoading = false;

    localStorage.removeItem('kartavya_auth_user');
    // Also clear old legacy keys
    localStorage.removeItem('kartavya_session_role');
    localStorage.removeItem('kartavya_session_adhaar');

    this.notify();
  }
}

window.KartavyaAuthStore = new AuthStore();
