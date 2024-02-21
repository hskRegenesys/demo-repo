// UgandaSection.tsx

import React from "react";
import OurLocationData from "../OurLocationData";

import Styles from "../OurLocation.module.css";

interface UgandaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const UgandaSection: React.FC<UgandaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.UgandaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.UgandaContaryShowHoverDetails}  ${
          Styles.ContaryShowHoverDetails
        } ${isHovered ? Styles.active : ""}`}
      >
        <img
          src={OurLocationData.Uganda.countryFlagImg}
          className={Styles.contaryFlag}
          alt="Country Flag"
        />
        <div
          className={`${Styles.UgandacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.Uganda.countryDescription}</span>
          <h5>{OurLocationData.Uganda.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.UgandaContaryLocation} ${Styles.contaryLocation}`}
      >
        <span className={Styles.contaryname}>
          {OurLocationData.Uganda.countryName}
        </span>
        <img
          src={OurLocationData.Uganda.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt="Location Pin"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    )}
  </div>
);

export default UgandaSection;
