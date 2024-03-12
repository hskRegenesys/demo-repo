import MultiplePagesCoursesData from "@/data/newComponentData/multiplePagesData/MultiplePagesCoursesData";
import MainCoursesDynimicData from "@/data/newComponentData/dynamicComponentData/MainCoursesDynimicData";

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
    page === "a-crash-course-in-data-science" ||
    page === "data-science-courses-online" ||
    page === "python-data-science-course" ||
    page === "best-online-data-science-courses" ||
    page === "data-science-certification-course" ||
    page === "online-course-in-data-science" ||
    page === "online-data-science-course"
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
    page === "online-courses-for-adults" ||
    page === "best-online-courses" ||
    page === "online-it-courses" ||
    page === "online-certificate-course" ||
    page === "online-courses-certificates" ||
    page === "online-training-courses" ||
    page === "certificate-courses-online"
  ) {
    return {
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  } else if (
    page === "digital-marketing" ||
    page === "what-is-digital-marketing" ||
    page === "digital-marketing-jobs" ||
    page === "digital-marketing-salary" ||
    page === "digital-marketer" ||
    page === "digital-marketing-course" ||
    page === "digital-marketing-strategy" ||
    page === "digital-marketing-certificate" ||
    page === "google-digital-marketing-certification" ||
    page === "digital-marketing-courses" ||
    page === "digital-marketing-near-me" ||
    page === "digital-marketing-specialist" ||
    page === "digital-marketing-certification" ||
    page === "digital-marketing-degree" ||
    page === "digital-marketing-tools" ||
    page === "digital-marketing-training" ||
    page === "digital-marketing-certificates" ||
    page === "digital-marketing-institute" ||
    page === "digital-marketing-strategies" ||
    page === "digital-marketing-course-online" ||
    page === "digital-marketing-definition" ||
    page === "digital-marketing-examples" ||
    page === "digital-marketing-meaning" ||
    page === "digital-marketing-trends" ||
    page === "learn-digital-marketing" ||
    page === "types-of-digital-marketing" ||
    page === "digital-marketer-salary" ||
    page === "digital-marketing-classes" ||
    page === "digital-marketing-online-courses" ||
    page === "online-digital-marketing-courses" ||
    page === "what-is-a-digital-marketer" ||
    page === "digital-marketing-courses-online" ||
    page === "google-digital-marketing-course" ||
    page === "how-to-become-a-digital-marketer" ||
    page === "how-to-do-digital-marketing" ||
    page === "how-to-start-digital-marketing" ||
    page === "online-digital-marketing" ||
    page === "digital-marketing-blogs" ||
    page === "digital-marketing-careers" ||
    page === "digital-marketing-certificate-online" ||
    page === "digital-marketing-certifications" ||
    page === "fundamentals-of-digital-marketing" ||
    page === "online-digital-marketing-course" ||
    page === "what-does-a-digital-marketer-do" ||
    page === "what's-digital-marketing" ||
    page === "best-digital-marketing-services" ||
    page === "certificate-in-digital-marketing" ||
    page === "digital-marketing-platforms" ||
    page === "digital-marketing-tips" ||
    page === "masters-in-digital-marketing" ||
    page === "what-is-a-digital-marketing" ||
    page === "best-digital-marketing-courses" ||
    page === "definition-of-digital-marketing" ||
    page === "digital-marketing-degree-online" ||
    page === "digital-marketing-degrees" ||
    page === "digital-marketing-experts" ||
    page === "digital-marketing-online" ||
    page === "examples-of-digital-marketing" ||
    page === "how-to-learn-digital-marketing" ||
    page === "future-of-digital-marketing" ||
    page === "importance-of-digital-marketing" ||
    page === "why-is-digital-marketing-important"
  ) {
    return {
      ...MainCoursesDynimicData.DigitalMarketing,
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  } else if (page === "project-management-courses") {
    return {
      ...MainCoursesDynimicData.ProjectManagement,
      multiplePagesDatas: MultiplePagesCoursesData[page],
    };
  }

  return undefined;
};

export default DataSeparatorPages;
