import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: '/:path*.:ext(webp|jpg|jpeg|png|mp4|webm)',
      headers: [{
        key: 'Cache-Control',
        value: 'public, max-age=86400, stale-while-revalidate=604800',
      }],
    }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
