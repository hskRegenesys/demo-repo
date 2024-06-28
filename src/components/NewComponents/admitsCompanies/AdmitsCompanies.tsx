import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Styles from "./admitsCompanies.module.css";
import Image from "next/image";

SwiperCore.use([Pagination, Autoplay]);

interface AdmitsCompaniesProps {
  handleEnrollButtonClick: () => void;
  AdmiteCompaniesData: {
    AdmitsHeading: string;
    AdmitsTitle: string;
    admitsButtonIcon: string;
    AdmitsCards: { AdmitsImage: string }[];
  };
}

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
  AdmiteCompaniesData,
}) => {
  const { AdmitsHeading, AdmitsTitle, admitsButtonIcon, AdmitsCards } =
    AdmiteCompaniesData;

  const swiperSettings = {
    loop: true,
    slidesPerView: "auto" as const,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    navigation: false,
    spaceBetween: 15,
    speed: 1000,
    rewind: true,
  };

  return (
    <div className={Styles.admitsCompaniesContainer}>
      <div className={Styles.admitsTop}>
        <p className="main-heading">{AdmitsHeading}</p>
        <h2 className="main-sub-heading">{AdmitsTitle}</h2>
      </div>
      <div className={Styles.admitsCardsContainer}>
        <Swiper {...swiperSettings}>
          {AdmitsCards.map((item, index) => (
            <SwiperSlide key={index} className={Styles.admitsCard}>
              <Image
                src={item.AdmitsImage}
                alt="admit"
                className={Styles.admitImages}
                width={200}
                height={100}
                loading="lazy"
              />
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
          {/* <div className={Styles.enrollIcon}>
            <Image
              src={admitsButtonIcon}
              alt="Enrol Icon"
              width={16}
              height={16}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdmitsCompanies;
