import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

import React from "react";

const About = () => {
  return (
    <Layout pageTitle="privacyPolicy">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Privacy Policy" />
      <PrivacyPolicy />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default About;
