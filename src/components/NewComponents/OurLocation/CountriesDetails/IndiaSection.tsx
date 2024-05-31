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
  return (
    <div className={`${Styles.IndiaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.IndiaContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={OurLocationData.India.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Flag"
            title={OurLocationData.India.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
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
            src={OurLocationData.locationPinImage}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt="Location"
            title={OurLocationData.India.countryName}
            onMouseEnter={onMouseEnter}
            width={14}
            height={20}
            priority
          />
        </div>
      )}
    </div>
  );
};
export default IndiaSection;
