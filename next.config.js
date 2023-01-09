/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  experimental: {
    newNextLinkBehavior: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return createReWrites();
  },
  env: {
    base_Url: process.env.LEADS_API_BASE_URL,
    ENV_NAME: process.env.ENV_NAME,
  },
};
const createReWrites = () => {
  const paths = [
    {
      source: "/Cybersecurity",
      // destination: "/landing?course=blackfriday&country=sa",
      destination: "/Cybersecurity/29",
    },
    // {
    //   source: "/Data-Science",
    //   destination: "/programs/createMyWealth",
    // },
    // {
    //   source: "/Digital-Marketing",
    //   destination: "/landing?course=allCourses&country=sa",
    // },
    // {
    //   source: "/Project-Management/28",
    //   destination: "/landing?course=allCourses01&country=sa",
    // },

    // {
    //   source: "/Basic-Digital-Marketing/25",
    //   destination: "/landing?course=dataScience&country=sa",
    // },
    // {
    //   source: "/Advance-Digital-Marketing/26",
    //   destination: "/landing?course=dataScience&country=ng",
    // },
    // {
    //   source: "/Applied-Digital-Marketing/27",
    //   destination: "/landing?course=dataScience&country=ky",
    // },
    // {
    //   source: "/Basic-Data-Science/11",
    //   destination: "/landing?course=projectManagement&country=ng",
    // },
    // {
    //   source: "/Advance-Digital-Marketing/26",
    //   destination: "/landing?course=projectManagement&country=ky",
    // },
    // {
    //   source: "/Applied-Digital-Marketing/27",
    //   destination: "/landing?course=digitalMarketing&country=ng",
    // },
  ];
  return paths;
};
module.exports = nextConfig;
