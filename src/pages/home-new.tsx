// HomeNew.js
import React, { useState, useEffect } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/HomePageNew/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/HomePageNew/uspSection/UspSection";
import FeaturedCourses from "@/components/HomePageNew/featuredCourses/FeaturedCourses";
import AboutUs from "@/components/HomePageNew/about/AboutUs";
import AdmitsCompanies from "@/components/HomePageNew/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/HomePageNew/studentReview/StudentReview";
import LearnersBenefit from "@/components/HomePageNew/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/HomePageNew/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/HomePageNew/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/HomePageNew/blogSection/BlogSection";
import Faq from "@/components/HomePageNew/faq/Faq";
import FooterDR from "@/components/HomePageNew/footerDR/FooterDR";
import OurCourses from "@/components/HomePageNew/ourCourses/OurCourses";
import NewHomeData from "@/data/newHomeData";
import RequestForm from "@/components/HomePageNew/requestForm/RequestForm";
import ThankYouPopup from "@/components/Modal/ThankYouPopup";
import { allCourseList } from "@/data/courseData";
import { Modal } from "react-bootstrap";
import _ from "lodash";
import PopupForm from "@/components/HomePageNew/popupForm/PopupForm";
import MobileMenu from "@/components/Header/MobileMenu";

const HomeNew = () => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  let courses: any = [];

  if (allCourseList?.length) {
    courses = _.filter(
      allCourseList,
      (item: any) => item?.isAddon === false && item?.mode_id === 1
    );
  }

  useEffect(() => {
    const timeoutModal = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timeoutModal);
  }, []);
  return (
    <Layout pageTitle="new-home">
      {isPopupVisible && (
        <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
      <HeaderOne pageTitle="home" />
      <MobileMenu />
      <HomeSliderBanner />
      <UspSection />
      <FeaturedCourses handleEnrollButtonClick={handleEnrollButtonClick} />
      <AboutUs handleEnrollButtonClick={handleEnrollButtonClick} />
      <AdmitsCompanies handleEnrollButtonClick={handleEnrollButtonClick} />
      <StudentReview />
      <OurCourses
        data={NewHomeData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <LearnersBenefit />
      <ConnectContainer />
      <StudentYoutubeVideos />
      <BlogSection />
      <Faq />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
      {/* <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal> */}
    </Layout>
  );
};

export default HomeNew;
