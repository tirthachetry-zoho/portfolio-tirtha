import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tirtha Chetry - AI Engineer & Software Developer",
    short_name: "Tirtha Chetry",
    description: "Personal website of Tirtha Chetry featuring AI projects, software engineering articles, and open-source contributions.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
