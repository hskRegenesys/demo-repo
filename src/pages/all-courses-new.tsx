import React, { useEffect, useState } from "react";
import WhyChooseDR from "@/components/NewComponents/whychooseDR/WhyChooseDR";
import OurCourses from "@/components/HomePageNew/All-Cources/ourCourses/OurCourses";
import NewHomeData from "@/data/newHomeData";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import Faq from "@/components/NewComponents/faq/Faq";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import CertificationDR from "@/components/NewComponents/certificationDR/CertificationDR";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import AllCoursesPageBanner from "@/components/NewComponents/allCoursesPageBanner/AllCoursesPageBanner";
import StudentYoutubeVideos from "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos";

import _ from "lodash";
import HomeSliderBanner from "@/components/NewComponents/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/NewComponents/uspSection/UspSection";
import AboutUs from "@/components/NewComponents/about/AboutUs";
import AdmitsCompanies from "@/components/NewComponents/admitsCompanies/AdmitsCompanies";
import LearnersBenefit from "@/components/NewComponents/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/NewComponents/connectContainer/ConnectContainer";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import FeaturedCourses from "@/components/NewComponents/featuredCourses/FeaturedCourses";
import NewOurCoursesData from "@/components/HomePageNew/All-Cources/ourCourses/OurCoursesData";
import AllCoursesDynamicData from "@/data/newComponentData/dynamicComponentData/AllCoursesDynamicData";

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
        <StudentReview />

        <Faq data={AllCoursesDynamicData.faqSections} />
        <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
      </Layout>
    </>
  );
};

export default AllCoursesNew;
