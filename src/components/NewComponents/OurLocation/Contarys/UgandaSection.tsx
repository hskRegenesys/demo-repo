// UgandaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";

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
          alt={OurLocationData.Uganda.countryName}
          title={OurLocationData.Uganda.countryName}
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
        <img
          src={OurLocationData.Uganda.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt={OurLocationData.Uganda.countryName}
          title={OurLocationData.Uganda.countryName}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.Uganda.countryName}
        </span>
      </div>
    )}
  </div>
);

export default UgandaSection;
