import type { NextConfig } from "next";

const replitDevDomain = process.env.REPLIT_DEV_DOMAIN;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    ...(replitDevDomain ? [replitDevDomain] : []),
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
