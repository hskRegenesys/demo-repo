import React from "react";
import OurLocationData from "../OurLocationData";

import Styles from "../OurLocation.module.css";

interface TanzaniaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TanzaniaSection: React.FC<TanzaniaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.TanzaniaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.TanzaniaContaryShowHoverDetails}  ${Styles.ContaryShowHoverDetails}`}
      >
        <img
          src={OurLocationData.Tanzania.countryFlagImg}
          className={Styles.contaryFlag}
          alt="Country Flag"
        />
        <div
          className={`${Styles.TanzaniacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.Tanzania.countryDescription}</span>
          <h5>{OurLocationData.Tanzania.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.TanzaniaContaryLocation} ${Styles.contaryLocation}`}
      >
        <img
          src={OurLocationData.Tanzania.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt="Location Pin"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.Tanzania.countryName}
        </span>
      </div>
    )}
  </div>
);

export default TanzaniaSection;
