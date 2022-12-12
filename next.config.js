/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    base_Url: process.env.DR_API_BASE_URL,
  },
};
module.exports = nextConfig;
