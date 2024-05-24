import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import DataSeparatorPages from "src/pages/DataSeparatorPages/DataSeparatorPages";

const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const YoutubeVidioPopup = dynamic(
  () => import("@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup")
);
const BreadcrumbsDR = dynamic(
  () => import("@/components/NewComponents/breadcrumbsDR/breadcrumbsDR")
);
const BannerWithVideo = dynamic(
  () => import("@/components/NewComponents/BannerWithVideo/BannerWithVideo")
);
const CourseBenefitsCard = dynamic(
  () =>
    import("@/components/NewComponents/courseBenefitsCard/CourseBenefitsCard")
);
const ExploreTheCourses = dynamic(
  () => import("@/components/NewComponents/exploreTheCouses/ExploreTheCourses")
);
const CareersTransformed = dynamic(
  () =>
    import("@/components/NewComponents/careersTransformed/CareersTransformed")
);
const CertificationDR = dynamic(
  () => import("@/components/NewComponents/certificationDR/CertificationDR")
);
const BlogSection = dynamic(
  () => import("@/components/NewComponents/blogSection/BlogSection")
);
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"));
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown")
);
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);

const Course = (props: any) => {
  const router = useRouter();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");
  const page = router?.query?.course?.toString();

  const pageName = router?.query?.course
    ?.toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match: string) => match.toUpperCase());

  const handleEnrollButtonClick = (title?: string) => {
    setIsPopupVisible(true);
    setBannerTitle(title ?? "");
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const YoutubePopupButtonClick = (videoLink: string) => {
    setIsisYoutubePopup(true);
    setYoutubeVideoLink(videoLink);
  };

  const handleYoutubePopupClose = () => {
    setIsisYoutubePopup(false);
  };
  useEffect(() => {
    const popupDisplayed = sessionStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
      const timeoutModal = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem("popupDisplayed", "true");
      }, 5000);

      return () => clearTimeout(timeoutModal);
    }
  }, []);

  const MainCourseData = DataSeparatorPages(page);

  if (!MainCourseData) {
    return null;
  }

  const {
    CourseCode,
    BannerWithVideoData,
    CourseBenefitsCardData,
    ExploreTheCoursesData,
    CertificationDRData,
    BlogSectionData,
    faqSections,
    PopupData,
    multiplePagesDatas,
  } = MainCourseData;

  const isPageDataAvailable =
    multiplePagesDatas && Object.keys(multiplePagesDatas).length > 0;

  return (
    <Layout pageTitle={props?.course} context="multiple-page">
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />
      <ToastContainer />

      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
          CourseCode={CourseCode}
          title={bannerTitle}
        />
      )}
      {isYoutubePopup && (
        <YoutubeVidioPopup
          isVisibleVidio={isYoutubePopup}
          youtubeVideoLink={youtubeVideoLink}
          onClose={handleYoutubePopupClose}
        />
      )}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BreadcrumbsDR
        title={pageName}
        page={pageName}
        parent="All courses"
        parentHref="/all-courses"
      />
      <BannerWithVideo
        data={BannerWithVideoData}
        handleEnrollButtonClick={handleEnrollButtonClick}
        handleEnrollButtonVidio={(videoLink: string) =>
          YoutubePopupButtonClick(videoLink)
        }
        pageName={pageName}
      />
      <CourseBenefitsCard
        data={CourseBenefitsCardData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <ExploreTheCourses
        data={ExploreTheCoursesData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <CareersTransformed
        handleEnrollButtonVidio={(videoLink) =>
          YoutubePopupButtonClick(videoLink)
        }
      />
      <CertificationDR
        handleEnrollButtonClick={handleEnrollButtonClick}
        data={CertificationDRData}
      />
      <BlogSection data={BlogSectionData} />
      <Faq data={faqSections} />
      {isPageDataAvailable && <ReadMoreDropDown data={multiplePagesDatas} />}
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const { id, course } = context.query;

  return { props: { course } };
}
export default Course;

// import dynamic from "next/dynamic";

// import CallToSection from "@/components/HomeSkillDescription/CallToSection";
// import HeaderOne from "@/components/Header/HeaderOne";
// import MobileMenu from "@/components/Header/MobileMenu";
// import Layout from "@/components/Layout/Layout";
// import MainFooter from "@/components/MainFooter/MainFooter";
// import Style from "@/components/Reuseable/Style";
// import SearchPopup from "@/components/SearchPopup/SearchPopup";

// const FaqsSection = dynamic(
//   () => import("@/components/FaqsSection/FaqsSection")
// );
// const CourseDetails = dynamic(
//   () => import("@/components/CourseDetails/CourseDetails")
// );
// import VideoOne from "@/components/VideoSection/VideoOne";
// import SkillDetailSection from "@/components/SkillDetailSection/SkillDetailSection";
// import FeesDetails from "@/components/SkillDetailSection/FeesDetails";
// import CourseBenefits from "@/components/CourseBenefits/CourseBenefits";

// const ToolsCovered = dynamic(
//   () => import("@/components/ToolsCovered/ToolsCovered")
// );
// import React, { useState } from "react";

// const CourseCurriculum = dynamic(
//   () => import("@/components/CourseCurriculum/CourseCurriculum")
// );

// const JoinReasons = dynamic(
//   () => import("@/components/JoinReasons/JoinReasons")
// );

// const FeatureSeven = dynamic(
//   () => import("@/components/FeaturesSection/FeatureSeven")
// );

// import { useRouter } from "next/router";
// import { brochureDetails, courseData } from "@/data/course";
// import _ from "lodash";
// import { urlInfo } from "@/components/config/helper";
// import { programBaseUrl } from "@/components/config/constant";
// import Schemas from "src/schemas";
// import { Constants } from "src/schemas/data";

// import StickyBar from "@/components/StickyFooter/Sticky";
// import PageBanner from "@/components/BannerSection/PageBanner";
// import { allCourseList } from "@/data/courseData";
// import CourseCertificate from "@/components/CourseCertificate/CourseCertificate";
// import { Modal } from "react-bootstrap";
// import ModalPopup from "@/components/Modal/ModalPopup";
// import WhayTheySay from "@/components/whatTheySay/whatTheySay";
// import videoTestimonialData from "@/data/videoTestimonial";

// const CourseCurriculumTwo = dynamic(
//   () => import("@/components/CourseCurriculum/CourseCurriculumTwo")
// );

// const DigitalMarketing = (props: any) => {
//   const router = useRouter();
//   const [show, setShow] = useState(false);

//   const courseId: any = router?.query?.id;

//   const coursePriceDetails = _.filter(
//     allCourseList,
//     (item) => item.id === parseInt(courseId)
//   );

//   const parentCourse = _.filter(
//     allCourseList,
//     (item) => item.parent_id === null
//   );

//   const allContent: any = courseData;
//   const code = coursePriceDetails[0]?.code;
//   const courseDetails: any = allContent[code];

//   // const brochureName: any = brochureDetails[code];

//   const filterData = _.find(
//     parentCourse,
//     (item) =>
//       item?.parent_id === null &&
//       item?.mode_id === 1 &&
//       item?.isAddon === false &&
//       item?.id === coursePriceDetails[0]?.parent_id
//   );

//   const parentToParentName = () => {
//     let result = "";
//     if (filterData?.name) {
//       result = filterData?.name;
//     }
//     return result;
//   };
//   parentToParentName();
//   // console.log(
//   //   "courseDetails courseDetails.modalImage",
//   //   courseDetails.modalImage
//   // );
//   return (
//     <Layout pageTitle={props.course} courseId={courseId}>
//       <Schemas type={Constants.course} data={filterData ? filterData : {}} />
//       <Style />
//       <HeaderOne pageTitle={props.course} courseCode={code} />
//       <MobileMenu />
//       <SearchPopup />
//       <PageBanner
//         title={router?.query?.course?.toString().replace("-", " ")}
//         parent="All courses"
//         parentHref="/all-courses"
//         parentToParent={parentToParentName()}
//         parentToParentHref={`/${programBaseUrl}/${urlInfo(
//           parentToParentName()
//         )}`}
//       />

//       {courseDetails && (
//         <>
//           <CourseDetails
//             courseDetails={courseDetails}
//             // brochureName={brochureName}
//             courseCode={code}
//           />
//           <SkillDetailSection courseDetails={courseDetails} />
//           <JoinReasons courseDetails={courseDetails} />
//           <ToolsCovered courseDetails={courseDetails} />
//           {courseDetails?.courseCertificate && (
//             <CourseCertificate courseDetails={courseDetails} />
//           )}
//           {courseDetails?.featureSeven && (
//             <FeatureSeven courseDetails={courseDetails} />
//           )}

//           <VideoOne courseDetails={courseDetails} />
//           <WhayTheySay courseDetails={courseDetails} />
//           <CourseCurriculum courseDetails={courseDetails} />

//           {CourseCurriculumTwo && (
//             <CourseCurriculumTwo courseDetails={courseDetails} />
//           )}
//           {courseDetails?.productDetails && (
//             <FeesDetails
//               courseDetails={courseDetails}
//               courseCode={code}
//               courseId={courseId}
//             />
//           )}
//           <CourseBenefits courseDetails={courseDetails} />
//           <FaqsSection courseDetails={courseDetails} />
//           <CallToSection courseCode={code} />
//         </>
//       )}
//       <MainFooter />
//       <StickyBar courseCode={code} />
//     </Layout>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const { id, course } = context.query;
//   return { props: { course } };
// }
// export default DigitalMarketing;
