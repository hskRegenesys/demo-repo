// UsaSection.tsx
import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Styles from "../OurLocation.module.css";

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
        >
          <img
            src={OurLocationData.USA.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Country Flag"
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
          <img
            src={OurLocationData.USA.locationPinImage}
            className={Styles.locationpin}
            alt="Location Pin"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
          <span className={Styles.contaryname}>
            {OurLocationData.USA.countryName}
          </span>
        </div>
      )}
    </div>
  );
};

export default UsaSection;
