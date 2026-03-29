import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qgn.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Feature pages
    {
      url: "https://qgn.app/features/screenshot-tool",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/screen-recording",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/screenshot-annotation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/floating-previews",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/features/snipping-tool-alternative",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/open-source-screenshot-tool",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Alternative pages
    {
      url: "https://qgn.app/alternatives/greenshot",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/sharex",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/cleanshot-x",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/snagit",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/lightshot",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Use case pages
    {
      url: "https://qgn.app/use-cases/developers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/bug-reports",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/documentation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/designers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Changelog
    {
      url: "https://qgn.app/changelog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Informational pages
    {
      url: "https://qgn.app/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://qgn.app/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://qgn.app/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
