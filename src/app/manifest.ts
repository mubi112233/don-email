import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "don-email - Professional Email Management",
    short_name: "don-email",
    description: "Save 15+ hours per week with professional email management. Inbox zero daily, 80% time savings, guaranteed satisfaction.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a2e",
    theme_color: "#3e65cf",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["email", "business", "productivity", "communication"],
  };
}


