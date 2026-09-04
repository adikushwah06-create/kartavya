/**
 * Kartavya Authentication Entrypoint
 * Bootstraps AuthStore, Modals, Router, and global API
 */
document.addEventListener('DOMContentLoaded', async () => {
  // Ensure modal root containers exist
  let modalRoot = document.getElementById('kartavya-auth-modals-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'kartavya-auth-modals-root';
    document.body.appendChild(modalRoot);
  }

  // Mount Modals
  window.KartavyaLoginModal.mount(modalRoot);
  window.KartavyaOnboardingModal.mount(modalRoot);

  // Initialize Auth Store
  await window.KartavyaAuthStore.init();

  // Initialize Router
  window.KartavyaRouter.init();

  // Public Global API for UI bindings
  window.KartavyaAuth = {
    openLoginModal: () => {
      window.KartavyaRouter.navigate('/login');
    },
    closeLoginModal: () => {
      window.KartavyaLoginModal.close();
    },
    openOnboardingModal: () => {
      window.KartavyaRouter.navigate('/onboarding');
    },
    logout: async () => {
      await window.KartavyaAuthStore.logout();
      window.showToast?.('Logged out successfully.', 'success');
      window.KartavyaRouter.navigate('/');
    },
    getState: () => window.KartavyaAuthStore.getState()
  };

  // Re-route if user clicks the legacy login / access portals button
  const accessPortalsBtn = document.getElementById('about-access-portals-btn');
  if (accessPortalsBtn) {
    accessPortalsBtn.onclick = (e) => {
      e.preventDefault();
      window.KartavyaAuth.openLoginModal();
    };
  }
});
