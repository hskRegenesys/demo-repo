import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./homeSliderBanner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import NewHomeData from "../../../data/newHomeData";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const HomeSliderBanner = () => {
  const { sliderDataDesktop, sliderDataMobile } = NewHomeData;
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
              <img
                className={Styles.img}
                src={slide.imageUrl}
                alt={slide.title}
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
              <img
                src={slide.imageUrl}
                className={Styles.img}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={Styles.formcointent}>
          <div className={Styles.formContainer}>
            <form className={Styles.form}>
              <div className={Styles.applyNowHeading}>Apply Now</div>

              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone Number"
              />

              <select
                id="program"
                name="program"
                placeholder="Select Program"
                required
              >
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                {/* Add more options as needed */}
              </select>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderBanner;
