// WorldClassFaculty.js

import React from "react";
import styles from "../exploreTheCourses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

interface FacultyCard {
  facultyImg: string;
  facultyName: string;
  facultyEducation: string;
  courseName: string;
  yearsOfExperience: string;
}

interface WorldClassFacultyProps {
  contentHeading: string;
  tutors: string;
  facultyCard: FacultyCard[];
}

const WorldClassFaculty: React.FC<WorldClassFacultyProps> = ({
  contentHeading,
  tutors,
  facultyCard,
}) => {
  const addBottomValue = facultyCard.length <= 4 ? "0px" : "60px";
  const imageUrl = `${process.env.awsImage_url}`;

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
                    src={`${imageUrl}${faculty.facultyImg}`}
                    alt={faculty.facultyName}
                    title={faculty.facultyName}
                    width={88}
                    height={88}
                  />
                </div>
                <p className={styles.facultyName}>{faculty.facultyName}</p>
                {faculty?.facultyEducation && (
                  <p className={styles.facultyEducation}>
                    {faculty.facultyEducation}
                  </p>
                )}
                {faculty.yearsOfExperience ? (
                  <p className={styles.yearsOfExperience}>
                    <span>{faculty.yearsOfExperience} </span>Years of Experience{" "}
                  </p>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WorldClassFaculty;
