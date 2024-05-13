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
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.KenyaSection} `}>
      {isHovered && (
        <div
          className={`${Styles.KenyaContaryShowHoverDetails}   ${
            Styles.ContaryShowHoverDetails
          } ${isHovered ? Styles.active : ""}`}
        >
          <Image
            src={`${imageUrl}${OurLocationData.Kenya.countryFlagImg}`}
            // src={OurLocationData.Kenya.countryFlagImg}
            className={Styles.contaryFlag}
            alt={OurLocationData.Kenya.countryName}
            title={OurLocationData.Kenya.countryName}
            width={50}
            height={82}
            loading="eager"
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
            src={`${imageUrl}${OurLocationData.locationPinImage}`}
            className={`${Styles.locationpin} ${
              isHovered ? Styles.hovered : ""
            }`}
            alt={OurLocationData.Kenya.countryName}
            title={OurLocationData.Kenya.countryName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={14}
            height={20}
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
