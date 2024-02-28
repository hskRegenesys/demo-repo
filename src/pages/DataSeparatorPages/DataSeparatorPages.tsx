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
  }

  return undefined;
};

export default DataSeparatorPages;
