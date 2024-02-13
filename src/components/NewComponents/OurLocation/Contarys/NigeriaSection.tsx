// KenyaSection.tsx

import React from "react";
import OurLocationData from "../OurLocationData";

import Styles from "../OurLocation.module.css";

interface NigeriaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NigeriaSection: React.FC<NigeriaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.NigeriaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.NigeriaContaryShowHoverDetails}  ${Styles.ContaryShowHoverDetails}`}
      >
        <img
          src={OurLocationData.Nigeria.countryFlagImg}
          className={Styles.contaryFlag}
          alt="Country Flag"
        />
        <div
          className={`${Styles.NigeriacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.Nigeria.countryDescription}</span>
          <h5>{OurLocationData.Nigeria.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.NigeriaContaryLocation} ${Styles.contaryLocation}`}
      >
        <span className={Styles.contaryname}>
          {OurLocationData.Nigeria.countryName}
        </span>
        <img
          src={OurLocationData.Nigeria.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt="Location Pin"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    )}
  </div>
);

export default NigeriaSection;
