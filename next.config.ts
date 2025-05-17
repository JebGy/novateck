import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Next.js does not support a wildcard for optimizing images from any domain.
    // To accept images from all domains, disable image optimization:
    unoptimized: true,
  },
};

export default nextConfig;
