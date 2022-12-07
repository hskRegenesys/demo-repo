import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import { digitalMarketing } from "@/data/sidebarPageContainer";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import VideoOne from "@/components/VideoSection/VideoOne";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductDetailsPage from "@/components/ProductDetails/ProductDetailsPage";

import React from "react";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";

const DigitalMarketing = () => {
  return (
    <Layout pageTitle="Digital Marketing">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Digital Marketing" parent="All courses" parentHref="/shop" />      
      <CourseDetails />  
      <ProductDescription /> 
      <VideoOne /> 
      <CourseCurriculum />  
      <ProductDetailsPage />
      <FaqsSection />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default DigitalMarketing;
