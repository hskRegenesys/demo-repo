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
    awsImage_url: process.env.AWS_BUCKET_URL_UAT,
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
    // {
    //   source: "/new-home",
    //   destination: "/home-new",
    //   permanent: true,
    // },
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
    // {
    //   source: "/all-courses-new",
    //   destination: "/all-courses",
    //   permanent: true,
    // },
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
    {
      source: "/all-courses/project-management",
      destination: "/all-courses/project-management/28",
    },

    {
      source: "/all-courses/management-advancement",
      destination: "/all-courses/management-advancement/48",
    },
    // {
    //   source: "/all-courses/operations-and-supply-chain-management",
    //   destination: "/all-courses/operations-and-supply-chain-management/281",
    // },
    {
      source: "/all-courses/product-management",
      destination: "/all-courses/product-management/49",
    },
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
  ];

  const pathsToRedirect = [
    // ==================Ds===================
    "/data-science-course",
    "/data-science-courses",
    "/courses-in-data-science",
    "/course-for-data-science",
    "/data-science-online-courses",
    "/data-science-course-online",
    "/courses-data-science",
    "/online-data-science-courses",
    "/best-data-science-courses",
    "/a-crash-course-in-data-science",
    "/data-science-courses-online",
    "/python-data-science-course",
    "/best-online-data-science-courses",
    "/data-science-certification-course",
    "/online-course-in-data-science",
    "/online-data-science-course",
    // ==================PM===================
    "/project-management-courses",
    "/project-management-course",
    "/project-management-courses-online",
    "/project-manager-course",
    "/online-project-management-courses",
    "/project-managment-courses",
    "/what-skills-can-you-get-from-managing-it-projects-course",
    "/courses-in-project-management",
    "/online-course-for-project-management",
    "/online-course-in-project-management",
    "/project-management-online-course",
    "/project-manager-courses",
    "/project-managing-courses",
    "/project-management-certification-courses",
    "/project-management-course-online",
    "/project-management-online-courses",
    "/project-management-training-courses",
    "/agile-project-management-course",
    "/construction-project-management-courses",
    "/best-project-management-courses",
    "/online-courses-project-management",
    "/online-project-management-course",
    "/project-manager-courses-online",
    "/project-managment-course",
    "/course-in-project-management",
    "/project-management-courses-for-beginners",
    "/project-management-on-line-courses",
    //====================DM======================
    // "/digital-marketing",
    "/what-is-digital-marketing",
    "/digital-marketing-jobs",
    "/digital-marketing-salary",
    "/digital-marketer",
    "/digital-marketing-course",
    "/digital-marketing-strategy",
    "/digital-marketing-certificate",
    "/google-digital-marketing-certification",
    "/digital-marketing-courses",
    "/digital-marketing-near-me",
    "/digital-marketing-specialist",
    "/digital-marketing-certification",
    "/digital-marketing-degree",
    "/digital-marketing-tools",
    "/digital-marketing-training",
    "/digital-marketing-certificates",
    "/digital-marketing-institute",
    "/digital-marketing-strategies",
    "/digital-marketing-course-online",
    "/digital-marketing-definition",
    "/digital-marketing-examples",
    "/digital-marketing-meaning",
    "/digital-marketing-trends",
    "/learn-digital-marketing",
    "/types-of-digital-marketing",
    "/digital-marketer-salary",
    "/digital-marketing-classes",
    "/digital-marketing-online-courses",
    "/online-digital-marketing-courses",
    "/what-is-a-digital-marketer",
    "/digital-marketing-courses-online",
    "/google-digital-marketing-course",
    "/how-to-become-a-digital-marketer",
    "/how-to-do-digital-marketing",
    "/how-to-start-digital-marketing",
    "/online-digital-marketing",
    "/digital-marketing-blogs",
    "/digital-marketing-careers",
    "/digital-marketing-certificate-online",
    "/digital-marketing-certifications",
    "/fundamentals-of-digital-marketing",
    "/online-digital-marketing-course",
    "/what-does-a-digital-marketer-do",
    "/what's-digital-marketing",
    "/best-digital-marketing-services",
    "/certificate-in-digital-marketing",
    "/digital-marketing-platforms",
    "/digital-marketing-tips",
    "/masters-in-digital-marketing",
    "/what-is-a-digital-marketing",
    "/best-digital-marketing-courses",
    "/definition-of-digital-marketing",
    "/digital-marketing-degree-online",
    "/digital-marketing-degrees",
    "/digital-marketing-experts",
    "/digital-marketing-online",
    "/examples-of-digital-marketing",
    "/how-to-learn-digital-marketing",
    "/future-of-digital-marketing",
    "/importance-of-digital-marketing",
    "/why-is-digital-marketing-important",
    //==================CS==================
    "/cyber-security-course",
    "/cyber-security-courses",
    "/cyber-security-courses-online",
    "/cyber-security-course-online",
    "/online-cyber-security-course",
    "/online-cyber-security-courses",
    "/cyber-security-online-courses",
    "/courses-for-cyber-security",
    "/courses-cyber-security",
    "/cyber-security-training-courses",
    "/cyber-security-courses-for-beginners",
    "/online-course-for-cyber-security",
    "/courses-in-cyber-security",
    "/cyber-security-courses-near-me",
    "/cyber-security-online-course",
    "/best-cyber-security-courses",
    "/cyber-security-courses-offered",
    "/government-funded-cyber-security-courses",
    "/online-courses-for-cyber-security",
    //==================DT==================
    // // "/design-thinking",
    "/design-thinking-process",
    // "/what-is-design-thinking",
    // "/design-thinking-definition",
    // "/design-thinking-certification",
    // "/design-thinking-course",
    // "/design-thinking-process-steps",
    // "/design-thinking-training",
    // "/design-thinking-model",
    // "/design-thinking-tools",
    // "/design-thinking-courses",
    // // "/design-thinking-definition",
    // "/design-thinking-stages",
    // "/definition-of-design-thinking",
    // "/design-thinking-approach",
    // "/5-stages-of-design-thinking",
    // "/design-thinking-jobs",
    // "/design-thinking-methods",
    // "/design-thinking-step",
    // "/what-is-design-thinking-process",
    // "/design-thinking-certificate",
    // "/design-thinking-for-educators",
    // "/what-is-one-of-the-tools-associated-with-design-thinking",
    // "/benefits-of-design-thinking",
    // "/design-thinking-bootcamp",
    // "/design-thinking-in-education",
    // "/design-thinking-meaning",
    // "/design-thinking-methodologies",
    // "/systems-thinking-vs-design-thinking",
    //==================AI==================
    "/artificial-intelligence-course",
    "/artificial-general-intelligence-course",
    "/artificial-intelligence-courses",
    "/artificial-intelligence-online-course",
    "/course-on-artificial-intelligence",
    "/courses-on-artificial-intelligence",
    "/course-artificial-intelligence",
    "/artificial-intelligence-course-online",
    "/best-artificial-intelligence-course",
    "/machine-learning-and-artificial-intelligence-courses",
    "/online-artificial-intelligence-courses",
    "/artificial-intelligence-course-free",
    "/artificial-intelligence-course-syllabus",
    "/artificial-intelligence-training-courses",
    "/online-artificial-intelligence-course",
    "/online-course-artificial-intelligence",
    //==================FSD==================
    "/full-stack-developer",
    // "/full-stack-developer-salary",
    // "/what-is-a-full-stack-developer",
    // "/full-stack-development",
    // "/full-stack-developer-jobs",
    // // "/what-is-full-stack-development",
    // "/full-stack-web-developer",
    // "/full-stack-web-development",
    // "/full-stack-development-course",
    // "/what-is-full-stack-web-development",
    // "/what-is-full-stack-development",
    // "/full-stack-web-development",
    // "/full-stack-development-certificate",
    // "/full-stack-web-development-certificate",
    // "/full-stack-web-development-certification",
    // "/what-is-full-stack-software-development",
    // "/full-stack-development-courses",
    // "/full-stack-development-meaning",
    // "/full-stack-software-development",
    // "/learn-full-stack-web-development",

    //==================DBM==================
    "/data-analysis",
    // "/business-analytics",
    // "/what-is-business-analytics",
    // "/what-is-data-analysis",
    // "/data-analysis-definition",
    // "/data-analysis-example",
    // "/data-analysis-methods",
    // "/data-analysis-techniques",
    // "/types-of-data-analysis",
    // "/data-analysis-meaning",
    // "/data-analysis-steps",
    // "/no-code-tools",
    // "/business-analytics-meaning",
    // "/data-science-and-business-analytics",
    // "/define-business-analytics",
    // "/data-science-and-business-analytics-degree",
    // "/data-science-and-business-analytics-course",
    // "/data-science-and-business-analytics-salary",
    // "/difference-between-data-science-and-business-analytics",
    // "/data-science-and-business-analytics-online-course",
    // "/what-is-data-science-and-business-analytics",
    //===================MP======================
    "/mdp",
    // "/management-development-courses",
    // "/management-certificate-programs",
    // "/management-development-program",
    // "/mdp-meaning",
    // "/management-development-programs-include",
    // "/leadership-and-management-development",
    // "/professional-development-courses-for-managers",
    // "/best-management-development-programs",
    // "/management-development-program-jobs",
    // "/management-development-program-salary",
  ];

  // Convert the paths to redirection objects
  const additionalRedirects = pathsToRedirect.map((path) => ({
    source: path,
    destination: `/all-courses-multiple${path}`,
  }));
  return [...paths, ...additionalRedirects];
};
module.exports = nextConfig;
