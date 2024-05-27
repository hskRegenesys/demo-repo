import React, { useCallback, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./homeSliderBanner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// import homeSliderBannerData from "../../../data/newComponentData/commonComponentData/homeSliderBannerData";
// import RequestForm from "../requestForm/RequestForm";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

interface Slide {
  imageUrl: string;
  link: string;
  title: string;
}

interface HomeSliderBannerProps {
  onFormSubmit: () => void;
  homeSliderBannerData: any;
}

const HomeSliderBanner: React.FC<HomeSliderBannerProps> = ({
  onFormSubmit,
  homeSliderBannerData,
}) => {
  const { sliderDataDesktop, sliderDataMobile } = homeSliderBannerData;

  const secondsPerSlide = 3;

  const imageUrl = imageBaseUrl();

  const renderSlides = useCallback(
    (sliderData: Slide[], isMobile: boolean) => {
      return sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <a href={slide.link}>
            <Image
              className={Styles.img}
              src={slide.imageUrl}
              alt={slide.title}
              width={isMobile ? 360 : 1440}
              height={isMobile ? 506 : 503}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              unoptimized
              priority
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              loading="eager"
            />
          </a>
        </SwiperSlide>
      ));
    },
    [imageUrl]
  );
  useEffect(() => {
    console.log("HomeSliderBanner mounted");
    return () => {
      console.log("HomeSliderBanner unmounted");
    };
  }, []);

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
          {renderSlides(sliderDataDesktop, false)}
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
          {renderSlides(sliderDataMobile, true)}
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

export default React.memo(HomeSliderBanner);
