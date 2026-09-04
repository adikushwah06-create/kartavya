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

  render(state) {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-7 sm:p-9 relative overflow-hidden transition-all duration-300 transform scale-100 font-sans">
        
        <!-- Close Button -->
        <button id="login-modal-close-btn" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition focus:outline-none" title="Close">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>

        <!-- Brand Sun Icon & Header -->
        <div class="text-center mb-7">
          <div class="h-14 w-14 mx-auto rounded-2xl overflow-hidden flex items-center justify-center shadow-md border border-slate-200 mb-4">
            <img src="/sun-icon.jpg" class="h-full w-full object-cover" alt="Kartavya Sun Logo">
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight font-outfit">
            Welcome to Kartavya
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-medium">
            One platform. One community. A better India.
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

        <!-- Primary Action: Google Authentication Button -->
        <div id="google-btn-container" class="mb-6"></div>

        <!-- Explanatory Trust Footer -->
        <div class="pt-5 border-t border-slate-100 text-center">
          <p class="text-[11px] text-slate-400 leading-relaxed">
            By continuing, you join a national collaborative network of citizens, students, universities, and industry partners.
          </p>
          <div class="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
            <i class="fa-solid fa-shield-halved text-emerald-600"></i>
            <span>Unified Google Authentication &bull; Secure & Private</span>
          </div>
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
