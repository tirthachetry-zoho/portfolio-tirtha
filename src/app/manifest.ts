import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Engineering Blogs by Tirtha",
    short_name: "Engineering Blogs",
    description: "Engineering insights, architecture patterns, and practical lessons from building scalable distributed systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#4F46E5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
    ],
  };
}
