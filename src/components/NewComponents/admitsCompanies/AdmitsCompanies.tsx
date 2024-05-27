import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Styles from "./admitsCompanies.module.css";
// import AdmiteCompaniesData from "../../../data/newComponentData/commonComponentData/AdmiteCompaniesData";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
interface AdmitsCompaniesProps {
  handleEnrollButtonClick: () => void;
  AdmiteCompaniesData: any;
}
SwiperCore.use([Pagination, Autoplay]);

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
  AdmiteCompaniesData,
}) => {
  const { AdmitsHeading, AdmitsTitle, admitsButtonIcon, AdmitsCards } =
    AdmiteCompaniesData;
  const imageUrl = imageBaseUrl();

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
          {AdmitsCards.map((item: any, index: any) => (
            <SwiperSlide key={index} className={Styles.admitsCard}>
              <Image
                src={item.AdmitsImage}
                // src={item.AdmitsImage}
                alt={`admitImg ${index}`}
                width={100}
                height={60}
                loading="eager"
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
          <div className={Styles.enrollIcon}>
            <Image
              // src={admitsButtonIcon}
              src={admitsButtonIcon}
              alt="Enroll Icon"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitsCompanies;
