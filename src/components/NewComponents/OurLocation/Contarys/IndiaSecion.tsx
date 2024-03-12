// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";

import Styles from "../OurLocation.module.css";

interface IndiaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const IndiaSection: React.FC<IndiaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.IndiaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.IndiaContaryShowHoverDetails} ${
          Styles.ContaryShowHoverDetails
        } ${isHovered ? Styles.active : ""}`}
      >
        <img
          src={OurLocationData.India.countryFlagImg}
          className={Styles.contaryFlag}
          alt={OurLocationData.India.countryName}
          title={OurLocationData.India.countryName}
        />
        <div
          className={`${Styles.IndiacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.India.countryDescription}</span>
          <h5>{OurLocationData.India.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.IndiaContaryLocation} ${Styles.contaryLocation}`}
      >
        <img
          src={OurLocationData.India.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt={OurLocationData.India.countryName}
          title={OurLocationData.India.countryName}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.India.countryName}
        </span>
      </div>
    )}
  </div>
);

export default IndiaSection;
