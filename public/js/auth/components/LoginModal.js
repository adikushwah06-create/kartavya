/**
 * LoginModal - Authentication & Role Selection Modal
 * Displays the Role Selection tabs directly in place of the previous intermediate popup
 */
class LoginModal {
  constructor() {
    this.container = null;
    this.isOpen = false;
    this.selectedRoles = new Set(['Student']);
    this._unsubscribe = null;
  }

  mount(rootElement) {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.id = 'kartavya-login-modal';
    this.container.className = 'fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none overflow-y-auto';
    
    // Close modal when clicking backdrop
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) {
        this.close();
      }
    });

    rootElement.appendChild(this.container);

    // Subscribe to auth state updates to render loading/error
    this._unsubscribe = window.KartavyaAuthStore?.subscribe?.((state) => {
      if (this.isOpen) {
        this.render(state);
      }
    });
  }

  open() {
    if (!this.container) return;
    this.isOpen = true;
    this.render(window.KartavyaAuthStore?.getState?.() || {});
    
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

  toggleRole(roleId) {
    if (this.selectedRoles.has(roleId)) {
      if (this.selectedRoles.size > 1) {
        this.selectedRoles.delete(roleId);
      } else {
        window.showToast?.('Please select at least one role to continue.', 'warning');
        return;
      }
    } else {
      this.selectedRoles.add(roleId);
    }
    this.render();
  }

  submitSelectedRoles() {
    let target = 'Student';
    if (this.selectedRoles.has('Student')) {
      target = 'Student';
    } else if (this.selectedRoles.has('Citizen / Community Member')) {
      target = 'Citizen';
    } else if (this.selectedRoles.has('Industry / Organization')) {
      target = 'Industry';
    } else if (this.selectedRoles.has('University / Researcher')) {
      target = 'Student';
    }
    this.loginWithRole(target);
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
        roles: ['Citizen / Community Member'],
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
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
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
      } else {
        window.switchTab('map');
      }
    }

    window.showToast?.(`Logged in as ${user.name} (${role} Portal)`, 'success');
  }

  render(state) {
    if (!this.container) return;
    const authState = window.KartavyaAuthStore?.getState?.() || {};
    const rolesConfig = [
      {
        id: 'Student',
        title: 'Student',
        desc: 'Build solutions and work on real-world challenges.',
        icon: 'fa-graduation-cap',
        color: 'text-sky-600',
        activeBorder: 'border-sky-500 bg-sky-50/60'
      },
      {
        id: 'Citizen / Community Member',
        title: 'Citizen / Community Member',
        desc: 'Report challenges and contribute local knowledge.',
        icon: 'fa-users',
        color: 'text-amber-600',
        activeBorder: 'border-amber-500 bg-amber-50/60'
      },
      {
        id: 'University / Researcher',
        title: 'University / Researcher',
        desc: 'Share expertise, research and institutional capabilities.',
        icon: 'fa-microscope',
        color: 'text-emerald-600',
        activeBorder: 'border-emerald-500 bg-emerald-50/60'
      },
      {
        id: 'Industry / Organization',
        title: 'Industry / Organization',
        desc: 'Mentor, fund, prototype and help scale solutions.',
        icon: 'fa-building-columns',
        color: 'text-purple-600',
        activeBorder: 'border-purple-500 bg-purple-50/60'
      }
    ];

    const canContinue = this.selectedRoles.size > 0;

    this.container.innerHTML = `
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-150 p-6 sm:p-9 relative my-auto font-sans transition-all duration-300">
        
        <!-- Close Button -->
        <button id="login-modal-close-btn" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition focus:outline-none" title="Close">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>

        <!-- Brand Sun Icon & Header -->
        <div class="text-center mb-6">
          <div class="h-12 w-12 mx-auto rounded-2xl overflow-hidden flex items-center justify-center shadow-md border border-slate-200 mb-3">
            <img src="/sun-icon.jpg" class="h-full w-full object-cover" alt="Kartavya Sun Logo">
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
            How do you want to contribute to Kartavya?
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2 font-medium leading-relaxed">
            Select one or multiple roles that match your involvement. Roles are not mutually exclusive.
          </p>
        </div>

        <!-- Error Alert Banner (if any) -->
        ${
          authState.error
            ? `
          <div class="mb-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-700 font-medium animate-shake">
            <i class="fa-solid fa-circle-exclamation text-rose-500 text-sm mt-0.5 flex-shrink-0"></i>
            <span>${authState.error}</span>
          </div>
        `
            : ''
        }

        <!-- Roles Selection Grid (Direct selection tabs) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
          ${rolesConfig
            .map((role) => {
              const isSelected = this.selectedRoles.has(role.id);
              return `
              <div 
                onclick="window.KartavyaLoginModal.toggleRole('${role.id}')"
                class="p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between relative group ${
                  isSelected
                    ? `${role.activeBorder} shadow-sm ring-1 ring-offset-1 ring-slate-300`
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }"
              >
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <div class="w-9 h-9 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                      <i class="fa-solid ${role.icon} text-base ${role.color}"></i>
                    </div>
                    <!-- Custom Checkbox Indicator -->
                    <div class="w-5 h-5 rounded-md border flex items-center justify-center transition ${
                      isSelected
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'border-slate-300 bg-white group-hover:border-slate-400'
                    }">
                      ${isSelected ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
                    </div>
                  </div>
                  <h3 class="text-sm font-bold text-slate-800 font-outfit mb-1">${role.title}</h3>
                  <p class="text-xs text-slate-500 leading-relaxed font-normal">${role.desc}</p>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>

        <!-- Continue Button -->
        <button 
          id="login-role-continue-btn"
          onclick="window.KartavyaLoginModal.submitSelectedRoles()"
          ${!canContinue ? 'disabled' : ''}
          class="w-full py-4 bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 font-outfit disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Continue</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>

        <!-- Footer -->
        <div class="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <div class="flex items-center gap-1.5 text-[11px]">
            <i class="fa-solid fa-shield-halved text-emerald-600"></i>
            <span>Google Authentication &bull; Secure & Private</span>
          </div>
          <button 
            onclick="window.KartavyaLoginModal.close(); window.showAboutPage?.()" 
            class="text-[11px] text-brand-600 hover:text-brand-700 font-bold transition underline underline-offset-2"
          >
            About Initiative
          </button>
        </div>

      </div>
    `;

    // Bind Close Button
    const closeBtn = this.container.querySelector('#login-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }
}

window.KartavyaLoginModal = new LoginModal();
