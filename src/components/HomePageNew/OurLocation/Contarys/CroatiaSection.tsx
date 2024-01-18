// KenyaSection.tsx

import React from "react";
import OurLocationData from "../OurLocationData";

import Styles from "../OurLocation.module.css";

interface CroatiaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CroatiaSection: React.FC<CroatiaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.CroatiaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.CroatiaContaryShowHoverDetails}  ${Styles.ContaryShowHoverDetails}`}
      >
        <img
          src={OurLocationData.Croatia.countryFlagImg}
          className={Styles.contaryFlag}
          alt="Country Flag"
        />
        <div
          className={`${Styles.CroatiacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.Croatia.countryDescription}</span>
          <h5>{OurLocationData.Croatia.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.CroatiaContaryLocation} ${Styles.contaryLocation}`}
      >
        <img
          src={OurLocationData.Croatia.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt="Location Pin"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.Croatia.countryName}
        </span>
      </div>
    )}
  </div>
);

export default CroatiaSection;
