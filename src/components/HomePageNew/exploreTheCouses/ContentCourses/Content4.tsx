// Content4.js
import React from "react";
import styles from "../exploreTheCourses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface PricingCard {
  courseName: string;
  frameImg: string;
  price: string;
  tickIcon: string;
  list: string[];
}

interface Content4Props {
  contentHeading: string;
  pricingCard: PricingCard[];
}

const Content4: React.FC<Content4Props> = ({ contentHeading, pricingCard }) => {
  return (
    <div className={`${styles.content4} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <Swiper
        className={styles.swiperStyle}
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          820: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {pricingCard.map((pricing, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card4}>
              {/* Frame Image in the top-left corner */}
              <img
                src="/assets/images/HomeNew/Group 2.svg"
                alt="Frame"
                className={styles.frameImage}
              />
              {/* Course Name in the top */}
              <p className={styles.courseNameContent4}>{pricing.courseName}</p>
              {/* Price in green color */}
              <p className={styles.price} style={{ color: "green" }}>
                {pricing.price}
              </p>
              {/* Tick Icon and List */}
              <div className={styles.tickListContainer}>
                <ul>
                  {pricing.list.map((item, subIndex) => (
                    <li key={subIndex}>
                      <img
                        src="/assets/images/HomeNew/Check.svg"
                        alt="Tick Icon"
                        className={styles.tickIcon}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Buttons */}
              <div className={styles.buttonsContainer}>
                <button className={styles.learnMoreButton}>Learn More</button>
                <button className={styles.applyNowButton}>Apply Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Content4;
