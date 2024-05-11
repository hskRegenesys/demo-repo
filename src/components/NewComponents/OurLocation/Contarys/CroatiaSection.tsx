// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
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
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.CroatiaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.CroatiaContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.Croatia.countryFlagImg}`}
            // src={OurLocationData.Croatia.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.Croatia.countryName}
            title={OurLocationData.Croatia.countryName}
            width={50}
            height={82}
            loading="eager"
          />
          <div
            className={`${Styles.CroatiacontaryAdressCard} ${
              Styles.contaryAdress
            } ${isHovered ? Styles.active : ""}`}
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
          <Image
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.Croatia.countryName}
            title={OurLocationData.Croatia.countryName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={14}
            height={20}
          />
          <span className={Styles.contaryname}>
            {OurLocationData.Croatia.countryName}
          </span>
        </div>
      )}
    </div>
  );
};
export default CroatiaSection;
