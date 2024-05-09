// Content3.js
import React from "react";
import styles from "../exploreTheCourses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
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
  const addBottomValue = facultyCard.length <= 4 ? "0px" : "60px";

  return (
    <div className={`${styles.content3} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <div className={styles.cardContainer}>
        <Swiper
          style={{ paddingBottom: addBottomValue }}
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
                <div className={styles.CardImg}>
                  <Image
                    src={faculty.facultyImg}
                    alt={faculty.facultyName}
                    title={faculty.facultyName}
                    width={88}
                    height={88}
                  />
                </div>
                <p className={styles.facultyName}>{faculty.facultyName}</p>
                <p className={styles.courseName}>{faculty.courseName}</p>
                {faculty.yearsOfExperience ? (
                  <span>{faculty.yearsOfExperience}</span>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Content3;
