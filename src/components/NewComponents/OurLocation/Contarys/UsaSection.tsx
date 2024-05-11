// UsaSection.tsx
import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Styles from "../OurLocation.module.css";
import Image from "next/image";

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
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.UsaSection} ${isHovered ? Styles.hidden : ""}`}>
      {isHovered && (
        <div
          className={`${Styles.USAContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.USA.countryFlagImg}`}
            // src={OurLocationData.USA.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.USA.countryName}
            title={OurLocationData.USA.countryName}
            width={50}
            height={82}
            loading="eager"
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
          <Image
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            // src={OurLocationData.locationPinImage}
            className={Styles.locationpin}
            alt={OurLocationData.USA.countryName}
            title={OurLocationData.USA.countryName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={14}
            height={20}
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
