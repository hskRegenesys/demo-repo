/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    base_Url: process.env.LEADS_API_BASE_URL,
    ENV_NAME: process.env.ENV_NAME,
  },
};
module.exports = nextConfig;
