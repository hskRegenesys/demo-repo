import MultiplePagesCoursesData from "@/data/newComponentData/multiplePagesData/MultiplePagesCoursesData";
import MainCoursesDynimicData from "@/data/newComponentData/dynamicComponentData/MainCoursesDynimicData";

interface MainCoursesDynamicData {
  BannerWithVideoData: {
    BannerImgDesktop: string;
    coursePageName: string;
    topSectionPoint1: string;
    topSectionPoint2: string;
    contentText: string;
    youtubeVideoLink: string;
    BrochureIcon: string;
    videoPlayIcon: string;
  };
  CourseBenefitsCardData: {
    courseName: string;
    heading: string;
    card: CardData[];
  };
  ExploreTheCoursesData: {
    smallHeading: string;
    bigHeading: string;
    sideHeadings: { text: string; contentId: string }[];
    sideContents: {
      content1: {
        contentHeading: string;
        contentImg: string;
        contentText: string;
        contentCard: { icon: string; text: string }[];
      };
      content2: {
        contentHeading: string;
        cardTools: { img: string }[];
      };
      content3: {
        contentHeading: string;
        tutors: string;
        facultyCard: {
          facultyImg: string;
          facultyName: string;
          courseName: string;
          yearsOfExperience: string;
        }[];
      };
      content4?: {
        contentHeading: string;
        levelCard: {
          courseName: string;
          frameImg: string;
          tickIcon: string;
          list: string[];
        }[];
      };
      content5?: {
        contentHeading: string;
        durationIcon: string;
        tickIcon: string;
        dropDown: string;
        curriculumContainer: {
          weekHeading: string;
          weekPoints: string[];
        }[];
      };
      content6?: {
        contentHeading: string;
        priceIcon: string;
        durationIcon: string;
        enrollmentIcon: string;
        contraryPricingCard: {
          contraryName: string;
          price: string;
          duration: string;
          enrollment: string;
          contraryFlag: string;
        }[];
      };
    };
  };
  CertificationDRData: {
    heading: string;
    title: string;
    paragraph: string;
    achievementsHeading: string;
    achievementsText: string[];
    tickImage: string;
    image: string;
    imageText: string;
    buttonText: string;
  };
  BlogSectionData: {
    blogSectionTitle: string;
    cards: CardDataBlog[];
  };
  faqSections: {
    arrowIcon: string;
    headingDesktop: string;
    headingMobile: string;
    sections: FaqSectionItem[];
  };
}

// Define FaqSectionItem and FaqItem interfaces
interface FaqSectionItem {
  heading: string;
  faqs: FaqItem[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface CardDataBlog {
  blogImg: string;
  blogQuestion: string;
  blogText: string;
}

interface CardData {
  cardIcon: string;
  text1: string;
  text2: string;
}

const DataSeparatorPages = (page: string | undefined): any | undefined => {
  if (!page) return undefined;

  if (
    page === "data-science-course" ||
    page === "data-science-courses" ||
    page === "courses-in-data-science" ||
    page === "course-for-data-science" ||
    page === "data-science-online-courses" ||
    page === "data-science-course-online" ||
    page === "courses-data-science" ||
    page === "online-data-science-courses" ||
    page === "best-data-science-courses" ||
    page === "a-crash-course-in-data-science"
  ) {
    return {
      ...MainCoursesDynimicData.DataScience,
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  } else if (
    page === "online-courses" ||
    page === "online-course" ||
    page === "courses-online" ||
    page === "online-coding-courses" ||
    page === "online-courses-with-certificates" ||
    page === "online-certification-courses" ||
    page === "coding-courses-online" ||
    page === "IT-courses-online" ||
    page === "online-certificate-courses" ||
    page === "online-courses-for-adults"
  ) {
    return {
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  }

  return undefined;
};

export default DataSeparatorPages;
