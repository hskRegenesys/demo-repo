import React, { useEffect, useState } from "react";
import WhyChooseDR from "@/components/NewComponents/whychooseDR/WhyChooseDR";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import Faq from "@/components/NewComponents/faq/Faq";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import CertificationDR from "@/components/NewComponents/certificationDR/CertificationDR";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import AllCoursesPageBanner from "@/components/NewComponents/allCoursesPageBanner/AllCoursesPageBanner";
import _ from "lodash";
import Layout from "@/components/Layout/Layout";
import FeaturedCourses from "@/components/NewComponents/featuredCourses/FeaturedCourses";
import AllCoursesDynamicData from "@/data/newComponentData/dynamicComponentData/AllCoursesDynamicData";
import AllCoursesSlider from "@/components/NewComponents/allCoursesSlider/AllCoursesSlider";
import PopupData from "@/components/NewComponents/popupForm/PopupData";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import LearnersSupport from "@/components/NewComponents/learnersSupport/LearnersSupport";
import MultiplePagesBrandData from "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData";
import ReadMoreDropDown from "@/components/NewComponents/readMore/ReadMoreDropDown";

const AllCoursesNew = () => {
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
  return (
    <Layout>
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData.all}
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
      />
      <AllCoursesSlider
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
      />
      {/* <OurCourses
          data={NewOurCoursesData}
          handleEnrollButtonClick={handleEnrollButtonClick}
        /> */}
      <CertificationDR
        data={AllCoursesDynamicData.CertificationDRData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <StudentReview handleEnrollButtonClick={handleEnrollButtonClick} />
      <Faq data={MultiplePagesBrandData.faqSections} />
      <ReadMoreDropDown data={AllCoursesDynamicData.ReadMore} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

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
