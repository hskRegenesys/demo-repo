import React, { useState, useEffect } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/HomePageNew/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/HomePageNew/uspSection/UspSection";
import AboutUs from "@/components/HomePageNew/about/AboutUs";
import AdmitsCompanies from "@/components/HomePageNew/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/HomePageNew/studentReview/StudentReview";
import LearnersBenefit from "@/components/HomePageNew/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/HomePageNew/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/HomePageNew/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/HomePageNew/blogSection/BlogSection";
import Faq from "@/components/HomePageNew/faq/Faq";
import FooterDR from "@/components/HomePageNew/footerDR/FooterDR";
import NewHomeData from "@/data/newHomeData";
import _ from "lodash";
import PopupForm from "@/components/HomePageNew/popupForm/PopupForm";
import MobileMenu from "@/components/Header/MobileMenu";
import ExploreTheCourses from "@/components/HomePageNew/exploreTheCouses/ExploreTheCourses";
import OurCourses from "@/components/HomePageNew/All-Cources/ourCourses/OurCourses";
import FeaturedCourses from "@/components/HomePageNew/All-Cources/featuredCourses/FeaturedCourses";
import NewOurCoursesData from "@/components/HomePageNew/All-Cources/ourCourses/OurCoursesData";
import OurLocation from "@/components/HomePageNew/OurLocation/OurLocation";

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
      <OurCourses
        data={NewOurCoursesData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <LearnersBenefit />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection />
      <Faq />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export default HomeNew;
