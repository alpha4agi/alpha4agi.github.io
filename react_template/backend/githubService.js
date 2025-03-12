// githubService.js
const axios = require('axios');
const NodeCache = require('node-cache');

// Cache with 5-minute TTL to avoid redundant API calls
const cache = new NodeCache({ stdTTL: 300 });

// Repository list to monitor
const repositories = [
  { owner: 'OpenBMB', repo: 'ChatDev' },
  { owner: 'open-compass', repo: 'opencompass' }
  // The backend is designed to handle these specific repositories
  // Additional repositories could be added here if needed
];

// Rate limit handling with exponential backoff
const fetchWithRetry = async (url, retries = 3, initialDelay = 1000) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : undefined
        }
      });
      return response.data;
    } catch (error) {
      lastError = error;
      
      // Check if we hit rate limit
      if (error.response && error.response.status === 403 && error.response.headers['x-ratelimit-remaining'] === '0') {
        const resetTime = parseInt(error.response.headers['x-ratelimit-reset']) * 1000;
        const waitTime = resetTime - Date.now();
        if (waitTime > 0) {
          console.log(`Rate limit exceeded. Waiting for ${Math.ceil(waitTime/1000)} seconds before retrying`);
          await new Promise(resolve => setTimeout(resolve, waitTime + 1000));
          continue;
        }
      }
      
      // For other errors or when rate limit info is not available, use exponential backoff
      const delay = initialDelay * Math.pow(2, i);
      console.log(`Request failed. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw lastError;
};

/**
 * Fetch stats for a single GitHub repository
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @returns {Promise<Object>} Repository stats
 */
const fetchRepositoryStats = async (owner, repo) => {
  const cacheKey = `repo:${owner}/${repo}`;
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    console.log(`Using cached data for ${owner}/${repo}`);
    return cachedData;
  }
  
  try {
    console.log(`Fetching stats for ${owner}/${repo}`);
    const repoData = await fetchWithRetry(`https://api.github.com/repos/${owner}/${repo}`);
    
    const stats = {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      // Additional stats can be included here
      watchers: repoData.watchers_count,
      openIssues: repoData.open_issues_count,
      lastUpdated: repoData.updated_at
    };
    
    // Cache the results
    cache.set(cacheKey, stats);
    return stats;
  } catch (error) {
    console.error(`Error fetching stats for ${owner}/${repo}:`, error.message);
    throw error;
  }
};

/**
 * Fetch stats for all configured repositories
 * @returns {Promise<Object>} Object with repo URLs as keys and stats as values
 */
const fetchAllRepositoryStats = async () => {
  try {
    const statsPromises = repositories.map(({ owner, repo }) => 
      fetchRepositoryStats(owner, repo)
        .then(stats => ({ 
          url: `https://github.com/${owner}/${repo}`,
          stats 
        }))
        .catch(error => {
          console.error(`Failed to fetch stats for ${owner}/${repo}`, error);
          return { 
            url: `https://github.com/${owner}/${repo}`,
            stats: null 
          };
        })
    );
    
    const results = await Promise.all(statsPromises);
    
    // Convert to object with repo URLs as keys
    return results.reduce((acc, { url, stats }) => {
      if (stats) {
        acc[url] = stats;
      }
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching repository stats:', error);
    throw error;
  }
};

module.exports = {
  fetchRepositoryStats,
  fetchAllRepositoryStats
};