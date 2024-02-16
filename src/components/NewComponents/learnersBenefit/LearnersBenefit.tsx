// LearnersBenefit.js

import React from "react";
import LearnersBenefitData from "../../../data/newComponentData/commonComponentData/LearnersBenefitData";
import Styles from "./learnersBenefit.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
        <h1 className={Styles.heding}>{LearnersBenefitHeding}</h1>
        <h2 className={Styles.title}>{LearnersBenefitTitle}</h2>
      </div>
      {/* Positioning for frame1 and frame2 */}
      <div className={Styles.frame}>
        <img
          className={Styles.frame1}
          src={LearnersBenefitFrame2}
          alt="Tick Icon"
        />{" "}
        <img
          className={Styles.frame2}
          src={LearnersBenefitFrame1}
          alt="Tick Icon"
        />{" "}
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
                  <img
                    className={Styles.CardImg}
                    src={item.LearnersBenefitCardImg}
                    alt="Card Image"
                  />
                </div>
                <div className={Styles.RightSide}>
                  <h3 className={Styles.CardTitle}>
                    {item.LearnersBenefitCardTitle}
                  </h3>
                  <ul>
                    {item.LearnersBenefittext.map((text, i) => (
                      <li key={i}>
                        <img
                          className={Styles.tickimg}
                          src={LearnersBenefitTickIcon}
                          alt="Tick Icon"
                        />
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
