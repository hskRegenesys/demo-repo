// OurLocation.tsx
import React, { useState, useEffect } from "react";
import OurLocationData from "../../../data/newComponentData/commonComponentData/OurLocationData";
import Styles from "./OurLocation.module.css";
import UsaSection from "./CountriesDetails/UsaSection";
import KenyaSection from "./CountriesDetails/KenyaSection";
import IndiaSection from "./CountriesDetails/IndiaSection";
import UgandaSection from "./CountriesDetails/UgandaSection";
import SouthAfricaSection from "./CountriesDetails/SouthAfrica";
import CroatiaSection from "./CountriesDetails/CroatiaSection";
import NigeriaSection from "./CountriesDetails/NigeriaSection";
import TanzaniaSection from "./CountriesDetails/TanzaniaSection";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

const OurLocation: React.FC = () => {
  const { smallHeading, bigHeading, paraText, countryImage } = OurLocationData;

  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [isExpanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imageUrl = imageBaseUrl();
  let usaHoverTimeout: NodeJS.Timeout;
  const handleMouseEnter = (location: string) => {
    if (!isMobile) {
      setHoveredLocation(location);
    }
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

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
  const inlineStyle =
    hoveredLocation === "uganda" ? { zIndex: -1 } : { zIndex: 2 };

  return (
    <div className={Styles.locationContainer}>
      <div className={Styles.TopSectionMobile}>
        <p className="main-heading-start">{smallHeading}</p>
        <h2 className="main-sub-heading-start">{bigHeading}</h2>
      </div>

      <div className={Styles.leftSection}>
        <div className={Styles.TopSectionDesktap}>
          <h2 className="main-heading-start">{smallHeading}</h2>
          <h3 className="main-sub-heading-start">{bigHeading}</h3>
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
              isHovered={hoveredLocation === "usa"}
              onMouseEnter={() => handleMouseEnter("usa")}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className={Styles.IndiaLocation}>
            <IndiaSection
              isHovered={hoveredLocation === "india"}
              onMouseEnter={() => handleMouseEnter("india")}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className={Styles.ugandaLocation}>
            <UgandaSection
              isHovered={hoveredLocation === "uganda"}
              onMouseEnter={() => handleMouseEnter("uganda")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={Styles.croatiaLocation} style={inlineStyle}>
            <CroatiaSection
              isHovered={hoveredLocation === "croatia"}
              onMouseEnter={() => handleMouseEnter("croatia")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={Styles.nigeriaLocation}>
            <NigeriaSection
              isHovered={hoveredLocation === "nigeria"}
              onMouseEnter={() => handleMouseEnter("nigeria")}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className={Styles.KenyaLocation}>
            <KenyaSection
              isHovered={hoveredLocation === "kenya"}
              onMouseEnter={() => handleMouseEnter("kenya")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={Styles.tanzaniaLocation}>
            <TanzaniaSection
              isHovered={hoveredLocation === "tanzania"}
              onMouseEnter={() => handleMouseEnter("tanzania")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={Styles.southAfricaLocation}>
            <SouthAfricaSection
              isHovered={hoveredLocation === "southAfrica"}
              onMouseEnter={() => handleMouseEnter("southAfrica")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          {/* Add more sections for other countries */}
        </div>

        <div className={Styles.WorldImg}>
          <Image
            src={countryImage}
            alt="World Map"
            width={620}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
