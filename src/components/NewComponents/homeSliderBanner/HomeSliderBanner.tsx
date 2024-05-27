import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import Styles from "./homeSliderBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const secondsPerSlide = 3;
  const imageUrl = imageBaseUrl();

  const renderSlides = useCallback(
    (sliderData: Slide[], isMobile: boolean) => {
      return sliderData.map((slide, index) => (
        <div key={index}>
          <a href={slide.link}>
            <Image
              className={Styles.img}
              src={`${imageUrl}${slide.imageUrl}`}
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
        </div>
      ));
    },
    [imageUrl]
  );

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i: number) => (
      <div
        className={`${Styles.customDot} ${
          currentSlide === i ? Styles.activeDot : ""
        }`}
      />
    ),
    dotsClass: Styles.customDots,
  };

  return (
    <div>
      <div className={Styles.desktopSlide}>
        <MultiCarousel childSettings={settings}>
          {renderSlides(sliderDataDesktop, false)}
        </MultiCarousel>
      </div>

      <div className={Styles.mobileSlide}>
        <MultiCarousel childSettings={settings}>
          {renderSlides(sliderDataMobile, true)}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default HomeSliderBanner;
