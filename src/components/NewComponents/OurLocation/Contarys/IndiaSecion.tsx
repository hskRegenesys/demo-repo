// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
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
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.IndiaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.IndiaContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.India.countryFlagImg}`}
            // src={OurLocationData.India.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.India.countryName}
            title={OurLocationData.India.countryName}
            width={50}
            height={82}
            loading="eager"
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
          <span className={Styles.contaryname}>
            {OurLocationData.India.countryName}
          </span>
          <Image
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.India.countryName}
            title={OurLocationData.India.countryName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={14}
            height={20}
          />
        </div>
      )}
    </div>
  );
};
export default IndiaSection;
