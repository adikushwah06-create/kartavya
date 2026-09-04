/**
 * StudentPortal - Comprehensive Interface for Student Innovators
 * Inspired by academic project portals with Industry-Led Challenge Solving
 */

const studentChallengesData = [
  {
    id: 'cit-waterlogged-roads',
    title: 'Roads become waterlogged after heavy rain',
    category: 'Urban Drainage & Infrastructure',
    subCategories: ['Civil & Materials', 'CleanTech & Water'],
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Ramesh Kumar (Ward 174 Resident Welfare Association)',
    ward: 'Outer Ring Road & Silk Board Arterial Belt, Bengaluru',
    gps: '12.9177, 77.6238',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
    applicants: 14,
    vacancies: 2,
    selected: 1,
    grant: '₹2,50,000 Milestone Grant',
    code: 'KV2026-CIT01',
    snippet: 'Citizen Report: Arterial roads become flooded 2.5 feet deep within 20 minutes of rain due to choked culverts and non-porous asphalt. Student teams needed to engineer porous pavement prototypes and IoT drainage telemetry...',
    citizenDescription: 'Every time it rains moderately, water builds up over 2.5 feet deep within 20 minutes because the side drains are choked with construction silt and plastic debris. Vehicles stall, ambulances are stranded for hours, and water enters basement shops along the main road.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Location: Outer Ring Road & Silk Board Arterial Belt, Bengaluru (GPS: 12.9177, 77.6238)
Reported by Citizen: Ramesh Kumar (Ward 174 Resident Welfare Association)

Problem Statement:
Arterial roads and intersections suffer chronic waterlogging immediately following rainfall. Inadequate drainage gradient, undersized stormwater culverts, silt blockages, and impermeable bitumen surfaces prevent natural water absorption, causing flash flooding, traffic standstills, and structural road deterioration.

Student Innovation Scope:
Student engineering teams will work in collaboration with L&T Urban Infrastructure to:
1. Develop high-permeability porous pavement or geopolymer drainage tiles capable of draining >1,500 L/m²/hour into subterranean recharge wells.
2. Design and deploy solar-powered IoT ultrasonic water-level nodes that transmit real-time street drainage status to the municipal control room via LoRaWAN.
3. Construct a self-cleaning vortex silt/debris separator to prevent storm culverts from choking.`,
    industry: {
      name: 'L&T Urban Infrastructure & Construction Tech',
      initial: 'L',
      color: 'bg-amber-600',
      mentor: 'Dr. Rajesh Sharma, Head of Materials & Urban Drainage R&D',
      email: 'rd.materials@lt-infra.com',
      sector: 'Civil Infrastructure & Climate-Resilient Urban Systems',
      phone: '+91 (022) 6752-5656'
    },
    skills: [
      'Urban Stormwater Hydrology',
      'Porous & Permeable Concrete',
      'IoT Water Level Telemetry',
      'GIS Runoff & Elevation Mapping',
      'Culvert Hydraulic Modeling',
      'LoRaWAN / ESP32 Firmware'
    ],
    requiredSkillDetails: {
      overview: 'Student innovators must possess interdisciplinary skills spanning civil engineering, IoT hardware telemetry, and urban hydrological modeling.',
      competencyGroups: [
        {
          title: 'Core Civil & Material Engineering',
          icon: 'fa-solid fa-layer-group',
          color: 'text-amber-600',
          items: [
            'Hydrologic & Hydraulic Culvert Modeling (HEC-RAS / SWMM)',
            'Porous Asphalt & Alkali-Activated Geopolymer Concrete Mix Design',
            'Permeability & Compressive Strength Material Testing (>30 MPa)'
          ]
        },
        {
          title: 'IoT Sensors & Embedded Firmware',
          icon: 'fa-solid fa-microchip',
          color: 'text-blue-600',
          items: [
            'IP68 Submersible Ultrasonic Water-Depth Sensor Nodes',
            'LoRaWAN / NB-IoT Long-Range Low-Power Wireless Mesh',
            'Solar PV Harvesting & Power Management for Field Nodes'
          ]
        },
        {
          title: 'Software, GIS & Predictive Analytics',
          icon: 'fa-solid fa-laptop-code',
          color: 'text-emerald-600',
          items: [
            'GIS Topographic Elevation & Runoff Mapping (QGIS / ArcGIS)',
            'Real-Time Water-Level Dashboard & Municipal Alert Webhooks',
            'Predictive Rainfall Inflow Modeling with Python'
          ]
        }
      ],
      deliverables: [
        'Lab-verified 1m² permeable pavement slab prototype with documented flow throughput.',
        'Operational IP68 IoT sensor telemetry node transmitting water level data to BBMP API.',
        'Field pilot deployment report at designated Silk Board flood-prone test site.'
      ]
    }
  },
  {
    id: 'cit-crop-disease',
    title: 'Farmers struggle to identify crop disease',
    category: 'AgriTech & AI',
    subCategories: ['CleanTech & Water', 'AI & Mobility'],
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Shivanna Gowda (Kolar Farmers Producer Organization)',
    ward: 'Kolar & Devanahalli Farming Belt, Karnataka',
    gps: '13.1362, 78.1291',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    applicants: 21,
    vacancies: 3,
    selected: 2,
    grant: '₹2,20,000 Milestone Grant',
    code: 'KV2026-CIT02',
    snippet: 'Citizen Report: Smallholder farmers suffer devastating crop losses due to unidentifiable leaf blights, fungal infections, and pest attacks. Student teams needed to build offline-first Edge AI diagnostic tools and soil sensors...',
    citizenDescription: 'Last month my entire 3-acre tomato harvest turned black within 5 days from a leaf fungus I could not recognize. Government agricultural extension officers take weeks to visit our village. By the time we know what pesticide to spray, the crop is already ruined.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Location: Kolar & Devanahalli Rural Farming Belt, Karnataka (GPS: 13.1362, 78.1291)
Reported by Citizen: Shivanna Gowda (Kolar Farmers Producer Organization)

Problem Statement:
Smallholder and marginal farmers face sudden, devastating crop damage caused by bacterial, fungal, and viral plant pathogens. Due to a severe shortage of localized agricultural extension officers, farmers often apply incorrect, expensive chemical pesticides or delay intervention, leading to 40-60% yield wipeouts and soil contamination.

Student Innovation Scope:
Student innovators will partner with Mahindra Agri Solutions & Edge AI Labs to:
1. Train an edge-quantized deep learning computer vision model to diagnose 35+ common Indian crop foliar diseases (Tomato Early Blight, Paddy Blast, Cotton Bollworm, etc.) with >92% field accuracy.
2. Build an offline-first mobile app in regional Indian languages (Kannada, Hindi, Telugu, Tamil) with voice-guided organic treatment remedies.
3. Develop an ultra-low-cost optical clip-on lens or handheld multispectral leaf scanner.`,
    industry: {
      name: 'Mahindra Agri Solutions & Edge AI Labs',
      initial: 'M',
      color: 'bg-emerald-600',
      mentor: 'Dr. Anand Swaminathan, Chief Agronomist & Plant Pathology Director',
      email: 'agritech.rnd@mahindra.com',
      sector: 'Precision Agriculture, Agronomy AI & Rural Tech',
      phone: '+91 (022) 2490-1441'
    },
    skills: [
      'Computer Vision (CNNs / YOLO)',
      'Edge AI & Model Quantization (TFLite)',
      'Mobile App Dev (Flutter / React Native)',
      'Plant Pathology & Agronomy',
      'Multilingual Voice UI (Bhashini API)',
      'Soil Moisture & NPK Sensing'
    ],
    requiredSkillDetails: {
      overview: 'Student innovators must bring combined expertise in applied computer vision, mobile app engineering for low-bandwidth rural environments, and agronomy/plant biology.',
      competencyGroups: [
        {
          title: 'Deep Learning & Computer Vision',
          icon: 'fa-solid fa-brain',
          color: 'text-emerald-600',
          items: [
            'Convolutional Neural Networks (MobileNetV3, EfficientNet, YOLOv8)',
            'Edge Model Quantization (INT8 / FP16 TFLite & ONNX Runtime)',
            'Dataset Augmentation for High/Low-Light Agricultural Field Conditions'
          ]
        },
        {
          title: 'Mobile App & Voice UX Engineering',
          icon: 'fa-solid fa-mobile-screen',
          color: 'text-blue-600',
          items: [
            'Offline-First Local Inference Architecture (Flutter / React Native)',
            'Multilingual Audio/Voice UX Integration (Bhashini AI / Whisper)',
            'Low-Bandwidth Cloud Sync for Agronomist Second Opinions'
          ]
        },
        {
          title: 'Agronomy, Botany & Field Hardware',
          icon: 'fa-solid fa-seedling',
          color: 'text-amber-600',
          items: [
            'Plant Pathology Diagnosis (Fungal, Bacterial, Viral & Nutrient Deficiencies)',
            'Micro-Climate & Soil NPK Sensor Telematics Integration',
            'Organic & Chemical Dosage Recommendation Decision Trees'
          ]
        }
      ],
      deliverables: [
        'Functional Android/iOS app performing real-time offline leaf disease classification.',
        'Dataset benchmark report validating >92% diagnostic accuracy across 20+ disease classes.',
        'Field pilot demonstration with 50 local farmers in Kolar Farming Belt.'
      ]
    }
  },
  {
    id: 'cit-bus-overcrowding',
    title: 'Bus overcrowding during morning hours',
    category: 'Smart Mobility & Transit',
    subCategories: ['AI & Mobility', 'IoT & Sanitation'],
    ay: 'AY2026-27',
    status: 'PUBLISHED',
    isCitizenSubmitted: true,
    citizenReporter: 'Pooja Nair (Bengaluru Public Transport Commuters Forum)',
    ward: 'Majestic – Outer Ring Road & ITPL Bus Corridor, Bengaluru',
    gps: '12.9767, 77.5713',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    applicants: 18,
    vacancies: 2,
    selected: 1,
    grant: '₹1,80,000 Milestone Grant',
    code: 'KV2026-CIT03',
    snippet: 'Citizen Report: Extreme bus crowding between 8:00 AM - 10:30 AM causes severe commuter safety hazards and endless delays. Student teams invited to build automated passenger counting and dynamic fleet dispatch algorithms...',
    citizenDescription: 'Buses arrive packed beyond maximum capacity during morning rush hours. Commuters hang dangerously from open footboards, senior citizens are unable to board, and people wait over 45 minutes as 3 consecutive full buses skip the stop without stopping.',
    description: `[CITIZEN PROBLEM SUBMISSION]
Location: Majestic to ITPL & Whitefield Arterial Transit Corridor, Bengaluru (GPS: 12.9767, 77.5713)
Reported by Citizen: Pooja Nair (Bengaluru Public Transport Commuters Forum)

Problem Statement:
Urban public transit buses on high-density corridors experience peak-hour passenger overloading reaching 180-200% of rated capacity between 7:30 AM and 10:30 AM. Lack of real-time passenger occupancy telemetry prevents transit authorities from dynamically deploying auxiliary standby buses or adjusting headway intervals, leading to severe safety risks, footboard accidents, and prolonged commuter wait times.

Student Innovation Scope:
Student engineering teams will collaborate with Infosys Smart Cities & Urban Mobility Labs to:
1. Construct an Automated Passenger Counting (APC) prototype using dual overhead stereo vision / time-of-flight (ToF) sensors or air-suspension load sensors achieving >95% accuracy.
2. Develop dynamic headway adjustment and AI dispatch algorithms that recommend express feeder routing when upstream stop queues cross threshold density.
3. Deliver a lightweight commuter mobile web widget displaying live bus occupancy level (Green/Yellow/Red) and predicted wait time.`,
    industry: {
      name: 'Infosys Smart Cities & Urban Mobility Labs',
      initial: 'I',
      color: 'bg-indigo-600',
      mentor: 'Priya Venkat, Director of Urban Edge AI & Transit Telematics',
      email: 'urbanmobility.ai@infosys.com',
      sector: 'Intelligent Transportation Systems & Fleet Optimization',
      phone: '+91 (080) 2852-0261'
    },
    skills: [
      'Automated Passenger Counting (APC)',
      'Edge AI Computer Vision (YOLO / ToF)',
      'Dynamic Fleet Dispatch Algorithms',
      'Transit Telematics & GPS Tracking',
      'Queueing Theory & Transit GTFS APIs',
      'Real-Time WebSockets / Microservices'
    ],
    requiredSkillDetails: {
      overview: 'Student innovators should combine computer vision sensing, transit data engineering, and optimization algorithms to build an end-to-end crowding mitigation prototype.',
      competencyGroups: [
        {
          title: 'Sensor Hardware & Edge Vision',
          icon: 'fa-solid fa-camera',
          color: 'text-indigo-600',
          items: [
            'Overhead Stereo-Vision / Time-of-Flight (ToF) Bi-Directional Passenger Counting',
            'Vehicle Air-Bellow Suspension Pressure & Load Cell Interfacing',
            'Embedded Edge Hardware (Raspberry Pi 5 / NVIDIA Jetson Orin Nano)'
          ]
        },
        {
          title: 'Transit Optimization & Dispatch Algorithms',
          icon: 'fa-solid fa-route',
          color: 'text-amber-600',
          items: [
            'Dynamic Vehicle Routing & Headway Adjustment (Operations Research / Queueing Theory)',
            'GTFS-Realtime (General Transit Feed Specification) Protocol Integration',
            'Spatio-Temporal Commuter Surge Prediction with Time-Series Models'
          ]
        },
        {
          title: 'Cloud Telematics & Commuter UI',
          icon: 'fa-solid fa-network-wired',
          color: 'text-emerald-600',
          items: [
            'Low-Latency WebSockets & MQTT Telemetry Streaming',
            'Real-Time Bus Crowding Indicator (Green/Yellow/Red) UI for Commuters',
            'Depot Control Dashboard with Automated Feeder Bus Dispatch Triggers'
          ]
        }
      ],
      deliverables: [
        'Functional hardware prototype demonstrating >95% accurate bi-directional passenger count.',
        'Live transit simulation running dynamic headway dispatch algorithms on BMTC Route 500D data.',
        'Mobile/web dashboard displaying live bus occupancy to commuters and fleet managers.'
      ]
    }
  }
];

class StudentPortal {
  constructor() {
    // Retain only user-submitted citizen reports from the new submit form
    let savedCitizen = [];
    try {
      savedCitizen = JSON.parse(localStorage.getItem('kartavya_citizen_challenges') || '[]')
        .filter(item => item && item.id && item.id.startsWith('cit-user-'));
      // Clean up legacy stale cache in localStorage
      localStorage.setItem('kartavya_citizen_challenges', JSON.stringify(savedCitizen));
    } catch (e) {
      savedCitizen = [];
    }

    this.challenges = [...studentChallengesData, ...savedCitizen];
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
              'Waterlogging': 'Urban Drainage & Infrastructure',
              'Pothole': 'Urban Drainage & Infrastructure',
              'Crop Disease': 'AgriTech & AI',
              'Bus Transit': 'Smart Mobility & Transit',
              'Overflowing Trash': 'CleanTech & Water',
              'Broken Streetlight': 'Clean Energy',
              'Sewage Blockage': 'IoT & Sanitation'
            };
            const domain = categoryMapping[r.category] || 'Urban Drainage & Infrastructure';
            const industryMapping = {
              'Urban Drainage & Infrastructure': {
                name: 'L&T Urban Infrastructure & Construction Tech',
                initial: 'L',
                color: 'bg-amber-600',
                mentor: 'Dr. Rajesh Sharma, Head of Materials & Urban Drainage R&D',
                email: 'rd.materials@lt-infra.com',
                sector: 'Civil Infrastructure & Climate-Resilient Urban Systems',
                phone: '+91 (022) 6752-5656'
              },
              'AgriTech & AI': {
                name: 'Mahindra Agri Solutions & Edge AI Labs',
                initial: 'M',
                color: 'bg-emerald-600',
                mentor: 'Dr. Anand Swaminathan, Chief Agronomist & Plant Pathology Director',
                email: 'agritech.rnd@mahindra.com',
                sector: 'Precision Agriculture, Agronomy AI & Rural Tech',
                phone: '+91 (022) 2490-1441'
              },
              'Smart Mobility & Transit': {
                name: 'Infosys Smart Cities & Urban Mobility Labs',
                initial: 'I',
                color: 'bg-indigo-600',
                mentor: 'Priya Venkat, Director of Urban Edge AI & Transit Telematics',
                email: 'urbanmobility.ai@infosys.com',
                sector: 'Intelligent Transportation Systems & Fleet Optimization',
                phone: '+91 (080) 2852-0261'
              },
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
      const matchCategory = this.activeCategory === 'All' || 
        item.category === this.activeCategory ||
        (item.subCategories && item.subCategories.includes(this.activeCategory));
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
    const categories = ['All', 'Urban Drainage & Infrastructure', 'AgriTech & AI', 'Smart Mobility & Transit', 'Civil & Materials', 'CleanTech & Water'];

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

              <!-- Required Skills Preview on Card -->
              <div class="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="font-bold text-slate-800 flex items-center gap-1.5 font-outfit">
                    <i class="fa-solid fa-graduation-cap text-brand-600 text-xs"></i>
                    <span>Required Student Skills</span>
                  </span>
                  <span class="text-[10px] text-amber-800 font-bold bg-amber-100/90 px-2 py-0.5 rounded-md">
                    ${item.skills.length} skills needed
                  </span>
                </div>
                <div class="flex flex-wrap gap-1">
                  ${item.skills.slice(0, 3).map(s => `
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-slate-700 border border-amber-200/70 shadow-2xs">
                      ${s}
                    </span>
                  `).join('')}
                  ${item.skills.length > 3 ? `
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/80 text-slate-500 border border-slate-200">
                      +${item.skills.length - 3} more in details
                    </span>
                  ` : ''}
                </div>
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

    const uniqueId = `cit-user-${Date.now()}`;
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

  // --- MODAL: Challenge Details (Clean, Uncluttered with Technical Skill Set) ---
  openDetailsModal(challengeId) {
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const modal = document.getElementById('project-details-modal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-all duration-300">
        <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 relative max-h-[88vh] overflow-y-auto font-sans">
          
          <!-- Close Button (X) -->
          <button 
            onclick="window.KartavyaStudentPortal.closeDetailsModal()" 
            class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition"
          >
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>

          <!-- Top Category & Grant Badges -->
          <div class="flex items-center gap-2 mb-2.5">
            <span class="text-[10px] font-extrabold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              ${challenge.category}
            </span>
            <span class="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              ${challenge.grant}
            </span>
          </div>

          <!-- Problem Title -->
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit tracking-tight leading-snug mb-2 pr-6">
            ${challenge.title}
          </h2>

          <!-- Subtitle / Mentor & Location -->
          <div class="flex items-center gap-2 text-xs text-slate-500 mb-5 flex-wrap">
            <span class="flex items-center gap-1 text-slate-700 font-medium">
              <i class="fa-solid fa-building text-slate-400 text-[11px]"></i>
              <span>${challenge.industry.name}</span>
            </span>
            <span class="text-slate-300">&bull;</span>
            <span class="flex items-center gap-1 text-slate-500 font-medium">
              <i class="fa-solid fa-location-dot text-brand-500 text-[11px]"></i>
              <span>${challenge.ward}</span>
            </span>
          </div>

          <!-- Problem Summary -->
          <div class="space-y-1.5 mb-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div class="text-[11px] font-bold text-slate-700 uppercase tracking-wider font-outfit flex items-center gap-1.5">
              <i class="fa-solid fa-circle-info text-brand-500"></i> Problem Summary
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${challenge.citizenDescription || challenge.snippet}
            </p>
          </div>

          <!-- Technical Skill Set Required (Clear & Prominent) -->
          <div class="space-y-3 mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-200/80">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-slate-900 font-outfit uppercase tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-graduation-cap text-blue-600 text-sm"></i>
                <span>Required Technical Skill Set</span>
              </h4>
              <span class="text-[10px] font-extrabold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                ${challenge.skills.length} Skills
              </span>
            </div>

            <p class="text-[11px] text-slate-500 leading-relaxed">
              Proficiency and technical capabilities needed to research & prototype this solution:
            </p>

            <div class="flex flex-wrap gap-2 pt-0.5">
              ${challenge.skills.map(s => `
                <span class="px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-blue-200/90 shadow-2xs flex items-center gap-1.5 hover:border-blue-400 transition">
                  <i class="fa-solid fa-circle-check text-emerald-600 text-[11px]"></i>
                  <span>${s}</span>
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Modal Footer: Meta & Action Buttons -->
          <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="text-[11px] text-slate-400 font-medium">
              <span>Code: <strong class="text-slate-700 font-mono">${challenge.code}</strong></span>
              <span class="mx-1.5">&bull;</span>
              <span>Year: <strong class="text-slate-700">${challenge.ay}</strong></span>
            </div>

            <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <button 
                onclick="window.KartavyaStudentPortal.closeDetailsModal()" 
                class="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition font-outfit"
              >
                Close
              </button>
              <button 
                onclick="window.KartavyaStudentPortal.openApplyModal('${challenge.id}')" 
                class="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-extrabold rounded-xl transition shadow-sm font-outfit"
              >
                Apply Now
              </button>
            </div>
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
