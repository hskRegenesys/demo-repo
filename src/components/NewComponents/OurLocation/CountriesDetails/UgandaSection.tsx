// UgandaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
import Styles from "../OurLocation.module.css";

interface UgandaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const UgandaSection: React.FC<UgandaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.UgandaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.UgandaContaryShowHoverDetails}  ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={`${imageUrl}${OurLocationData.Uganda.countryFlagImg}`}
            // src={OurLocationData.Uganda.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.Uganda.countryName}
            title={OurLocationData.Uganda.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
          />
          <div
            className={`${Styles.UgandacontaryAdressCard} ${Styles.contaryAdress}`}
          >
            <span>{OurLocationData.Uganda.countryDescription}</span>
            <h5>{OurLocationData.Uganda.countryAddress}</h5>
          </div>
        </div>
      )}
      {!isHovered && (
        <div
          className={`${Styles.UgandaContaryLocation} ${Styles.contaryLocation}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.Uganda.countryName}
            title={OurLocationData.Uganda.countryName}
            onMouseEnter={onMouseEnter}
            width={14}
            height={20}
            priority
          />
          <span className={Styles.contaryname}>
            {OurLocationData.Uganda.countryName}
          </span>
        </div>
      )}
    </div>
  );
};
export default UgandaSection;
