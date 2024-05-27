import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import Styles from "./homeSliderBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

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

  useEffect(() => {
    console.log("HomeSliderBanner mounted");
    return () => {
      console.log("HomeSliderBanner unmounted");
    };
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: secondsPerSlide * 1000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i: number) => (
      <button>
        <div
          className={`${Styles.customDots} ${
            currentSlide === i ? Styles.activeDot : ""
          }`}
        />
      </button>
    ),
    dotsClass: `${Styles.slickDots} ${Styles.slickThumb}`,
  };

  return (
    <div>
      <div className={Styles.desktopSlide}>
        <Slider {...settings}>{renderSlides(sliderDataDesktop, false)}</Slider>
      </div>

      <div className={Styles.mobileSlide}>
        <Slider {...settings}>{renderSlides(sliderDataMobile, true)}</Slider>
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
