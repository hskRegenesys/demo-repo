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
