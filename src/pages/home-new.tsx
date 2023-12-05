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
    </Layout>
  );
};

export default HomeNew;
