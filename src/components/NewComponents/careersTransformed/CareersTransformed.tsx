import React from "react";
import Styles from "./careersTransformed.module.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import careersTransformedData from "../../../data/newComponentData/commonComponentData/careersTransformedData";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

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

  const swiperSettings = {
    pagination: { clickable: true },
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
      speed: 5000,
    },
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.ctFrame}>
        <div className={Styles.ctFrameDown}>
          <Image
            src="/assets/images/allImages/ct-frame-down.webp"
            width={198}
            height={80}
            alt="Career"
          />
        </div>
      </div>
      <div className={Styles.header}>
        <h2 className={Styles.heading}>{heading}</h2>
        <h2 className={Styles.secondHeading}>{secondHeading}</h2>
      </div>

      <div className={Styles.swiperContainer}>
        <Swiper className={Styles.swiperStyle} {...swiperSettings}>
          {swiperCardContainer.map((swiperCard, index) => (
            <SwiperSlide key={index} className={Styles.swiperCard}>
              <div className={Styles.topSection}>
                <div className={Styles.profile}>
                  <div className={Styles.profileImg}>
                    <Image
                      src={swiperCard.profileImg}
                      alt="Career"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={Styles.ctFrame}>
        <div className={Styles.ctFrameUp}>
          <Image
            src="/assets/images/allImages/ct-frame-up.webp"
            width={198}
            height={80}
            alt="Career"
          />
        </div>
      </div>
    </div>
  );
};

export default CareersTransformed;
