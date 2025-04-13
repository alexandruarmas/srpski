"use client";

/**
 * Determines if we're running on GitHub Pages by checking the URL
 * @returns {boolean} - Whether we're on GitHub Pages
 */
export function isGitHubPages() {
  if (typeof window === 'undefined') return false;
  
  return window.location.hostname === 'alexandruarmas.github.io' || 
         window.location.href.includes('github.io/srpski');
}

/**
 * Fixes the path for images and SVGs by adding the basePath if needed
 * @param {string} src - The source path
 * @returns {string} - The corrected path
 */
export function fixImagePath(src) {
  // Skip if not GitHub Pages or already has correct prefix
  if (!isGitHubPages() || !src || src.startsWith('http') || src.startsWith('/srpski/')) {
    return src;
  }
  
  // Clean the path and add prefix
  const basePath = '/srpski';
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${path}`;
}

/**
 * Creates an img tag with the correct src path
 * @param {Object} props - Image properties
 * @returns {JSX.Element} - The img element
 */
export function GitHubPagesImg({ src, alt, ...props }) {
  const fixedSrc = fixImagePath(src);
  
  return (
    <img
      src={fixedSrc}
      alt={alt || ''}
      {...props}
    />
  );
} 