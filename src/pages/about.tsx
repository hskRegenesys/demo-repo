import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
//import PageBanner from "@/components/BannerSection/PageBanner";
//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
//import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
//import SearchPopup from "@/components/SearchPopup/SearchPopup";
//import CallToSection from "@/components/HomeSkillDescription/CallToSection";
//import AboutMarko from "@/components/AboutMarko/AboutMarko";
//import AboutUsDescription from "@/components/StudentPlacement/AboutUsDescription";
//import MissionVison from "@/components/MissionVison/MissionVison";

import StickyBar from "@/components/StickyFooter/Sticky";

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);

const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const Layout = dynamic(() => import("@/components/Layout/Layout"));
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const CallToSection = dynamic(
  () => import("@/components/HomeSkillDescription/CallToSection")
);
const AboutMarko = dynamic(() => import("@/components/AboutMarko/AboutMarko"));
const AboutUsDescription = dynamic(
  () => import("@/components/StudentPlacement/AboutUsDescription")
);
const MissionVison = dynamic(
  () => import("@/components/MissionVison/MissionVison")
);

const About = () => {
  return (
    <Layout pageTitle="about">
      <Style />
      <HeaderOne pageTitle="about" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" pageTitle="about" />
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
