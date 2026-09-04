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
      name: 'Ammodita',
      email: 'ammodita@kartavya.gov.in',
      profilePhoto: '/ammodita/ammodita-3.jpg'
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
            <img src="${user.profilePhoto || '/ammodita/ammodita-3.jpg'}" alt="${user.name}" class="w-10 h-10 rounded-full object-cover border border-white shadow-sm">
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
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border border-pink-200 text-pink-700 text-xs font-bold mb-3 shadow-xs">
            <span class="animate-bounce">🎂</span>
            <span>Happy Birthday Ammodita!</span>
            <span>✨🎉</span>
          </div>
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
          <span>${this.selectedRoles.has('Citizen / Community Member') ? 'Continue to Submit Problem' : 'Continue'}</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>

      </div>
    `;
  }

  renderProfileSetup(user, authState) {
    if (this.selectedRoles.has('Citizen / Community Member')) {
      this.renderCitizenSubmissionStep(user, authState);
      return;
    }
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

  fillPreset(presetKey) {
    const presets = {
      waterlogging: {
        title: 'Roads become waterlogged after heavy rain',
        category: 'Urban Drainage & Infrastructure',
        ward: 'Ward 174 - Outer Ring Road & Silk Board Belt, Bengaluru',
        gps: '12.9177, 77.6238',
        desc: 'Every time it rains moderately, water accumulates over 2 feet deep within 20 minutes because culverts and storm drains are blocked with debris. Student teams needed to build porous concrete and IoT runoff sensors.',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80'
      },
      crop: {
        title: 'Farmers struggle to identify crop disease early',
        category: 'AgriTech & AI',
        ward: 'Kolar Rural Farming Belt, Karnataka',
        gps: '13.1362, 78.1291',
        desc: 'Smallholder tomato & pulse farmers suffer total harvest loss due to sudden leaf fungal infections. Student innovators needed to construct offline-first Edge AI diagnostic app and soil telemetry.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'
      },
      bus: {
        title: 'Bus overcrowding during morning peak rush hours',
        category: 'Smart Mobility & Transit',
        ward: 'Majestic – ITPL Whitefield Corridor, Bengaluru',
        gps: '12.9767, 77.5713',
        desc: 'Severe bus overcrowding between 8:00 AM - 10:30 AM leads to dangerous footboard travel and endless commuter delays. Student teams needed to develop automated passenger counting sensors and dynamic dispatch.',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
      }
    };

    const data = presets[presetKey];
    if (!data) return;

    const titleEl = document.getElementById('cit-onboard-title');
    const catEl = document.getElementById('cit-onboard-category');
    const wardEl = document.getElementById('cit-onboard-ward');
    const gpsEl = document.getElementById('cit-onboard-gps');
    const descEl = document.getElementById('cit-onboard-desc');
    const imgEl = document.getElementById('cit-onboard-image');

    if (titleEl) titleEl.value = data.title;
    if (catEl) catEl.value = data.category;
    if (wardEl) wardEl.value = data.ward;
    if (gpsEl) gpsEl.value = data.gps;
    if (descEl) descEl.value = data.desc;
    if (imgEl) imgEl.value = data.image;

    window.showToast?.(`Quick Fill: ${data.title}`, 'info');
  }

  detectGPS() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          const gpsEl = document.getElementById('cit-onboard-gps');
          if (gpsEl) gpsEl.value = `${lat}, ${lng}`;
          window.showToast?.(`GPS locked: ${lat}, ${lng}`, 'success');
        },
        () => {
          const gpsEl = document.getElementById('cit-onboard-gps');
          if (gpsEl) gpsEl.value = '12.9177, 77.6238';
          window.showToast?.('Default GPS assigned: 12.9177, 77.6238', 'info');
        }
      );
    } else {
      const gpsEl = document.getElementById('cit-onboard-gps');
      if (gpsEl) gpsEl.value = '12.9177, 77.6238';
      window.showToast?.('Default GPS assigned: 12.9177, 77.6238', 'info');
    }
  }

  renderCitizenSubmissionStep(user, authState) {
    const hasStudent = this.selectedRoles.has('Student');

    this.container.innerHTML = `
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative my-8 font-sans transition-all max-h-[90vh] overflow-y-auto">
        
        <!-- Header with Back Button and Progress -->
        <div class="flex items-center justify-between mb-4">
          <button onclick="window.KartavyaOnboardingModal.goToStep(1)" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-arrow-left"></i> Change Roles
          </button>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-slate-200"></span>
            <span class="h-2 w-8 rounded-full bg-brand-500"></span>
          </div>
        </div>

        <!-- Google User Header Badge -->
        <div class="flex items-center justify-between p-3 bg-amber-50/60 rounded-2xl border border-amber-200/80 mb-5">
          <div class="flex items-center gap-3">
            <img src="${user.profilePhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}" alt="${user.name}" class="w-9 h-9 rounded-full object-cover border border-white shadow-xs">
            <div>
              <p class="text-xs font-bold text-slate-900 font-outfit leading-tight">${user.name}</p>
              <p class="text-[11px] text-slate-500 truncate max-w-[200px]">${user.email}</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-extrabold text-amber-800 bg-amber-100/90 border border-amber-200 px-2 py-0.5 rounded-lg flex items-center gap-1">
            <i class="fa-solid fa-users text-[9px]"></i> Citizen Reporter
          </span>
        </div>

        <!-- Title -->
        <div class="mb-5">
          <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold mb-2">
            <span>🎂 Happy Birthday Ammodita! ✨</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Submit a Civic Problem
          </h2>
          <p class="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
            Report a community challenge. Student innovators & industry partners across Kartavya will engineer solutions to solve it.
          </p>
        </div>

        <!-- Quick-Fill Presets for Instant Testing / Demo -->
        <div class="mb-5 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <i class="fa-solid fa-bolt text-amber-500"></i> Quick Fill Sample Challenges:
          </p>
          <div class="flex flex-wrap gap-1.5">
            <button 
              type="button" 
              onclick="window.KartavyaOnboardingModal.fillPreset('waterlogging')"
              class="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg shadow-2xs transition"
            >
              🌊 Waterlogged Roads
            </button>
            <button 
              type="button" 
              onclick="window.KartavyaOnboardingModal.fillPreset('crop')"
              class="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg shadow-2xs transition"
            >
              🌱 Crop Disease Alert
            </button>
            <button 
              type="button" 
              onclick="window.KartavyaOnboardingModal.fillPreset('bus')"
              class="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg shadow-2xs transition"
            >
              🚌 Bus Overcrowding
            </button>
          </div>
        </div>

        <!-- Problem Submission Form -->
        <form id="citizen-onboard-form" class="space-y-4" onsubmit="window.KartavyaOnboardingModal.handleCitizenSubmission(event)">
          
          <!-- Problem Title -->
          <div class="space-y-1">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Problem Title <span class="text-rose-500">*</span>
            </label>
            <input 
              type="text" 
              id="cit-onboard-title" 
              required 
              placeholder="e.g., Roads become waterlogged after heavy rain"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
            />
          </div>

          <!-- Category / Civic Domain -->
          <div class="space-y-1">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Civic Category / Domain <span class="text-rose-500">*</span>
            </label>
            <select 
              id="cit-onboard-category" 
              required 
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:bg-white transition font-medium"
            >
              <option value="Urban Drainage & Infrastructure">Urban Drainage & Infrastructure (Roads, Culverts, Waterlogging)</option>
              <option value="AgriTech & AI">AgriTech & AI (Crop Disease, Soil Health, Rural Tech)</option>
              <option value="Smart Mobility & Transit">Smart Mobility & Transit (Bus Overcrowding, Transit Safety)</option>
              <option value="Civil & Materials">Civil & Materials (Potholes, Structural Damage)</option>
              <option value="CleanTech & Water">CleanTech & Water (Lake Pollution, Effluent Treatment)</option>
              <option value="Clean Energy">Clean Energy (Solar Streetlights, Grid Outages)</option>
              <option value="IoT & Sanitation">IoT & Sanitation (Sewage Overflow, Toxic Gas Detection)</option>
            </select>
          </div>

          <!-- Ward / City Locality -->
          <div class="space-y-1">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Ward / City Locality <span class="text-rose-500">*</span>
            </label>
            <input 
              type="text" 
              id="cit-onboard-ward" 
              required 
              placeholder="e.g., Ward 174 - Outer Ring Road & Silk Board Belt, Bengaluru"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
            />
          </div>

          <!-- GPS Coordinates -->
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                GPS Coordinates
              </label>
              <button 
                type="button" 
                onclick="window.KartavyaOnboardingModal.detectGPS()"
                class="text-[10px] text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1 transition"
              >
                <i class="fa-solid fa-location-crosshairs"></i> Auto-Detect GPS
              </button>
            </div>
            <input 
              type="text" 
              id="cit-onboard-gps" 
              value="12.9177, 77.6238"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-mono placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
            />
          </div>

          <!-- Detailed Description -->
          <div class="space-y-1">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Detailed Description <span class="text-rose-500">*</span>
            </label>
            <textarea 
              id="cit-onboard-desc" 
              rows="3" 
              required 
              placeholder="Describe the issue, landmarks, how it affects community members, and what needs solving..."
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
            ></textarea>
          </div>

          <!-- Photo Evidence URL -->
          <div class="space-y-1">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Photo / Telemetry Evidence URL
            </label>
            <input 
              type="text" 
              id="cit-onboard-image" 
              value="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-600 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition truncate"
            />
          </div>

          ${
            hasStudent
              ? `
            <div class="pt-2 border-t border-slate-100">
              <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Student Innovator Details (Optional)
              </label>
              <input 
                type="text" 
                id="role-student-uni" 
                placeholder="University / College (e.g. SRM Institute of Science & Technology)"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>
          `
              : ''
          }

          <!-- Submit Button -->
          <div class="pt-3">
            <button 
              type="submit" 
              id="citizen-onboard-submit-btn"
              class="w-full py-3.5 bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 font-outfit"
            >
              <i class="fa-solid fa-paper-plane text-xs"></i>
              <span>Submit Problem & Display on Student Portal</span>
            </button>
          </div>

        </form>

      </div>
    `;
  }

  async handleCitizenSubmission(e) {
    e.preventDefault();
    const title = document.getElementById('cit-onboard-title')?.value?.trim();
    const category = document.getElementById('cit-onboard-category')?.value || 'Urban Drainage & Infrastructure';
    const ward = document.getElementById('cit-onboard-ward')?.value?.trim() || 'Bengaluru Local Ward';
    const gps = document.getElementById('cit-onboard-gps')?.value?.trim() || '12.9177, 77.6238';
    const desc = document.getElementById('cit-onboard-desc')?.value?.trim();
    const image = document.getElementById('cit-onboard-image')?.value?.trim() || 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80';

    if (!title || !desc) {
      window.showToast?.('Please provide a problem title and description.', 'warning');
      return;
    }

    const authState = window.KartavyaAuthStore.getState();
    const user = authState.user || {
      name: 'Ammodita',
      email: 'ammodita.citizen@gmail.com',
      profilePhoto: '/ammodita/ammodita-3.jpg'
    };

    const industryDirectory = {
      'Urban Drainage & Infrastructure': {
        name: 'L&T Urban Infrastructure & Construction Tech',
        initial: 'L',
        color: 'bg-amber-600',
        mentor: 'Dr. Rajesh Sharma, Head of Materials & Urban Drainage R&D',
        email: 'rd.materials@lt-infra.com',
        sector: 'Civil Infrastructure & Climate-Resilient Urban Systems',
        grant: '₹2,50,000 Milestone Grant',
        skills: ['Urban Stormwater Hydrology', 'Porous & Permeable Concrete', 'IoT Water Level Telemetry', 'GIS Runoff Mapping', 'Culvert Hydraulic Modeling']
      },
      'AgriTech & AI': {
        name: 'Mahindra Agri Solutions & Edge AI Labs',
        initial: 'M',
        color: 'bg-emerald-600',
        mentor: 'Dr. Anand Swaminathan, Chief Agronomist & Plant Pathology Director',
        email: 'agritech.rnd@mahindra.com',
        sector: 'Precision Agriculture, Agronomy AI & Rural Tech',
        grant: '₹2,20,000 Milestone Grant',
        skills: ['Edge AI Computer Vision', 'Mobile App Engineering', 'Plant Pathology & Agronomy', 'Multilingual Voice UI', 'Soil Sensing']
      },
      'Smart Mobility & Transit': {
        name: 'Infosys Smart Cities & Urban Mobility Labs',
        initial: 'I',
        color: 'bg-indigo-600',
        mentor: 'Priya Venkat, Director of Urban Edge AI & Transit Telematics',
        email: 'urbanmobility.ai@infosys.com',
        sector: 'Intelligent Transportation Systems & Fleet Optimization',
        grant: '₹1,80,000 Milestone Grant',
        skills: ['Automated Passenger Counting', 'Edge AI Computer Vision', 'Dynamic Fleet Dispatch', 'Transit Telematics', 'GTFS APIs']
      },
      'Civil & Materials': {
        name: 'L&T Urban Infrastructure & Construction Tech',
        initial: 'L',
        color: 'bg-amber-600',
        mentor: 'Dr. Rajesh Sharma, Head of Materials R&D',
        email: 'rd.materials@lt-infra.com',
        sector: 'Civil Infrastructure & Low-Carbon Materials',
        grant: '₹2,00,000 Milestone Grant',
        skills: ['Low-Carbon Geopolymer', 'Porous Pavements', 'Structural Stress Testing', 'Civil Surveying', 'Field Prototyping']
      },
      'CleanTech & Water': {
        name: 'Tata Power Clean Energy & Water Labs',
        initial: 'T',
        color: 'bg-blue-600',
        mentor: 'Er. S. Ramanathan, VP CleanTech Engineering',
        email: 'cleanwater.rnd@tatapower.com',
        sector: 'Environmental Engineering & Industrial Water R&D',
        grant: '₹2,10,000 Milestone Grant',
        skills: ['Industrial Effluent Filtration', 'IoT Turbidity Telemetry', 'Electrochemical Treatment', 'SCADA Interfacing']
      },
      'Clean Energy': {
        name: 'Infosys Smart Cities & Urban IoT Labs',
        initial: 'I',
        color: 'bg-indigo-600',
        mentor: 'Priya Venkat, Director of Urban Edge AI',
        email: 'smartcities.ai@infosys.com',
        sector: 'Smart Grid, Edge IoT & Urban Illumination',
        grant: '₹1,90,000 Milestone Grant',
        skills: ['Solar PV Integration', 'Smart Grid Telemetry', 'Micro-Inverter Design', 'Embedded IoT Firmware']
      },
      'IoT & Sanitation': {
        name: 'Mahindra Susten & Municipal IoT Solutions',
        initial: 'M',
        color: 'bg-red-600',
        mentor: 'Vikramaditya Rao, Chief IoT Architect',
        email: 'iot.solutions@mahindrasusten.com',
        sector: 'Municipal Sanitation & Worker Safety Technologies',
        grant: '₹2,00,000 Milestone Grant',
        skills: ['Toxic Gas Sensing (H2S/CH4)', 'Worker Wearable Telemetry', 'LoRaWAN Long-Range Nodes', 'Edge Alert Gateways']
      }
    };

    const targetInfo = industryDirectory[category] || industryDirectory['Urban Drainage & Infrastructure'];
    const uniqueId = `cit-user-${Date.now()}`;
    const uniqueReportId = `rep-user-${Date.now()}`;
    const uniqueCode = `KV2026-CIT${Math.floor(100 + Math.random() * 900)}`;

    const newChallenge = {
      id: uniqueId,
      reportId: uniqueReportId,
      title,
      category,
      ay: 'AY2026-27',
      status: 'PUBLISHED',
      isCitizenSubmitted: true,
      citizenReporter: `${user.name} (${ward})`,
      ward,
      gps,
      image,
      applicants: 0,
      vacancies: 2,
      selected: 0,
      grant: targetInfo.grant,
      code: uniqueCode,
      snippet: `Citizen Report: ${desc.slice(0, 140)}...`,
      citizenDescription: desc,
      description: `[CITIZEN PROBLEM SUBMISSION]
Location: ${ward} (GPS: ${gps})
Reported by Citizen: ${user.name}

Problem Statement:
${desc}

Student Innovation Scope:
Student teams will collaborate with ${targetInfo.name} to:
1. Conduct technical field diagnosis and root-cause analysis.
2. Build functional prototype supported by milestone grant (${targetInfo.grant}).
3. Deploy solution for community verification under municipal supervision.`,
      industry: {
        name: targetInfo.name,
        initial: targetInfo.initial,
        color: targetInfo.color,
        mentor: targetInfo.mentor,
        email: targetInfo.email,
        sector: targetInfo.sector
      },
      skills: targetInfo.skills
    };

    // 1. Add directly to Student Portal
    if (window.KartavyaStudentPortal?.addCitizenChallenge) {
      window.KartavyaStudentPortal.addCitizenChallenge(newChallenge);
    }

    // 2. Save to localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('kartavya_citizen_challenges') || '[]');
      saved.unshift(newChallenge);
      localStorage.setItem('kartavya_citizen_challenges', JSON.stringify(saved));
    } catch (e) {}

    // 3. Post to backend server /api/reports
    try {
      const parts = gps.split(',');
      const latVal = parseFloat(parts[0]?.trim()) || 12.9177;
      const lngVal = parseFloat(parts[1]?.trim()) || 77.6238;
      fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category,
          description: desc,
          lat: latVal,
          lng: lngVal,
          image,
          reporterAdhaar: user.uid || '1234-5678-9012'
        })
      }).catch(() => {});
    } catch (e) {}

    // 4. Submit onboarding profile
    const roles = Array.from(this.selectedRoles);
    try {
      await window.KartavyaAuthStore.submitOnboarding(roles, {
        location: ward,
        bio: `Citizen contributor reporting civic challenges in ${ward}`,
        skills: 'Community Reporting, Civic Engagement',
        interests: category,
        roleData: {
          citizen: { ward, latestProblem: title }
        }
      });
    } catch (err) {}

    this.close();
    window.showToast?.('🎉 Civic Problem Submitted! Your issue is now live on the Student Portal.', 'success');
    window.KartavyaRouter.navigate('/dashboard');
    if (window.switchTab) {
      window.switchTab('student');
    }
  }
}

window.KartavyaOnboardingModal = new OnboardingModal();

