import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import styles from "./TalentedComponent.module.css";
import TalentedComponentData from "../../../data/newComponentData/commonComponentData/TalentedComponentData";

SwiperCore.use([Navigation, Pagination]);

const TalentedComponent: React.FC = () => {
  const { title, heading, buttonText, facultyCard } = TalentedComponentData;
  const swiperRef = useRef<any>(null);
  const [paginationText, setPaginationText] = useState<any>(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 920;
      setPaginationText(isMobile ? { clickable: true } : false);
    };

    handleResize(); // Initial call to set paginationText based on window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

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
              ref={(instance) => {
                if (instance) swiperRef.current = instance as any;
              }}
              className={styles.swiperStyle}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={paginationText}
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
                1920: {
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

            <button
              className={`swiper-button-next ${styles.nextButton}`}
              onClick={handleNextSlide}
            ></button>

            <button
              className={`swiper-button-prev ${styles.prevButton}`}
              onClick={handlePrevSlide}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentedComponent;
