import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import DigitalMarketingText from "@/components/courses/coursesText";
import React from "react";
import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import DigitalMarketingCourses from "@/components/courses/subcourseDetails";

const DigitalMarketingMain = () => {
  return (
    <Layout pageTitle="Digital Marketing">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Digital Marketing" page="Digital Marketing" />
      <DigitalMarketingText />
      <DigitalMarketingCourses />
      <PartnerOne />
      <VideoOne />
      <PopularTopics />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default DigitalMarketingMain;
