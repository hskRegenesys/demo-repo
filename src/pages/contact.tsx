import React from "react";
import dynamic from "next/dynamic";
import Style from "@/components/Reuseable/Style";

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
  () => import("@/components/CallToScetion/CallToSection")
);

const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));

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
