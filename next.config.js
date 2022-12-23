/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  swcMinify: false, // it should be false by default
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
