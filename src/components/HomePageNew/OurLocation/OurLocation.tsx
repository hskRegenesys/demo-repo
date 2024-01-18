// OurLocation.tsx
import React, { useState } from "react";
import OurLocationData from "./OurLocationData";
import Styles from "./OurLocation.module.css";
import UsaSection from "./Contarys/UsaSection";
import KenyaSection from "./Contarys/KenyaSecion";
import IndiaSection from "./Contarys/IndiaSecion";
import UgandaSection from "./Contarys/UgandaSection";

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

  return (
    <div className={Styles.locationContainer}>
      <div className={Styles.leftSection}>
        <h2>{smallHeading}</h2>
        <h1>{bigHeading}</h1>
        <p>{paraText}</p>
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
          <div className={Styles.KenyaLocation}>
            <KenyaSection
              isHovered={isKenyaHovered}
              onMouseEnter={handleKenyaMouseEnter}
              onMouseLeave={handleKenyaMouseLeave}
            />
          </div>
          <div className={Styles.IndiaLocation}>
            <IndiaSection
              isHovered={isIndiaHovered}
              onMouseEnter={handleIndiaMouseEnter}
              onMouseLeave={handleIndiaMouseLeave}
            />
          </div>
          <div className={Styles.southAfricaLocation}>
            {/* <SouthAfricaSection
              isHovered={isSouthAfricaHovered}
              onMouseEnter={() => setSouthAfricaHovered(true)}
              onMouseLeave={() => setSouthAfricaHovered(false)}
            /> */}
          </div>
          <div className={Styles.croatiaLocation}>
            {/* <CroatiaSection
              isHovered={isCroatiaHovered}
              onMouseEnter={() => setCroatiaHovered(true)}
              onMouseLeave={() => setCroatiaHovered(false)}
            /> */}
          </div>
          <div className={Styles.ugandaLocation}>
            <UgandaSection
              isHovered={isUgandaHovered}
              onMouseEnter={handleUgandaMouseEnter}
              onMouseLeave={handleUgandaMouseLeave}
            />
          </div>
          <div className={Styles.nigeriaLocation}>
            {/* <NigeriaSection
              isHovered={isNigeriaHovered}
              onMouseEnter={() => setNigeriaHovered(true)}
              onMouseLeave={() => setNigeriaHovered(false)}
            /> */}
          </div>
          <div className={Styles.tanzaniaLocation}>
            {/* <TanzaniaSection
              isHovered={isTanzaniaHovered}
              onMouseEnter={() => setTanzaniaHovered(true)}
              onMouseLeave={() => setTanzaniaHovered(false)}
            /> */}
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
