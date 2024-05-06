// OurLocation.tsx
import React, { useState, useEffect } from "react";
import OurLocationData from "../../../data/newComponentData/commonComponentData/OurLocationData";
import Styles from "./OurLocation.module.css";
import UsaSection from "./Contarys/UsaSection";
import KenyaSection from "./Contarys/KenyaSecion";
import IndiaSection from "./Contarys/IndiaSecion";
import UgandaSection from "./Contarys/UgandaSection";
import SouthAfricaSection from "./Contarys/SouthAfrica";
import CroatiaSection from "./Contarys/CroatiaSection";
import NigeriaSection from "./Contarys/NigeriaSection";
import TanzaniaSection from "./Contarys/TanzaniaSection";

const OurLocation: React.FC = () => {
  const {
    smallHeading,
    bigHeading,
    paraText,
    countryImage,
    USA,
    Kenya,
    India,
    SouthAfrica,
    Croatia,
    Uganda,
    Nigeria,
    Tanzania,
    // Add other countries as needed
  } = OurLocationData;

  const [isUsaHovered, setUsaHovered] = useState(false);
  const [isKenyaHovered, setKenyaHovered] = useState(false);
  const [isIndiaHovered, setIndiaHovered] = useState(false);
  const [isSouthAfricaHovered, setSouthAfricaHovered] = useState(false);
  const [isCroatiaHovered, setCroatiaHovered] = useState(false);
  const [isUgandaHovered, setUgandaHovered] = useState(false);
  const [isNigeriaHovered, setNigeriaHovered] = useState(false);
  const [isTanzaniaHovered, setTanzaniaHovered] = useState(false);
  let usaHoverTimeout: NodeJS.Timeout;

  const handleUsaMouseEnter = () => {
    setUsaHovered(true);
    setKenyaHovered(false);
    setIndiaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };
  const handleUsaMouseLeave = () => {
    setUsaHovered(false);
  };

  const handleKenyaMouseEnter = () => {
    setKenyaHovered(true);
    setUsaHovered(false);
    setIndiaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };

  const handleKenyaMouseLeave = () => {
    setKenyaHovered(false);
  };

  const handleIndiaMouseEnter = () => {
    setIndiaHovered(true);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };

  const handleIndiaMouseLeave = () => {
    setIndiaHovered(false);
  };

  const handleUgandaMouseEnter = () => {
    setIndiaHovered(false);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(true);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };

  const handleUgandaMouseLeave = () => {
    setUgandaHovered(false);
  };

  const handleSouthAfricaMouseEnter = () => {
    setIndiaHovered(false);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(true);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };

  const handleSouthAfricaMouseLeave = () => {
    setSouthAfricaHovered(false);
  };

  const handleCroatiaMouseEnter = () => {
    setIndiaHovered(false);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(true);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(false);
  };

  const handleCroatiaMouseLeave = () => {
    setCroatiaHovered(false);
  };

  const handleNigeriaMouseEnter = () => {
    setIndiaHovered(false);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(true);
    setTanzaniaHovered(false);
  };

  const handleNigeriaMouseLeave = () => {
    setNigeriaHovered(false);
  };
  const handleTanzaniaMouseEnter = () => {
    setIndiaHovered(false);
    setUsaHovered(false);
    setKenyaHovered(false);
    setSouthAfricaHovered(false);
    setCroatiaHovered(false);
    setUgandaHovered(false);
    setNigeriaHovered(false);
    setTanzaniaHovered(true);
  };

  const handleTanzaniaMouseLeave = () => {
    setTanzaniaHovered(false);
  };

  const [isExpanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxChars = isMobile ? 200 : 850;
  const truncatedText = paraText.slice(0, maxChars);

  const toggleView = () => {
    setExpanded(!isExpanded);
  };

  const shouldRenderViewMore = !isExpanded && paraText.length > maxChars;

  return (
    <div className={Styles.locationContainer}>
      <div className={Styles.TopSectionMobile}>
        <h2 className={Styles.heading}>{smallHeading}</h2>
        <h2 className={Styles.subheading}>{bigHeading}</h2>
      </div>

      <div className={Styles.leftSection}>
        <div className={Styles.TopSectionDesktap}>
          <h2 className={Styles.heading}>{smallHeading}</h2>
          <h3 className={Styles.subheading}>{bigHeading}</h3>
        </div>

        <p>
          {isExpanded ? paraText : `${truncatedText}`}
          {shouldRenderViewMore && (
            <span className={Styles.viewMore} onClick={toggleView}>
              ...View More
            </span>
          )}
          {isExpanded && (
            <span className={Styles.viewMore} onClick={toggleView}>
              View Less
            </span>
          )}
        </p>
      </div>
      <div className={Styles.rightSection}>
        <div className={Styles.locationPin}>
          <div className={Styles.usaLocation}>
            <UsaSection
              isHovered={isUsaHovered}
              onMouseEnter={handleUsaMouseEnter}
              onMouseLeave={handleUsaMouseLeave}
            />
          </div>

          <div className={Styles.IndiaLocation}>
            <IndiaSection
              isHovered={isIndiaHovered}
              onMouseEnter={handleIndiaMouseEnter}
              onMouseLeave={handleIndiaMouseLeave}
            />
          </div>

          <div className={Styles.croatiaLocation}>
            <CroatiaSection
              isHovered={isCroatiaHovered}
              onMouseEnter={handleCroatiaMouseEnter}
              onMouseLeave={handleCroatiaMouseLeave}
            />
          </div>
          <div className={Styles.ugandaLocation}>
            <UgandaSection
              isHovered={isUgandaHovered}
              onMouseEnter={handleUgandaMouseEnter}
              onMouseLeave={handleUgandaMouseLeave}
            />
          </div>
          <div className={Styles.nigeriaLocation}>
            <NigeriaSection
              isHovered={isNigeriaHovered}
              onMouseEnter={handleNigeriaMouseEnter}
              onMouseLeave={handleNigeriaMouseLeave}
            />
          </div>

          <div className={Styles.KenyaLocation}>
            <KenyaSection
              isHovered={isKenyaHovered}
              onMouseEnter={handleKenyaMouseEnter}
              onMouseLeave={handleKenyaMouseLeave}
            />
          </div>
          <div className={Styles.tanzaniaLocation}>
            <TanzaniaSection
              isHovered={isTanzaniaHovered}
              onMouseEnter={handleTanzaniaMouseEnter}
              onMouseLeave={handleTanzaniaMouseLeave}
            />
          </div>
          <div className={Styles.southAfricaLocation}>
            <SouthAfricaSection
              isHovered={isSouthAfricaHovered}
              onMouseEnter={handleSouthAfricaMouseEnter}
              onMouseLeave={handleSouthAfricaMouseLeave}
            />
          </div>
          {/* Add more sections for other countries */}
        </div>

        <div className={Styles.WorldImgContainer}>
          <img src={countryImage} className={Styles.WorldImg} alt="World Map" />
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
