import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Styles from "./admitsCompanies.module.css";
import AdmiteCompaniesData from "../../../data/newComponentData/commonComponentData/AdmiteCompaniesData";

interface AdmitsCompaniesProps {
  handleEnrollButtonClick: () => void;
}
SwiperCore.use([Pagination, Autoplay]);

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
}) => {
  const { AdmitsHeading, AdmitsTitle, buttenIcon, AdmitsCards } =
    AdmiteCompaniesData;

  const swiperSettings = {
    loop: true,
    slidesPerView: "auto" as const,
    autoplay: {
      enabled: true,
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    navigation: false,
    noSwipingClass: "swiper-slide",
    spaceBetween: 15,
    speed: 1000,
    rewind: true,
  };

  return (
    <div className={Styles.admitsCompaniesContainer}>
      <div className={Styles.admitsTop}>
        <h2 className={Styles.admitsHeading}>{AdmitsHeading}</h2>
        <h2 className={Styles.admitsTitleBig}>{AdmitsTitle}</h2>
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
