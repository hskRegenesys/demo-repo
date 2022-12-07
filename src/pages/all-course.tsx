import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/CallToSection/CallToSection";
import ShopPage from "@/components/ShopPage/ShopPage";
import AllCourseText from "@/components/SponsorsSection/AllCourseText";
import React from "react";
import PartnerOne from "@/components/PartnerSection/PartnerOne";
import VideoOne from "@/components/VideoSection/VideoOne";
import TeamSection from "@/components/TeamSection/TeamSection";

const allCourse = () => {
  return (
    <Layout pageTitle="All courses">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Products" page="All courses" />
      <AllCourseText />
      <ShopPage />
      <PartnerOne />   
      <VideoOne /> 
      <TeamSection />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default allCourse;
