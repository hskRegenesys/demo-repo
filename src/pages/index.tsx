import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// import HomeBanner from "@/components/HomeBanner/HomeBanner";
// import HomeCourses from "@/components/HomeCourses/HomeCourses";
// import HeaderOne from "@/components/Header/HeaderOne";
// import MobileMenu from "@/components/Header/MobileMenu";
// import CallToSection from "@/components/HomeSkillDescription/CallToSection";
// import HomeSkillDescription from "@/components/HomeSkillDescription/HomeSkillDescription";
// import Layout from "@/components/Layout/Layout";
// import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
// import SearchPopup from "@/components/SearchPopup/SearchPopup";
// import StudentPlacement from "@/components/StudentPlacement/StudentPlacement";
// import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
// import PopularTopics from "@/components/PopularTopics/PopularTopics";
// import TestimonialsStudent from "@/components/TestimonialsStudent/TestimonialsStudent";
// import TrendingSection from "@/components/TrendingSection/TrendingSection";
// import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";

const ExperienceSection = dynamic(
  () => import("@/components/ExperienceSection/ExperienceSection")
);
const TrendingSection = dynamic(
  () => import("@/components/TrendingSection/TrendingSection")
);
const TestimonialsStudent = dynamic(
  () => import("@/components/PopularTopics/PopularTopics")
);
const PopularTopics = dynamic(
  () => import("@/components/PopularTopics/PopularTopics")
);
const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs/WhyChooseUs")
);
const StudentPlacement = dynamic(
  () => import("@/components/StudentPlacement/StudentPlacement")
);
const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const Layout = dynamic(() => import("@/components/Layout/Layout"));
const HomeSkillDescription = dynamic(
  () => import("@/components/HomeSkillDescription/HomeSkillDescription")
);
const CallToSection = dynamic(
  () => import("@/components/HomeSkillDescription/CallToSection")
);
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const HomeBanner = dynamic(() => import("@/components/HomeBanner/HomeBanner"));
const HomeCourses = dynamic(
  () => import("@/components/HomeCourses/HomeCourses")
);

import _ from "lodash";
import Schemas from "../schemas";
import { Constants } from "src/schemas/data";
import StickyBar from "@/components/StickyFooter/Sticky";

import { allCourseList } from "@/data/courseData";

import { Modal } from "react-bootstrap";
import ImageModalPopup from "@/components/Modal/ImageModalPopup";
import ThankYouPopup from "@/components/Modal/ThankYouPopup";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import TestimonialsVideo from "@/components/TestimonialsVideo/testimonialsVideo";
import videoTestimonialData from "@/data/videoTestimonial";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopupData from "@/components/NewComponents/popupForm/PopupData";

const Home2 = () => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience-section");
      if (experienceSection) {
        const { top } = experienceSection.getBoundingClientRect();
        if (top < window.innerHeight * 0.5) {
          setIsPopupVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <Layout pageTitle="home">
      <Schemas type={Constants.home} />
      <Style />
      <HeaderOne pageTitle="home" />
      <MobileMenu />
      <SearchPopup />
      <HomeBanner />
      <StudentPlacement />
      <HomeSkillDescription />
      <TrendingSection />
      <TestimonialsVideo videoDetails={videoTestimonialData} />
      <GoogleMap />
      <HomeCourses courses={courses} />
      <div id="experience-section"></div>
      <ExperienceSection />

      <WhyChooseUs />
      <PopularTopics />
      <TestimonialsStudent />

      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
      {/* <div id="tawk_5825dfc218d9f16af02abeea"></div>; */}
      {/* <Modal show={show} onHide={() => setShow(false)}>
        <ImageModalPopup bgImage="DR-website-popup-1.webp" setShows={setShow} />
      </Modal> */}

      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData.homePage}
        />
      )}

      {/* <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal> */}
      <ToastContainer />
    </Layout>
  );
};

export default Home2;
