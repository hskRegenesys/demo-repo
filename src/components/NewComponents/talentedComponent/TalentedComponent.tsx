// TalentedComponent.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import styles from "./TalentedComponent.module.css";
import TalentedComponentData from "../../../data/newComponentData/commonComponentData/TalentedComponentData";

const TalentedComponent: React.FC = () => {
  const { title, heading, buttonText, facultyCard } = TalentedComponentData; // Destructure the data

  return (
    <div className={styles.talentedComponent}>
      <div className={styles.leftSection}>
        <h1>{title}</h1>
        <p>{heading}</p>
        <button className={styles.btnStart}>{buttonText}</button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.cardContainer}>
          <div className={styles.swiperNavigation}>
            <Swiper
              className={styles.swiperStyle}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                560: {
                  slidesPerView: 1,
                },
                1190: {
                  slidesPerView: 2,
                },
                1250: {
                  slidesPerView: 2.5,
                },
                1450: {
                  slidesPerView: 3.5,
                },
              }}
            >
              {facultyCard.map((faculty, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <div className={styles.bgcolor}></div>
                    <img
                      src={faculty.facultyImg}
                      alt={`Faculty ${index + 1}`}
                    />
                    <p className={styles.facultyName}>{faculty.facultyName}</p>
                    <p className={styles.courseName}>{faculty.courseName}</p>
                    <span>{faculty.yearsOfExperience}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className={styles.btnStartMobile}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentedComponent;
