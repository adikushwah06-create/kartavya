/**
 * AuthService - Handles Firebase Authentication with Google Provider
 * Fallback to Mock Google Authentication Mode when Firebase credentials are not set.
 */
class AuthService {
  constructor() {
    this.config = null;
    this.isMock = true;
    this.firebaseAuth = null;
    this.googleProvider = null;
  }

  async init() {
    try {
      const res = await fetch('/api/auth/config');
      if (res.ok) {
        this.config = await res.json();
        this.isMock = Boolean(this.config.mockMode);
      }
    } catch (e) {
      console.warn('Could not load auth configuration, using mock mode:', e);
      this.isMock = true;
    }

    if (!this.isMock && this.config?.firebaseConfig && window.firebase) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(this.config.firebaseConfig);
        }
        this.firebaseAuth = firebase.auth();
        this.googleProvider = new firebase.auth.GoogleAuthProvider();
        this.googleProvider.setCustomParameters({ prompt: 'select_account' });
      } catch (err) {
        console.error('Failed to initialize Firebase Auth, falling back to mock mode:', err);
        this.isMock = true;
      }
    }
  }

  async signInWithGoogle() {
    if (!this.isMock && this.firebaseAuth && this.googleProvider) {
      // Real Firebase Google Auth flow
      try {
        const result = await this.firebaseAuth.signInWithPopup(this.googleProvider);
        const fbUser = result.user;
        const payload = {
          uid: fbUser.uid,
          name: fbUser.displayName || fbUser.email.split('@')[0],
          email: fbUser.email,
          profilePhoto: fbUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${fbUser.uid}`
        };
        return await this._syncWithBackend(payload);
      } catch (error) {
        console.error('Firebase Google Sign-In Error:', error);
        throw new Error(error.message || 'Google Authentication failed. Please try again.');
      }
    }

    // Mock Google Authentication Flow
    return new Promise((resolve, reject) => {
      // Simulate realistic popup authentication delay
      setTimeout(async () => {
        try {
          // Check if there is an existing demo user stored in localStorage to simulate returning user
          const savedSession = localStorage.getItem('kartavya_auth_user');
          let demoUid = 'google_demo_101';
          let demoName = 'Ammodita';
          let demoEmail = 'ammodita@kartavya.gov.in';
          let demoPhoto = '/ammodita/ammodita-3.jpg';

          if (savedSession) {
            try {
              const parsed = JSON.parse(savedSession);
              if (parsed?.uid) {
                demoUid = parsed.uid;
                demoName = parsed.name || demoName;
                demoEmail = parsed.email || demoEmail;
                demoPhoto = parsed.profilePhoto || demoPhoto;
              }
            } catch (e) {}
          }

          const payload = {
            uid: demoUid,
            name: demoName,
            email: demoEmail,
            profilePhoto: demoPhoto
          };

          const synced = await this._syncWithBackend(payload);
          resolve(synced);
        } catch (err) {
          reject(err);
        }
      }, 750);
    });
  }

  async _syncWithBackend(payload) {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Server rejected authentication verification.');
    }

    return await res.json(); // { user, isNewUser }
  }

  async completeOnboarding(onboardingData) {
    const res = await fetch('/api/auth/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(onboardingData)
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to complete profile.');
    }

    return await res.json(); // { success: true, user }
  }

  async signOut() {
    if (!this.isMock && this.firebaseAuth) {
      try {
        await this.firebaseAuth.signOut();
      } catch (e) {
        console.warn('Firebase signout error:', e);
      }
    }
  }
}

window.KartavyaAuthService = new AuthService();
