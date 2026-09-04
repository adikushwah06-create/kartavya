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
    case 'Waterlogging':
    case 'Pothole':
      return 'Public Works';
    case 'Crop Disease':
      return 'Agriculture & Rural Dev';
    case 'Bus Transit':
    case 'Overcrowding':
      return 'Transport & Mobility';
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
    title: 'Roads become waterlogged after heavy rain',
    category: 'Waterlogging',
    description: 'Every time it rains moderately, arterial roads become waterlogged over 2.5 feet deep within 20 minutes due to choked culverts and non-porous asphalt, paralyzing commuter movement and damaging road foundations.',
    lat: 12.9177,
    lng: 77.6238,
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
    status: 'Pending',
    department: 'Public Works',
    upvotes: 24,
    verifiedBy: ['user-1', 'user-2', 'user-3'],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '1234-5678-9012',
    estimatedBudget: 45000,
    allocatedBudget: 250000,
    aiFactCheckScore: 98,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'AI Weather and municipal elevation data confirms severe runoff accumulation at Silk Board & Outer Ring Road during precipitation >15mm/h.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-102',
    title: 'Farmers struggle to identify crop disease',
    category: 'Crop Disease',
    description: 'Smallholder farmers in the peri-urban farming belt struggle to identify foliar plant diseases and pest infestations early. Yield losses reach 50% because government agricultural officers take weeks to visit.',
    lat: 13.1362,
    lng: 78.1291,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    status: 'In Progress',
    department: 'Agriculture & Rural Dev',
    upvotes: 31,
    verifiedBy: ['user-1', 'user-4', 'user-5'],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '9876-5432-1098',
    estimatedBudget: 35000,
    allocatedBudget: 220000,
    aiFactCheckScore: 96,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'Agronomy satellite multispectral telemetry detects chlorophyll index drop across 120 hectares of tomato & pulse plots in Kolar cluster.',
    corruptionFlagged: false,
    bulletinReported: false,
    rtiFiledCount: 0
  },
  {
    id: 'rep-103',
    title: 'Bus overcrowding during morning hours',
    category: 'Bus Transit',
    description: 'Severe bus overcrowding during peak morning rush hours (8:00 AM - 10:30 AM) on high-density corridors causes acute safety risks, dangerous footboard travel, and unmanageable delays for office commuters and students.',
    lat: 12.9767,
    lng: 77.5713,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    status: 'Pending',
    department: 'Transport & Mobility',
    upvotes: 42,
    verifiedBy: ['user-2', 'user-3'],
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    karmaAwarded: false,
    resolutionProof: null,
    resolvedAt: null,
    reporterAdhaar: '1234-5678-9012',
    estimatedBudget: 20000,
    allocatedBudget: 180000,
    aiFactCheckScore: 94,
    aiFactCheckStatus: 'Verified',
    aiFactCheckSummary: 'Transit cell-tower and commuter density telemetry confirms 195% load capacity on BMTC Majestic-Whitefield route during peak hours.',
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

// In-Memory Users Database
const users = {};

// --- AUTHENTICATION ENDPOINTS ---

// 1. GET /api/auth/config - Provide public Firebase client config or mock mode indicator
app.get('/api/auth/config', (req, res) => {
  const isConfigured = Boolean(process.env.FIREBASE_API_KEY && process.env.FIREBASE_PROJECT_ID);
  res.json({
    mockMode: !isConfigured,
    firebaseConfig: isConfigured ? {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    } : null
  });
});

// 2. POST /api/auth/google - Authenticate with Google
app.post('/api/auth/google', (req, res) => {
  const { uid, name, email, profilePhoto } = req.body;

  if (!uid || !email) {
    return res.status(400).json({ error: 'User ID and email are required.' });
  }

  let user = users[uid];
  let isNewUser = false;

  if (!user) {
    // First-time user registration
    user = {
      uid,
      name: name || email.split('@')[0],
      email,
      profilePhoto: profilePhoto || `https://api.dicebear.com/7.x/bottts/svg?seed=${uid}`,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      profileCompleted: false,
      roles: [],
      location: '',
      bio: '',
      skills: [],
      interests: [],
      roleData: {}
    };
    users[uid] = user;
    isNewUser = true;
  } else {
    // Existing user login
    user.lastLogin = new Date().toISOString();
    if (name) user.name = name;
    if (profilePhoto) user.profilePhoto = profilePhoto;
    isNewUser = !user.profileCompleted;
  }

  res.json({
    user,
    isNewUser
  });
});

// 3. POST /api/auth/onboarding - Complete profile & role selection
app.post('/api/auth/onboarding', (req, res) => {
  const { uid, roles, location, bio, skills, interests, roleData } = req.body;

  if (!uid || !users[uid]) {
    return res.status(404).json({ error: 'User not found. Please log in again.' });
  }

  if (!roles || !Array.isArray(roles) || roles.length === 0) {
    return res.status(400).json({ error: 'Please select at least one role to continue.' });
  }

  const user = users[uid];
  user.roles = roles;
  user.location = location || user.location || '';
  user.bio = bio || user.bio || '';
  user.skills = Array.isArray(skills) ? skills : (typeof skills === 'string' ? skills.split(',').map(s => s.trim()).filter(Boolean) : []);
  user.interests = Array.isArray(interests) ? interests : (typeof interests === 'string' ? interests.split(',').map(s => s.trim()).filter(Boolean) : []);
  user.roleData = roleData || {};
  user.profileCompleted = true;
  user.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    user
  });
});

// 4. GET /api/auth/me - Retrieve current session user
app.get('/api/auth/me', (req, res) => {
  const uid = req.headers['x-user-id'] || req.query.uid;
  if (!uid || !users[uid]) {
    return res.status(401).json({ authenticated: false });
  }
  res.json({
    authenticated: true,
    user: users[uid]
  });
});

// 5. GET /api/auth/profile/:uid - Public/Authenticated user profile
app.get('/api/auth/profile/:uid', (req, res) => {
  const { uid } = req.params;
  const user = users[uid];
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.json(user);
});

// Wildcard route to serve index.html for any frontend SPA navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Kartavya Server is running on http://localhost:${PORT}`);
});
