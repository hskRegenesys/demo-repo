// UsaSection.tsx
import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Styles from "../OurLocation.module.css";
import Image from "next/image";

interface UsaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const UsaSection: React.FC<UsaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className={`${Styles.UsaSection} ${isHovered ? Styles.hidden : ""}`}>
      {isHovered && (
        <div
          className={`${Styles.USAContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={OurLocationData.USA.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Flag"
            title={OurLocationData.USA.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
          />
          <div
            className={`${Styles.USAcontaryAdressCard} ${Styles.contaryAdress}`}
          >
            <span>{OurLocationData.USA.countryDescription}</span>
            <h5>{OurLocationData.USA.countryAddress}</h5>
          </div>
        </div>
      )}
      {!isHovered && (
        <div
          className={`${Styles.USAContaryLocation} ${Styles.contaryLocation}`}
        >
          <span className={Styles.contaryname}>
            {OurLocationData.USA.countryName}
          </span>
          <Image
            src={OurLocationData.locationPinImage}
            // src={OurLocationData.locationPinImage}
            className={Styles.locationpin}
            alt="Location"
            title={OurLocationData.USA.countryName}
            width={14}
            onMouseEnter={onMouseEnter}
            height={20}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default UsaSection;
