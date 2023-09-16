/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
