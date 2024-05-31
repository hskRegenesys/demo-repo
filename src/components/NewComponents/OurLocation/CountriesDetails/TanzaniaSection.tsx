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
  return (
    <div className={`${Styles.TanzaniaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.TanzaniaContaryShowHoverDetails}  ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={OurLocationData.Tanzania.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Flag"
            title={OurLocationData.Tanzania.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
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
          <span className={Styles.contaryname}>
            {OurLocationData.Tanzania.countryName}
          </span>
          <Image
            src={OurLocationData.locationPinImage}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt="Location"
            onMouseEnter={onMouseEnter}
            title={OurLocationData.Tanzania.countryName}
            width={14}
            height={20}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default TanzaniaSection;
