import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://i.imgur.com/**'), new URL('https://placehold.co/**'),new URL('https://res.cloudinary.com/**'), new URL('https://placeimg.com/**'), new URL("https://randomuser.me/**"), new URL("https://img.clerk.com/**")],
  },
};

export default nextConfig;
