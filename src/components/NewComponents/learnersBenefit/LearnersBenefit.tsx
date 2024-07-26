import React from "react";
import Styles from "./learnersBenefit.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const LearnersBenefit = ({ LearnersBenefitData }: any) => {
  const {
    LearnersBenefitHeading,
    LearnersBenefitTitle,
    LearnersBenfitsCardsData,
    LearnersBenefitTickIcon,
    LearnersBenefitFrame1,
    LearnersBenefitFrame2,
  } = LearnersBenefitData;

  return (
    <div className={Styles.LearnersBenefitContainer}>
      <div className={Styles.TopSection}>
        <p className="main-heading">{LearnersBenefitHeading}</p>
        <h2 className="main-sub-heading">{LearnersBenefitTitle}</h2>
      </div>
      <div className={Styles.frame}>
        <div className={Styles.frame1}>
          <Image
            src={LearnersBenefitFrame2}
            alt="Tick Icon"
            width={122}
            height={179}
            priority
          />
        </div>
        <div className={Styles.frame2}>
          <Image
            src={LearnersBenefitFrame1}
            alt="Tick Icon"
            width={122}
            height={179}
            priority
          />
        </div>
      </div>
      <div className={Styles.LearnersBenefitsCardContainer}>
        <Swiper
          className={`${Styles.swiperStyle} swiperStyle`}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          speed={2000}
          autoplay={{ delay: 8000 }}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1.25, slidesPerGroup: 1, centeredSlides: true },
            560: { slidesPerView: 1 },
          }}
        >
          {LearnersBenfitsCardsData.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <div className={Styles.LearnersBenefitCard}>
                <div className={Styles.LeftSide}>
                  <div className={Styles.learnersBenefitCardImg}>
                    <Image
                      src={item.LearnersBenefitCardImg}
                      alt="Card Image"
                      width={180}
                      height={180}
                      priority
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
                            src={LearnersBenefitTickIcon}
                            alt="Tick Icon"
                            width={20}
                            height={20}
                            priority
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
