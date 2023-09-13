/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["themoviedb.gameszonehub.workers.dev"],
  },
};

module.exports = nextConfig;
