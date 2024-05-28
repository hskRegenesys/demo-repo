import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
import Styles from "../OurLocation.module.css";

interface SouthAfricaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SouthAfricaSection: React.FC<SouthAfricaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className={`${Styles.SouthAfricaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.SouthAfricaContaryShowHoverDetails}  ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <div
            className={`${Styles.SouthAfricacontaryAdressCard} ${Styles.contaryAdress}`}
          >
            <span>{OurLocationData.SouthAfrica.countryDescription}</span>
            <h5>{OurLocationData.SouthAfrica.countryAddress}</h5>
          </div>
          <Image
            src={OurLocationData.SouthAfrica.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.SouthAfrica.countryName}
            title={OurLocationData.SouthAfrica.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
          />
        </div>
      )}
      {!isHovered && (
        <div
          className={`${Styles.SouthAfricaContaryLocation} ${Styles.contaryLocation}`}
        >
          <Image
            src={OurLocationData.locationPinImage}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.SouthAfrica.countryName}
            onMouseEnter={onMouseEnter}
            title={OurLocationData.SouthAfrica.countryName}
            width={14}
            height={20}
            priority
          />
          <span className={Styles.contaryname}>
            {OurLocationData.SouthAfrica.countryName}
          </span>
        </div>
      )}
    </div>
  );
};

export default SouthAfricaSection;
