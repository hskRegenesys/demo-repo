// Content3.js
import React from "react";
import styles from "../exploreTheCourses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface FacultyCard {
  facultyImg: string;
  facultyName: string;
  courseName: string;
  yearsOfExperience: string;
}

interface Content3Props {
  contentHeading: string;
  tutors: string;
  facultyCard: FacultyCard[];
}

const Content3: React.FC<Content3Props> = ({
  contentHeading,
  tutors,
  facultyCard,
}) => {
  return (
    <div className={`${styles.content3} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <div className={styles.cardContainer}>
        <Swiper
          className={styles.swiperStyle}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            530: {
              slidesPerView: 2,
            },
            790: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {facultyCard.map((faculty, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.bgcolor}> </div>
                <img src={faculty.facultyImg} alt={`Faculty ${index + 1}`} />
                <p className={styles.facultyName}>{faculty.facultyName}</p>
                <p className={styles.courseName}>{faculty.courseName}</p>
                <span>{faculty.yearsOfExperience}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className={styles.tutors}>{tutors}</p>
    </div>
  );
};

export default Content3;
