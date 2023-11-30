import React, { useState, useEffect, useContext } from "react";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeCourses from "@/components/HomeCourses/HomeCourses";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import HomeSkillDescription from "@/components/HomeSkillDescription/HomeSkillDescription";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import StudentPlacement from "@/components/StudentPlacement/StudentPlacement";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import TestimonialsStudent from "@/components/TestimonialsStudent/TestimonialsStudent";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";

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

const Home2 = () => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);

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
      <ExperienceSection />
      <WhyChooseUs />
      <PopularTopics />
      <TestimonialsStudent />

      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
      {/* <div id="tawk_5825dfc218d9f16af02abeea"></div>; */}
      <Modal show={show} onHide={() => setShow(false)}>
        <ImageModalPopup
          bgImage="DR-website-popup-1.webp"
          setShows={setShow}
          thankYouShow={setThankYouShow}
        />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </Layout>
  );
};

export default Home2;
