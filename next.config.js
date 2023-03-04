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
  async redirects() {
    return redirectURL();
  },
  env: {
    base_Url: process.env.LEADS_API_BASE_URL,
    ENV_NAME: process.env.ENV_NAME,
  },
};

const redirectURL = () => {
  const path = [
    {
      source: "/study-dr-programmes",
      destination: "https://lp.digitalregenesys.com/study-dr-programmes",
      permanent: true,
    },
    {
      source: "/study-dr-programmes-01",
      destination: "https://lp.digitalregenesys.com/study-dr-programmes-01",
      permanent: true,
    },
    {
      source: "/black-friday-dr",
      destination: "https://lp.digitalregenesys.com/black-friday-dr",
      permanent: true,
    },
    {
      source: "/in/dataScience",
      destination: "https://lp.digitalregenesys.com/landing/in/dataScience",
      permanent: true,
    },
    {
      source: "/sa/dataScience",
      destination: "https://lp.digitalregenesys.com/landing/sa/dataScience",
      permanent: true,
    },
    {
      source: "/study-data-science-sa",
      destination: "https://lp.digitalregenesys.com/study-data-science-sa",
      permanent: true,
    },
    {
      source: "/study-data-science-ng",
      destination: "https://lp.digitalregenesys.com/study-data-science-ng",
      permanent: true,
    },
    {
      source: "/study-data-science-ky",
      destination: "https://lp.digitalregenesys.com/study-data-science-ky",
      permanent: true,
    },
    {
      source: "/landing/sa/digital-marketing",
      destination:
        "https://lp.digitalregenesys.com/landing/sa/digital-marketing",
      permanent: true,
    },
    {
      source: "/study-digital-marketing-ng",
      destination: "https://lp.digitalregenesys.com/study-digital-marketing-ng",
      permanent: true,
    },
    {
      source: "/study-cyber-security-sa",
      destination: "https://lp.digitalregenesys.com/study-cyber-security-sa",
      permanent: true,
    },
    {
      source: "/study-cyber-security-ng",
      destination: "https://lp.digitalregenesys.com/study-cyber-security-ng",
      permanent: true,
    },
    {
      source: "/landing/sa/project-management",
      destination:
        "https://lp.digitalregenesys.com/landing/sa/project-management",
      permanent: true,
    },
    {
      source: "/study-project-management-ky",
      destination:
        "https://lp.digitalregenesys.com/study-project-management-ky",
      permanent: true,
    },
    {
      source: "/study-project-management-ng",
      destination:
        "https://lp.digitalregenesys.com/study-project-management-ng",
      permanent: true,
    },
  ];
  return path;
};

const createReWrites = () => {
  const paths = [
    {
      source: "/all-course/data-science",
      destination: "/all-course/data-science",
    },
    {
      source: "/all-course/digital-marketing",
      destination: "/all-course/digital-marketing",
    },
    {
      source: "/all-course/project-management",
      destination: "/all-course/project-management/28",
    },
    {
      source: "/all-course/cybersecurity",
      destination: "/all-course/cybersecurity/29",
    },
    {
      source: "/all-course/data-science/basic-data-science",
      destination: "/all-course/basic-data-science/11",
    },
    {
      source: "/all-course/data-science/advanced-data-science",
      destination: "/all-course/advanced-data-science/18",
    },
    {
      source: "/all-course/data-science/applied-data-science",
      destination: "/all-course/applied-data-science/18",
    },
    {
      source: "/all-course/digital-marketing/basic-digital-marketing",
      destination: "/all-course/basic-digital-marketing/25",
    },
    {
      source: "/all-course/digital-marketing/advanced-digital-marketing",
      destination: "/all-course/advanced-digital-marketing/26",
    },
    {
      source: "/all-course/digital-marketing/applied-digital-marketing",
      destination: "/all-course/applied-digital-marketing/27",
    },
  ];
  return paths;
};
module.exports = nextConfig;
