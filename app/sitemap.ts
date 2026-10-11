import type { MetadataRoute } from "next";
import { PAGES, SITE } from "./site";

// The date the pages' content last really changed. Bump it when a page is
// rewritten, so crawlers come back; never on a deploy that changes nothing.
const REWRITTEN = new Date("2026-10-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...Object.values(PAGES).flatMap((g) => g.map(([href]) => href))];
  return paths.map((p) => ({ url: SITE + (p === "/" ? "" : p), lastModified: REWRITTEN }));
}
