import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
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
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.TanzaniaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.TanzaniaContaryShowHoverDetails}  ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.Tanzania.countryFlagImg}`}
            // src={OurLocationData.Tanzania.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.Tanzania.countryName}
            title={OurLocationData.Tanzania.countryName}
            width={50}
            height={82}
            loading="eager"
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
          <Image
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.Tanzania.countryName}
            title={OurLocationData.Tanzania.countryName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={14}
            height={20}
          />
          <span className={Styles.contaryname}>
            {OurLocationData.Tanzania.countryName}
          </span>
        </div>
      )}
    </div>
  );
};

export default TanzaniaSection;
