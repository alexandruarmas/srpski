// Helper functions for GitHub Pages deployment

/**
 * Adds the GitHub Pages basePath to a URL if needed
 * @param {string} url - The URL to process
 * @returns {string} - The URL with basePath added if needed
 */
export function withBasePath(url) {
  // If URL already starts with http, is absolute, or already has the basePath, return as is
  if (url.startsWith('http') || url.startsWith('/srpski')) {
    return url;
  }

  // Add basePath correctly
  const basePath = '/srpski';
  const cleanedUrl = url.startsWith('/') ? url : `/${url}`;
  return `${basePath}${cleanedUrl}`;
}

/**
 * Get URL to an asset with the proper GitHub Pages prefix
 * @param {string} path - The asset path
 * @returns {string} - The full asset URL
 */
export function getAssetUrl(path) {
  return withBasePath(path);
}

/**
 * Create a properly formatted path for internal links
 * @param {string} path - The internal link path
 * @returns {string} - The formatted path
 */
export function getLinkPath(path) {
  // Remove trailing slash for Links to work properly
  const formattedPath = withBasePath(path);
  return formattedPath.endsWith('/') ? formattedPath.slice(0, -1) : formattedPath;
} 