import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Styles from "./StudentReview.module.css";
interface StudentReviewProps {
  handleEnrollButtonClick: () => void;
  StudentReviewData: any;
}

const StudentReview = ({
  handleEnrollButtonClick,
  StudentReviewData,
}: StudentReviewProps) => {
  const { StudentReviewTitle, StudentReviewHeading, StudentReviewCard } =
    StudentReviewData;

  return (
    <div className={Styles.reviewCardContainer}>
      <div className={Styles.topSection}>
        <p className="main-heading">{StudentReviewTitle}</p>
        <h2 className="main-sub-heading">{StudentReviewHeading}</h2>
      </div>
      <div className={Styles.studentReviewCardContainer}>
        <Swiper
          className={`${Styles.swiperStyle} swiperStyle`}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1.25, slidesPerGroup: 1, centeredSlides: true },
            560: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
              centeredSlides: true,
            },
            720: { slidesPerView: 2, centeredSlides: false },
            1000: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {StudentReviewCard.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className={Styles.studentReviewCard}>
                <div className={Styles.studentReviewCardImg}>
                  <Image
                    src={item.StudentReviewCardImg}
                    alt="Student Review"
                    width={88}
                    height={88}
                    priority
                  />
                </div>
                <div className={Styles.textContent}>
                  <h3 className={Styles.textContent1}>
                    {item.StudentReviewName}
                  </h3>
                  <p className={Styles.textContent2}>
                    {item.StudentReviewRole}
                  </p>
                  <p className={Styles.textContent3}>
                    {item.StudentReviewContent}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={Styles.studentReviewButton}
        onClick={handleEnrollButtonClick}
      >
        Enrol Now
      </div>
    </div>
  );
};

export default StudentReview;
