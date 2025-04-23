import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // Ignore TypeScript errors during build
   typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
