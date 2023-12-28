import React, { useEffect, useState } from "react";
import WhyChooseDR from "@/components/HomePageNew/whychooseDR/WhyChooseDR";
import FeaturedCourses from "@/components/HomePageNew/featuredCourses/FeaturedCourses";
import OurCourses from "@/components/HomePageNew/ourCourses/OurCourses";
import NewHomeData from "@/data/newHomeData";
import PopupForm from "@/components/HomePageNew/popupForm/PopupForm";
import FooterDR from "@/components/HomePageNew/footerDR/FooterDR";
import Faq from "@/components/HomePageNew/faq/Faq";
import StudentReview from "@/components/HomePageNew/studentReview/StudentReview";
import CertificationDR from "@/components/HomePageNew/certificationDR/CertificationDR";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import AllCoursesPageBanner from "@/components/HomePageNew/allCoursesPageBanner/AllCoursesPageBanner";
import StudentYoutubeVideos from "@/components/HomePageNew/studentYoutubeVideos/StudentYoutubeVideos";

import _ from "lodash";
import HomeSliderBanner from "@/components/HomePageNew/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/HomePageNew/uspSection/UspSection";
import AboutUs from "@/components/HomePageNew/about/AboutUs";
import AdmitsCompanies from "@/components/HomePageNew/admitsCompanies/AdmitsCompanies";
import LearnersBenefit from "@/components/HomePageNew/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/HomePageNew/connectContainer/ConnectContainer";
import BlogSection from "@/components/HomePageNew/blogSection/BlogSection";

const AllCoursesNew = () => {
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
    <>
      <Layout>
        {isPopupVisible && (
          <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
        )}
        <HeaderOne />

        <MobileMenu />
        <AllCoursesPageBanner
          handleEnrollButtonClick={handleEnrollButtonClick}
        />
        <WhyChooseDR handleEnrollButtonClick={handleEnrollButtonClick} />
        <FeaturedCourses
          handleEnrollButtonClick={handleEnrollButtonClick}
          style={{
            background:
              "linear-gradient(180deg, #f2fef6 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        <OurCourses
          data={NewHomeData}
          handleEnrollButtonClick={handleEnrollButtonClick}
        />
        <CertificationDR
          page="all-courses-new"
          handleEnrollButtonClick={handleEnrollButtonClick}
        />
        <StudentReview />

        <Faq />
        <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
      </Layout>
    </>
  );
};

export default AllCoursesNew;
