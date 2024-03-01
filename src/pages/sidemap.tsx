import React, { useState, useEffect, useRef } from "react";

import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";

import Layout from "@/components/Layout/Layout";

import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import _ from "lodash";

import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import SidemapComponent from "@/components/NewComponents/sidemap/SideMap";

const Sidemap = () => {
  const handleEnrollButtonClick = () => {};

  return (
    <Layout pageTitle="home" context="multiple-page">
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
