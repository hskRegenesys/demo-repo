import React from "react";
// import LearnersBenefitData from "../../../data/newComponentData/commonComponentData/LearnersBenefitData";
import Styles from "./learnersBenefit.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
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
      <div className={Styles.LearnersBenefitsCardContainer}>
        <Swiper
          className={Styles.swiperStyleFC}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 8000,
          }}
          breakpoints={{
            0: { slidesPerView: 1.25, slidesPerGroup: 1, centeredSlides: true },
            560: {
              slidesPerView: 1,
            },
          }}
        >
          {LearnersBenfitsCardsData.map((item: any, index: any) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearnersBenefit;
