import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import NewHomeData from "../../../data/newHomeData";
import "./homeSliderBanner.module.css";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const HomeSliderBanner = () => {
  const { sliderData } = NewHomeData;
  const secondsPerSlide = 3;

  return (
    <Swiper
      pagination={{ clickable: true }}
      className="mySwiper"
      autoplay={{
        delay: secondsPerSlide * 1000,
        disableOnInteraction: false,
      }}
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.imageUrl} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSliderBanner;
