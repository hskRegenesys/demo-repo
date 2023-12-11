// HomeNew.js
import React from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/HomePageNew/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/HomePageNew/uspSection/UspSection";
import FeaturedCourses from "@/components/HomePageNew/featuredCourses/FeaturedCourses";
import AboutUs from "@/components/HomePageNew/about/AboutUs";
import AdmitsCompanies from "@/components/HomePageNew/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/HomePageNew/studentReview/StudentReview";
import LearnersBenefit from "@/components/HomePageNew/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/HomePageNew/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/HomePageNew/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/HomePageNew/blogSection/BlogSection";
import Faq from "@/components/HomePageNew/faq/Faq";
import FooterDR from "@/components/HomePageNew/footerDR/FooterDR";
import OurCourses from "@/components/HomePageNew/ourCourses/OurCourses";
import NewHomeData from "@/data/newHomeData";

const HomeNew = () => {
  return (
    <Layout pageTitle="new-home">
      <HeaderOne pageTitle="home" />
      <HomeSliderBanner />
      <UspSection />
      <FeaturedCourses />
      <AboutUs />
      <AdmitsCompanies />
      <StudentReview />
      <OurCourses data={NewHomeData} />
      <LearnersBenefit />
      <ConnectContainer />
      <StudentYoutubeVideos />
      <BlogSection />
      <Faq />
      <FooterDR />
    </Layout>
  );
};

export default HomeNew;
