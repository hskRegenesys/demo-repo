// LearnersBenefit.js

import React from "react";
import LearnersBenefitData from "../../../data/newComponentData/commonComponentData/LearnersBenefitData";
import Styles from "./learnersBenefit.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
const LearnersBenefit = () => {
  const {
    LearnersBenefitHeding,
    LearnersBenefitTitle,
    card,
    LearnersBenefitTickIcon,
    LearnersBenefitFrame1,
    LearnersBenefitFrame2,
  } = LearnersBenefitData;

  return (
    <div className={Styles.LearnersBenefitContainer}>
      <div className={Styles.TopSection}>
        <h3 className={Styles.heding}>{LearnersBenefitHeding}</h3>
        <h2 className={Styles.title}>{LearnersBenefitTitle}</h2>
      </div>
      {/* Positioning for frame1 and frame2 */}
      <div className={Styles.frame}>
        <div className={Styles.frame1}>
          <Image
            src={LearnersBenefitFrame2}
            alt="Tick Icon"
            width={122}
            height={179}
          />
        </div>
        <div className={Styles.frame2}>
          <Image
            src={LearnersBenefitFrame1}
            alt="Tick Icon"
            width={122}
            height={179}
          />
        </div>
      </div>
      <div className={Styles.CardContainer}>
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
        >
          {card.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={Styles.Card} key={index}>
                <div className={Styles.LeftSide}>
                  <div className={Styles.CardImg}>
                    <Image
                      src={item.LearnersBenefitCardImg}
                      alt="Card Image"
                      width={180}
                      height={180}
                    />
                  </div>
                </div>
                <div className={Styles.RightSide}>
                  <h2 className={Styles.CardTitle}>
                    {item.LearnersBenefitCardTitle}
                  </h2>
                  <ul>
                    {item.LearnersBenefittext.map((text, i) => (
                      <li key={i}>
                        <div className={Styles.tickimg}>
                          <Image
                            className={Styles.tickimg}
                            src={LearnersBenefitTickIcon}
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
