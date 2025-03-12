# GitHub Stats Backend Service

## Overview

This backend service for Alpha Liu's Portfolio website fetches GitHub repository statistics every 12 hours and provides them via a simple API. It eliminates the need for the frontend to directly call the GitHub API, avoiding rate limiting issues and reducing the load on the client side.

## Features

- **Scheduled Updates**: Automatically fetches GitHub repository statistics every 12 hours
- **API Endpoint**: Provides a simple REST API to retrieve the latest stats
- **Caching**: Implements server-side caching to minimize GitHub API calls
- **Rate Limit Handling**: Includes exponential backoff and rate limit detection
- **Error Handling**: Graceful error handling with fallback to default values

## Setup

### Prerequisites

- Node.js 14+ installed
- pnpm (or npm/yarn) package manager

### Installation

1. Clone the repository or navigate to this directory
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` (or create a new `.env` file)
   - Add your GitHub Personal Access Token to increase API rate limits (optional but recommended):
   ```
   GITHUB_TOKEN=your_github_token_here
   ```
   - Modify the `PORT` if needed (defaults to 3000)

## Usage

### Starting the Server

For development:
```bash
pnpm run dev
```

For production:
```bash
pnpm start
```


### API Endpoints

#### GET /api/github-stats

Returns GitHub statistics for configured repositories.

**Example Response:**
```json
{
  "data": {
    "https://github.com/OpenBMB/ChatDev": {
      "stars": 26435,
      "forks": 3357,
      "watchers": 26435,
      "openIssues": 47,
      "lastUpdated": "2025-03-12T07:42:57Z"
    },
    "https://github.com/open-compass/opencompass": {
      "stars": 4899,
      "forks": 521,
      "watchers": 4899,
      "openIssues": 307,
      "lastUpdated": "2025-03-12T09:13:38Z"
    }
  },
  "lastUpdated": "2025-03-12T09:35:55.586Z"
}
```