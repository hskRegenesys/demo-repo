import React from "react";
import dynamic from "next/dynamic";

//import PageBanner from "@/components/BannerSection/PageBanner";
//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
//import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
//import SearchPopup from "@/components/SearchPopup/SearchPopup";
//import CallToSection from "@/components/HomeSkillDescription/CallToSection";
//import RefundPolicy from "@/components/RefundPolicy/RefundPolicy";
//import StickyBar from "@/components/StickyFooter/Sticky";

const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const Layout = dynamic(() => import("@/components/Layout/Layout"));
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const CallToSection = dynamic(
  () => import("@/components/HomeSkillDescription/CallToSection")
);
const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));
const RefundPolicy = dynamic(
  () => import("@/components/RefundPolicy/RefundPolicy")
);

const Terms = () => {
  return (
    <Layout pageTitle="refundPolicy">
      <Style />
      <HeaderOne pageTitle="refundPolicy" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="RefundPolicy" />
      <RefundPolicy />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
    </Layout>
  );
};

export default Terms;
