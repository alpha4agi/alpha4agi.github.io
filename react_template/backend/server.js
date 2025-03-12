// server.js
const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
require('dotenv').config();
const githubService = require('./githubService');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Initialize cache with default stats in case of first load
const defaultStats = {
  'https://github.com/OpenBMB/ChatDev': { stars: 22004, forks: 2706, watchers: 22004, openIssues: 175, lastUpdated: '2024-03-01T00:00:00Z' },
  'https://github.com/open-compass/opencompass': { stars: 2378, forks: 327, watchers: 2378, openIssues: 83, lastUpdated: '2024-03-01T00:00:00Z' }
};

// In-memory storage for GitHub stats (in production, use a database)
let githubStats = {
  data: defaultStats,
  lastUpdated: new Date().toISOString()
};

// Fetch GitHub stats on server start
(async () => {
  try {
    console.log('Initial GitHub stats fetch at server start...');
    const stats = await githubService.fetchAllRepositoryStats();
    githubStats = {
      data: stats,
      lastUpdated: new Date().toISOString()
    };
    console.log('Initial GitHub stats fetch completed');
  } catch (error) {
    console.error('Error during initial GitHub stats fetch:', error);
  }
})();

// Schedule GitHub stats update every 12 hours
cron.schedule('0 */12 * * *', async () => {
  try {
    console.log('Scheduled GitHub stats update starting...');
    const stats = await githubService.fetchAllRepositoryStats();
    githubStats = {
      data: stats,
      lastUpdated: new Date().toISOString()
    };
    console.log('Scheduled GitHub stats update completed');
  } catch (error) {
    console.error('Error during scheduled GitHub stats update:', error);
  }
}, {
  scheduled: true,
  timezone: "UTC"
});

// API endpoint to get GitHub stats
app.get('/api/github-stats', (req, res) => {
  res.json(githubStats);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});