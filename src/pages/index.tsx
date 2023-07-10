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
import ModalPopup from "@/components/Modal/ModalPopup";
import { courseService } from "src/services";
import _ from "lodash";
import Schemas from "../schemas";
import { Constants } from "src/schemas/data";
import StickyBar from "@/components/StickyFooter/Sticky";
import Loader from "@/components/Loader/Loader";
import { allCourseList } from "@/data/courseData";
import { trace } from "console";
import { Modal } from "react-bootstrap";
import ImageModalPopup from "@/components/Modal/ImageModalPopup";
import ThankYouPopup from "@/components/Modal/ThankYouPopup";

const Home2 = () => {
  const [show, setShow] = useState(true);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  // const getData = async () => {
  //   let courseListResponse = await courseService.allCourses();
  //   setcourseData(courseListResponse);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  let courses: any = [];

  if (allCourseList?.length) {
    courses = _.filter(
      allCourseList,
      (item: any) => item?.isAddon === false && item?.mode_id === 1
    );
  }

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
      <HomeCourses courses={courses} />
      <ExperienceSection />
      <WhyChooseUs />
      <PopularTopics />
      <TestimonialsStudent />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
      <Modal show={show} onHide={() => setShow(false)}>
        <ImageModalPopup
          bgImage="Pop-up_bg.webp"
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
