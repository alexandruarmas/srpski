import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this function to handle GitHub Pages basePath
export function getAssetPath(path: string): string {
  // In development, use the path as is
  // In production, prefix with the basePath (/srpski)
  const basePath = process.env.NODE_ENV === 'production' ? '/srpski' : '';
  return `${basePath}${path}`;
}
