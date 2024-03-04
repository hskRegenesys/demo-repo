import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Styles from "./admitsCompanies.module.css";
import AdmiteCompaniesData from "../../../data/newComponentData/commonComponentData/AdmiteCompaniesData";

interface AdmitsCompaniesProps {
  handleEnrollButtonClick: React.MouseEventHandler<HTMLDivElement>;
}
SwiperCore.use([Pagination, Autoplay]);

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
}) => {
  const { AdmitsHeading, AdmitsTitle, buttenIcon, AdmitsCards } =
    AdmiteCompaniesData;

  const swiperSettings = {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: "auto" as const,
    speed: 1000,
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