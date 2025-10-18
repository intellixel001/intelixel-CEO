import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "behance.net",
      "res.cloudinary.com",
      "aceternity.com",
      "assets.aceternity.com",
      "media.licdn.com",
    ], // Add your image hostname here
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
};

export default nextConfig;
