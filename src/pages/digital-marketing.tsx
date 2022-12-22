import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import VideoOne from "@/components/VideoSection/VideoOne";
import SkillDetailSection from "@/components/SkillDetailSection/SkillDetailSection";
import FeesDetails from "@/components/SkillDetailSection/FeesDetails";
import CourseBenefits from "@/components/CourseBenefits/CourseBenefits";
import ToolsCovered from "@/components/ToolsCovered/ToolsCovered";
import React from "react";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";
import JoinReasons from "@/components/JoinReasons/JoinReasons";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";

const DigitalMarketing = () => {
  return (
    <Layout pageTitle="Digital Marketing">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Digital Marketing" parent="All courses" parentHref="/shop" />      
      <CourseDetails />  
      <SkillDetailSection /> 
      <JoinReasons/>
      <ToolsCovered />
      <FeatureSeven />
      <VideoOne /> 
      <CourseCurriculum />  
      <FeesDetails />
      <CourseBenefits />
      <FaqsSection />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default DigitalMarketing;
