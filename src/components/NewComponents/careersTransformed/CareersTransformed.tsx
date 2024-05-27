import React from "react";
import Styles from "./careersTransformed.module.css";
//import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import careersTransformedData from "../../../data/newComponentData/commonComponentData/careersTransformedData";
import Image from "next/image";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

interface FourCardData {
  card1: { percentage: string; text: string };
  card2: { rating: number; ratingImg: string; text: string };
  card3: { rating: number; ratingImg: string; text: string };
  card4: { text: string; percentage: string };
}

interface SwiperCardData {
  profileImg: string;
  name: string;
  role: string;
  experienceText: string;
  riseImg: string;
  firstRole: string;
  secondRole: string;
  companyFirstRoleImg: string;
  companySecondRoleImg: string;
  playImg: string;
  StudentVidio: string;
}
interface CareersTransformedProps {
  handleEnrollButtonVidio: (videoLink: string) => void;
}

interface MainCourseData {
  heading: string;
  secondHeading: string;
  "four-card": FourCardData;
  swiperCardContainer: SwiperCardData[];
}

const CareersTransformed: React.FC<CareersTransformedProps> = ({
  handleEnrollButtonVidio,
}) => {
  const mainCourseData: MainCourseData = careersTransformedData;
  const imageUrl = `${process.env.awsImage_url}`;

  const {
    heading,
    secondHeading,
    "four-card": { card1, card2, card3, card4 },
    swiperCardContainer,
  } = mainCourseData;

  const settings = {
    dots: true,
    //infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //speed: 2000,
    //autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className={Styles.container}>
      <div className={Styles.ctFrame}>
        <div className={Styles.ctFrameDown}>
          <Image
            src={`${imageUrl}Images/ct-frame-down.webp`}
            width={198}
            height={80}
          />
        </div>
      </div>
      <div className={Styles.header}>
        <h2 className={Styles.heading}>{heading}</h2>
        <h2 className={Styles.secondHeading}>{secondHeading}</h2>
      </div>

      <div className={Styles.CTStyle}>
        <div className="container text-center">
          <MultiCarousel
            className={Styles.swiperStyle}
            childSettings={settings}
          >
            {swiperCardContainer.map((swiperCard, index) => (
              <div key={index} className={Styles.swiperCard}>
                <div className={Styles.topSection}>
                  <div className={Styles.profile}>
                    <div className={Styles.profileImg}>
                      <Image
                        src={`${imageUrl}${swiperCard.profileImg}`}
                        alt={swiperCard.name}
                        title={swiperCard.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className={Styles.nameRole}>
                      <h4 className={Styles.name}>{swiperCard.name}</h4>
                      <p className={Styles.role}>{swiperCard.role}</p>
                    </div>
                  </div>
                </div>
                <div className={Styles.contentSection}>
                  <p className={Styles.experienceText}>
                    {swiperCard.experienceText}
                  </p>
                </div>
              </div>
            ))}
          </MultiCarousel>
        </div>
      </div>

      <div className={Styles.ctFrame}>
        <div className={Styles.ctFrameUp}>
          <Image
            src={`${imageUrl}Images/ct-frame-up.webp`}
            width={198}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default CareersTransformed;
