import React from "react";
import dynamic from "next/dynamic";

//import PageBanner from "@/components/BannerSection/PageBanner";
//import ContactSection from "@/components/ContactSection/ContactSection";
//import GetInTouch from "@/components/FeaturesSection/FeaturesSectionTwo";
//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
//import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
//import SearchPopup from "@/components/SearchPopup/SearchPopup";
//import CallToSection from "@/components/HomeSkillDescription/CallToSection";
//import SocialMedia from "@/components/SocialMedia/SocialMedia";
//import LandingForm from "@/components/commonForm/AllForms";
//import StickyBar from "@/components/StickyFooter/Sticky";

const GetInTouch = dynamic(
  () => import("@/components/FeaturesSection/FeaturesSectionTwo")
);

const SocialMedia = dynamic(
  () => import("@/components/SocialMedia/SocialMedia")
);

const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));

const Layout = dynamic(() => import("@/components/Layout/Layout"));
const ContactSection = dynamic(
  () => import("@/components/ContactSection/ContactSection")
);

const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const LandingForm = dynamic(() => import("@/components/commonForm/AllForms"));

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

const Contact = () => {
  return (
    <Layout pageTitle="contact">
      <Style />

      <HeaderOne pageTitle="contact" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" pageTitle="contact" />
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
