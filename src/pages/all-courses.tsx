import dynamic from "next/dynamic";

// import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
// import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import AllCourseText from "@/components/StudentPlacement/AllCourseText";
import React from "react";
// import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import AllCourseGallery from "@/components/AllCourseGallery/AllCourseGallery";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const CallToSection = dynamic(
  () => import("@/components/HomeSkillDescription/CallToSection")
);
const PartnerOne = dynamic(
  () => import("@/components/ExperienceSection/ExperienceSection")
);
const allCourse = () => {
  return (
    <Layout pageTitle="allCourse">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Products" page="All courses" />
      <AllCourseText />
      <AllCourseGallery />
      <PartnerOne />
      <VideoOne />
      <PopularTopics />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default allCourse;
