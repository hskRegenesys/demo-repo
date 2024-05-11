import React, { useState, useEffect, useRef } from "react";

import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";

import Layout from "@/components/Layout/Layout";

import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import _ from "lodash";

import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import PopupData from "@/components/NewComponents/popupForm/PopupData";
import SitemapComponent from "@/components/NewComponents/sitemap/SiteMap";

const Sidemap = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };
  const PopupData = {
    PopupDesktop: "/assets/images/new-component-assets/WebModal.png",
    PopupMobile: "/assets/images/new-component-assets/MobileModal.png",
  };

  return (
    <Layout pageTitle="home" context="multiple-page">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
        />
      )}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <SitemapComponent />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export default Sidemap;
