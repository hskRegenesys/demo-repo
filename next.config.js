/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
