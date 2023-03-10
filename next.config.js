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
        ENV_NAME: process.env.ENV_NAME,
    },
};

const redirectURL = () => {
    const path = [
        {
            source: "/programs/data-science",
            destination: "/all-courses/data-science",
            permanent: true,
        },
        {
            source: "/programs",
            destination: "/all-courses",
            permanent: true,
        },

        {
            source: "/programs/data-science/basic-data-science",
            destination: "/all-courses/data-science/basic-data-science",
            permanent: true,
        },
        {
            source: "/programs/data-science/advanced-data-science",
            destination: "/all-courses/data-science/advanced-data-science",
            permanent: true,
        },
        {
            source: "/programs/data-science/applied-data-science",
            destination: "/all-courses/data-science/applied-data-science",
            permanent: true,
        },

        {
            source: "/programs/digital-marketing-course",
            destination: "/all-courses/digital-marketing",
            permanent: true,
        },
        {
            source: "/programs/digital-marketing",
            destination: "/all-courses/digital-marketing",
            permanent: true,
        },
        {
            source: "/programs/digital-marketing-course/basic-digital-marketing",
            destination: "/all-courses/digital-marketing/basic-digital-marketing",
            permanent: true,
        },
        {
            source: "/programs/digital-marketing-course/advanced-digital-marketing",
            destination: "/all-courses/digital-marketing/advanced-digital-marketing",
            permanent: true,
        },
        {
            source: "/programs/digital-marketing-course/applied-digital-marketing",
            destination: "/all-courses/digital-marketing/applied-digital-marketing",
            permanent: true,
        },
        {
            source: "/programs/project-management",
            destination: "/all-courses/project-management",
            permanent: true,
        },
        {
            source: "/programs/cyber-security",
            destination: "/all-courses/cybersecurity",
            permanent: true,
        },
        {
            source: "/terms-and-condition",
            destination: "/terms-and-conditions",
            permanent: true,
        },
        {
            source: "/login",
            destination: "https://www.digitalregenesys.com",
            permanent: true,
        },
        {
            source: "/register",
            destination: "https://www.digitalregenesys.com",
            permanent: true,
        },
        {
            source: "/home",
            destination: "https://www.digitalregenesys.com",
            permanent: true,
        },
        {
            source: "/search",
            destination: "https://www.digitalregenesys.com",
            permanent: true,
        },

        // landing pages

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
            source: "/landing/sa/data-science",
            destination: "https://lp.digitalregenesys.com/landing/sa/digital-marketing",
            permanent: true,
        },
        {
            source: "/landing/sa/digital-marketing",
            destination: "https://lp.digitalregenesys.com/landing/sa/digital-marketing",
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
            destination: "https://lp.digitalregenesys.com/landing/sa/project-management",
            permanent: true,
        },
        {
            source: "/study-project-management-ky",
            destination: "https://lp.digitalregenesys.com/study-project-management-ky",
            permanent: true,
        },
        {
            source: "/study-project-management-ng",
            destination: "https://lp.digitalregenesys.com/study-project-management-ng",
            permanent: true,
        },
    ];
    return path;
};

const createReWrites = () => {
    const paths = [
        {
            source: "/all-courses/project-management",
            destination: "/all-courses/project-management/28",
        },
        {
            source: "/all-courses/cybersecurity",
            destination: "/all-courses/cybersecurity/29",
        },

        {
            source: "/all-courses/data-science/basic-data-science",
            destination: "/all-courses/basic-data-science/11",
        },
        {
            source: "/all-courses/data-science/advanced-data-science",
            destination: "/all-courses/advanced-data-science/18",
        },
        {
            source: "/all-courses/data-science/applied-data-science",
            destination: "/all-courses/applied-data-science/23",
        },
        {
            source: "/all-courses/digital-marketing/basic-digital-marketing",
            destination: "/all-courses/basic-digital-marketing/25",
        },
        {
            source: "/all-courses/digital-marketing/advanced-digital-marketing",
            destination: "/all-courses/advanced-digital-marketing/26",
        },
        {
            source: "/all-courses/digital-marketing/applied-digital-marketing",
            destination: "/all-courses/applied-digital-marketing/27",
        },
    ];
    return paths;
};
module.exports = nextConfig;
