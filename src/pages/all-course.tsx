import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import ShopPage from "@/components/ShopPage/ShopPage";
import AllCourseText from "@/components/StudentPlacement/AllCourseText";
import React from "react";
import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";

const allCourse = () => {
  return (
    <Layout pageTitle="All courses">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Products" page="All courses" />
      <AllCourseText />
      <ShopPage />
      <PartnerOne />   
      <VideoOne /> 
      <PopularTopics />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default allCourse;
