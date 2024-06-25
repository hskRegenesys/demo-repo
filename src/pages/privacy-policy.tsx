import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
//import PageBanner from "@/components/BannerSection/PageBanner";
//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
//import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
//import CallToSection from "@/components/HomeSkillDescription/CallToSection";
//import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
//import StickyBar from "@/components/StickyFooter/Sticky";

const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const Layout = dynamic(() => import("@/components/Layout/Layout"));
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const CallToSection = dynamic(
  () => import("@/components/CallToScetion/CallToSection")
);
const PrivacyPolicy = dynamic(
  () => import("@/components/PrivacyPolicy/PrivacyPolicy")
);
const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));

const About = () => {
  return (
    <Layout pageTitle="privacyPolicy">
      <Style />
      <HeaderOne pageTitle="privacyPolicy" />
      <MobileMenu />
      <PageBanner title="Privacy Policy" pageTitle="privacy-policy" />
      <PrivacyPolicy />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
    </Layout>
  );
};

export default About;
