import React from "react";
import Styles from "./admitsCompanies.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";
interface AdmitsCompaniesProps {
  handleEnrollButtonClick: () => void;
  AdmiteCompaniesData: any;
}

const AdmitsCompanies: React.FC<AdmitsCompaniesProps> = ({
  handleEnrollButtonClick,
  AdmiteCompaniesData,
}) => {
  const { AdmitsHeading, AdmitsTitle, admitsButtonIcon, AdmitsCards } =
    AdmiteCompaniesData;
  const imageUrl = imageBaseUrl();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
      <div className="py-2 text-center">
        <MultiCarousel childSettings={settings}>
          {AdmitsCards.map((item: any, index: any) => (
            <div key={index} className={Styles.admitsCard}>
              <Image
                src={`${imageUrl}${item.AdmitsImage}`}
                // src={item.AdmitsImage}
                alt={`admitImg ${index}`}
                width={100}
                height={60}
                loading="eager"
              />
            </div>
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
