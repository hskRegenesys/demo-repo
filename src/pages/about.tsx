import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import AboutMarko from "@/components/AboutMarko/AboutMarko";
import AboutUsDescription from "@/components/StudentPlacement/AboutUsDescription";
import MissionVison from "@/components/MissionVison/MissionVison";
import React from "react";
import StickyBar from "@/components/StickyFooter/Sticky";

const About = () => {
  return (
    <Layout pageTitle="about">
      <Style />
      <HeaderOne pageTitle="about" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <AboutUsDescription />
      <MissionVison />
      <AboutMarko />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
    </Layout>
  );
};

export default About;
