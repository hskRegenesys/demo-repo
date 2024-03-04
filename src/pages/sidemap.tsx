import React, { useState, useEffect, useRef } from "react";

import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";

import Layout from "@/components/Layout/Layout";

import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import _ from "lodash";

import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import SidemapComponent from "@/components/NewComponents/sidemap/SideMap";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import PopupData from "@/components/NewComponents/popupForm/PopupData";

const Sidemap = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const timeoutModal = setTimeout(() => {
      setIsPopupVisible(true);
    }, 4000);

    return () => clearTimeout(timeoutModal);
  }, []);

  return (
    <Layout pageTitle="home" context="multiple-page">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData.all}
        />
      )}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <SidemapComponent />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export default Sidemap;