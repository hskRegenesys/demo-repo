// AdmitsCompanies.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Styles from "./admitsCompanies.module.css";
import NewHomeData from "../../../data/newHomeData";

const AdmitsCompanies = () => {
  const { AdmitsHeading, AdmitsTitle, buttenIcon, AdmitsCards } =
    NewHomeData.AdmiteCompaniesData;

  const swiperSettings = {
    freeModeMomentum: false,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    speed: 5000,
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
        <div className={Styles.enrollNowButton}>
          Enroll Now
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
