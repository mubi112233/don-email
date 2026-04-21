import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "don-webdesign - Premium Web Design Services",
    short_name: "don-webdesign",
    description: "Save 70% on web development with premium web design services. Modern websites that convert. Native quality, guaranteed satisfaction.",
    start_url: "/",
    display: "standalone",
    background_color: "#3D2817",
    theme_color: "#FFBC42",
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
    categories: ["design", "business", "productivity", "web"],
  };
}


