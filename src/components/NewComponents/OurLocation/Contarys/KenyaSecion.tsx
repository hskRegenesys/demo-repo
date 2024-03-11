// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";

import Styles from "../OurLocation.module.css";

interface KenyaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const KenyaSection: React.FC<KenyaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className={`${Styles.KenyaSection} `}>
    {isHovered && (
      <div
        className={`${Styles.KenyaContaryShowHoverDetails}   ${
          Styles.ContaryShowHoverDetails
        } ${isHovered ? Styles.active : ""}`}
      >
        <img
          src={OurLocationData.Kenya.countryFlagImg}
          className={Styles.contaryFlag}
          alt={OurLocationData.Kenya.countryName}
          title={OurLocationData.Kenya.countryName}
        />
        <div
          className={`${Styles.KenyacontaryAdressCard} ${Styles.contaryAdress} `}
        >
          <span>{OurLocationData.Kenya.countryDescription}</span>
          <h5>{OurLocationData.Kenya.countryAddress}</h5>
        </div>
      </div>
    )}
    {!isHovered && (
      <div
        className={`${Styles.KenyaContaryLocation} ${Styles.contaryLocation}`}
      >
        <img
          src={OurLocationData.Kenya.locationPinImage}
          className={`${Styles.locationpin} ${isHovered ? Styles.hovered : ""}`}
          alt={OurLocationData.Kenya.countryName}
          title={OurLocationData.Kenya.countryName}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <span className={Styles.contaryname}>
          {OurLocationData.Kenya.countryName}
        </span>
      </div>
    )}
  </div>
);

export default KenyaSection;
