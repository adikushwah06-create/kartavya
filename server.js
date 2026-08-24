const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Support base64 images if captured
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Helper to assign department based on category
function getDepartmentByCategory(category) {
  switch (category) {
    case 'Pothole':
      return 'Public Works';
    case 'Overflowing Trash':
      return 'Sanitation';
    case 'Broken Streetlight':
      return 'Electrical';
    case 'Sewage Blockage':
      return 'Sanitation';
    default:
      return 'General Municipal';
  }
}

// In-Memory Database pre-seeded with 5 realistic issues in Bengaluru
// Linked with specific reporter Adhaar numbers for authentication-scoped profiles
let reports = [
  {
    id: 'rep-101',
    title: 'Deep Hazardous Pothole near Indiranagar Metro',
    category: 'Pothole',
    description: 'A massive pothole has formed right in front of the main entry gate of the metro station. It is a major hazard for two-wheelers, especially during heavy rains.',
    lat: 12.9784,
    lng: 77.6408,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80',
    status: 'Pending',
    department: 'Public Works',
    upvotes: 24,
    verifiedBy: ['user-1', 'user-2', 'user-3'],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '1234-5678-9012', // Linked to default citizen demo account
    // Financial and AI telemetry parameters
    estimatedBudget: 25000,
    allocatedBudget: 240000, // Large overestimate discrepancy
    aiFactCheckScore: 98,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI Triage matches complaints with BBMP road maintenance ledger for 2026. news search confirms 3 reported accidents at this junction. Plausibility: High.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-102',
    title: 'Overflowing Garbage Bin on 80 Feet Road',
    category: 'Overflowing Trash',
    description: 'Municipal garbage dumpsters are overflowing, and trash has spilled across the entire sidewalk. Stray dogs are dragging it around, causing a severe odor.',
    lat: 12.9698,
    lng: 77.6414,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80',
    status: 'In Progress',
    department: 'Sanitation',
    upvotes: 12,
    verifiedBy: ['user-1', 'user-4'],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '9876-5432-1098',
    estimatedBudget: 8000,
    allocatedBudget: 8500, // Normal
    aiFactCheckScore: 92,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI Weather and news log confirms garbage truck mechanical failure delayed waste collections in Indiranagar Ward 150 on August 23.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-103',
    title: 'Non-Functional Streetlights around Koramangala Park',
    category: 'Broken Streetlight',
    description: 'Three key streetlights surrounding the children\'s park have been completely dark for a week. It becomes unsafe for pedestrians and joggers after dark.',
    lat: 12.9344,
    lng: 77.6244,
    image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&w=600&q=80',
    status: 'Pending',
    department: 'Electrical',
    upvotes: 8,
    verifiedBy: ['user-2'],
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '1234-5678-9012', // Linked to default citizen demo account
    estimatedBudget: 15000,
    allocatedBudget: 98000, // Discrepancy
    aiFactCheckScore: 88,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI Sensor grid checks reveal zero electricity draw from targeted street node nodes over the past 7 days. Local news mentions electrical grid repairs.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-104',
    title: 'Clogged Sewage Line Overflowing on HSR Sector 3',
    category: 'Sewage Blockage',
    description: 'Clogged manhole causing black sewage water to bubble up and flow onto the main road. The puddle is growing and emitting a terrible stench.',
    lat: 12.9118,
    lng: 77.6385,
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600&q=80',
    status: 'Resolved',
    department: 'Sanitation',
    upvotes: 35,
    verifiedBy: ['user-1', 'user-2', 'user-3', 'user-5', 'user-6'],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: true,
    resolutionProof: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
    resolvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    reporterAdhaar: '1234-5678-9012', // Resolved and previously awarded to user
    estimatedBudget: 40000,
    allocatedBudget: 40000, // Normal
    aiFactCheckScore: 95,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI analysis verified image telemetry matches water board report for sewer repair blockages on August 19. Ticket resolved and closed by engineers.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-105',
    title: 'Broken Footpath Slabs outside Jayanagar Complex',
    category: 'Pothole',
    description: 'Pedestrian concrete slabs are broken and loose. Pedestrians, especially the elderly, are tripping, and many are forced to walk on the busy vehicular lane.',
    lat: 12.9292,
    lng: 77.5824,
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=600&q=80',
    status: 'In Progress',
    department: 'Public Works',
    upvotes: 18,
    verifiedBy: ['user-7', 'user-8'],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '9876-5432-1098',
    estimatedBudget: 35000,
    allocatedBudget: 195000, // Overestimate Discrepancy
    aiFactCheckScore: 48,
    aiFactCheckStatus: 'Suspicious',
    aiFactCheckSummary: 'AI Alert: Telemetry scan warns that the footpath photo matching this report is highly similar to public complaints filed in 2024. Potential duplicate or false alarm.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  }
];

// --- API ENDPOINTS ---

// 1. GET /api/reports - Fetch all reported issues
app.get('/api/reports', (req, res) => {
  res.json(reports);
});

// 2. POST /api/reports - Log a new issue
app.post('/api/reports', (req, res) => {
  const { title, category, description, lat, lng, image, reporterAdhaar } = req.body;

  if (!title || !category || !lat || !lng || !reporterAdhaar) {
    return res.status(400).json({ error: 'Title, Category, Latitude, Longitude, and Reporter Adhaar are required.' });
  }

  const newReport = {
    id: `rep-${Date.now()}`,
    title,
    category,
    description: description || 'No description provided.',
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    image: image || 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600&q=80',
    status: 'Pending',
    department: getDepartmentByCategory(category),
    upvotes: 1,
    verifiedBy: [reporterAdhaar], // Citizen automatically verifies their own report
    createdAt: new Date().toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar,
    // Add default budgets and AI factcheck values
    estimatedBudget: 25000,
    allocatedBudget: 25000,
    aiFactCheckScore: 85,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI Triage: Verified fresh GPS telemetry logs and camera metadata. No duplicate entries detected in active ward registries.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  };

  reports.unshift(newReport); // Add to the beginning of the list
  res.status(201).json(newReport);
});

// 3. PATCH /api/reports/:id - Update status, upvotes, or corruption flags
app.patch('/api/reports/:id', (req, res) => {
  const { id } = req.params;
  const { 
    status, 
    department, 
    upvote, 
    resolutionProof, 
    userId,
    aiFactCheckStatus,
    aiFactCheckScore,
    aiFactCheckSummary,
    corruptionFlagged,
    bulletinReported,
    rtiFiled
  } = req.body;

  const reportIndex = reports.findIndex(r => r.id === id);
  if (reportIndex === -1) {
    return res.status(404).json({ error: `Report with ID ${id} not found.` });
  }

  const report = reports[reportIndex];
  let karmaUnlocked = false;

  // Handle status update
  if (status) {
    if (status === 'Resolved' && report.status !== 'Resolved' && !report.karmaAwarded) {
      report.karmaAwarded = true;
      karmaUnlocked = true;
      report.resolvedAt = new Date().toISOString();
    }
    report.status = status;
  }

  // Handle department change
  if (department) {
    report.department = department;
  }

  // Handle resolution proof simulation
  if (resolutionProof) {
    report.resolutionProof = resolutionProof;
  }

  // Handle upvotes
  if (upvote) {
    const voterId = userId || 'anonymous-user';
    if (!report.verifiedBy.includes(voterId)) {
      report.verifiedBy.push(voterId);
      report.upvotes += 1;
    } else {
      return res.status(400).json({ error: 'You have already verified/upvoted this issue.' });
    }
  }

  // Handle AI Fact-checker overrides from admin
  if (aiFactCheckStatus) {
    report.aiFactCheckStatus = aiFactCheckStatus;
  }
  if (aiFactCheckScore !== undefined) {
    report.aiFactCheckScore = parseInt(aiFactCheckScore);
  }
  if (aiFactCheckSummary) {
    report.aiFactCheckSummary = aiFactCheckSummary;
  }

  // Handle Corruption Checker flags
  if (corruptionFlagged !== undefined) {
    report.corruptionFlagged = corruptionFlagged;
  }
  if (bulletinReported !== undefined) {
    report.bulletinReported = bulletinReported;
  }
  if (rtiFiled) {
    report.rtiFiledCount = (report.rtiFiledCount || 0) + 1;
  }

  res.json({
    report,
    karmaUnlocked
  });
});

// Wildcard route to serve index.html for any frontend SPA navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Kartavya Server is running on http://localhost:${PORT}`);
});
