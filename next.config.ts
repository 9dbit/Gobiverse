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
  ...(replitDevDomain
    ? {
        headers: async () => [
          {
            source: "/:path*",
            headers: [
              {
                key: "X-Robots-Tag",
                value: "noindex, nofollow, noarchive",
              },
            ],
          },
        ],
      }
    : {}),
};

export default nextConfig;
