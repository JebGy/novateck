import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "build",
  output: "standalone",
  images: {
    // Next.js does not support a wildcard for optimizing images from any domain.
    // To accept images from all domains, disable image optimization:
    unoptimized: true,
  },
};

export default nextConfig;
