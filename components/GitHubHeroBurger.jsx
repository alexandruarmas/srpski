"use client";

import { fixImagePath } from '../lib/image-path-fixer';

export default function GitHubHeroBurger() {
  // This ensures the GIF will work on GitHub Pages
  const gifPath = fixImagePath('/srpski/images/gif.gif');
  
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <img 
        src={gifPath} 
        alt="Delicious burger"
        className="h-full object-contain z-10 relative"
      />
    </div>
  );
} 