import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
import StickyBar from "@/components/StickyFooter/Sticky";

import React from "react";

const Terms = () => {
  return (
    <Layout pageTitle="termsCondition">
      <Style />
      <HeaderOne pageTitle="termsCondition" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Terms & Conditions" pageTitle="termsCondition" />
      <TermsAndConditions />
      <CallToSection />
      <MainFooter normalPadding={false} />
      <StickyBar />
    </Layout>
  );
};

export default Terms;
