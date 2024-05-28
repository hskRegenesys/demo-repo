// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";

import Styles from "../OurLocation.module.css";

interface SouthAfricaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SouthAfricaSection: React.FC<SouthAfricaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.SouthAfricaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.SouthAfricaContaryShowHoverDetails}  ${
          Styles.ContaryShowHoverDetails
        } ${isHovered ? Styles.active : ""}`}
      >
        <div
          className={`${Styles.SouthAfricacontaryAdressCard} ${Styles.contaryAdress}`}
        >
          <span>{OurLocationData.SouthAfrica.countryDescription}</span>
          <h5>{OurLocationData.SouthAfrica.countryAddress}</h5>
        </div>
        <img
          src={OurLocationData.SouthAfrica.countryFlagImg}
          className={Styles.contaryFlag}
          alt={OurLocationData.SouthAfrica.countryName}
          title={OurLocationData.SouthAfrica.countryName}
        />
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.SouthAfricaContaryLocation} ${Styles.contaryLocation}`}
      >
        <img
          src={OurLocationData.SouthAfrica.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt={OurLocationData.SouthAfrica.countryName}
          title={OurLocationData.SouthAfrica.countryName}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.SouthAfrica.countryName}
        </span>
      </div>
    )}
  </div>
);

export default SouthAfricaSection;
