type BannerCourseData = {
  BannerImgDesktop: string;
  BannerImgMobile: string;
  coursePage: string;
  contentDesktop: string;
  contentMobile: string;
  tickIcon: string;
  points: string[];
  introVideoLink?: string;
  bannerVideoLink?: string;
  BrochureIcon?: string;
  PlayVidio?: string;
};

interface BannerDataMap {
  [key: string]: BannerCourseData;
}

const BannerData: BannerDataMap = {
  //---------------- datascince ---------------
  DataScience: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "DataScience",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Check-white.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],
    introVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Brochure.svg",
    PlayVidio: "/assets/images/HomeNew/Polygon.svg",
  },
  basicDataScience: {
    BannerImgDesktop: "/assets/images/HomeNew/BannersImg/path.png",
    BannerImgMobile:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Mobile.png",
    coursePage: "Basic Data Science",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Check-white.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Brochure.svg",
  },
  advancedDataScience: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "advancedDataScience",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  appliedDataScience: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "appliedDataScience",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  // ---------------digitalMarketing-----------------
  digitalMarketing: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "digitalMarketing",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],
    introVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  digitalMarketingFundamentals: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "digitalMarketingFundamentals",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  digitalMarketingAdvanced: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "digitalMarketingAdvanced",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  // ------------------cyberSecurity----------------
  cyberSecurity: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "cyberSecurity",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  // ------------------productManagement---------------------
  productManagement: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "productManagement",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  // ---------------------- artificialIntelligence------------------
  artificialIntelligence: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "artificialIntelligence",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],
    introVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  artificialIntelligenceIntroductory: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "artificialIntelligenceIntroductory",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },

  artificialIntelligenceIntermediary: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "artificialIntelligenceIntermediary",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],
    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
  artificialIntelligenceAdvancedApplied: {
    BannerImgDesktop:
      "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    BannerImgMobile: "/assets/images/HomeNew/BannersImg/CourceBanner - Web.png",
    coursePage: "artificialIntelligenceAdvancedApplied",
    contentDesktop:
      "Explore the diverse methods and platforms shaping today's marketing landscape in the digital age. Delve into two comprehensive categories: Digital Marketing Fundamentals and Advanced Digital Marketing Course. Acquire practical insights into the world of Digital Marketing.",
    contentMobile:
      "Discover the various methods and platforms driving the current marketing ecosystem in today's digital world. This course is available for further exploration. View More",
    tickIcon: "/assets/images/HomeNew/Brochure.svg",
    points: [
      "10-Week Course",
      "Career Counselling",
      "Live Sessions",
      "Guaranteed Certification",
    ],

    bannerVideoLink:
      "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",

    BrochureIcon: "/assets/images/HomeNew/Check.svg",
  },
};
export default BannerData;
