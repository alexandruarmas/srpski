"use client";

import Link from 'next/link';
import { getLinkPath } from '../lib/github-helpers';

// Helper component to properly handle link paths for GitHub Pages deployment
export default function GitHubLink({ href, children, ...props }) {
  // Process href to ensure it has the proper basePath
  const processedHref = getLinkPath(href);
  
  return (
    <Link href={processedHref} {...props}>
      {children}
    </Link>
  );
} 