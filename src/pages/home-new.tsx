import React, { useState, useEffect } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/NewComponents/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/NewComponents/uspSection/UspSection";
import AboutUs from "@/components/NewComponents/about/AboutUs";
import AdmitsCompanies from "@/components/NewComponents/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import LearnersBenefit from "@/components/NewComponents/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/NewComponents/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/NewComponents/faq/Faq";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import NewHomeData from "@/data/newHomeData";
import _ from "lodash";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import MobileMenu from "@/components/Header/MobileMenu";
import ExploreTheCourses from "@/components/NewComponents/exploreTheCouses/ExploreTheCourses";
import OurCourses from "@/components/HomePageNew/All-Cources/ourCourses/OurCourses";
import FeaturedCourses from "@/components/HomePageNew/All-Cources/featuredCourses/FeaturedCourses";
import NewOurCoursesData from "@/components/HomePageNew/All-Cources/ourCourses/OurCoursesData";
import OurLocation from "@/components/NewComponents/OurLocation/OurLocation";
import HomeDynamicData from "@/data/newComponentData/dynamicComponentData/HomeDynamicData";

const HomeNew = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const timeoutModal = setTimeout(() => {
      setIsPopupVisible(true);
    }, 4000);

    return () => clearTimeout(timeoutModal);
  }, []);

  return (
    <Layout pageTitle="new-home">
      {isPopupVisible && (
        <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
      <HeaderOne />

      {/* <HeaderOne pageTitle="home" /> */}
      <MobileMenu />
      <HomeSliderBanner onFormSubmit={() => {}} />
      <UspSection />
      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background:
            "linear-gradient(180deg, #f2fef6 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
      <AboutUs handleEnrollButtonClick={handleEnrollButtonClick} />
      <OurLocation />
      <AdmitsCompanies handleEnrollButtonClick={handleEnrollButtonClick} />
      <StudentReview />
      {/* <OurCourses
        data={NewOurCoursesData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      /> */}
      <LearnersBenefit />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={HomeDynamicData.BlogSectionDataHome} />
      <Faq data={HomeDynamicData.faqSections} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export default HomeNew;
