import BannerSection from "@/components/BannerSection/BannerSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import FluidSection from "@/components/FluidSection/FluidSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import GallerySection from "@/components/GallerySection/GallerySection";
import GetQuote from "@/components/GetQuote/GetQuote";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import CallToSection from "@/components/CallToSection/CallToSection";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";

import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ServiceSectionThree from "@/components/ServicesSection/ServiceSectionThree";
import WhyUs from "@/components/WhyUs/WhyUs";
import React from "react";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialsFive from "@/components/TestimonialsSection/TestimonialsFive";
import HeaderTwo from "@/components/Header/HeaderTwo";
import PartnerOne from "@/components/PartnerSection/PartnerOne";

const Home2 = () => {
  return (
    <Layout pageTitle="Home">
      <Style />
      <HeaderOne/>
      <MobileMenu />
      <SearchPopup />    
      <FeaturedSection />
      <SponsorsSection />
      <CallToSectionTwo/>
      <GallerySection />
      <PartnerOne />    
      <ServiceSectionThree />
      <TeamSection />
      <TestimonialsFive />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Home2;
