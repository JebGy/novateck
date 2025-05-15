import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://i.imgur.com/**'), new URL('https://placehold.co/**'),new URL('https://res.cloudinary.com/**')],
  },
};

export default nextConfig;
