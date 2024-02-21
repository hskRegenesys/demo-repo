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
    {
      source: "/all-courses-new",
      destination: "/404",
      permanent: true,
    },

    // {
    //   source: "/programsnew",
    //   destination: "/all-courses-new",
    //   permanent: true,
    // },
    // {
    //   source: "/multiple-pages-brand",
    //   destination: "/404",
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
    {
      source: "/all-courses-multiple",
      destination: "/404",
      permanent: true,
    },
    {
      source: "/all-courses-multiple/digital-marketing-1",
      destination: "/digital-marketing-1",
      permanent: true,
    },
    {
      source: "/all-courses-multiple/data-science-1",
      destination: "/data-science-1",
      permanent: true,
    },
  ];
  return path;
};

const createReWrites = () => {
  const paths = [
    {
      source: "/digital-marketing-1",
      destination: "/all-courses-multiple/digital-marketing-1",
    },
    {
      source: "/data-science-1",
      destination: "/all-courses-multiple/data-science-1",
    },
    {
      source: "/all-courses/project-management",
      destination: "/all-courses/project-management/28",
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
    // -------------------------multiple-pages-course---------------------------------

    {
      source: "/multiple-pages-brand",
      destination: "/multiple-pages-brand",
    },

    // {
    //   source: "/:path*",
    //   destination: "/404",
    // },
  ];
  return paths;
};
module.exports = nextConfig;
