/**
 * OnboardingModal - Multi-step first-time user onboarding flow
 * Step 1: Role Selection (Multi-Role Allowed)
 * Step 2: Minimal Progressive Profile Setup
 */
class OnboardingModal {
  constructor() {
    this.container = null;
    this.isOpen = false;
    this.currentStep = 1; // 1: Roles, 2: Profile Setup
    this.selectedRoles = new Set(['Student']); // Default 1 selected
    this.profileFormState = {
      location: '',
      bio: '',
      skills: '',
      interests: '',
      roleData: {}
    };
  }

  mount(rootElement) {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.id = 'kartavya-onboarding-modal';
    this.container.className = 'fixed inset-0 z-[125] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none overflow-y-auto';

    rootElement.appendChild(this.container);
  }

  open() {
    if (!this.container) return;
    this.isOpen = true;
    this.currentStep = 1;
    this.render();

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

  goToStep(step) {
    this.currentStep = step;
    this.render();
    // Scroll modal container to top
    if (this.container) {
      this.container.scrollTop = 0;
    }
  }

  render() {
    if (!this.container) return;
    const authState = window.KartavyaAuthStore.getState();
    const user = authState.user || {
      name: 'Pioneer Citizen',
      email: 'citizen@kartavya.gov.in',
      profilePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    };

    if (this.currentStep === 1) {
      this.renderRoleSelection(user, authState);
    } else {
      this.renderProfileSetup(user, authState);
    }
  }

  renderRoleSelection(user, authState) {
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
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-7 sm:p-9 relative my-8 font-sans transition-all">
        
        <!-- Progress Dots -->
        <div class="flex items-center justify-center gap-2 mb-6">
          <span class="h-2 w-8 rounded-full bg-brand-500"></span>
          <span class="h-2 w-2 rounded-full bg-slate-200"></span>
        </div>

        <!-- Google User Header Badge -->
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <div class="flex items-center gap-3">
            <img src="${user.profilePhoto}" alt="${user.name}" class="w-10 h-10 rounded-full object-cover border border-white shadow-sm">
            <div>
              <p class="text-xs font-bold text-slate-800 font-outfit leading-tight">${user.name}</p>
              <p class="text-[11px] text-slate-500 truncate max-w-[220px]">${user.email}</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
            Google Verified
          </span>
        </div>

        <!-- Title & Subtitle -->
        <div class="text-center mb-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
            How do you want to contribute to Kartavya?
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Select one or multiple roles that match your involvement. Roles are not mutually exclusive.
          </p>
        </div>

        <!-- Roles Multi-Selection Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
          ${rolesConfig
            .map((role) => {
              const isSelected = this.selectedRoles.has(role.id);
              return `
              <div 
                onclick="window.KartavyaOnboardingModal.toggleRole('${role.id}')"
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
          id="onboarding-step1-next"
          onclick="window.KartavyaOnboardingModal.goToStep(2)"
          ${!canContinue ? 'disabled' : ''}
          class="w-full py-4 bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 font-outfit disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Continue</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>

      </div>
    `;
  }

  renderProfileSetup(user, authState) {
    const roles = Array.from(this.selectedRoles);
    const hasStudent = this.selectedRoles.has('Student');
    const hasIndustry = this.selectedRoles.has('Industry / Organization');
    const hasResearcher = this.selectedRoles.has('University / Researcher');
    const hasCitizen = this.selectedRoles.has('Citizen / Community Member');

    this.container.innerHTML = `
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-7 sm:p-9 relative my-8 font-sans transition-all">
        
        <!-- Header with Back Button and Progress -->
        <div class="flex items-center justify-between mb-5">
          <button onclick="window.KartavyaOnboardingModal.goToStep(1)" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-arrow-left"></i> Change Roles
          </button>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-slate-200"></span>
            <span class="h-2 w-8 rounded-full bg-brand-500"></span>
          </div>
        </div>

        <!-- Title -->
        <div class="mb-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Complete Your Profile
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Basic details for your chosen roles: <span class="font-bold text-slate-700">${roles.join(', ')}</span>
          </p>
        </div>

        <!-- Google Profile Read-Only Card -->
        <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3.5 mb-6">
          <img src="${user.profilePhoto}" alt="${user.name}" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-slate-900 font-outfit truncate">${user.name}</p>
            <p class="text-xs text-slate-500 truncate">${user.email}</p>
          </div>
          <span class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">From Google</span>
        </div>

        <!-- Profile Form -->
        <form id="onboarding-profile-form" onsubmit="window.KartavyaOnboardingModal.handleProfileSubmit(event)" class="space-y-4 text-left">
          
          <!-- Common Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Location (City / State) <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="prof-location" 
                required 
                placeholder="e.g. Bengaluru, Karnataka" 
                class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
              >
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Primary Interests <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="prof-interests" 
                required 
                placeholder="e.g. Clean Energy, Road Safety, AI" 
                class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
              >
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
              Key Skills / Capabilities
            </label>
            <input 
              type="text" 
              id="prof-skills" 
              placeholder="e.g. IoT Sensors, Python, Civic Policy, Rapid Prototyping" 
              class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            >
          </div>

          <div>
            <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
              Short Bio
            </label>
            <textarea 
              id="prof-bio" 
              rows="2" 
              placeholder="Tell the community how you want to contribute..." 
              class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            ></textarea>
          </div>

          <!-- Dynamic Role Fields: Student -->
          ${
            hasStudent
              ? `
            <div class="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-3">
              <div class="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider font-outfit">
                <i class="fa-solid fa-graduation-cap"></i> Student Details
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" id="role-student-uni" placeholder="University / College Name" class="bg-white border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500">
                <input type="text" id="role-student-course" placeholder="Degree / Course (e.g. B.Tech)" class="bg-white border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500">
                <input type="text" id="role-student-branch" placeholder="Branch / Major (e.g. CSE, Civil)" class="bg-white border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500">
                <input type="text" id="role-student-year" placeholder="Year of Study (e.g. 3rd Year)" class="bg-white border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500">
              </div>
            </div>
          `
              : ''
          }

          <!-- Dynamic Role Fields: Industry -->
          ${
            hasIndustry
              ? `
            <div class="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-3">
              <div class="flex items-center gap-2 text-purple-800 font-bold text-xs uppercase tracking-wider font-outfit">
                <i class="fa-solid fa-building-columns"></i> Industry / Organization Details
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" id="role-industry-org" placeholder="Organization / Company" class="bg-white border border-purple-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500">
                <input type="text" id="role-industry-designation" placeholder="Designation / Role" class="bg-white border border-purple-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500">
                <input type="text" id="role-industry-sector" placeholder="Industry Sector (e.g. CleanTech)" class="bg-white border border-purple-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500">
                <input type="text" id="role-industry-expertise" placeholder="Key Domain Expertise" class="bg-white border border-purple-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500">
              </div>
            </div>
          `
              : ''
          }

          <!-- Dynamic Role Fields: University / Researcher -->
          ${
            hasResearcher
              ? `
            <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <div class="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider font-outfit">
                <i class="fa-solid fa-microscope"></i> Research & Institutional Details
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" id="role-research-inst" placeholder="Research Institution / University" class="bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500">
                <input type="text" id="role-research-dept" placeholder="Department / Laboratory" class="bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500">
              </div>
              <input type="text" id="role-research-areas" placeholder="Research Areas / Publications (comma-separated)" class="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500">
            </div>
          `
              : ''
          }

          <!-- Dynamic Role Fields: Citizen -->
          ${
            hasCitizen
              ? `
            <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div class="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider font-outfit">
                <i class="fa-solid fa-users"></i> Citizen / Community Details
              </div>
              <input type="text" id="role-citizen-ward" placeholder="Neighborhood / Ward / Locality" class="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-amber-500">
            </div>
          `
              : ''
          }

          <!-- Error Alert if any -->
          ${
            authState.error
              ? `
            <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
              ${authState.error}
            </div>
          `
              : ''
          }

          <!-- Complete Button -->
          <div class="pt-3">
            <button 
              type="submit" 
              ${authState.isLoading ? 'disabled' : ''}
              class="w-full py-4 bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 font-outfit disabled:opacity-50"
            >
              ${
                authState.isLoading
                  ? `<i class="fa-solid fa-circle-notch animate-spin"></i> Finalizing Profile...`
                  : `<i class="fa-solid fa-check"></i> Complete Profile & Enter Dashboard`
              }
            </button>
          </div>

        </form>

      </div>
    `;
  }

  async handleProfileSubmit(e) {
    e.preventDefault();
    const location = document.getElementById('prof-location')?.value || '';
    const interests = document.getElementById('prof-interests')?.value || '';
    const skills = document.getElementById('prof-skills')?.value || '';
    const bio = document.getElementById('prof-bio')?.value || '';

    const roleData = {};

    if (this.selectedRoles.has('Student')) {
      roleData.student = {
        university: document.getElementById('role-student-uni')?.value || '',
        course: document.getElementById('role-student-course')?.value || '',
        branch: document.getElementById('role-student-branch')?.value || '',
        year: document.getElementById('role-student-year')?.value || ''
      };
    }

    if (this.selectedRoles.has('Industry / Organization')) {
      roleData.industry = {
        organization: document.getElementById('role-industry-org')?.value || '',
        designation: document.getElementById('role-industry-designation')?.value || '',
        sector: document.getElementById('role-industry-sector')?.value || '',
        expertise: document.getElementById('role-industry-expertise')?.value || ''
      };
    }

    if (this.selectedRoles.has('University / Researcher')) {
      roleData.researcher = {
        institution: document.getElementById('role-research-inst')?.value || '',
        department: document.getElementById('role-research-dept')?.value || '',
        researchAreas: document.getElementById('role-research-areas')?.value || ''
      };
    }

    if (this.selectedRoles.has('Citizen / Community Member')) {
      roleData.citizen = {
        ward: document.getElementById('role-citizen-ward')?.value || ''
      };
    }

    try {
      const roles = Array.from(this.selectedRoles);
      await window.KartavyaAuthStore.submitOnboarding(roles, {
        location,
        bio,
        skills,
        interests,
        roleData
      });

      this.close();
      window.showToast?.('Welcome to Kartavya! Profile created successfully.', 'success');
      window.KartavyaRouter.navigate('/dashboard');
    } catch (err) {
      this.render(); // Re-render to display error message
    }
  }
}

window.KartavyaOnboardingModal = new OnboardingModal();
