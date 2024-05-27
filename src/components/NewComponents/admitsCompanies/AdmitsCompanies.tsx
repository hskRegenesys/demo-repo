import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css";
//import "swiper/css/pagination";
//import SwiperCore, { Pagination, Autoplay } from "swiper";
import Styles from "./admitsCompanies.module.css";
// import AdmiteCompaniesData from "../../../data/newComponentData/commonComponentData/AdmiteCompaniesData";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
//import MultiCarousel from "@/components/multiCarousel/multiCarousel";

import Slider from "react-slick";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";
interface AdmitsCompaniesProps {
  handleEnrollButtonClick: () => void;
  AdmiteCompaniesData: any;
}
// SwiperCore.use([Pagination, Autoplay]);

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
  AdmiteCompaniesData,
}) => {
  const { AdmitsHeading, AdmitsTitle, admitsButtonIcon, AdmitsCards } =
    AdmiteCompaniesData;
  const imageUrl = imageBaseUrl();

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={Styles.admitsCompaniesContainer}>
      <div className={Styles.admitsTop}>
        <h2 className={Styles.admitsHeading}>{AdmitsHeading}</h2>
        <h2 className={Styles.admitsTitleBig}>{AdmitsTitle}</h2>
      </div>
      <div className="py-2">
        <MultiCarousel childSettings={settings}>
          {AdmitsCards.map((item: any, index: any) => (
            <SwiperSlide key={index} className={Styles.admitsCard}>
              <Image
                src={`${imageUrl}${item.AdmitsImage}`}
                // src={item.AdmitsImage}
                alt={`admitImg ${index}`}
                width={100}
                height={60}
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </MultiCarousel>
      </div>
      <div className={Styles.admitsCardsContainer}>
        {/* <Swiper {...swiperSettings}>
          {AdmitsCards.map((item: any, index: any) => (
            <SwiperSlide key={index} className={Styles.admitsCard}>
              <Image
                src={`${imageUrl}${item.AdmitsImage}`}
                // src={item.AdmitsImage}
                alt={`admitImg ${index}`}
                width={100}
                height={60}
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
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
              src={`${imageUrl}${admitsButtonIcon}`}
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
