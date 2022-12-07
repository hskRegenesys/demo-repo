import PageBanner from "@/components/BannerSection/PageBanner";
import ContactSection from "@/components/ContactSection/ContactSection";
import GetInTouch from "@/components/FeaturesSection/FeaturesSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import SocialMedia from "@/components/SocialMedia/SocialMedia";


import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact us"> 
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <GetInTouch/>
      <ContactSection form map  />  
      <SocialMedia />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Contact;
