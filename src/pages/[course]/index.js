import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import CourseText from "@/components/courses/coursesText";
import React from "react";
import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import SubCourseDetails from "@/components/courses/subcourseDetails";
import { useRouter } from "next/router";

const Course = () => {
  const router = useRouter();
  console.log("router.query----", router.query);
  return (
    <Layout pageTitle={router?.query?.course}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title={router?.query?.course?.toString()}
        page={router?.query?.course?.toString()}
      />
      <CourseText page={router?.query?.course?.toString()} />
      <SubCourseDetails page={router?.query?.course?.toString()} />
      <PartnerOne />
      <VideoOne />
      <PopularTopics />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default Course;
