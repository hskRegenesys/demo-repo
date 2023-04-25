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
import LandingForm from "@/components/commonForm/AllForms";
import StickyBar from "@/components/StickyFooter/Sticky";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="contact">
      <Style />

      <HeaderOne pageTitle="contact" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <GetInTouch />
      <LandingForm />
      <ContactSection map />
      <SocialMedia />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
    </Layout>
  );
};

export default Contact;
