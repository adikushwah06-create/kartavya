/**
 * StudentPortal - Comprehensive Interface for Student Innovators
 * Inspired by academic project portals with Industry-Led Challenge Solving
 */

const studentChallengesData = [
  {
    id: 'cit-101',
    title: 'Hazardous Deep Potholes & Road Surface Degradation at Indiranagar Metro Gate',
    category: 'Civil & Materials',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Aditi Kushwah (Ward 150 Citizen)',
    ward: 'Ward 150 - Indiranagar Metro Gate, Bengaluru',
    gps: '12.9784, 77.6408',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
    applicants: 14,
    vacancies: 2,
    selected: 1,
    grant: '₹2,20,000 Milestone Grant',
    code: 'KV2026-CIT101',
    snippet: 'Citizen Report: A massive 2-foot pothole directly in front of the metro gate causes severe two-wheeler skids. Students are invited to deploy rapid-setting geopolymer concrete and IoT telemetry...',
    citizenDescription: 'A massive pothole has formed right in front of the main entry gate of the metro station. It is a major hazard for two-wheelers, especially during heavy rains. Rainwater pools in the crater making it invisible at night, leading to 3 serious two-wheeler accidents.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: Ward 150 - Indiranagar Metro Arrival Gate 2, Bengaluru (GPS: 12.9784, 77.6408)
Reported by Citizen: Aditi Kushwah (Ward 150 Resident)

Problem Overview:
A massive 2-foot wide crater has opened directly on the main vehicular lane outside the metro station. Water pooling during evening showers obscures the hazard, causing severe two-wheeler skids and traffic bottlenecks.

Student Innovation Scope:
Student engineering teams are invited to develop a permanent, low-carbon pavement repair:
1. Formulate high-durability, alkali-activated geopolymer concrete mix using fly-ash and blast furnace slag with >45 MPa compressive strength and rapid 4-hour traffic curing.
2. Embed an IoT vibration and ultrasonic depth telemetry sensor node to monitor subsequent subsidence.
3. Conduct pilot durability testing under heavy vehicular shear on Indiranagar arterial stretches.`,
    industry: {
      name: 'L&T Urban Infrastructure & Construction Tech',
      initial: 'L',
      color: 'bg-amber-600',
      mentor: 'Dr. Rajesh Sharma, Head of Materials R&D',
      email: 'rd.materials@lt-infra.com',
      sector: 'Civil Infrastructure & Low-Carbon Materials',
      phone: '+91 (022) 6752-5656'
    },
    skills: ['Geopolymer Concrete', 'Fly Ash Recycling', 'AI Mixture Optimization', 'Civil Engineering', 'Compressive Testing']
  },
  {
    id: 'cit-102',
    title: 'Persistent Garbage Dumpster Spillage & Unsegregated Waste Overflow on 80 Feet Road',
    category: 'CleanTech & Water',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Kiran Rao (80 Feet Road Residents Welfare Association)',
    ward: '80 Feet Road Sidewalk, Indiranagar, Bengaluru',
    gps: '12.9698, 77.6414',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80',
    applicants: 21,
    vacancies: 3,
    selected: 2,
    grant: '₹1,80,000 Milestone Grant',
    code: 'KV2026-CIT102',
    snippet: 'Citizen Report: Municipal dumpsters are perpetually overflowing onto sidewalks. Students are tasked with building smart ultrasonic fill sensors and bio-enzyme odor neutralization systems...',
    citizenDescription: 'Municipal garbage dumpsters on 80 Feet Road are overflowing continuously, spilling rotten kitchen and plastic waste across 50 meters of sidewalk. Foul odor and stray dogs create an acute hazard for children walking to school.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: 80 Feet Road, Indiranagar, Bengaluru (GPS: 12.9698, 77.6414)
Reported by Citizen: Kiran Rao (80 Feet Road Residents Welfare Association)

Problem Overview:
Municipal dumpster units overflow before scheduled truck arrivals. Organic leachate and microplastics contaminate the open sidewalk and ward storm drains, creating an acute public health hazard and foul odor.

Student Innovation Scope:
Student innovators will collaborate with Tata Power Clean Energy Labs:
1. Engineer solar-powered, weather-sealed ultrasonic fill-level telemetry nodes sending real-time capacity alerts to BBMP garbage collection trucks.
2. Develop micro-aerobic bio-enzyme spray formulation that accelerates organic decomposition and neutralizes hydrogen sulfide and ammonia odors within 15 minutes.
3. Deploy smart compaction or segregated drop chutes for pilot community adoption.`,
    industry: {
      name: 'Tata Power Clean Energy & Waste Tech Labs',
      initial: 'T',
      color: 'bg-blue-600',
      mentor: 'Er. S. Ramanathan, VP CleanTech Engineering',
      email: 'cleanwater.rnd@tatapower.com',
      sector: 'Environmental Engineering & Waste Management R&D',
      phone: '+91 (022) 6665-8282'
    },
    skills: ['Ultrasonic IoT Sensors', 'Biomethanation', 'Waste Segregation', 'Environmental Engineering', 'LoRaWAN Telemetry']
  },
  {
    id: 'cit-103',
    title: 'Broken Streetlights & Hazardous Dark Corridor around Koramangala Children’s Park',
    category: 'Clean Energy',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Meera Sen (Koramangala 4th Block Resident)',
    ward: 'Children’s Park Perimeter, Koramangala 4th Block, Bengaluru',
    gps: '12.9344, 77.6244',
    image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&w=800&q=80',
    applicants: 12,
    vacancies: 2,
    selected: 0,
    grant: '₹1,50,000 Milestone Grant',
    code: 'KV2026-CIT103',
    snippet: 'Citizen Report: Three consecutive streetlights around the public park have been pitch dark for over 10 days. Students will prototype solar micro-inverter LED fixtures with autonomous LoRaWAN fault detection...',
    citizenDescription: 'Three key streetlights surrounding the children\'s park have been completely dark for a week. It becomes unsafe for pedestrians, evening women joggers, and elderly citizens after dark. Power surges keep causing outages.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: Koramangala 4th Block Park Perimeter, Bengaluru (GPS: 12.9344, 77.6244)
Reported by Citizen: Meera Sen (Koramangala Resident)

Problem Overview:
Critical public streetlights around the ward park fail repeatedly due to underground line faults and voltage spikes, creating an unsafe dark pocket frequented by evening walkers and school children.

Student Innovation Scope:
Students will engineer autonomous, off-grid or hybrid street illumination:
1. Design decentralized, pole-mountable solar PV-battery micro-inverter units delivering >12 hours continuous illumination without drawing from municipal line power.
2. Build an intelligent LoRaWAN mesh communication node that automatically reports bulb burnouts, low battery reserves, or wire-tampering to the municipal action centre.
3. Optimize PIR motion-dimming algorithms to extend battery lifespan during low-traffic midnight hours.`,
    industry: {
      name: 'Infosys Smart Cities & Urban IoT Labs',
      initial: 'I',
      color: 'bg-indigo-600',
      mentor: 'Priya Venkat, Director of Urban Edge IoT',
      email: 'smartcities.ai@infosys.com',
      sector: 'Smart Grid, Edge IoT & Urban Illumination',
      phone: '+91 (080) 2852-0261'
    },
    skills: ['Solar PV Inverters', 'LoRaWAN Mesh', 'Smart LED Drivers', 'Power Electronics', 'Battery Management']
  },
  {
    id: 'cit-104',
    title: 'Toxic Sewer Line Overflow & Dangerous Manhole Back-Pressure on HSR Sector 3',
    category: 'IoT & Sanitation',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Harish Venkatesh (HSR Layout Sector 3)',
    ward: '14th Main, HSR Layout Sector 3, Bengaluru',
    gps: '12.9118, 77.6385',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    applicants: 18,
    vacancies: 3,
    selected: 1,
    grant: '₹2,00,000 Milestone Grant',
    code: 'KV2026-CIT104',
    snippet: 'Citizen Report: Underground sewage line choked, causing toxic black effluent and noxious gases to overflow onto main road. Students will develop submersible acoustic clog sensors and bio-desilting systems...',
    citizenDescription: 'Clogged underground manhole causing black sewage water to bubble up and flow onto the main road. The puddle is growing and emitting a terrible stench of hydrogen sulfide gas right near a residential preschool.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: 14th Main Road, HSR Layout Sector 3, Bengaluru (GPS: 12.9118, 77.6385)
Reported by Citizen: Harish Venkatesh (HSR Resident)

Problem Overview:
Subterranean sewer pipe blockages cause regular backflow through manhole lids during rainfall. Sanitation workers face severe toxic gas hazards when manually inspecting the line.

Student Innovation Scope:
Engineering teams will build an autonomous sewer monitoring and hazard mitigation system:
1. Construct IP68-rated submersible acoustic level and multi-gas sensor nodes (H2S, Methane, Ammonia) powered by kinetic wastewater micro-generators.
2. Transmit real-time blockage alerts to BBMP sanitation engineers before street-level overflow occurs.
3. Design a robotic or non-invasive fluid jet desilting prototype to eliminate hazardous manual scavenging.`,
    industry: {
      name: 'Mahindra Susten & Municipal IoT Solutions',
      initial: 'M',
      color: 'bg-red-600',
      mentor: 'Vikramaditya Rao, Chief IoT Architect',
      email: 'iot.solutions@mahindrasusten.com',
      sector: 'Municipal Sanitation & Worker Safety Technologies',
      phone: '+91 (022) 2490-1441'
    },
    skills: ['Submersible Gas Sensors', 'Acoustic Clog Sensing', 'Robotic Desilting', 'Embedded C', 'LoRaWAN Telemetry']
  },
  {
    id: 'cit-105',
    title: 'Catastrophic Monsoon Waterlogging & Culvert Choke at Silk Board Flyover Junction',
    category: 'AI & Mobility',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Bangalore Commuters Forum (Ward 174)',
    ward: 'Central Silk Board Junction, Hosur Road, Bengaluru',
    gps: '12.9177, 77.6238',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
    applicants: 28,
    vacancies: 2,
    selected: 2,
    grant: '₹2,50,000 Milestone Grant',
    code: 'KV2026-CIT105',
    snippet: 'Citizen Report: Stormwater culverts choked with silt and trash cause 2-foot waterlogging every monsoon downpour, stranding thousands of daily commuters for hours...',
    citizenDescription: 'Stormwater culverts are severely choked with plastic debris. A 30-minute evening shower causes 2.5 feet of waterlogging, paralyzing Silk Board junction for over 4 hours and halting emergency ambulances.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: Central Silk Board Junction, Bengaluru (GPS: 12.9177, 77.6238)
Reported by Citizen: Bangalore Commuters Forum

Problem Overview:
Silk Board intersection suffers from chronic stormwater drainage failure due to accumulated construction silt and single-use plastic blocking the main underground canal leading to Agara lake.

Student Innovation Scope:
Students will collaborate with Reliance Smart Infrastructure:
1. Develop an automated self-clearing trash-rack screen that prevents solid debris accumulation at the culvert mouth.
2. Deploy edge AI camera nodes to detect water level rises and dynamically interface with smart traffic signals to re-route commuters before gridlock sets in.
3. Deliver a high-capacity mobile siphon pump powered by solar battery backup.`,
    industry: {
      name: 'Reliance Smart Infrastructure & Materials',
      initial: 'R',
      color: 'bg-rose-600',
      mentor: 'Dr. Abhilash Pullanchiyodan, Lead Research Scientist',
      email: 'smarttextiles@ril-innovate.com',
      sector: 'Urban Infrastructure & Smart Drainage Systems',
      phone: '+91 (022) 3555-5000'
    },
    skills: ['Urban Flood Modeling', 'Trash-Rack Mechanics', 'Edge AI Vision', 'Traffic Signal API', 'Hydraulics']
  },
  {
    id: 'cit-106',
    title: 'Severe Particulate Dust & Toxic Air Quality Spikes along Whitefield Metro Corridor',
    category: 'Wearable Tech',
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Pooja Nair (Whitefield Residents Association)',
    ward: 'ITPL Main Road, Whitefield, Bengaluru',
    gps: '12.9866, 77.7345',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    applicants: 9,
    vacancies: 2,
    selected: 0,
    grant: '₹1,75,000 Milestone Grant',
    code: 'KV2026-CIT106',
    snippet: 'Citizen Report: Uncovered road construction and truck movement cause PM2.5 levels to spike over 350 µg/m³. Sanitation workers and school pedestrians suffer severe respiratory distress...',
    citizenDescription: 'Uncovered road construction and debris have caused PM2.5 levels to breach hazardous thresholds (380+ µg/m³). Municipal street sweepers and children walking to school have no protection from fine silica dust.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Ward: ITPL Main Road & Construction Belt, Whitefield, Bengaluru (GPS: 12.9866, 77.7345)
Reported by Citizen: Pooja Nair (Whitefield Residents Association)

Problem Overview:
Arterial road construction produces intense PM2.5 and PM10 particulate dust plumes that linger in the air throughout business hours, endangering sanitation personnel, traffic constables, and local residents.

Student Innovation Scope:
Research teams will partner with BHEL Clean Energy & Environmental Engineering:
1. Design wearable smart N95-grade respirator uniforms with integrated electrostatic micro-filtration and vital signs monitoring for municipal road workers.
2. Develop low-water ultrasonic misting nozzles that precipitate road dust with 80% less water usage than municipal water tankers.
3. Deploy real-time optical PM2.5/PM10 air quality telemetry sensors with public LED billboard alerts.`,
    industry: {
      name: 'BHEL Clean Energy & Environmental Engineering',
      initial: 'B',
      color: 'bg-emerald-700',
      mentor: 'K. Sundaram, General Manager EV Infrastructure',
      email: 'ev.grid@bhel.in',
      sector: 'Renewable Energy & Environmental Protection Systems',
      phone: '+91 (011) 6633-7000'
    },
    skills: ['Electrostatic Filtration', 'Optical Dust Telemetry', 'Wearable Electronics', 'Fluid Mechanics', 'CleanTech']
  }
];

class StudentPortal {
  constructor() {
    const savedCitizen = JSON.parse(localStorage.getItem('kartavya_citizen_challenges') || '[]');
    this.challenges = [...savedCitizen, ...studentChallengesData];
    this.searchQuery = '';
    this.industryQuery = '';
    this.activeCategory = 'All';
    this.currentSubTab = 'browse'; // 'browse' | 'applications' | 'submit-problem'
    this.myApplications = JSON.parse(localStorage.getItem('kartavya_student_applications') || '[]');
    this.syncWithServerReports();
  }

  async syncWithServerReports() {
    try {
      const res = await fetch('/api/reports');
      if (res.ok) {
        const reports = await res.json();
        const existingCodes = new Set(this.challenges.map(c => c.reportId));
        reports.forEach(r => {
          if (!existingCodes.has(r.id)) {
            // Transform newly found reports from server into challenge if not already mapped
            const categoryMapping = {
              'Pothole': 'Civil & Materials',
              'Overflowing Trash': 'CleanTech & Water',
              'Broken Streetlight': 'Clean Energy',
              'Sewage Blockage': 'IoT & Sanitation'
            };
            const domain = categoryMapping[r.category] || 'Civil & Materials';
            const industryMapping = {
              'Civil & Materials': {
                name: 'L&T Urban Infrastructure & Construction Tech',
                initial: 'L',
                color: 'bg-amber-600',
                mentor: 'Dr. Rajesh Sharma, Head of Materials R&D',
                email: 'rd.materials@lt-infra.com',
                sector: 'Civil Infrastructure & Low-Carbon Materials',
                phone: '+91 (022) 6752-5656'
              },
              'CleanTech & Water': {
                name: 'Tata Power Clean Energy & Water Labs',
                initial: 'T',
                color: 'bg-blue-600',
                mentor: 'Er. S. Ramanathan, VP CleanTech Engineering',
                email: 'cleanwater.rnd@tatapower.com',
                sector: 'Environmental Engineering & Industrial Water R&D',
                phone: '+91 (022) 6665-8282'
              },
              'Clean Energy': {
                name: 'Infosys Smart Cities & Urban IoT Labs',
                initial: 'I',
                color: 'bg-indigo-600',
                mentor: 'Priya Venkat, Director of Urban Edge AI',
                email: 'smartcities.ai@infosys.com',
                sector: 'Smart Grid, Edge IoT & Urban Illumination',
                phone: '+91 (080) 2852-0261'
              },
              'IoT & Sanitation': {
                name: 'Mahindra Susten & Municipal IoT Solutions',
                initial: 'M',
                color: 'bg-red-600',
                mentor: 'Vikramaditya Rao, Chief IoT Architect',
                email: 'iot.solutions@mahindrasusten.com',
                sector: 'Municipal Sanitation & Worker Safety Technologies',
                phone: '+91 (022) 2490-1441'
              }
            };

            const challengeItem = {
              id: `cit-${r.id}`,
              reportId: r.id,
              title: r.title,
              category: domain,
              ay: 'AY2026-27',
              status: 'PUBLISHED',
              isCitizenSubmitted: true,
              citizenReporter: `Citizen (${r.reporterAdhaar || 'Adhaar Verified'})`,
              ward: `Bengaluru Ward (GPS: ${r.lat?.toFixed?.(4) || r.lat}, ${r.lng?.toFixed?.(4) || r.lng})`,
              gps: `${r.lat}, ${r.lng}`,
              image: r.image || 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
              applicants: 0,
              vacancies: 2,
              selected: 0,
              grant: `₹${(r.allocatedBudget || 150000).toLocaleString()} Milestone Grant`,
              code: `KV2026-${r.id.toUpperCase()}`,
              snippet: `Citizen Report: ${r.description.slice(0, 130)}...`,
              citizenDescription: r.description,
              description: `[CITIZEN PROBLEM SUBMISSION]
Location: Bengaluru Ward (GPS: ${r.lat}, ${r.lng})
Department: ${r.department}

Citizen Statement:
${r.description}

Student Deliverables:
1. Conduct root-cause technical diagnosis and propose engineered solution.
2. Build functional hardware/software prototype supported by industry milestone grant.
3. Deploy prototype for field verification under municipal supervision.`,
              industry: industryMapping[domain] || industryMapping['Civil & Materials'],
              skills: ['Civic Engineering', 'Field Prototyping', 'IoT Telemetry', 'Sustainable Materials']
            };
            this.challenges.push(challengeItem);
          }
        });
      }
    } catch (e) {
      // Ignore network sync errors
    }
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

              <!-- Problem Submission: Citizen Issue Submission -->
              <button 
                onclick="window.KartavyaStudentPortal.setSubTab('submit-problem')"
                class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  this.currentSubTab === 'submit-problem'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }"
              >
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-circle-plus text-sm"></i>
                  <span>Submit Problem</span>
                </div>
                <span class="text-[9px] px-2 py-0.5 rounded-full ${
                  this.currentSubTab === 'submit-problem' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                } font-bold uppercase tracking-wider">
                  Citizen
                </span>
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
              onclick="window.handleLogout ? window.handleLogout() : window.KartavyaAuth.logout()"
              class="w-full text-left flex items-center gap-2 px-2 py-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 transition"
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <!-- Right Main Content Area -->
        <main class="flex-1 w-full space-y-6">
          ${
            this.currentSubTab === 'browse'
              ? this.renderBrowseView()
              : this.currentSubTab === 'applications'
              ? this.renderApplicationsView()
              : this.renderSubmitProblemView()
          }
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
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${
                    item.isCitizenSubmitted
                      ? `
                    <span class="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <i class="fa-solid fa-users text-[9px] text-emerald-700"></i> Citizen Problem
                    </span>
                  `
                      : `
                    <span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      ${item.status}
                    </span>
                  `
                  }
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

              <!-- Ward Location & Citizen Reporter -->
              <div class="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <i class="fa-solid fa-location-dot text-brand-500 text-[10px] shrink-0"></i>
                <span class="truncate">${item.ward || 'Bengaluru Community Ward'}</span>
              </div>

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

  renderSubmitProblemView() {
    return `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-9 space-y-8 font-sans">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-slate-150 pb-6">
          <div class="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider">
            <i class="fa-solid fa-bullhorn"></i>
            <span>Citizen Problem Portal</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit">
            Submit a Civic Problem for Student Innovation
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
            Are you a citizen or community representative facing a recurring ward problem? Submit the details below. Kartavya links your real-world challenge with student research teams and industry milestone grants.
          </p>
        </div>

        <!-- Submission Form -->
        <form id="citizen-submit-problem-form" class="space-y-6" onsubmit="window.KartavyaStudentPortal.handleProblemSubmit(event)">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Problem Title -->
            <div class="md:col-span-2 space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Problem Title <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="prob-title" 
                required 
                placeholder="e.g., Severe Potholes & Waterlogging at BTM 2nd Stage Underpass"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            <!-- Domain / Category -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Civic Domain <span class="text-rose-500">*</span>
              </label>
              <select 
                id="prob-category" 
                required 
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              >
                <option value="Civil & Materials">Civil & Materials (Roads, Potholes, Bridges)</option>
                <option value="CleanTech & Water">CleanTech & Water (Effluents, Waste, Lakes)</option>
                <option value="IoT & Sanitation">IoT & Sanitation (Sewage, Toxic Gases, Manholes)</option>
                <option value="AI & Mobility">AI & Mobility (Traffic Flow, Edge Vision, Safety)</option>
                <option value="Clean Energy">Clean Energy (Solar Streetlights, Grid Outages)</option>
                <option value="Wearable Tech">Wearable Tech (Sanitation Worker Safety)</option>
              </select>
            </div>

            <!-- Ward / Locality -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Ward / City Locality <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="prob-ward" 
                required 
                placeholder="e.g., Ward 150 - Indiranagar, Bengaluru"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            <!-- GPS Location -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  GPS Coordinates (Optional)
                </label>
                <button 
                  type="button" 
                  onclick="window.KartavyaStudentPortal.detectLocation()"
                  class="text-[10px] text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1 transition"
                >
                  <i class="fa-solid fa-location-crosshairs"></i> Auto-Detect GPS
                </button>
              </div>
              <input 
                type="text" 
                id="prob-gps" 
                placeholder="e.g., 12.9784, 77.6408"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-mono placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            <!-- Preferred Industry Partner -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Sponsoring Industry Partner Preference
              </label>
              <select 
                id="prob-industry" 
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              >
                <option value="auto">Auto-Match based on Domain (Recommended)</option>
                <option value="L&T Urban Infrastructure & Construction Tech">L&T Urban Infrastructure & Construction Tech</option>
                <option value="Tata Power Clean Energy & Water Labs">Tata Power Clean Energy & Water Labs</option>
                <option value="Infosys Smart Cities & Urban Mobility Labs">Infosys Smart Cities & Urban Mobility Labs</option>
                <option value="Mahindra Susten & Municipal IoT Solutions">Mahindra Susten & Municipal IoT Solutions</option>
                <option value="Reliance Smart Infrastructure & Materials">Reliance Smart Infrastructure & Materials</option>
                <option value="BHEL Clean Energy & Environmental Engineering">BHEL Clean Energy & Environmental Engineering</option>
              </select>
            </div>

            <!-- Citizen Name & Contact -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Citizen / Community Reporter Name <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="prob-reporter" 
                required 
                value="${(window.KartavyaAuthStore?.getState()?.user?.name) || 'Aditi Kushwah'}"
                placeholder="e.g., Aditi Kushwah"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            <!-- Photo URL or Evidence -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Evidence Photo (URL or Upload)
              </label>
              <input 
                type="text" 
                id="prob-image" 
                placeholder="https://images.unsplash.com/... or paste image URL"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            <!-- Detailed Problem Description -->
            <div class="md:col-span-2 space-y-1.5">
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Detailed Problem Description & Daily Impact <span class="text-rose-500">*</span>
              </label>
              <textarea 
                id="prob-desc" 
                required 
                rows="4" 
                placeholder="Describe the issue clearly: what causes it, how citizens in your community are affected, why previous municipal quick-fixes failed, and what technological solution students should aim to deliver..."
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              ></textarea>
            </div>

          </div>

          <!-- Submit Button -->
          <div class="pt-4 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-[11px] text-slate-500">
              <i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i>
              Your submission will be immediately posted to the Student Portal & linked to an Industry mentor.
            </p>
            <button 
              type="submit" 
              id="submit-prob-btn"
              class="w-full sm:w-auto px-7 py-3.5 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 font-outfit"
            >
              <i class="fa-solid fa-paper-plane"></i>
              <span>Publish Problem to Students</span>
            </button>
          </div>

        </form>

      </div>
    `;
  }

  detectLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          const gpsEl = document.getElementById('prob-gps');
          if (gpsEl) gpsEl.value = `${lat}, ${lng}`;
          window.showToast?.(`GPS locked: ${lat}, ${lng}`, 'success');
        },
        () => {
          window.showToast?.('Could not acquire GPS. Please enter coordinates manually.', 'warning');
        }
      );
    }
  }

  async handleProblemSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('prob-title')?.value?.trim();
    const category = document.getElementById('prob-category')?.value;
    const ward = document.getElementById('prob-ward')?.value?.trim();
    const gps = document.getElementById('prob-gps')?.value?.trim() || '12.9716, 77.5946';
    const industryPref = document.getElementById('prob-industry')?.value;
    const reporter = document.getElementById('prob-reporter')?.value?.trim() || 'Ward Resident';
    const image = document.getElementById('prob-image')?.value?.trim() || 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80';
    const desc = document.getElementById('prob-desc')?.value?.trim();

    if (!title || !desc) {
      window.showToast?.('Please fill out all required fields.', 'warning');
      return;
    }

    const industryDirectory = {
      'Civil & Materials': {
        name: 'L&T Urban Infrastructure & Construction Tech',
        initial: 'L',
        color: 'bg-amber-600',
        mentor: 'Dr. Rajesh Sharma, Head of Materials R&D',
        email: 'rd.materials@lt-infra.com',
        sector: 'Civil Infrastructure & Low-Carbon Materials',
        phone: '+91 (022) 6752-5656'
      },
      'CleanTech & Water': {
        name: 'Tata Power Clean Energy & Water Labs',
        initial: 'T',
        color: 'bg-blue-600',
        mentor: 'Er. S. Ramanathan, VP CleanTech Engineering',
        email: 'cleanwater.rnd@tatapower.com',
        sector: 'Environmental Engineering & Industrial Water R&D',
        phone: '+91 (022) 6665-8282'
      },
      'Clean Energy': {
        name: 'Infosys Smart Cities & Urban IoT Labs',
        initial: 'I',
        color: 'bg-indigo-600',
        mentor: 'Priya Venkat, Director of Urban Edge AI',
        email: 'smartcities.ai@infosys.com',
        sector: 'Smart Grid, Edge IoT & Urban Illumination',
        phone: '+91 (080) 2852-0261'
      },
      'IoT & Sanitation': {
        name: 'Mahindra Susten & Municipal IoT Solutions',
        initial: 'M',
        color: 'bg-red-600',
        mentor: 'Vikramaditya Rao, Chief IoT Architect',
        email: 'iot.solutions@mahindrasusten.com',
        sector: 'Municipal Sanitation & Worker Safety Technologies',
        phone: '+91 (022) 2490-1441'
      },
      'AI & Mobility': {
        name: 'Reliance Smart Infrastructure & Materials',
        initial: 'R',
        color: 'bg-rose-600',
        mentor: 'Dr. Abhilash Pullanchiyodan, Lead Research Scientist',
        email: 'smarttextiles@ril-innovate.com',
        sector: 'Urban Infrastructure & Smart Mobility',
        phone: '+91 (022) 3555-5000'
      },
      'Wearable Tech': {
        name: 'BHEL Clean Energy & Environmental Engineering',
        initial: 'B',
        color: 'bg-emerald-700',
        mentor: 'K. Sundaram, General Manager EV Infrastructure',
        email: 'ev.grid@bhel.in',
        sector: 'Environmental Protection Systems',
        phone: '+91 (011) 6633-7000'
      }
    };

    let assignedIndustry = industryDirectory[category] || industryDirectory['Civil & Materials'];
    if (industryPref && industryPref !== 'auto') {
      const match = Object.values(industryDirectory).find(ind => ind.name === industryPref);
      if (match) assignedIndustry = match;
    }

    const uniqueId = `cit-${Date.now()}`;
    const uniqueCode = `KV2026-CIT${Math.floor(100 + Math.random() * 900)}`;

    const newChallenge = {
      id: uniqueId,
      title,
      category,
      ay: 'AY2026-27',
      status: 'PUBLISHED',
      isCitizenSubmitted: true,
      citizenReporter: `${reporter} (Verified Citizen)`,
      ward: ward || 'Bengaluru Community Ward',
      gps,
      image,
      applicants: 0,
      vacancies: 2,
      selected: 0,
      grant: '₹1,75,000 Milestone Grant',
      code: uniqueCode,
      snippet: `Citizen Report: ${desc.slice(0, 140)}...`,
      citizenDescription: desc,
      description: `[CITIZEN PROBLEM SUBMISSION]
Ward: ${ward || 'Bengaluru Local Ward'} (GPS: ${gps})
Reported by Citizen: ${reporter}

Problem Overview:
${desc}

Student Innovation Deliverables:
1. Conduct root-cause field assessment in collaboration with ward residents.
2. Formulate and engineer a functional prototype backed by ${assignedIndustry.name}.
3. Deploy prototype for municipal evaluation under Kartavya guidelines.`,
      industry: assignedIndustry,
      skills: ['Civic Engineering', 'Rapid Prototyping', 'IoT Telemetry', 'Field Verification']
    };

    // Prepend to active challenges list
    this.challenges.unshift(newChallenge);

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('kartavya_citizen_challenges') || '[]');
    saved.unshift(newChallenge);
    localStorage.setItem('kartavya_citizen_challenges', JSON.stringify(saved));

    // Also sync to /api/reports if coordinates present
    try {
      const parts = gps.split(',');
      const latVal = parseFloat(parts[0]?.trim()) || 12.9716;
      const lngVal = parseFloat(parts[1]?.trim()) || 77.5946;
      fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category: category === 'Civil & Materials' ? 'Pothole' : (category === 'CleanTech & Water' ? 'Overflowing Trash' : 'Broken Streetlight'),
          description: desc,
          lat: latVal,
          lng: lngVal,
          image,
          reporterAdhaar: '1234-5678-9012'
        })
      }).catch(() => {});
    } catch (err) {}

    window.showToast?.('Citizen problem submitted! It is now live for student innovation teams.', 'success');
    this.setSubTab('browse');
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

          <!-- Citizen Badge & Context -->
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
              <i class="fa-solid fa-users text-emerald-700"></i> Citizen-Reported Civic Issue
            </span>
            <span class="text-[11px] text-slate-500 font-medium truncate">
              Reported by ${challenge.citizenReporter || 'Ward Resident'}
            </span>
          </div>

          <!-- Modal Title -->
          <h2 class="text-2xl font-extrabold text-slate-900 font-outfit tracking-tight mb-2">
            ${challenge.title}
          </h2>

          <div class="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <i class="fa-solid fa-location-dot text-brand-500"></i>
            <span>${challenge.ward || 'Bengaluru Community Ward'}</span>
          </div>

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

          <!-- Telemetry Photo if available -->
          ${
            challenge.image
              ? `
            <div class="mb-6 rounded-2xl overflow-hidden border border-slate-200 max-h-52 relative">
              <img src="${challenge.image}" alt="${challenge.title}" class="w-full h-full object-cover">
              <div class="absolute bottom-2.5 left-2.5 bg-slate-950/70 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-lg flex items-center gap-1.5">
                <i class="fa-solid fa-camera text-emerald-400"></i>
                <span>Citizen Telemetry Evidence</span>
              </div>
            </div>
          `
              : ''
          }

          <!-- Description Section (Matching Image 2 layout) -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center gap-2 text-slate-800 font-bold text-sm font-outfit">
              <i class="fa-solid fa-book-open text-brand-500"></i>
              <span>Description & Scope</span>
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
              <span>Pilot Ward: <strong>${challenge.ward || 'Bengaluru Ward 150'}</strong></span>
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
