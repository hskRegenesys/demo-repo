import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
import Styles from "../OurLocation.module.css";

interface NigeriaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NigeriaSection: React.FC<NigeriaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className={`${Styles.NigeriaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.NigeriaContaryShowHoverDetails} ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <div
            className={`${Styles.NigeriacontaryAdressCard} ${Styles.contaryAdress}`}
          >
            <span>{OurLocationData.Nigeria.countryDescription}</span>
            <h5>{OurLocationData.Nigeria.countryAddress}</h5>
          </div>
          <Image
            src={OurLocationData.Nigeria.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Flag"
            title={OurLocationData.Nigeria.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
          />
        </div>
      )}
      {!isHovered && (
        <div
          className={`${Styles.NigeriaContaryLocation} ${Styles.contaryLocation}`}
        >
          <span className={Styles.contaryname}>
            {OurLocationData.Nigeria.countryName}
          </span>
          <Image
            src={OurLocationData.locationPinImage}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt="Location"
            title={OurLocationData.Nigeria.countryName}
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

export default NigeriaSection;
