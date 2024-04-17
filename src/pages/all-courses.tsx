import dynamic from "next/dynamic";
import { useState } from "react";
import { Suspense } from "react";
// import PageBanner from "@/components/BannerSection/PageBanner";
//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
//import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
//import SearchPopup from "@/components/SearchPopup/SearchPopup";
// import CallToSection from "@/components/HomeSkillDescription/CallToSection";
//import AllCourseText from "@/components/StudentPlacement/AllCourseText";
import React from "react";
// import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
//import VideoOne from "@/components/VideoSection/VideoOne";
//import PopularTopics from "@/components/PopularTopics/PopularTopics";
// import AllCourseGallery from "@/components/AllCourseGallery/AllCourseGallery";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";

const PopularTopics = dynamic(
  () => import("@/components/PopularTopics/PopularTopics")
);

const VideoOne = dynamic(() => import("@/components/VideoSection/VideoOne"));

const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));

const Layout = dynamic(() => import("@/components/Layout/Layout"));

const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const AllCourseText = dynamic(
  () => import("@/components/StudentPlacement/AllCourseText")
);

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const CallToSection = dynamic(
  () => import("@/components/HomeSkillDescription/CallToSection")
);
const PartnerOne = dynamic(
  () => import("@/components/ExperienceSection/ExperienceSection")
);
// import StickyBar from "@/components/StickyFooter/Sticky";
const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));
const AllCourseGallery = dynamic(
  () => import("@/components/AllCourseGallery/AllCourseGallery"),
  { loading: () => <p>Loading...</p> }
);
const allCourse = () => {
  const [showComponent, setShowComponent] = useState(false);

  // Function to toggle the visibility of the component
  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <>
      <Layout pageTitle="allCourse">
        <Style />

        <HeaderOne pageTitle="all-courses" />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Products" page="All courses" />
        <AllCourseText />
        <AllCourseGallery />
        <PartnerOne />
        <VideoOne />
        <PopularTopics />
        <CallToSection />
        <MainFooter />
        <StickyBar />
      </Layout>
    </>
  );
};

export default allCourse;
