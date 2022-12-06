import PageBanner from "@/components/BannerSection/PageBanner";
import ContactSection from "@/components/ContactSection/ContactSection";
import FeaturesSectionTwo from "@/components/FeaturesSection/FeaturesSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import CallToSection from "@/components/CallToSection/CallToSection";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";



import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact us"> 
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <FeaturesSectionTwo/>
      <ContactSection form map  />  
      <ServicesSectionThree />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Contact;
