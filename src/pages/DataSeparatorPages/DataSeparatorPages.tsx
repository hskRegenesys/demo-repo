import MainCoursesDynimicData from "@/data/newComponentData/dynamicComponentData/MainCoursesDynimicData";
import MultiplePagesCoursesData from "@/data/newComponentData/multiplePagesData/MultiplePagesCoursesData";

interface MainCoursesDynimicData {
  BannerWithVideoData: {
    BannerImgDesktop: string;
    coursePageName: string;
    topSectionPoint1: string;
    topSectionPoint2: string;
    contentText: string;
    youtubeVideoLink: string;
    BrochureIcon: string;
    vidoPlayIcon: string;
  };
  CourseBenefitsCardData: {
    courcename: string;
    Heding: string;
    Card: CardData[];
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
        LevelCard: {
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
        ContentHeding: string;
        PriceIcon: string;
        durationIcon: string;
        EnrollmentIcon: string;
        contraryPricingCard: {
          contaryName: string;
          price: string;
          duration: string;
          Enrollment: string;
          contaryFlag: string;
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
    BlogSectionTitle: string;
    cards: CardDataBlog[];
  };
  faqSections: {
    arrowIcon: string;
    HeadingDesktop: string;
    HeadingMobile: string;
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

  // ------------------main-courses------------------
  if (page === "digital-marketing-new")
    return MainCoursesDynimicData.DigitalMarketing;

  // ------------------multiple-pages-course------------------
  if (page === "digital-marketing-1") {
    return {
      ...MainCoursesDynimicData.DigitalMarketing,
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  } else if (page === "data-science-course") {
    return {
      ...MainCoursesDynimicData.DataScience,
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  } else if (page === "online-courses") {
    return {
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  }

  return undefined;
};

export default DataSeparatorPages;
