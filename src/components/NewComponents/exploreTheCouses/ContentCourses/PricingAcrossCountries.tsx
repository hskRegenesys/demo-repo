// PricingAcrossCountries.js

import React from "react";
import Styles from "../exploreTheCourses.module.css";
import Image from "next/image";

interface PricingAcrossCountriesProps {
  handleEnrollButtonClick: (title?: string) => void;
  ContentHeding: string;
  PriceIcon: string;
  durationIcon: string;
  EnrollmentIcon: string;
  contraryPricingCard?: {
    contaryName: string;
    price: string;
    duration: string;
    contaryFlag: string;
  }[];
}

const PricingAcrossCountries: React.FC<PricingAcrossCountriesProps> = ({
  ContentHeding,
  PriceIcon,
  durationIcon,
  EnrollmentIcon,
  contraryPricingCard,
  handleEnrollButtonClick,
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${Styles.content6} ${Styles.content}`}>
      <h3>{ContentHeding}</h3>
      {/* Render pricing information for different locations */}
      <div className={Styles.ContarycardContainer}>
        {contraryPricingCard?.map((card, index) => (
          <div key={index} className={Styles.Contarycard}>
            <div className={Styles.cardImgContainer}>
              <div className={Styles.cardImg}>
                <Image
                  src={`${imageUrl}${card.contaryFlag}`}
                  alt={card.contaryName}
                  title={card.contaryName}
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h4>{card.contaryName}</h4>
            <div className={Styles.ContarycardContent}>
              <div className={Styles.line}>
                <div className={Styles.iconContent}>
                  <Image
                    src={`${imageUrl}${PriceIcon}`}
                    alt="Rate Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={Styles.rate}>{card.price}</span>
              </div>
              <div className={Styles.line}>
                <div className={Styles.iconContent}>
                  <Image
                    src={`${imageUrl}${durationIcon}`}
                    alt="Duration Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={Styles.SpanText}>{card.duration}</span>
              </div>
              <div className={Styles.line}>
                <div className={Styles.iconContent}>
                  <Image
                    src={`${imageUrl}${EnrollmentIcon}`}
                    alt="Enrollment Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={Styles.SpanText}>Online Mode</span>
              </div>
            </div>
            <button
              className={Styles.button}
              onClick={() => {
                handleEnrollButtonClick("Enrol Now!");
              }}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingAcrossCountries;
