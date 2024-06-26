import React, { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./homeSliderBanner.module.css";
import Image from "next/image";
import UspSection from "../uspSection/UspSection";
import imageBaseUrl from "src/utils/imageBaseUrl";

interface Slide {
  imageUrl: string;
  link: string;
  title: string;
}

interface HomeSliderBannerProps {
  homeSliderBannerData: any;
}

const HomeSliderBanner: React.FC<HomeSliderBannerProps> = ({
  homeSliderBannerData,
}) => {
  const { sliderDataDesktop, sliderDataMobile } = homeSliderBannerData;
  const secondsPerSlide = 3;
  const imageUrl = imageBaseUrl();

  const renderSlides = useCallback((sliderData: Slide[], isMobile: boolean) => {
    return sliderData.map((slide, index) => (
      <SwiperSlide key={index}>
        <a href={slide.link}>
          <Image
            className={Styles.img}
            src={slide.imageUrl}
            rel="preload"
            alt="Banner Home"
            width={isMobile ? 360 : 1920}
            height={isMobile ? 356 : 586}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            decoding="async"
          />
        </a>
      </SwiperSlide>
    ));
  }, []);

  return (
    <>
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
        <h1 className={Styles.HeadTag}>
          Build Your Digital Skill with Industry Leading Online Courses
        </h1>
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
        </div>
      </div>
      <UspSection />
    </>
  );
};

export default React.memo(HomeSliderBanner);
