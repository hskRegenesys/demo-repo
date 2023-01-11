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
import { courseService } from "src/services";
import _ from "lodash";

const Home2 = () => {
  const [courseData, setcourseData] = useState([]);
  const getData = async () => {
    let courseListResponse = await courseService.allCourses();
    setcourseData(courseListResponse);
  };

  useEffect(() => {
    getData();
  }, []);

  let courses: any = [];

  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item: any) => item?.isAddon === false && item?.mode_id === 1
    );
  }

  return (
    <Layout pageTitle="home">
      <Style />
      <HeaderOne />
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
    </Layout>
  );
};

export default Home2;
