import React from "react";
// import LearnersBenefitData from "../../../data/newComponentData/commonComponentData/LearnersBenefitData";
import Styles from "./learnersBenefit.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";
const LearnersBenefit = ({ LearnersBenefitData }: any) => {
  const {
    LearnersBenefitHeading,
    LearnersBenefitTitle,
    LearnersBenfitsCardsData,
    LearnersBenefitTickIcon,
    LearnersBenefitFrame1,
    LearnersBenefitFrame2,
  } = LearnersBenefitData;
  const imageUrl = imageBaseUrl();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className={Styles.LearnersBenefitContainer}>
      <div className={Styles.TopSection}>
        <h3 className={Styles.heading}>{LearnersBenefitHeading}</h3>
        <h2 className={Styles.title}>{LearnersBenefitTitle}</h2>
      </div>
      <div className={Styles.frame}>
        <div className={Styles.frame1}>
          <Image
            src={`${imageUrl}${LearnersBenefitFrame2}`}
            alt="Tick Icon"
            width={122}
            height={179}
          />
        </div>
        <div className={Styles.frame2}>
          <Image
            src={`${imageUrl}${LearnersBenefitFrame1}`}
            alt="Tick Icon"
            width={122}
            height={179}
          />
        </div>
      </div>

      <div>
        <MultiCarousel childSettings={settings}>
          {LearnersBenfitsCardsData.map((item: any, index: any) => (
            <div key={index}>
              <div className={Styles.LearnersBenefitCard} key={index}>
                <div className={Styles.LeftSide}>
                  <div className={Styles.learnersBenefitCardImg}>
                    <Image
                      src={`${imageUrl}${item.LearnersBenefitCardImg}`}
                      alt="Card Image"
                      width={180}
                      height={180}
                    />
                  </div>
                </div>
                <div className={Styles.RightSide}>
                  <h2 className={Styles.learnersBenefitCardTitle}>
                    {item.LearnersBenefitCardTitle}
                  </h2>
                  <ul>
                    {item.LearnersBenefittext.map((text: any, i: any) => (
                      <li key={i}>
                        <div className={Styles.tickimg}>
                          <Image
                            className={Styles.tickimg}
                            src={`${imageUrl}${LearnersBenefitTickIcon}`}
                            alt="Tick Icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className={Styles.list}>{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default LearnersBenefit;
