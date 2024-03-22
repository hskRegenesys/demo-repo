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
  images: {
    domains: ["www.regenesys.net", "blog-api.digitalregenesys.com"],
  },
};

const redirectURL = () => {
  const path = [
    {
      source: "/programs/data-science",
      destination: "/all-courses/data-science",
      permanent: true,
    },

    // {
    //   source: "/programs",
    //   destination: "/all-courses",
    //   permanent: true,
    // },

    // {
    //   source: "/programsnew",
    //   destination: "/all-courses-new",
    //   permanent: true,
    // },

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
      source: "/all-courses/data-science/advance-data-science",
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
      destination:
        "/all-courses/digital-marketing/digital-marketing-fundamentals",
      permanent: true,
    },
    {
      source: "/all-courses/digital-marketing/basic-digital-marketing",
      destination:
        "/all-courses/digital-marketing/digital-marketing-fundamentals",
      permanent: true,
    },
    {
      source: "/programs/digital-marketing-course/advanced-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course ",
      permanent: true,
    },
    {
      source: "/programs/digital-marketing-course/advance-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course ",
      permanent: true,
    },
    {
      source: "/all-courses/digital-marketing/advanced-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course ",
      permanent: true,
    },
    {
      source: "/programs/digital-marketing-course/applied-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course ",
      permanent: true,
    },
    {
      source: "/all-courses/digital-marketing/applied-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course ",
      permanent: true,
    },
    {
      source: "/programs/project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/programs/cyber-security",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/all-courses/cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/all-courses/cyber-security-course",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/terms-and-condition",
      destination: "/terms-and-conditions",
      permanent: true,
    },
    {
      source: "/login",
      destination: "/",
      permanent: true,
    },
    {
      source: "/register",
      destination: "/",
      permanent: true,
    },
    {
      source: "/home",
      destination: "/",
      permanent: true,
    },
    {
      source: "/home-2",
      destination: "/",
      permanent: true,
    },
    {
      source: "/index",
      destination: "/",
      permanent: true,
    },
    {
      source: "/search",
      destination: "/",
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
      destination:
        "https://lp.digitalregenesys.com/landing/sa/digital-marketing",
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
    {
      source: "/all-courses/%5bcourse%5d/%5bid%5d",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/all-courses/digital-marketing/basic-digital-marketing-course",
      destination:
        "/all-courses/digital-marketing/digital-marketing-fundamentals",
      permanent: true,
    },
    {
      source: "/all-course/data-science",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/all-course/data-science/basic-data-science",
      destination: "/all-courses/data-science/basic-data-science",
      permanent: true,
    },
    //redirections from altaf start
    {
      source: "/courses/advanced-data-science",
      destination: "/all-courses/data-science/basic-data-science",
      permanent: true,
    },
    {
      source: "/termsCondition",
      destination: "/terms-and-conditions",
      permanent: true,
    },
    {
      source: "/all-course/[course]",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/fac-led-cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/edforall",
      destination: "/",
      permanent: true,
    },

    {
      source: "/self-paced-projectmanagement",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/all-course/[course]/[id]",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/refundPolicy",
      destination: "/privacy-policy",
      permanent: true,
    },
    {
      source: "/programs/investment-trading-personal-finance",
      destination: "/",
      permanent: true,
    },
    // {
    //   source: "/study-dr-programmes",
    //   destination: "https://www.digitalregenesys.com/lp",
    //   permanent: true,
    // },

    {
      source: "/product/introduction-to-project-management-2/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/user-account",
      destination: "https://mydigital.regenesys.net/login/index.php",
      permanent: true,
    },
    {
      source: "/programs/digitalMarketingCourse/basicDigitalMarketing",
      destination:
        "/all-courses/digital-marketing/digital-marketing-fundamentals",
      permanent: true,
    },
    {
      source: "/self-paced-digitalmarketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/fac-led-digitalmarketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/programs/dataScience",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/projectManagement",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/terms-conditions",
      destination: "/terms-and-conditions",
      permanent: true,
    },
    {
      source: "/landing",
      destination: "/",
      permanent: true,
    },
    {
      source: "/product/introduction-to-digital-marketing/",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/fac-led-datascience",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/how-to-use-my-images",
      destination: "/",
      permanent: true,
    },
    {
      source: "/license",
      destination: "/",
      permanent: true,
    },
    {
      source: "/photos",
      destination: "/",
      permanent: true,
    },
    {
      source: "/study-digital-marketing-sa",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/programs/digital-marketing/advanced-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      permanent: true,
    },
    {
      source: "/ai-introductory",
      destination: "/all-courses/artificial-intelligence/ai-introductory",
      permanent: true,
    },
    {
      source: "/ai-intermediary",
      destination: "/all-courses/artificial-intelligence/ai-intermediary",
      permanent: true,
    },
    {
      source: "/ai-advanced-applied",
      destination: "/all-courses/artificial-intelligence/ai-advanced-applied",
      permanent: true,
    },
    {
      source: "/author/frankb/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/courses/artificial-intelligence",
      destination: "/all-courses/artificial-intelligence",
      permanent: true,
    },
    {
      source: "/courses/advanced-artificial-intelligence/",
      destination: "/all-courses/artificial-intelligence/ai-advanced-applied",
      permanent: true,
    },
    {
      source: "/courses/advanced-coding",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/programs/data-science/advance-data-science/",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/thankyou-a2z-datascience/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/programs/data-science/advance-data-science",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/add-to-cart-by-id/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/privacyPolicy",
      destination: "/privacy-policy",
      permanent: true,
    },
    {
      source: "/eb_category/self-pacedintroductorycourses/page/2/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/fac-led-digitalmarketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/eb_category/masterclasses",
      destination: "/",
      permanent: true,
    },
    {
      source: "/courses/advanced-coding/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/popup-form",
      destination: "/",
      permanent: true,
    },
    {
      source: "/wp-content/uploads/2022/02/Cybersecurity-Brochure.pdf",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/fusion_tb_category/content/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/shop/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/product/introduction-to-project-management/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/eb-courses/",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/courses/digital-marketing/",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/fac-led-coding/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    // {
    //   source: "/product-category/technology/?product_orderby=price",
    //   destination: "/",
    //   permanent: true,
    // },
    {
      source: "/courses/professional-business-writing-skills/",
      destination: "/",
      permanent: true,
    },
    // {
    //   source: "/product-category/business/?product_count=36",
    //   destination: "/",
    //   permanent: true,
    // },
    {
      source: "/sample-page/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/product/introduction-to-digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/product/introduction-to-cybersecurity-2/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-cybersecurity-2",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/introduction-to-cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/introduction-to-cybersecurity-2",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/advanced-cybersecurity-2",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/advanced-cybersecurity-2/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/cybersecurity-2",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/cybersecurity-2/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/self-paced-cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/self-paced-cybersecurity/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/programs/dataScience/appliedDataScience",
      destination: "/all-courses/data-science/applied-data-science",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-project-management-2/feed",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-project-management-2/feed/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/project-management/feed/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/product/introduction-to-project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/self-paced-projectmanagement/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/programs/projectManagement",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/thankyou-a2z-project-management",
      destination: "/",
      permanent: true,
    },
    {
      source: "/courses/project-management/feed",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/all-course/project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/programs/digitalMarketingCourse/appliedDigitalMarketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      permanent: true,
    },
    {
      source: "/courses/advanced-digital-marketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      permanent: true,
    },
    {
      source: "/courses/advanced-digital-marketing/",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      permanent: true,
    },
    {
      source: "/digital-marketing/",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/courses/advanced-data-science/",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/about-us-2/",
      destination: "/about",
      permanent: true,
    },
    {
      source: "/self-paced-digitalmarketing/",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/courses/advanced-artificial-intelligence",
      destination: "/all-courses/artificial-intelligence/ai-advanced-applied",
      permanent: true,
    },
    {
      source: "/self-paced-machinelearning",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/self-paced-machinelearning/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-cybersecurity-2/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/fac-led-projectmanagement/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/all-course/cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/cybersecurity/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/data-science/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/product/advanced-data-science-2/",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-cybersecurity/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/introduction-to-cybersecurity/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/product/advanced-data-science-2",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/courses/machine-learning",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/courses/machine-learning/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/self-paced-datascience/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/fac-led-cybersecurity/",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/fac-led-datascience/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/investment-trading-personal-finance",
      destination: "/",
      permanent: true,
    },
    {
      source: "/a2z-project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/a2z-project-management/",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/all-course//cybersecurity",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/all-course//project-management",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/a2z-datascience-ind/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/programs/digitalMarketingCourse/advancedDigitalMarketing",
      destination:
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      permanent: true,
    },
    {
      source: "/programs/digitalMarketingCourse",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/courses/introduction-to-finance-for-non-financial-managers/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/study-dr-",
      destination: "/",
      permanent: true,
    },
    {
      source: "/programs/dataScience/[course]",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/new-2016-accessories/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/newsletter/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/home-2",
      destination: "/",
      permanent: true,
    },
    {
      source: "/home-new",
      destination: "/404",
      permanent: true,
    },
    // {
    //   source: "/sitemap",
    //   destination: "/404",
    //   permanent: true,
    // },
    {
      source: "/site-map",
      destination: "/sitemap",
      permanent: true,
    },

    // {
    //   source: "/all-courses-new/design-thinking-new",
    //   destination: "/404",
    //   permanent: true,
    // },
    // {
    //   source: "/all-courses-new/digital-marketing-new",
    //   destination: "/404",
    //   permanent: true,
    // },
    // {
    //   source: "/all-courses-new/digital-marketing-1",
    //   destination: "/404",
    //   permanent: true,
    // },
    // {
    //   source: "/all-courses-new/digital-marketing-1",
    //   destination: "/404",
    //   permanent: true,
    // },

    //redirections from altaf end
    {
      source: "/all-course/data-science/advanced-data-science",
      destination: "/all-courses/data-science/advanced-data-science",
      permanent: true,
    },
    {
      source: "/all-courses/data-science/basic-data-science",
      destination: "/all-courses/data-science",
      permanent: false,
    },
    {
      source: "/all-courses/data-science/advanced-data-science",
      destination: "/all-courses/data-science",
      permanent: false,
    },
    {
      source: "/all-course/data-science/applied-data-science",
      destination: "/all-courses/data-science",
      permanent: false,
    },
    // {
    //   source: "/all-course/data-science/applied-data-science",
    //   destination: "/all-courses/data-science/applied-data-science",
    //   permanent: true,
    // },
    {
      source: "/all-course/project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    // {
    //   source: "/all-course/digital-marketing/basic-digital-marketing",
    //   destination: "/all-courses/digital-marketing/basic-digital-marketing",
    //   permanent: true,
    // },
    // {
    //   source:
    //     "/all-courses/digital-marketing/advanced-digital-marketing-course",
    //   destination:
    //     "/all-courses/digital-marketing/advance-digital-marketing-course",
    //   permanent: true,
    // },
    // {
    //   source: "/all-course/digital-marketing/advanced-digital-marketing",
    //   destination:
    //     "/all-courses/digital-marketing/advance-digital-marketing-course",
    //   permanent: true,
    // },
    // {
    //   source: "/all-course/digital-marketing/applied-digital-marketing",
    //   destination: "/all-courses/digital-marketing/applied-digital-marketing",
    //   permanent: true,
    // },
    {
      source: "/all-course",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/all-courses/course",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/all-courses/[course]",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/all-courses/[course]/[id]",
      destination: "/all-courses",
      permanent: true,
    },
    // {
    //   source: "/all-courses/digital-marketing",
    //   destination: "/all-courses",
    //   permanent: false,
    // },
    {
      source: "/all-courses/digital-marketing/digital-marketing-fundamentals",
      destination: "/all-courses/digital-marketing",
      permanent: false,
    },
    {
      source: "/all-courses/digital-marketing/advance-digital-marketing-course",
      destination: "/all-courses/digital-marketing",
      permanent: false,
    },

    {
      source: "/all-courses/digital-marketing/digital-marketing-fundamentals",
      destination: "/all-courses/digital-marketing",
      permanent: false,
    },
    {
      source: "/all-courses/artificial-intelligence/ai-introductory",
      destination: "/all-courses/artificial-intelligence/",
      permanent: false,
    },
    {
      source: "/all-courses/artificial-intelligence/ai-intermediary",
      destination: "/all-courses/artificial-intelligence/",
      permanent: false,
    },
    {
      source: "/all-courses/artificial-intelligence/ai-advanced-applied",
      destination: "/all-courses/artificial-intelligence/",
      permanent: false,
    },

    // {
    //   source: "/all-courses/design-thinking",
    //   destination: "/all-courses",
    //   permanent: false,
    // },
    {
      source: "/all-courses/cyber-security/1000",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },

    {
      source: "/blog/category/[slug]",
      destination: "/blog",
      permanent: true,
    },

    {
      source: "/digital-marketing-main",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/data-science",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/all-courses/software-development-course",
      destination: "/all-courses",
      permanent: true,
    },
    //-------------------------new redirections---------------------------------
    {
      source: "/all-course/digital-marketing/applied-digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/all-course/digital-marketing/basic-digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/all-course/digital-marketing/advanced-digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/all-courses-new",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/undefined",
      destination: "/home",
      permanent: true,
    },
    {
      source: "/data-science-main",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/programs/createMyWealth",
      destination: "/home",
      permanent: true,
    },
    {
      source: "/password-reset",
      destination: "https://mydigital.regenesys.net/login/forgot_password.php",
      permanent: true,
    },
    {
      source: "/programs/project-management/1000",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/programs/data-science/1000",
      destination: "/all-courses/data-science",
      permanent: true,
    },

    {
      source: "/contact/1000",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/terms-and-condition/1000",
      destination: "/terms-and-conditions",
      permanent: true,
    },
    {
      source: "/about/1000",
      destination: "/about",
      permanent: true,
    },
    {
      source: "/advanced-digital-marketing",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/Digital",
      destination: "/all-courses/digital-marketing",
      permanent: true,
    },
    {
      source: "/courses/data-science",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/programs/data-science/",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/courses/project-management",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/programs/[course]",
      destination: "/all-courses",
      permanent: true,
    },
    {
      source: "/programs/cyber-",
      destination: "/all-courses/cyber-security",
      permanent: true,
    },
    {
      source: "/fac-led-projectmanagement",
      destination: "/all-courses/project-management",
      permanent: true,
    },
    {
      source: "/courses/advanced-coding-2",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/all-courses/data-science/applied-data-science",
      destination: "/all-courses/data-science",
      permanent: true,
    },
    {
      source: "/study-data-science-ng",
      destination: "/all-courses/data-science",
      permanent: true,
    },

    //-------------------------new redirections end---------------------------------
  ];
  return path;
};

const createReWrites = () => {
  const paths = [
    // -------------------------multiple-pages-start---------------------------------

    // ------------brand-------------
    {
      source: "/online-courses",
      destination: "/all-courses-brand/online-courses",
    },
    {
      source: "/online-course",
      destination: "/all-courses-brand/online-course",
    },
    {
      source: "/courses-online",
      destination: "/all-courses-brand/courses-online",
    },
    {
      source: "/online-coding-courses",
      destination: "/all-courses-brand/online-coding-courses",
    },
    {
      source: "/online-courses-with-certificates",
      destination: "/all-courses-brand/online-courses-with-certificates",
    },
    {
      source: "/online-certification-courses",
      destination: "/all-courses-brand/online-certification-courses",
    },
    {
      source: "/coding-courses-online",
      destination: "/all-courses-brand/coding-courses-online",
    },
    {
      source: "/IT-courses-online",
      destination: "/all-courses-brand/IT-courses-online",
    },
    {
      source: "/online-certificate-courses",
      destination: "/all-courses-brand/online-certificate-courses",
    },
    {
      source: "/online-courses-for-adults",
      destination: "/all-courses-brand/online-courses-for-adults",
    },
    {
      source: "/best-online-courses",
      destination: "/all-courses-brand/best-online-courses",
    },
    {
      source: "/online-it-courses",
      destination: "/all-courses-brand/online-it-courses",
    },
    {
      source: "/online-certificate-course",
      destination: "/all-courses-brand/online-certificate-course",
    },
    {
      source: "/online-courses-certificates",
      destination: "/all-courses-brand/online-courses-certificates",
    },
    {
      source: "/online-training-courses",
      destination: "/all-courses-brand/online-training-courses",
    },
    {
      source: "/certificate-courses-online",
      destination: "/all-courses-brand/certificate-courses-online",
    },
    // -------------------------multiple-pages-courses---------------------------------
    ///==================DS======================
    {
      source: "/data-science-course",
      destination: "/all-courses-multiple/data-science-course",
    },
    {
      source: "/data-science-courses",
      destination: "/all-courses-multiple/data-science-courses",
    },
    {
      source: "/courses-in-data-science",
      destination: "/all-courses-multiple/courses-in-data-science",
    },
    {
      source: "/course-for-data-science",
      destination: "/all-courses-multiple/course-for-data-science",
    },
    {
      source: "/data-science-online-courses",
      destination: "/all-courses-multiple/data-science-online-courses",
    },
    {
      source: "/data-science-course-online",
      destination: "/all-courses-multiple/data-science-course-online",
    },
    {
      source: "/courses-data-science",
      destination: "/all-courses-multiple/courses-data-science",
    },
    {
      source: "/online-data-science-courses",
      destination: "/all-courses-multiple/online-data-science-courses",
    },
    {
      source: "/best-data-science-courses",
      destination: "/all-courses-multiple/best-data-science-courses",
    },
    {
      source: "/a-crash-course-in-data-science",
      destination: "/all-courses-multiple/a-crash-course-in-data-science",
    },
    {
      source: "/data-science-courses-online",
      destination: "/all-courses-multiple/data-science-courses-online",
    },
    {
      source: "/python-data-science-course",
      destination: "/all-courses-multiple/python-data-science-course",
    },
    {
      source: "/best-online-data-science-courses",
      destination: "/all-courses-multiple/best-online-data-science-courses",
    },
    {
      source: "/data-science-certification-course",
      destination: "/all-courses-multiple/data-science-certification-course",
    },
    {
      source: "/online-course-in-data-science",
      destination: "/all-courses-multiple/online-course-in-data-science",
    },
    {
      source: "/online-data-science-course",
      destination: "/all-courses-multiple/online-data-science-course",
    },

    ///==================DM======================
    // {
    //   source: "/digital-marketing",
    //   destination: "/all-courses-multiple/digital-marketing",
    // },
    {
      source: "/what-is-digital-marketing",
      destination: "/all-courses-multiple/what-is-digital-marketing",
    },
    {
      source: "/digital-marketing-jobs",
      destination: "/all-courses-multiple/digital-marketing-jobs",
    },
    {
      source: "/digital-marketing-salary",
      destination: "/all-courses-multiple/digital-marketing-salary",
    },
    {
      source: "/digital-marketer",
      destination: "/all-courses-multiple/digital-marketer",
    },
    {
      source: "/digital-marketing-course",
      destination: "/all-courses-multiple/digital-marketing-course",
    },
    {
      source: "/digital-marketing-strategy",
      destination: "/all-courses-multiple/digital-marketing-strategy",
    },
    {
      source: "/digital-marketing-certificate",
      destination: "/all-courses-multiple/digital-marketing-certificate",
    },
    {
      source: "/google-digital-marketing-certification",
      destination:
        "/all-courses-multiple/google-digital-marketing-certification",
    },
    {
      source: "/digital-marketing-courses",
      destination: "/all-courses-multiple/digital-marketing-courses",
    },
    {
      source: "/digital-marketing-near-me",
      destination: "/all-courses-multiple/digital-marketing-near-me",
    },
    {
      source: "/digital-marketing-specialist",
      destination: "/all-courses-multiple/digital-marketing-specialist",
    },
    {
      source: "/digital-marketing-certification",
      destination: "/all-courses-multiple/digital-marketing-certification",
    },
    {
      source: "/digital-marketing-degree",
      destination: "/all-courses-multiple/digital-marketing-degree",
    },
    {
      source: "/digital-marketing-tools",
      destination: "/all-courses-multiple/digital-marketing-tools",
    },
    {
      source: "/digital-marketing-training",
      destination: "/all-courses-multiple/digital-marketing-training",
    },
    {
      source: "/digital-marketing-certificates",
      destination: "/all-courses-multiple/digital-marketing-certificates",
    },
    {
      source: "/digital-marketing-institute",
      destination: "/all-courses-multiple/digital-marketing-institute",
    },
    {
      source: "/digital-marketing-strategies",
      destination: "/all-courses-multiple/digital-marketing-strategies",
    },
    {
      source: "/digital-marketing-course-online",
      destination: "/all-courses-multiple/digital-marketing-course-online",
    },
    {
      source: "/digital-marketing-definition",
      destination: "/all-courses-multiple/digital-marketing-definition",
    },
    {
      source: "/digital-marketing-examples",
      destination: "/all-courses-multiple/digital-marketing-examples",
    },
    {
      source: "/digital-marketing-meaning",
      destination: "/all-courses-multiple/digital-marketing-meaning",
    },
    {
      source: "/digital-marketing-trends",
      destination: "/all-courses-multiple/digital-marketing-trends",
    },
    {
      source: "/learn-digital-marketing",
      destination: "/all-courses-multiple/learn-digital-marketing",
    },
    {
      source: "/types-of-digital-marketing",
      destination: "/all-courses-multiple/types-of-digital-marketing",
    },
    {
      source: "/digital-marketer-salary",
      destination: "/all-courses-multiple/digital-marketer-salary",
    },
    {
      source: "/digital-marketing-classes",
      destination: "/all-courses-multiple/digital-marketing-classes",
    },
    {
      source: "/digital-marketing-online-courses",
      destination: "/all-courses-multiple/digital-marketing-online-courses",
    },
    {
      source: "/online-digital-marketing-courses",
      destination: "/all-courses-multiple/online-digital-marketing-courses",
    },
    {
      source: "/what-is-a-digital-marketer",
      destination: "/all-courses-multiple/what-is-a-digital-marketer",
    },
    {
      source: "/digital-marketing-courses-online",
      destination: "/all-courses-multiple/digital-marketing-courses-online",
    },
    {
      source: "/google-digital-marketing-course",
      destination: "/all-courses-multiple/google-digital-marketing-course",
    },
    {
      source: "/how-to-become-a-digital-marketer",
      destination: "/all-courses-multiple/how-to-become-a-digital-marketer",
    },
    {
      source: "/how-to-do-digital-marketing",
      destination: "/all-courses-multiple/how-to-do-digital-marketing",
    },
    {
      source: "/how-to-start-digital-marketing",
      destination: "/all-courses-multiple/how-to-start-digital-marketing",
    },
    {
      source: "/online-digital-marketing",
      destination: "/all-courses-multiple/online-digital-marketing",
    },
    {
      source: "/digital-marketing-blogs",
      destination: "/all-courses-multiple/digital-marketing-blogs",
    },
    {
      source: "/digital-marketing-careers",
      destination: "/all-courses-multiple/digital-marketing-careers",
    },
    {
      source: "/digital-marketing-certificate-online",
      destination: "/all-courses-multiple/digital-marketing-certificate-online",
    },
    {
      source: "/digital-marketing-certifications",
      destination: "/all-courses-multiple/digital-marketing-certifications",
    },
    {
      source: "/fundamentals-of-digital-marketing",
      destination: "/all-courses-multiple/fundamentals-of-digital-marketing",
    },
    {
      source: "/online-digital-marketing-course",
      destination: "/all-courses-multiple/online-digital-marketing-course",
    },
    {
      source: "/what-does-a-digital-marketer-do",
      destination: "/all-courses-multiple/what-does-a-digital-marketer-do",
    },
    {
      source: "/what's-digital-marketing",
      destination: "/all-courses-multiple/what's-digital-marketing",
    },
    {
      source: "/best-digital-marketing-services",
      destination: "/all-courses-multiple/best-digital-marketing-services",
    },
    {
      source: "/certificate-in-digital-marketing",
      destination: "/all-courses-multiple/certificate-in-digital-marketing",
    },
    {
      source: "/digital-marketing-platforms",
      destination: "/all-courses-multiple/digital-marketing-platforms",
    },
    {
      source: "/digital-marketing-tips",
      destination: "/all-courses-multiple/digital-marketing-tips",
    },
    {
      source: "/masters-in-digital-marketing",
      destination: "/all-courses-multiple/masters-in-digital-marketing",
    },
    {
      source: "/what-is-a-digital-marketing",
      destination: "/all-courses-multiple/what-is-a-digital-marketing",
    },
    {
      source: "/best-digital-marketing-courses",
      destination: "/all-courses-multiple/best-digital-marketing-courses",
    },
    {
      source: "/definition-of-digital-marketing",
      destination: "/all-courses-multiple/definition-of-digital-marketing",
    },
    {
      source: "/digital-marketing-degree-online",
      destination: "/all-courses-multiple/digital-marketing-degree-online",
    },
    {
      source: "/digital-marketing-degrees",
      destination: "/all-courses-multiple/digital-marketing-degrees",
    },
    {
      source: "/digital-marketing-experts",
      destination: "/all-courses-multiple/digital-marketing-experts",
    },
    {
      source: "/digital-marketing-online",
      destination: "/all-courses-multiple/digital-marketing-online",
    },
    {
      source: "/examples-of-digital-marketing",
      destination: "/all-courses-multiple/examples-of-digital-marketing",
    },
    {
      source: "/how-to-learn-digital-marketing",
      destination: "/all-courses-multiple/how-to-learn-digital-marketing",
    },
    {
      source: "/future-of-digital-marketing",
      destination: "/all-courses-multiple/future-of-digital-marketing",
    },
    {
      source: "/importance-of-digital-marketing",
      destination: "/all-courses-multiple/importance-of-digital-marketing",
    },
    {
      source: "/why-is-digital-marketing-important",
      destination: "/all-courses-multiple/why-is-digital-marketing-important",
    },

    ///==================PM======================

    // {
    //   source: "/project-management-courses",
    //   destination: "/all-courses-multiple/project-management-courses",
    // },
    ///=========================CS===========================
    // {
    //   source: "/cyber-security-course",
    //   destination: "/all-courses-multiple/cyber-security-course",
    // },
    ///=========================AI===========================
    // {
    //   source: "/artificial-intelligence-course",
    //   destination: "/all-courses-multiple/artificial-intelligence-course",
    // },

    // -------------------------multiple-pages-end---------------------------------

    {
      source: "/all-courses/project-management",
      destination: "/all-courses/project-management/28",
    },

    {
      source: "/all-courses/management-advancement",
      destination: "/all-courses/management-advancement/48",
    },
    // {
    //   source: "/all-courses/product-management",
    //   destination: "/all-courses/product-management/49",
    // },
    {
      source: "/all-courses/data-and-business-analytics",
      destination: "/all-courses/data-and-business-analytics/30",
    },
    // {
    //   source: "/all-courses/software-development-course",
    //   destination: "/all-courses/software-development/229",
    // },
    // {
    //   source: "/all-courses/full-stack-web-and-software-development",
    //   destination: "/all-courses/full-stack-web-and-software-development/230",
    // },
    {
      source: "/all-courses/full-stack-development",
      destination: "/all-courses/full-stack-development/230",
    },
    {
      source: "/all-courses/data-science",
      destination: "/all-courses/data-science/701",
    },
    {
      source: "/all-courses/digital-marketing",
      destination: "/all-courses/digital-marketing/702",
    },
    {
      source: "/all-courses/artificial-intelligence",
      destination: "/all-courses/artificial-intelligence/703",
    },
    // {
    //   source: "/all-courses/digital-marketing",
    //   destination: "/all-courses/digital-marketing",
    // },
    {
      source: "/all-courses/artificial-intelligence",
      destination: "/all-courses/artificial-intelligence",
    },
    // {
    //   source: "/all-courses/cyber-security",
    //   destination: "/all-courses/cyber-security/29",
    // },

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
      destination: "/all-courses/advance-digital-marketing-course/26",
    },
    {
      source: "/all-courses/digital-marketing/applied-digital-marketing",
      destination: "/all-courses/applied-digital-marketing/27",
    },
    {
      source: "/all-courses/digital-marketing/digital-marketing-fundamentals",
      destination: "/all-courses/digital-marketing-fundamentals/101",
    },
    {
      source: "/all-courses/digital-marketing/advance-digital-marketing-course",
      destination: "/all-courses/advance-digital-marketing-course/102",
    },
    {
      source: "/all-courses/cyber-security-fundamentals-course",
      destination: "/all-courses/cyber-security-fundamentals-course/103",
    },
    {
      source: "/all-courses/cyber-defense-toolbox-course",
      destination: "/all-courses/cyber-defense-toolbox-course/104",
    },
    {
      source: "/all-courses/design-thinking",
      destination: "/all-courses/design-thinking/105",
    },

    {
      source: "/all-courses/cyber-security",
      destination: "/all-courses/cyber-security/106",
    },
    {
      source: "/all-courses/artificial-intelligence/ai-introductory",
      destination: "/all-courses/ai-introductory/401",
    },
    {
      source: "/all-courses/artificial-intelligence/ai-intermediary",
      destination: "/all-courses/ai-intermediary/402",
    },
    {
      source: "/all-courses/artificial-intelligence/ai-advanced-applied",
      destination: "/all-courses/ai-advanced-applied/403",
    },

    // --------------------new pages---------------------
    // {
    //   source: "/all-courses-new/digital-marketing-new",
    //   destination: "/all-courses-new/digital-marketing-new/702",
    // },

    // {
    //   source: "/:path*",
    //   destination: "/404",
    // },
  ];
  return paths;
};
module.exports = nextConfig;
