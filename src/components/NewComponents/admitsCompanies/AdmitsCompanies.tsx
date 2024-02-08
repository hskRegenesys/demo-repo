import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Styles from "./admitsCompanies.module.css";
import AdmiteCompaniesData from "../../../data/newComponentData/commonComponentData/AdmiteCompaniesData";

interface AdmitsCompaniesProps {
  handleEnrollButtonClick: React.MouseEventHandler<HTMLDivElement>;
}

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
}) => {
  const { AdmitsHeading, AdmitsTitle, buttenIcon, AdmitsCards } =
    AdmiteCompaniesData;

  const swiperSettings = {
    freeModeMomentum: false,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto" as const,
    speed: 1000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  };

  return (
    <div className={Styles.admitsCompaniesContainer}>
      <div className={Styles.admitsTop}>
        <div className={Styles.admitsHeading}>{AdmitsHeading}</div>
        <div className={Styles.admitsTitleBig}>{AdmitsTitle}</div>
      </div>
      <div className={Styles.admitsCardsContainer}>
        <Swiper {...swiperSettings}>
          {AdmitsCards.map((card, index) => (
            <SwiperSlide key={index} className={Styles.admitsCard}>
              <img src={card.AdmitsImage} alt={`admitImg ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={Styles.enrollNowContainer}>
        <div
          className={Styles.enrollNowButton}
          onClick={handleEnrollButtonClick}
        >
          Enrol Now
          <img
            src={buttenIcon}
            alt="Enroll Icon"
            className={Styles.enrollIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default AdmitsCompanies;
