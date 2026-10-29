import type { MetadataRoute } from "next";

const routes = ["", "/vision", "/ecosystem", "/architecture", "/experiences", "/place", "/masterplan", "/private-concierge", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `http://localhost:3000${path}`,
    lastModified: new Date("2026-10-23"),
  }));
}
