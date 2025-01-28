import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://caminhodavida.vercel.app"

  // Add all your static routes
  const routes = [
    "",
    "/about",
    "/apoio",
    "/contact",
    "/events",
    "/join",
    "/midia",
    "/privacy",
  ]

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))

  return sitemap
}

