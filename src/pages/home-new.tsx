// HomeNew.js
import React from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/HomePageNew/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/HomePageNew/uspSection/UspSection";
import FeaturedCourses from "@/components/HomePageNew/featuredCourses/FeaturedCourses";

const HomeNew = () => {
  return (
    <Layout pageTitle="new-home">
      <HeaderOne pageTitle="home" />
      <HomeSliderBanner />
      <UspSection />
      <FeaturedCourses />
    </Layout>
  );
};

export default HomeNew;
