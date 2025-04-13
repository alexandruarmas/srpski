"use client";

import { withBasePath } from '../lib/github-helpers';

// Helper component specifically for SVG files
export default function GitHubSvg({ src, alt, className, ...props }) {
  // Function to add the basePath to SVG sources
  const getSvgPath = (svgSrc) => {
    // If it's an absolute URL or already has the basePath, return as is
    if (svgSrc.startsWith('http') || svgSrc.startsWith('data:') || svgSrc.startsWith('/srpski')) {
      return svgSrc;
    }

    // Otherwise, add the basePath
    return withBasePath(svgSrc);
  };

  return (
    <img
      src={getSvgPath(src)}
      alt={alt || "SVG Image"}
      className={className}
      {...props}
    />
  );
} 