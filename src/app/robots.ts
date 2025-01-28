import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const robotsConfig: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://caminhodavida.vercel.app/sitemap.xml",
    host: "https://caminhodavida.vercel.app",
  }

  return robotsConfig
}

