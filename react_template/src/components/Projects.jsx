import React, { useState, useEffect } from 'react';

function Projects() {
  // Store all GitHub stats in a single object, with repo URLs as keys
  const [githubStats, setGithubStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Default fallback stats (displayed before API fetch completes)
  const defaultStats = {
    'https://github.com/OpenBMB/ChatDev': { stars: 22004, forks: 2706 },
    'https://github.com/open-compass/opencompass': { stars: 2378, forks: 327 }
  };
  
  // Backend API URL
  const BACKEND_API_URL = 'http://localhost:3000/api/github-stats'
  
  useEffect(() => {
    // Extract owner and repo name from GitHub URL
    const extractRepoInfo = (url) => {
      try {
        if (!url || !url.includes('github.com')) return null;
        
        // Remove trailing slash if present
        const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
        
        // Extract path segments after github.com
        const urlParts = cleanUrl.split('github.com/')[1];
        
        if (!urlParts || !urlParts.includes('/')) return null;
        
        const [owner, repo] = urlParts.split('/');
        return { owner, repo };
      } catch (error) {
        console.error(`Failed to extract repo info from ${url}:`, error);
        return null;
      }
    };

    // Initialize with default fallback values
    setGithubStats(defaultStats);
    
    // Get all GitHub repository links from projects
    const githubLinks = projects
      .map(project => project.link)
      .filter(link => link && link.includes('github.com'));
    
    // Fetch GitHub stats from backend service
    const fetchGitHubStats = async () => {
      try {
        console.log('Fetching GitHub stats from backend service...');
        
        // Fetch from our backend API
        const response = await fetch(BACKEND_API_URL);
        
        if (!response.ok) {
          throw new Error(`Backend API error: ${response.status} ${response.statusText}`);
        }
        
        const { data, lastUpdated } = await response.json();
        
        console.log(`Fetched GitHub stats from backend. Last updated: ${new Date(lastUpdated).toLocaleString()}`);
        
        // Update state with the received data
        setGithubStats(data);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching GitHub stats from backend:', error);
        
        // Continue using default or existing stats if backend fetch fails
        console.log('Using default fallback stats due to backend error');
        setIsLoading(false);
      }
    };
    
    // Fetch stats immediately
    fetchGitHubStats();
    
    // Set up an interval to refresh data every 5 minutes
    // This is more frequent than the backend's 12-hour update cycle
    // but ensures we get fresh data if someone just deployed the backend
    const refreshInterval = setInterval(fetchGitHubStats, 5 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, []);
  
  const projects = [
    {
      name: "FoundationAgents",
      period: "筹备中，incoming soon",
      role: "Core Team",
      link: "",  // Empty link to indicate it's not yet available
      tags: ["AI Agent", "Community"],
      isUpcoming: true  // Special flag for upcoming projects
    },
    {
      name: "AskSia AI",
      period: "2024.09-2024.12",
      role: "AI Product Manager",
      link: "https://www.asksia.ai/",
      tags: ["AI for Edu", "Startup"]
    },
    {
      name: "Kaggle Expert",
      period: "2024.06-2024.07",
      role: "Ranked 1st among Silver Medals",
      link: "https://www.kaggle.com/competitions/learning-agency-lab-automated-essay-scoring-2/leaderboard",
      tags: ["NLP Competition", "Solo"]
    },
    {
      name: "Empathetic AI",
      period: "2024.04-2024.06",
      role: "Co-Founder, Technical Team Builder",
      link: "https://empathetic-ai.com/",
      tags: ["AI for Fin & Law", "Startup"]
    },
    {
      name: "OpenCompass",
      period: "2024.11-present",
      role: "Internal Member",
      link: "https://github.com/open-compass/opencompass",
      tags: ["LLM Evaluation"]
    },
    {
      name: "ChatDev",
      period: "2023.09-2024.03",
      role: "Core Member",
      link: "https://github.com/OpenBMB/ChatDev",
      tags: ["AI for SD"]
    }
  ];

  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    // Extract start dates from period strings
    const aStartYear = parseInt(a.period.split('-')[0].split('.')[0]);
    const aStartMonth = parseInt(a.period.split('-')[0].split('.')[1]);
    const bStartYear = parseInt(b.period.split('-')[0].split('.')[0]);
    const bStartMonth = parseInt(b.period.split('-')[0].split('.')[1]);
    
    // Compare years first, then months
    if (aStartYear !== bStartYear) return bStartYear - aStartYear;
    return bStartMonth - aStartMonth;
  });

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <div className="text-gray-500 mt-1">{project.period}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.link && project.link.includes('github.com') && (
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-sm font-medium">
                        <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span>
                          {isLoading ? "..." : 
                            (githubStats[project.link]?.stars || 
                             defaultStats[project.link]?.stars || 
                             0).toLocaleString()
                          }
                        </span>
                      </div>
                      <div className="flex items-center text-sm font-medium">
                        <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        <span>
                          {isLoading ? "..." : 
                            (githubStats[project.link]?.forks || 
                             defaultStats[project.link]?.forks || 
                             0).toLocaleString()
                          }
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{project.role}</p>
              {project.isUpcoming ? (
                <button 
                  disabled
                  className="bg-gray-400 cursor-not-allowed text-white py-2 px-4 rounded-md inline-flex items-center"
                >
                  敬请期待
                </button>
              ) : (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded-md inline-flex items-center"
                >
                  View Project
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;