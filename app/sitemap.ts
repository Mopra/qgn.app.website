import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Static pages use a fixed date; only truly dynamic pages use current date
  const staticDate = new Date("2025-04-01");

  return [
    {
      url: "https://qgn.app",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Feature pages
    {
      url: "https://qgn.app/features/screenshot-tool",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/screen-recording",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/screenshot-annotation",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/floating-previews",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/features/snipping-tool-alternative",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qgn.app/features/open-source-screenshot-tool",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Alternative pages
    {
      url: "https://qgn.app/alternatives/greenshot",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/sharex",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/cleanshot-x",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/snagit",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/alternatives/lightshot",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Use case pages
    {
      url: "https://qgn.app/use-cases/developers",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/bug-reports",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/documentation",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qgn.app/use-cases/designers",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Changelog
    {
      url: "https://qgn.app/changelog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Informational pages
    {
      url: "https://qgn.app/faq",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://qgn.app/privacy",
      lastModified: staticDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://qgn.app/terms",
      lastModified: staticDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
