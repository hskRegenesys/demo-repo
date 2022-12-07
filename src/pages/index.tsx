import BannerSection from "@/components/BannerSection/BannerSection";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import FluidSection from "@/components/FluidSection/FluidSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import HomeCourses from "@/components/HomeCourses/HomeCourses";
import GetQuote from "@/components/GetQuote/GetQuote";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import HomeSkillDescription from "@/components/HomeSkillDescription/HomeSkillDescription";

import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import StudentPlacement from "@/components/StudentPlacement/StudentPlacement";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React from "react";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import TestimonialsStudent from "@/components/TestimonialsStudent/TestimonialsStudent";
import ExperienceSection  from "@/components/ExperienceSection/ExperienceSection";

const Home2 = () => {
  return (
    <Layout pageTitle="Home">
      <Style />
      <HeaderOne/>
      <MobileMenu />
      <SearchPopup />    
      <HomeBanner />
      <StudentPlacement />
      <HomeSkillDescription/>
      <HomeCourses />
      <ExperienceSection />    
      <WhyChooseUs />
      <PopularTopics />
      <TestimonialsStudent />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Home2;
