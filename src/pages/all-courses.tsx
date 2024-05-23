import React, { useEffect, useState } from "react";
import _ from "lodash";
import dynamic from "next/dynamic";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import AllCoursesPageBanner from "@/components/NewComponents/allCoursesPageBanner/AllCoursesPageBanner";

const WhyChooseDR = dynamic(
  () => import("@/components/NewComponents/whychooseDR/WhyChooseDR")
);
const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"));
const StudentReview = dynamic(
  () => import("@/components/NewComponents/studentReview/StudentReview")
);
const CertificationDR = dynamic(
  () => import("@/components/NewComponents/certificationDR/CertificationDR")
);
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));

const FeaturedCourses = dynamic(
  () => import("@/components/NewComponents/featuredCourses/FeaturedCourses")
);
const AllCoursesSlider = dynamic(
  () => import("@/components/NewComponents/allCoursesSlider/AllCoursesSlider")
);
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown")
);

const AllCoursesNew = ({
  initialCourses,
  intitialCoursesCardData,
  initialStudentReviewData,
  initialAllCoursesDynamicData,
  initialMultiplePagesBrandData,
}: any) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const popupDisplayed = sessionStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
      // Popup hasn't been displayed before
      const timeoutModal = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem("popupDisplayed", "true");
      }, 5000);

      return () => clearTimeout(timeoutModal);
    }
  }, []);
  const PopupData = {
    PopupDesktop: "Images/Popup/Home-Desktop-Popup.svg",
    PopupMobile: "Images/Popup/Home-Mobile-Popup.svg",
  };
  return (
    <Layout>
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
        />
      )}
      <HeaderOne />
      <MobileMenu />
      <AllCoursesPageBanner handleEnrollButtonClick={handleEnrollButtonClick} />
      <WhyChooseDR handleEnrollButtonClick={handleEnrollButtonClick} />
      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
        allCourseList={initialCourses}
        AllCourcesCardData={intitialCoursesCardData}
      />
      <AllCoursesSlider
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
        allCourseList={initialCourses}
        AllCourcesCardData={intitialCoursesCardData}
      />
      {/* <OurCourses
          data={NewOurCoursesData}
          handleEnrollButtonClick={handleEnrollButtonClick}
        /> */}
      <CertificationDR
        data={initialAllCoursesDynamicData?.CertificationDRData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <StudentReview
        handleEnrollButtonClick={handleEnrollButtonClick}
        StudentReviewData={initialStudentReviewData}
      />
      <Faq data={initialMultiplePagesBrandData?.faqSections} />
      <ReadMoreDropDown data={initialAllCoursesDynamicData?.ReadMore} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { allCourseList } = await import("@/data/courseData");
    const { default: AllCourcesCardData } = await import(
      "@/data/newComponentData/commonComponentData/AllCourcesCardData"
    );

    const { default: StudentReviewData } = await import(
      "@/data/newComponentData/commonComponentData/StudentReviewData"
    );
    const { default: AllCoursesDynamicData } = await import(
      "@/data/newComponentData/dynamicComponentData/AllCoursesDynamicData"
    );
    const { default: MultiplePagesBrandData } = await import(
      "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData"
    );
    return {
      props: {
        initialCourses: allCourseList,
        intitialCoursesCardData: AllCourcesCardData,
        initialStudentReviewData: StudentReviewData,
        initialAllCoursesDynamicData: AllCoursesDynamicData,
        initialMultiplePagesBrandData: MultiplePagesBrandData,
      },
    };
  } catch (error) {
    return {
      props: {
        initialCourses: [],
        intitialCoursesCardData: [],
        initialAllCoursePageBannerData: [],
        initialStudentReviewData: [],
        initialAllCoursesDynamicData: [],
        initialMultiplePagesBrandData: [],
      },
    };
  }
}

export default AllCoursesNew;

// import dynamic from "next/dynamic";
// import { useState } from "react";
// import { Suspense } from "react";
// // import PageBanner from "@/components/BannerSection/PageBanner";
// //import HeaderOne from "@/components/Header/HeaderOne";
// //import MobileMenu from "@/components/Header/MobileMenu";
// //import Layout from "@/components/Layout/Layout";
// //import MainFooter from "@/components/MainFooter/MainFooter";
// import Style from "@/components/Reuseable/Style";
// //import SearchPopup from "@/components/SearchPopup/SearchPopup";
// // import CallToSection from "@/components/HomeSkillDescription/CallToSection";
// //import AllCourseText from "@/components/StudentPlacement/AllCourseText";
// import React from "react";
// // import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
// //import VideoOne from "@/components/VideoSection/VideoOne";
// //import PopularTopics from "@/components/PopularTopics/PopularTopics";
// // import AllCourseGallery from "@/components/AllCourseGallery/AllCourseGallery";
// import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";

// const PopularTopics = dynamic(
//   () => import("@/components/PopularTopics/PopularTopics")
// );

// const VideoOne = dynamic(() => import("@/components/VideoSection/VideoOne"));

// const SearchPopup = dynamic(
//   () => import("@/components/SearchPopup/SearchPopup")
// );
// const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));

// const Layout = dynamic(() => import("@/components/Layout/Layout"));

// const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
// const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
// const AllCourseText = dynamic(
//   () => import("@/components/StudentPlacement/AllCourseText")
// );

// const PageBanner = dynamic(
//   () => import("@/components/BannerSection/PageBanner")
// );
// const CallToSection = dynamic(
//   () => import("@/components/HomeSkillDescription/CallToSection")
// );
// const PartnerOne = dynamic(
//   () => import("@/components/ExperienceSection/ExperienceSection")
// );
// // import StickyBar from "@/components/StickyFooter/Sticky";
// const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));
// const AllCourseGallery = dynamic(
//   () => import("@/components/AllCourseGallery/AllCourseGallery")
// );
// const allCourse = () => {
//   const [showComponent, setShowComponent] = useState(false);

//   // Function to toggle the visibility of the component
//   const toggleComponent = () => {
//     setShowComponent(!showComponent);
//   };
//   return (
//     <>
//       <Layout pageTitle="allCourse">
//         <Style />

//         <HeaderOne pageTitle="all-courses" />
//         <MobileMenu />
//         <SearchPopup />
//         <PageBanner title="Products" page="All courses" />
//         <AllCourseText />
//         <AllCourseGallery />
//         <PartnerOne />
//         <VideoOne />
//         <PopularTopics />
//         <CallToSection />
//         <MainFooter />
//         <StickyBar />
//       </Layout>
//     </>
//   );
// };

// export default allCourse;
