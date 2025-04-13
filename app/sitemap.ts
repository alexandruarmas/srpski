import type { MetadataRoute } from "next"

// Add this to make it compatible with static exports
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://srpskiburger.ro"

  // Define all pages
  const routes = ["", "/menu", "/about", "/contact", "/order"]

  // Define all supported languages
  const languages = ["en", "ro", "sr"]

  // Generate sitemap entries for all pages in all languages
  return routes.flatMap((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ro: `${baseUrl}/ro${route}`,
          sr: `${baseUrl}/sr${route}`,
        },
      },
    }
  })
}
