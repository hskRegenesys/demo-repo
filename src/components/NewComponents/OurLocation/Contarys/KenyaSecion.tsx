// KenyaSection.tsx

import React from "react";
import OurLocationData from "../OurLocationData";

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
        className={`${Styles.KenyaContaryShowHoverDetails}  ${Styles.ContaryShowHoverDetails}`}
      >
        <img
          src={OurLocationData.Kenya.countryFlagImg}
          className={Styles.contaryFlag}
          alt="Country Flag"
        />
        <div
          className={`${Styles.KenyacontaryAdressCard} ${Styles.contaryAdress}`}
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
          alt="Location Pin"
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
