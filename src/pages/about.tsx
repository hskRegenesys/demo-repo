import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/CallToSection/CallToSection";
import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import SponsorsSectionFour from "@/components/SponsorsSection/SponsorsSectionFour";
import HowItWorksPage from "@/components/HowItWorks/HowItWorksPage";

import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <SponsorsSectionFour />
      <HowItWorksPage />
      <AboutMeOne />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default About;
