// KenyaSection.tsx

import React from "react";
import OurLocationData from "../../../../data/newComponentData/commonComponentData/OurLocationData";
import Image from "next/image";
import Styles from "../OurLocation.module.css";

interface KenyaSectionProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const KenyaSection: React.FC<KenyaSectionProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className={`${Styles.KenyaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.KenyaContaryShowHoverDetails}   ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={OurLocationData.Kenya.countryFlagImg}
            className={Styles.contaryFlag}
            alt="Flag"
            title={OurLocationData.Kenya.countryName}
            width={50}
            height={82}
            loading="eager"
            priority
          />
          <div
            className={`${Styles.KenyacontaryAdressCard} ${Styles.contaryAdress} `}
          >
            <span>{OurLocationData.Kenya.countryDescription}</span>
            <h5>{OurLocationData.Kenya.countryAddress}</h5>
          </div>
        </div>
      )}
      {!isHovered && (
        <div
          className={`${Styles.KenyaContaryLocation} ${Styles.contaryLocation}`}
        >
          <Image
            src={OurLocationData.locationPinImage}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt="Location"
            title={OurLocationData.Kenya.countryName}
            onMouseEnter={onMouseEnter}
            width={14}
            height={20}
            priority
          />
          <span className={Styles.contaryname}>
            {OurLocationData.Kenya.countryName}
          </span>
        </div>
      )}
    </div>
  );
};

export default KenyaSection;
