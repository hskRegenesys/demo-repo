import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./homeSliderBanner.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

interface Slide {
  imageUrl: string;
  link: string;
  title: string;
}

interface HomeSliderBannerProps {
  homeSliderBannerData: {
    sliderDataDesktop: Slide[];
    sliderDataMobile: Slide[];
  };
}

const HomeSliderBanner: React.FC<HomeSliderBannerProps> = ({
  homeSliderBannerData,
}) => {
  const { sliderDataDesktop, sliderDataMobile } = homeSliderBannerData;
  const secondsPerSlide = 3;
  const imageUrl = imageBaseUrl();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSlides = (sliderData: Slide[], isMobile: boolean) => {
    if (sliderData.length === 1) {
      return (
        <div className={Styles.singleImageContainer}>
          <a href={sliderData[0].link}>
            <Image
              className={Styles.img}
              src={sliderData[0].imageUrl}
              alt="Banner Home"
              width={isMobile ? 760 : 1920}
              height={isMobile ? 752 : 586}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </a>
        </div>
      );
    }

    return sliderData.map((slide, index) => (
      <SwiperSlide key={index}>
        <a href={slide.link}>
          <Image
            className={Styles.img}
            src={slide.imageUrl}
            alt="Banner Home"
            width={isMobile ? 760 : 1920}
            height={isMobile ? 752 : 586}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </a>
      </SwiperSlide>
    ));
  };

  const renderSwiper = (sliderData: Slide[], isMobile: boolean) => (
    <Swiper
      pagination={{ clickable: true }}
      className={`${Styles.swiperStyle} swiperStyle`}
      autoplay={{
        delay: secondsPerSlide * 1000,
        disableOnInteraction: false,
      }}
    >
      {renderSlides(sliderData, isMobile)}
    </Swiper>
  );

  return (
    <div>
      <h1 className={Styles.HeadTag}>
        Build Your Digital Skill with Industry Leading Online Courses
      </h1>
      {!isMobileScreen ? (
        <div className={Styles.desktopSlide}>
          {sliderDataDesktop.length > 1
            ? renderSwiper(sliderDataDesktop, false)
            : renderSlides(sliderDataDesktop, false)}
        </div>
      ) : (
        <div className={Styles.mobileSlide}>
          {sliderDataMobile.length > 1
            ? renderSwiper(sliderDataMobile, true)
            : renderSlides(sliderDataMobile, true)}
        </div>
      )}
    </div>
  );
};

export default HomeSliderBanner;
