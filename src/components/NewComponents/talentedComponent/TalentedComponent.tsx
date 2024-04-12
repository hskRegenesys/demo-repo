import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import styles from "./TalentedComponent.module.css";
import FacultyData from "../../../data/newComponentData/commonComponentData/FacultyData";

SwiperCore.use([Navigation, Pagination]);

interface TalentedComponentProp {
  handleEnrollButtonClick: () => void;
}

interface Faculty {
  facultyImg: string;
  facultyName: string;
  courseName: string;
  yearsOfExperience?: string;
}

const TalentedComponent: React.FC<TalentedComponentProp> = ({
  handleEnrollButtonClick,
}) => {
  const data: Faculty[] = Object.values(FacultyData);
  const [paginationText, setPaginationText] = useState<any>(false);
  const swiperRef = useRef<any>(null);

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

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (swiper) {
      const arrow = document.getElementsByClassName(
        "swiper-button-prev"
      )[0] as HTMLElement;
      arrow.style.display = "none";

      swiper.on("slideChange", () => {
        const realIndex = swiper.realIndex;
        if (realIndex === 0) {
          console.log(`real index:${realIndex} - hide arrow`);
          arrow.style.display = "none";
        } else {
          console.log(`real index:${realIndex} - show arrow`);
          arrow.style.display = "block";
        }
      });

      // Clean up function
      return () => {
        swiper.destroy(true, true);
      };
    }
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
        <h2 className={styles.heading}>Meet our Faculty</h2>
        <h2 className={styles.subheading}>See Our Talented Faculty</h2>
        <button className={styles.btnStart} onClick={handleEnrollButtonClick}>
          Start Learning Today!
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.cardContainer}>
          <div className={styles.swiperNavigation}>
            <Swiper
              ref={swiperRef}
              className={styles.swiperStyle}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={paginationText}
              breakpoints={{
                0: { slidesPerView: 1 },
                560: { slidesPerView: 1 },
                1190: { slidesPerView: 2 },
                1250: { slidesPerView: 2.5 },
                1920: { slidesPerView: 3.5 },
              }}
            >
              {data.map((faculty: Faculty, index: number) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <div className={styles.bgcolor}></div>
                    <img
                      src={faculty.facultyImg}
                      alt={faculty.facultyName}
                      title={faculty.facultyName}
                    />
                    <p className={styles.facultyName}>{faculty.facultyName}</p>
                    <p className={styles.courseName}>{faculty.courseName}</p>
                    <span>{faculty?.yearsOfExperience}</span>
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
