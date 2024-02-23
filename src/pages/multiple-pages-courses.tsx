// import dynamic from "next/dynamic";
// import React from "react";
// import { useRouter } from "next/router";
// import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
// import YoutubeVidioPopup from "@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup";
// import Schemas from "src/schemas";
// import { Style } from "@mui/icons-material";
// import HeaderOne from "@/components/Header/HeaderOne";
// import MobileMenu from "@/components/Header/MobileMenu";
// import SearchPopup from "@/components/SearchPopup/SearchPopup";
// import BreadcrumbsDR from "@/components/NewComponents/breadcrumbsDR/breadcrumbsDR";
// import BannerWithVideo from "@/components/NewComponents/BannerWithVideo/BannerWithVideo";
// import CourseBenefitsCard from "@/components/NewComponents/courseBenefitsCard/CourseBenefitsCard";
// import ExploreTheCourses from "@/components/NewComponents/exploreTheCouses/ExploreTheCourses";
// import CareersTransformed from "@/components/NewComponents/careersTransformed/CareersTransformed";
// import CertificationDR from "@/components/NewComponents/certificationDR/CertificationDR";
// import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
// import Faq from "@/components/NewComponents/faq/Faq";
// import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
// import { useState, useEffect } from "react";
// import _ from "lodash";
// import { brochureDetails, courseData } from "@/data/course";
// import { urlInfo } from "@/components/config/helper";
// import { programBaseUrl } from "@/components/config/constant";
// import { Constants } from "src/schemas/data";
// import MainCoursesDynimicData from "@/data/newComponentData/dynamicComponentData/MainCoursesDynimicData";
// import DataSeparatorPages from "src/pages/DataSeparatorPages/DataSeparatorPages";
// import ReadMoreDropDown from "@/components/NewComponents/readMore/ReadMoreDropDown";

// interface MainCoursesDynimicData {
//   BannerWithVideoData: {
//     BannerImgDesktop: string;
//     coursePageName: string;
//     topSectionPoint1: string;
//     topSectionPoint2: string;
//     contentText: string;
//     youtubeVideoLink: string;
//     BrochureIcon: string;
//     vidoPlayIcon: string;
//   };
//   CourseBenefitsCardData: {
//     courcename: string; // Corrected property name
//     Heding: string; // Corrected property name
//     Card: CardData[];
//   };
//   ExploreTheCoursesData: {
//     smallHeading: string;
//     bigHeading: string;
//     sideHeadings: { text: string; contentId: string }[];
//     sideContents: {
//       content1: {
//         contentHeading: string;
//         contentImg: string;
//         contentText: string;
//         contentCard: { icon: string; text: string }[];
//       };
//       content2: {
//         contentHeading: string;
//         cardTools: { img: string }[];
//       };
//       content3: {
//         contentHeading: string;
//         tutors: string;
//         facultyCard: {
//           facultyImg: string;
//           facultyName: string;
//           courseName: string;
//           yearsOfExperience: string;
//         }[];
//       };
//       content4?: {
//         contentHeading: string;
//         LevelCard: {
//           courseName: string;
//           frameImg: string;
//           tickIcon: string;
//           list: string[];
//         }[];
//       };
//       content5?: {
//         contentHeading: string;
//         durationIcon: string;
//         tickIcon: string;
//         dropDown: string;
//         curriculumContainer: {
//           weekHeading: string;
//           weekPoints: string[];
//         }[];
//       };
//       content6?: {
//         ContentHeding: string;
//         PriceIcon: string;
//         durationIcon: string;
//         EnrollmentIcon: string;
//         contraryPricingCard: {
//           contaryName: string;
//           price: string;
//           duration: string;
//           Enrollment: string;
//           contaryFlag: string;
//         }[];
//       };
//     };
//   };
//   CertificationDRData: {
//     heading: string;
//     title: string;
//     paragraph: string;
//     achievementsHeading: string;
//     achievementsText: string[];
//     tickImage: string;
//     image: string;
//     imageText: string;
//     buttonText: string;
//   };
//   BlogSectionData: {
//     BlogSectionTitle: string;
//     cards: CardDataBlog[];
//   };
//   faqSections: {
//     // Adjusted property name
//     arrowIcon: string;
//     HeadingDesktop: string;
//     HeadingMobile: string;
//     sections: FaqSectionItem[];
//   };
// }

// // Define FaqSectionItem and FaqItem interfaces
// interface FaqSectionItem {
//   heading: string;
//   faqs: FaqItem[];
// }

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// interface CardDataBlog {
//   blogImg: string;
//   blogQuestion: string;
//   blogText: string;
// }

// interface CardData {
//   cardIcon: string;
//   text1: string;
//   text2: string;
// }

// const Course = (props: any) => {
//   const router = useRouter();
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
//   const [youtubeVideoLink, setYoutubeVideoLink] = useState("");

//   const courseId: any = router?.query?.id;
//   const allCourseList: any = [];

//   const handleEnrollButtonClick = () => {
//     setIsPopupVisible(true);
//   };

//   const handlePopupClose = () => {
//     setIsPopupVisible(false);
//   };

//   useEffect(() => {
//     const timeoutModal = setTimeout(() => {
//       setIsPopupVisible(true);
//     }, 4000);

//     return () => clearTimeout(timeoutModal);
//   }, []);

//   const YoutubePopupButtonClick = (videoLink: string) => {
//     setIsisYoutubePopup(true);
//     setYoutubeVideoLink(videoLink);
//   };

//   const handleYoutubePopupClose = () => {
//     setIsisYoutubePopup(false);
//   };

//   const page = router.asPath.substring(1);

//   const MainCourseData = DataSeparatorPages(page);

//   if (!MainCourseData) {
//     return null;
//   }

//   const filterData = _.find(
//     allCourseList,
//     (item: any) =>
//       item?.parent_id === null &&
//       item?.mode_id === 1 &&
//       item?.isAddon === false &&
//       item?.id === parseInt(courseId)
//   );

//   const parentToParentName = () => {
//     let result = "";
//     if (filterData?.name) {
//       result = filterData?.name;
//     }
//     return result;
//   };
//   const {
//     BannerWithVideoData,
//     CourseBenefitsCardData,
//     ExploreTheCoursesData,
//     CertificationDRData,
//     BlogSectionData,
//     faqSections,
//     multiplePagesDatas,
//   } = MainCourseData;
//   return (
//     <>
//       {isPopupVisible && (
//         <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
//       )}
//       {isYoutubePopup && (
//         <YoutubeVidioPopup
//           isVisibleVidio={isYoutubePopup}
//           youtubeVideoLink={youtubeVideoLink}
//           onClose={handleYoutubePopupClose}
//         />
//       )}
//       <Schemas type={Constants.course} data={filterData ? filterData : {}} />
//       <Style />
//       <HeaderOne />
//       <MobileMenu />
//       <SearchPopup />
//       <BreadcrumbsDR
//         title={router?.query?.course?.toString().replace("-", " ")}
//         // parent="All-Courses-New"
//         // parentHref="/all-courses-new"
//         parentToParent={parentToParentName()}
//         parentToParentHref={`/${programBaseUrl}/${urlInfo(
//           parentToParentName()
//         )}`}
//       />
//       <BannerWithVideo
//         data={BannerWithVideoData}
//         handleEnrollButtonVidio={(videoLink: string) =>
//           YoutubePopupButtonClick(videoLink)
//         }
//         handleEnrollButtonClick={handleEnrollButtonClick}
//       />
//       <CourseBenefitsCard
//         data={CourseBenefitsCardData}
//         handleEnrollButtonClick={handleEnrollButtonClick}
//       />

//       <ExploreTheCourses
//         data={ExploreTheCoursesData}
//         handleEnrollButtonClick={handleEnrollButtonClick}
//       />
//       <CareersTransformed
//         handleEnrollButtonVidio={(videoLink) =>
//           YoutubePopupButtonClick(videoLink)
//         }
//       />
//       <CertificationDR
//         handleEnrollButtonClick={handleEnrollButtonClick}
//         data={CertificationDRData}
//       />

//       <BlogSection data={BlogSectionData} />
//       <Faq data={faqSections} />
//       <ReadMoreDropDown data={multiplePagesDatas} />
//       <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
//     </>
//   );
// };
// // export async function getServerSideProps(context: any) {
// //   const { id, course } = context.query;

// //   return { props: { course } };
// // }
// export default Course;
