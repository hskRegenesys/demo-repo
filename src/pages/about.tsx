import React from "react";
import dynamic from "next/dynamic";
import Style from "@/components/Reuseable/Style";
import StickyBar from "@/components/StickyFooter/Sticky";
import Layout from "@/components/Layout/Layout";

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const CallToSection = dynamic(
  () => import("@/components/CallToScetion/CallToSection")
);
const AboutMarko = dynamic(() => import("@/components/AboutMarko/AboutMarko"));
const AboutUsDescription = dynamic(
  () => import("@/components/AboutUsDescription/AboutUsDescription")
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
