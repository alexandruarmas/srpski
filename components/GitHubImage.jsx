"use client";

import Image from 'next/image';

// Helper component to properly handle image paths for GitHub Pages deployment
export default function GitHubImage({ src, alt, ...props }) {
  // Function to add the basePath to the src if it doesn't already have it
  const getSrcWithBasePath = (imgSrc) => {
    // If src already starts with http or is an absolute URL, return as is
    if (imgSrc.startsWith('http') || imgSrc.startsWith('data:')) {
      return imgSrc;
    }

    // Add basePath if it doesn't already exist
    const basePath = '/srpski';
    if (imgSrc.startsWith(basePath)) {
      return imgSrc;
    }

    // Ensure we don't duplicate slashes when joining paths
    const cleanedSrc = imgSrc.startsWith('/') ? imgSrc.substring(1) : imgSrc;
    return `${basePath}/${cleanedSrc}`;
  };

  return (
    <Image 
      src={getSrcWithBasePath(src)} 
      alt={alt}
      {...props}
    />
  );
} 