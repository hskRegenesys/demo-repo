import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./homeSliderBanner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import homeSliderBannerData from "../../../data/newComponentData/commonComponentData/homeSliderBannerData";
import RequestForm from "../requestForm/RequestForm";
import Image from "next/image";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

interface HomeSliderBannerProps {
  onFormSubmit: () => void;
}

const HomeSliderBanner: React.FC<HomeSliderBannerProps> = ({
  onFormSubmit,
}) => {
  const { sliderDataDesktop, sliderDataMobile } = homeSliderBannerData;
  const secondsPerSlide = 3;

  return (
    <div>
      <div className={Styles.desktopSlide}>
        <Swiper
          pagination={{ clickable: true }}
          className={Styles.swiperStyle}
          autoplay={{
            delay: secondsPerSlide * 1000,
            disableOnInteraction: false,
          }}
        >
          {sliderDataDesktop.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                className={Styles.img}
                src={slide.imageUrl}
                alt={slide.title}
                width={1440}
                height={503}
                priority={true}
                sizes="(max-width: 400px) 100vw,(max-width: 768px) 75vw, (max-width: 1200px) 50vw,(max-width: 1500px) 10vw,(max-width: 2100px) 30vw, 33vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={Styles.mobileSlide}>
        <Swiper
          pagination={{ clickable: true }}
          className={Styles.swiperStyle}
          autoplay={{
            delay: secondsPerSlide * 1000,
            disableOnInteraction: false,
          }}
        >
          {sliderDataMobile.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.imageUrl}
                className={Styles.img}
                alt={slide.title}
                width={360}
                height={506}
                sizes="(max-width: 400px) 100vw,(max-width: 768px) 75vw)"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={Styles.formcointent}>
          <div className={Styles.formContainer}>
            <RequestForm onFormSubmit={onFormSubmit} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeSliderBanner;
