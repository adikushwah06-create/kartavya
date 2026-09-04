/**
 * StudentPortal - Comprehensive Interface for Student Innovators
 * Inspired by academic project portals with Industry-Led Challenge Solving
 */

const studentChallengesData = [
  {
    id: 'proj-101',
    title: 'Waste-Derived Magnetic Nanocomposites for Water Filtration & Industrial Effluent Treatment',
    category: 'CleanTech & Water',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 14,
    vacancies: 2,
    selected: 1,
    grant: '₹1,50,000 Milestone Grant',
    code: 'KV2026-IND378',
    snippet: 'Develop sustainable magnetic nanocomposites from agro-industrial and plastic waste for high-throughput removal of dyes, micro-pollutants, and emerging water contaminants...',
    description: `Develop sustainable magnetic nanocomposites from agro-industrial and plastic waste.
Prepare N-doped activated carbon and magnetic metal-oxide composites for high-throughput removal of industrial effluents.
Study removal of toxic dyes, pharmaceuticals, and emerging municipal water contaminants.
Investigate adsorption kinetics and catalytic degradation mechanisms.
Characterize materials using BET, XPS, FTIR, SEM, TEM, and Raman spectroscopy.
Evaluate regeneration cycles, magnetic recovery efficiency, reusability, and practical pilot water-treatment potential in municipal ward drains.`,
    industry: {
      name: 'Tata Power Clean Energy & Water Labs',
      initial: 'T',
      color: 'bg-blue-600',
      mentor: 'Er. S. Ramanathan, VP CleanTech Engineering',
      email: 'cleanwater.rnd@tatapower.com',
      sector: 'Environmental Engineering & Industrial Water R&D',
      phone: '+91 (022) 6665-8282'
    },
    skills: ['Nanomaterials', 'Activated Carbon', 'Adsorption', 'Photocatalysis', 'Materials Characterization']
  },
  {
    id: 'proj-102',
    title: 'Sustainable Materials 4.0: AI-Driven Optimization for Green Concrete in Highway Pavements',
    category: 'Civil & Materials',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 21,
    vacancies: 3,
    selected: 2,
    grant: '₹2,20,000 Milestone Grant',
    code: 'KV2026-IND412',
    snippet: 'The proposed research aims to develop a new generation of sustainable alkali-activated geopolymer concrete for heavy-duty municipal roads using AI predictive models...',
    description: `The proposed research aims to develop a new generation of sustainable alkali-activated geopolymer concrete for heavy-duty municipal roads.
Innovators will formulate machine-learning predictive models to optimize binder-to-aggregate ratios from industrial fly-ash and blast-furnace slag.
Minimize embodied carbon emissions by over 60% compared to conventional Portland cement.
Deliver >45 MPa compressive strength tested on Bengaluru Smart City pilot stretches.
Conduct lifecycle durability testing against heavy monsoon leaching and vehicular shear.`,
    industry: {
      name: 'L&T Urban Infrastructure & Construction Tech',
      initial: 'L',
      color: 'bg-amber-600',
      mentor: 'Dr. Rajesh Sharma, Head of Materials R&D',
      email: 'rd.materials@lt-infra.com',
      sector: 'Civil Infrastructure & Low-Carbon Materials',
      phone: '+91 (022) 6752-5656'
    },
    skills: ['Geopolymer Concrete', 'Fly Ash Recycling', 'AI Mixture Optimization', 'Compressive Testing', 'Civil Engineering']
  },
  {
    id: 'proj-103',
    title: 'Textile Integrated Metal-Ion Hybrid Supercapacitor for Smart Civic Street Wear',
    category: 'Wearable Tech',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 9,
    vacancies: 2,
    selected: 0,
    grant: '₹1,80,000 Milestone Grant',
    code: 'KV2026-IND194',
    snippet: 'The rapid convergence of electronics and wearable technology requires autonomous, flexible energy storage embedded into uniforms for municipal night workers...',
    description: `The rapid convergence of electronics and wearable technology requires autonomous, flexible energy storage.
Students will engineer breathable, wash-resistant conductive fabric electrodes embedded with hybrid metal-ion supercapacitors.
The smart textiles will power emergency beacons, geolocation telemetry, and vital signs monitoring for municipal sanitation workers.
Investigate electrodeposition of metal oxides on carbonized natural cotton.
Achieve high areal capacitance (>350 mF/cm²) and maintain performance over 5,000 bending cycles.`,
    industry: {
      name: 'Reliance Smart Textiles & Energy Systems',
      initial: 'R',
      color: 'bg-rose-600',
      mentor: 'Dr. Abhilash Pullanchiyodan, Lead Research Scientist',
      email: 'smarttextiles@ril-innovate.com',
      sector: 'Wearable Tech & Electrochemical Energy Storage',
      phone: '+91 (022) 3555-5000'
    },
    skills: ['Electrodeposition', 'Material Synthesis', 'Flexible Supercapacitors', 'Smart Fabrics', 'Conductive Polymers']
  },
  {
    id: 'proj-104',
    title: 'AI-Powered Automated Pothole & Road Fault Detection System using Mobile Edge Telemetry',
    category: 'AI & Mobility',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 28,
    vacancies: 2,
    selected: 2,
    grant: '₹2,50,000 Milestone Grant',
    code: 'KV2026-IND550',
    snippet: 'Develop an on-device computer vision pipeline that processes live camera frames from municipal inspection vehicles to detect road fissures and potholes in real-time...',
    description: `Develop an on-device computer vision pipeline that processes live camera frames from municipal inspection vehicles to detect road fissures, potholes, and broken curbs.
The system must perform sub-second inference on edge hardware (Jetson Nano / Mobile GPU), automatically generating GPS-verified incident packets matching Kartavya's telemetry format.
Deploy lightweight YOLOv8 models optimized via quantization and TensorRT.
Implement automated depth estimation to prioritize high-risk potholes before monsoon degradation occurs.
Pilot testing across BBMP arterial highways.`,
    industry: {
      name: 'Infosys Smart Cities & Urban Mobility Labs',
      initial: 'I',
      color: 'bg-indigo-600',
      mentor: 'Priya Venkat, Director of Urban Edge AI',
      email: 'smartcities.ai@infosys.com',
      sector: 'Computer Vision & Urban Edge Computing',
      phone: '+91 (080) 2852-0261'
    },
    skills: ['YOLOv8 Edge AI', 'Geospatial Telemetry', 'Computer Vision', 'React Native', 'Sensor Fusion']
  },
  {
    id: 'proj-105',
    title: 'IoT-Enabled Autonomous Drainage Overflow & Toxic Sewer Gas Detection Grid',
    category: 'IoT & Sanitation',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 18,
    vacancies: 3,
    selected: 1,
    grant: '₹1,75,000 Milestone Grant',
    code: 'KV2026-IND623',
    snippet: 'Design robust, low-power submersible IoT nodes for subterranean stormwater drains measuring toxic gases (H2S, Methane) and water level spikes...',
    description: `Design robust, low-power submersible IoT nodes for subterranean stormwater drains.
The nodes measure water level changes and detect hazardous hydrogen sulfide (H2S) and methane concentrations to protect municipal sanitary personnel.
Transmit real-time telemetry over LoRaWAN to Kartavya's municipal dispatch board.
Solar-assisted battery harvesting with 3+ years autonomous deployment.
IP68 submersible waterproof enclosure design and multi-sensor calibration against false triggers.`,
    industry: {
      name: 'Mahindra Susten & Municipal IoT Solutions',
      initial: 'M',
      color: 'bg-red-600',
      mentor: 'Vikramaditya Rao, Chief IoT Architect',
      email: 'iot.solutions@mahindrasusten.com',
      sector: 'Municipal Sanitation & Worker Safety Technologies',
      phone: '+91 (022) 2490-1441'
    },
    skills: ['LoRaWAN Sensors', 'MQ-136 Gas Detection', 'Ultrasonic Sensing', 'Embedded C', 'Telemetry API']
  },
  {
    id: 'proj-106',
    title: 'Decentralized Solar-Powered EV Micro-Grid Charging Station for Urban Public Transit',
    category: 'Clean Energy',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    applicants: 12,
    vacancies: 2,
    selected: 0,
    grant: '₹3,00,000 Milestone Grant',
    code: 'KV2026-IND709',
    snippet: 'Prototype a fast-charging DC microgrid dynamically balancing rooftop solar generation with municipal grid power to charge electric public feeder buses...',
    description: `Prototype a fast-charging DC microgrid that dynamically balances rooftop solar generation with municipal grid power to charge electric public feeder buses.
The project includes smart telemetry communication to balance load spikes during peak urban transit hours.
Incorporate second-life LiFePO4 battery storage banks to minimize peak grid draw.
Develop predictive dispatch software based on bus timetables and regional solar irradiance forecasts.
Collaborative engineering with state road transport corporations.`,
    industry: {
      name: 'BHEL Renewable Energy & Green Mobility Division',
      initial: 'B',
      color: 'bg-emerald-700',
      mentor: 'K. Sundaram, General Manager EV Infrastructure',
      email: 'ev.grid@bhel.in',
      sector: 'Renewable Energy & Public Transit Microgrids',
      phone: '+91 (011) 6633-7000'
    },
    skills: ['Solar Inverters', 'BMS Protocols', 'Microgrid Balancing', 'Power Electronics', 'Smart Metering']
  }
];

class StudentPortal {
  constructor() {
    this.challenges = [...studentChallengesData];
    this.searchQuery = '';
    this.industryQuery = '';
    this.activeCategory = 'All';
    this.currentSubTab = 'browse'; // 'browse' | 'applications'
    this.myApplications = JSON.parse(localStorage.getItem('kartavya_student_applications') || '[]');
  }

  init() {
    this.render();
  }

  setSubTab(tab) {
    this.currentSubTab = tab;
    this.render();
  }

  setCategory(cat) {
    this.activeCategory = cat;
    this.render();
  }

  handleSearch(e) {
    this.searchQuery = e.target.value.toLowerCase().trim();
    this.renderCardsGrid();
  }

  handleIndustrySearch(e) {
    this.industryQuery = e.target.value.toLowerCase().trim();
    this.renderCardsGrid();
  }

  getFilteredChallenges() {
    return this.challenges.filter(item => {
      const matchCategory = this.activeCategory === 'All' || item.category === this.activeCategory;
      const matchSearch = !this.searchQuery || 
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.snippet.toLowerCase().includes(this.searchQuery) ||
        item.skills.some(s => s.toLowerCase().includes(this.searchQuery));
      const matchIndustry = !this.industryQuery ||
        item.industry.name.toLowerCase().includes(this.industryQuery) ||
        item.industry.sector.toLowerCase().includes(this.industryQuery) ||
        item.industry.mentor.toLowerCase().includes(this.industryQuery);

      return matchCategory && matchSearch && matchIndustry;
    });
  }

  render() {
    const container = document.getElementById('view-student');
    if (!container) return;

    const user = window.KartavyaAuthStore?.getState()?.user || {
      name: 'Aditi Kushwah',
      email: 'ak5617@srmist.edu.in'
    };

    container.innerHTML = `
      <div class="flex-1 flex flex-col lg:flex-row gap-6 items-start w-full">
        
        <!-- Left Sub-Navigation Sidebar (Inspired by Reference Image 1) -->
        <aside class="w-full lg:w-64 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between shrink-0 font-sans">
          <div class="space-y-6">
            
            <!-- Student Header Badge -->
            <div class="flex items-center gap-3 px-2 py-1">
              <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 text-white flex items-center justify-center font-outfit font-extrabold text-base shadow-sm">
                KP
              </div>
              <div>
                <h3 class="font-outfit font-extrabold text-slate-800 text-sm tracking-tight">KARTAVYA</h3>
                <span class="text-[10px] uppercase tracking-widest text-brand-600 font-bold">STUDENT PORTAL</span>
              </div>
            </div>

            <!-- Sidebar Navigation Links -->
            <nav class="space-y-1">
              <button 
                onclick="window.KartavyaStudentPortal.setSubTab('browse')"
                class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  this.currentSubTab === 'browse'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }"
              >
                <i class="fa-solid fa-compass text-sm"></i>
                <span>Browse Projects</span>
              </button>

              <button 
                onclick="window.KartavyaStudentPortal.setSubTab('applications')"
                class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  this.currentSubTab === 'applications'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }"
              >
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-file-signature text-sm"></i>
                  <span>My Applications</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded-full ${
                  this.currentSubTab === 'applications' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }">
                  ${this.myApplications.length}
                </span>
              </button>

              <button 
                onclick="window.showToast?.('Team Workspace syncs with your college research lab.', 'info')"
                class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
              >
                <i class="fa-solid fa-users-gear text-sm"></i>
                <span>My Projects & Teams</span>
              </button>

              <button 
                onclick="window.showToast?.('Milestone progress tracker is updated by Industry mentors.', 'info')"
                class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
              >
                <i class="fa-solid fa-chart-line text-sm"></i>
                <span>Grant Progress</span>
              </button>
            </nav>
          </div>

          <!-- Bottom Student Profile Card -->
          <div class="pt-6 mt-6 border-t border-slate-100 space-y-3">
            <div class="flex items-center gap-2.5 p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div class="w-8 h-8 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center font-bold text-xs">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 truncate font-outfit">${user.name}</p>
                <p class="text-[10px] text-slate-400 truncate">${user.email}</p>
              </div>
            </div>

            <button 
              onclick="window.KartavyaAuth.logout()"
              class="w-full text-left flex items-center gap-2 px-2 py-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 transition"
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <!-- Right Main Content Area -->
        <main class="flex-1 w-full space-y-6">
          ${this.currentSubTab === 'browse' ? this.renderBrowseView() : this.renderApplicationsView()}
        </main>

      </div>
    `;

    // Attach search event listeners if in browse tab
    if (this.currentSubTab === 'browse') {
      const searchInput = document.getElementById('project-search-input');
      const indInput = document.getElementById('industry-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => this.handleSearch(e));
      }
      if (indInput) {
        indInput.addEventListener('input', (e) => this.handleIndustrySearch(e));
      }
    }
  }

  renderBrowseView() {
    const categories = ['All', 'CleanTech & Water', 'Civil & Materials', 'Wearable Tech', 'AI & Mobility', 'IoT & Sanitation', 'Clean Energy'];

    return `
      <!-- Header Section -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Browse Projects & Challenges
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Discover real-world civic challenges & research opportunities from 827 industry-backed problems across India.
          </p>
        </div>

        <!-- Search Bar Filters (Matching Image 1 Reference) -->
        <div class="space-y-3">
          <!-- Main Search Input -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input 
              type="text" 
              id="project-search-input" 
              value="${this.searchQuery}"
              placeholder="Search by title, skills, domain..."
              class="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            >
          </div>

          <!-- Secondary Row: Search by Industry + More Filters + Action -->
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-1">
              <i class="fa-solid fa-building absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
              <input 
                type="text" 
                id="industry-search-input" 
                value="${this.industryQuery}"
                placeholder="Search by industry / organization (Optional)..."
                class="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition"
              >
            </div>

            <div class="flex gap-2">
              <button 
                onclick="window.showToast?.('All active filters are currently applied.', 'info')"
                class="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 transition"
              >
                <i class="fa-solid fa-filter text-xs text-slate-500"></i>
                <span>More Filters</span>
              </button>

              <button 
                class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition shadow-sm font-outfit"
              >
                <i class="fa-solid fa-magnifying-glass text-xs"></i>
                <span>Search</span>
              </button>
            </div>
          </div>

          <!-- Domain Filter Chips -->
          <div class="flex gap-2 overflow-x-auto pb-1 pt-1">
            ${categories.map(cat => `
              <button 
                onclick="window.KartavyaStudentPortal.setCategory('${cat}')"
                class="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                  this.activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }"
              >
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Challenges Card Grid -->
      <div id="student-cards-grid">
        ${this.generateCardsHtml()}
      </div>
    `;
  }

  generateCardsHtml() {
    const items = this.getFilteredChallenges();

    if (items.length === 0) {
      return `
        <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-xl">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h3 class="text-base font-bold text-slate-800 font-outfit">No challenges matched your query</h3>
          <p class="text-xs text-slate-500">Try adjusting your keywords or clearing the industry filter.</p>
          <button onclick="window.KartavyaStudentPortal.clearFilters()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition">
            Reset Filters
          </button>
        </div>
      `;
    }

    return `
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        ${items.map(item => `
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between space-y-4 relative group">
            
            <div class="space-y-3">
              <!-- Top Badges Row -->
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    ${item.status}
                  </span>
                  <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <i class="fa-regular fa-calendar text-[9px]"></i> ${item.ay}
                  </span>
                </div>
                <span class="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                  ${item.grant.split(' ')[0]}
                </span>
              </div>

              <!-- Challenge Title -->
              <h3 class="text-sm sm:text-base font-extrabold text-slate-800 font-outfit line-clamp-2 leading-snug group-hover:text-brand-600 transition">
                ${item.title}
              </h3>

              <!-- Stats Counters (Applicants, Vacancies, Selected) -->
              <div class="grid grid-cols-3 gap-2 p-2.5 bg-slate-50/80 rounded-xl border border-slate-100 text-center">
                <div>
                  <div class="flex items-center justify-center gap-1 text-slate-700 text-xs font-bold">
                    <i class="fa-solid fa-users text-[11px] text-blue-600"></i>
                    <span>${item.applicants}</span>
                  </div>
                  <span class="text-[9px] text-slate-400 font-medium">Applicants</span>
                </div>
                <div class="border-x border-slate-200">
                  <div class="flex items-center justify-center gap-1 text-slate-700 text-xs font-bold">
                    <i class="fa-solid fa-briefcase text-[11px] text-amber-600"></i>
                    <span>${item.vacancies}</span>
                  </div>
                  <span class="text-[9px] text-slate-400 font-medium">Vacancies</span>
                </div>
                <div>
                  <div class="flex items-center justify-center gap-1 text-slate-700 text-xs font-bold">
                    <i class="fa-solid fa-circle-check text-[11px] text-emerald-600"></i>
                    <span>${item.selected}</span>
                  </div>
                  <span class="text-[9px] text-slate-400 font-medium">Selected</span>
                </div>
              </div>

              <!-- Snippet Description -->
              <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed font-normal">
                ${item.snippet}
              </p>

              <!-- Industry Responsible Banner (Replacing Faculty per user prompt) -->
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-3">
                <div class="w-9 h-9 rounded-full ${item.industry.color} text-white flex items-center justify-center font-outfit font-extrabold text-xs shadow-xs shrink-0">
                  ${item.industry.initial}
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-1">
                    <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Industry Responsible</span>
                  </div>
                  <p class="text-xs font-bold text-slate-800 truncate font-outfit">${item.industry.name}</p>
                  <p class="text-[10px] text-slate-500 truncate">${item.industry.email}</p>
                </div>
              </div>

              <!-- Skills Tags -->
              <div class="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1">
                <i class="fa-solid fa-book-bookmark text-[10px] text-slate-400"></i>
                <span class="truncate font-medium">${item.skills.join(', ')}</span>
              </div>
            </div>

            <!-- Action Buttons: Apply Now & Details -->
            <div class="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <button 
                onclick="window.KartavyaStudentPortal.openApplyModal('${item.id}')"
                class="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-extrabold text-xs rounded-xl transition shadow-xs font-outfit"
              >
                Apply Now
              </button>
              <button 
                onclick="window.KartavyaStudentPortal.openDetailsModal('${item.id}')"
                class="px-4 py-2.5 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl transition font-outfit"
              >
                Details
              </button>
            </div>

          </div>
        `).join('')}
      </div>
    `;
  }

  renderApplicationsView() {
    if (this.myApplications.length === 0) {
      return `
        <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <div class="w-14 h-14 rounded-full bg-brand-50 text-brand-500 mx-auto flex items-center justify-center text-2xl">
            <i class="fa-solid fa-file-signature"></i>
          </div>
          <h2 class="text-xl font-bold text-slate-800 font-outfit">No Applications Submitted Yet</h2>
          <p class="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Browse through active industry challenges and apply with your research team to receive mentor guidance and milestone funding.
          </p>
          <button 
            onclick="window.KartavyaStudentPortal.setSubTab('browse')"
            class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition font-outfit shadow-sm"
          >
            Explore Challenges
          </button>
        </div>
      `;
    }

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 font-outfit">My Submitted Applications</h2>
          <p class="text-xs text-slate-500 mt-1">Review the status of your research proposals and industry reviews.</p>
        </div>

        <div class="space-y-4">
          ${this.myApplications.map(app => `
            <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div class="space-y-1.5 min-w-0">
                <span class="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">
                  ${app.code}
                </span>
                <h3 class="text-sm font-bold text-slate-800 font-outfit">${app.title}</h3>
                <p class="text-xs text-slate-500 flex items-center gap-2">
                  <span><strong>Industry:</strong> ${app.industryName}</span>
                  <span>&bull;</span>
                  <span>Applied on ${new Date(app.appliedAt).toLocaleDateString()}</span>
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <span class="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-clock text-[10px]"></i> Under Industry Review
                </span>
                <button 
                  onclick="window.KartavyaStudentPortal.openDetailsModal('${app.challengeId}')"
                  class="px-3 py-1.5 border border-slate-300 hover:bg-white text-slate-700 text-xs font-bold rounded-xl transition"
                >
                  View Challenge
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderCardsGrid() {
    const container = document.getElementById('student-cards-grid');
    if (container) {
      container.innerHTML = this.generateCardsHtml();
    }
  }

  clearFilters() {
    this.searchQuery = '';
    this.industryQuery = '';
    this.activeCategory = 'All';
    this.render();
  }

  // --- MODAL: Challenge Details (Matching Image 2 Reference) ---
  openDetailsModal(challengeId) {
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const modal = document.getElementById('project-details-modal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-all duration-300">
        <div class="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto font-sans">
          
          <!-- Close Button (X) -->
          <button 
            onclick="window.KartavyaStudentPortal.closeDetailsModal()" 
            class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition"
          >
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>

          <!-- Modal Title -->
          <h2 class="text-2xl font-extrabold text-slate-900 font-outfit tracking-tight mb-5">
            Project Details
          </h2>

          <!-- TOP INDUSTRY CARD (Replacing Faculty per user requirement) -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div class="flex items-center gap-3.5 min-w-0">
              <div class="w-12 h-12 rounded-full ${challenge.industry.color} text-white flex items-center justify-center font-outfit font-extrabold text-base shadow-sm shrink-0">
                ${challenge.industry.initial}
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Industry Responsible</span>
                </div>
                <h3 class="text-sm sm:text-base font-bold text-slate-900 font-outfit truncate">
                  ${challenge.industry.name}
                </h3>
                <p class="text-xs text-slate-600 truncate">${challenge.industry.email}</p>
                <p class="text-[11px] text-slate-500 truncate mt-0.5">${challenge.industry.mentor} &bull; ${challenge.industry.sector}</p>
              </div>
            </div>

            <button 
              onclick="window.open('mailto:${challenge.industry.email}?subject=Inquiry regarding Kartavya Challenge ${challenge.code}')"
              class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition shrink-0 font-outfit"
            >
              <i class="fa-solid fa-phone text-[11px]"></i>
              <span>Contact Industry</span>
            </button>
          </div>

          <!-- Description Section (Matching Image 2 layout) -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center gap-2 text-slate-800 font-bold text-sm font-outfit">
              <i class="fa-solid fa-book-open text-brand-500"></i>
              <span>Description</span>
            </div>
            <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 whitespace-pre-line text-justify">
              ${challenge.description}
            </div>
          </div>

          <!-- Required Skills Section (Matching Image 2 layout) -->
          <div class="space-y-3 mb-6">
            <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Required Skills
            </h4>
            <div class="flex flex-wrap gap-2">
              ${challenge.skills.map(s => `
                <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Metadata Row (Year, Code, Grant) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-6 font-medium">
            <div class="flex items-center gap-2">
              <i class="fa-regular fa-calendar text-slate-400"></i>
              <span>Year: <strong>${challenge.ay}</strong></span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-id-card text-slate-400"></i>
              <span>Code: <strong>${challenge.code}</strong></span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-indian-rupee-sign text-slate-400"></i>
              <span>Funding: <strong class="text-emerald-700">${challenge.grant}</strong></span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-city text-slate-400"></i>
              <span>Pilot Ward: <strong>Ward 150 & Bengaluru Smart City</strong></span>
            </div>
          </div>

          <!-- Modal Action Buttons (Matching Image 2 layout) -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button 
              onclick="window.KartavyaStudentPortal.closeDetailsModal()" 
              class="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition font-outfit"
            >
              Close
            </button>
            <button 
              onclick="window.KartavyaStudentPortal.openApplyModal('${challenge.id}')" 
              class="px-7 py-3 bg-brand-500 hover:bg-brand-600 text-white text-xs font-extrabold rounded-xl transition shadow-md shadow-brand-500/20 font-outfit"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeDetailsModal() {
    const modal = document.getElementById('project-details-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    }
  }

  // --- MODAL: Application Submission ---
  openApplyModal(challengeId) {
    this.closeDetailsModal();
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const modal = document.getElementById('project-apply-modal');
    if (!modal) return;

    const user = window.KartavyaAuthStore?.getState()?.user || {
      name: 'Aditi Kushwah',
      email: 'ak5617@srmist.edu.in'
    };

    modal.innerHTML = `
      <div class="fixed inset-0 z-[135] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-all">
        <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative font-sans">
          
          <!-- Close Button -->
          <button onclick="window.KartavyaStudentPortal.closeApplyModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>

          <h3 class="text-xl font-extrabold text-slate-900 font-outfit tracking-tight mb-1">
            Apply for Research Challenge
          </h3>
          <p class="text-xs text-slate-500 mb-5 font-medium truncate">${challenge.title}</p>

          <form onsubmit="window.KartavyaStudentPortal.submitApplication(event, '${challenge.id}')" class="space-y-4">
            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Lead Applicant (Google Verified)</label>
              <input type="text" readonly value="${user.name} (${user.email})" class="w-full bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium cursor-not-allowed">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Team Name / University Lab <span class="text-rose-500">*</span></label>
              <input type="text" required id="apply-team-name" placeholder="e.g. SRM CleanTech Innovators Team A" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-500">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Proposed Technical Approach / Solution Brief <span class="text-rose-500">*</span></label>
              <textarea required id="apply-approach" rows="3" placeholder="Briefly describe your proposed methodology, lab resources available, and expected timeline..." class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-500"></textarea>
            </div>

            <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-800">
              <i class="fa-solid fa-circle-info text-amber-600 mr-1"></i>
              Your application will be transmitted directly to <strong>${challenge.industry.name}</strong> for technical review.
            </div>

            <div class="pt-3 flex items-center justify-end gap-2.5">
              <button type="button" onclick="window.KartavyaStudentPortal.closeApplyModal()" class="px-4 py-2.5 border border-slate-300 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" class="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-extrabold rounded-xl shadow-sm transition font-outfit">
                Submit Research Proposal
              </button>
            </div>
          </form>

        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeApplyModal() {
    const modal = document.getElementById('project-apply-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    }
  }

  submitApplication(e, challengeId) {
    e.preventDefault();
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const teamName = document.getElementById('apply-team-name')?.value || 'Student Team';
    const approach = document.getElementById('apply-approach')?.value || '';

    // Increment applicants counter on challenge
    challenge.applicants += 1;

    const newApp = {
      challengeId: challenge.id,
      title: challenge.title,
      code: challenge.code,
      industryName: challenge.industry.name,
      teamName,
      approach,
      appliedAt: new Date().toISOString()
    };

    this.myApplications.unshift(newApp);
    localStorage.setItem('kartavya_student_applications', JSON.stringify(this.myApplications));

    this.closeApplyModal();
    window.showToast?.(`Application successfully submitted to ${challenge.industry.name}!`, 'success');
    this.render();
  }
}

window.KartavyaStudentPortal = new StudentPortal();
