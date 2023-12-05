import React from "react";
import NewHomeData from "../../../data/newHomeData";
import Styles from "./StudentReview.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const StudentReview = () => {
  const {
    StudentReviewTitle,
    StudentReviewHeading,
    FullStarImg,
    HalfStarImg,
    FullGrayStarImg,
    StudentReviewCard,
  } = NewHomeData.StudentReviewData;

  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.topSecion}>
        <h2 className={Styles.Title}>{StudentReviewTitle}</h2>
        <h3 className={Styles.heading}>{StudentReviewHeading}</h3>
      </div>
      <div className={Styles.studentReviewCardContainer}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {StudentReviewCard.map((card, index) => {
            const starRating = card.StudentReviewStar; // Assuming this property exists
            const fullStars = Math.floor(starRating);
            const hasHalfStar = starRating % 1 !== 0;

            const stars = [];

            for (let i = 0; i < fullStars; i++) {
              stars.push(<img key={i} src={FullStarImg} alt="Full Star" />);
            }

            if (hasHalfStar) {
              stars.push(<img key="half" src={HalfStarImg} alt="Half Star" />);
            }

            const remainingStars = 5 - stars.length;

            for (let i = 0; i < remainingStars; i++) {
              stars.push(
                <img
                  key={`gray-${i}`}
                  src={FullGrayStarImg}
                  alt="Full Gray Star"
                />
              );
            }

            return (
              <SwiperSlide key={index}>
                <div className={Styles.studentReviewCard}>
                  <img
                    className={Styles.studentReviewSideTag}
                    src={card.StudentReviewSideTag}
                    alt="Side Tag"
                  />
                  <img
                    className={Styles.studentReviewCardImg}
                    src={card.StudentReviewCardImg}
                    alt="Student Review"
                  />
                  <div className={Styles.starRating}>{stars}</div>
                  <div className={Styles.textContent}>
                    <h3 className={Styles.textContent1}>
                      {card.StudentReviewName}
                    </h3>
                    <p className={Styles.textContent2}>
                      {card.StudentReviewRole}
                    </p>
                    <p className={Styles.textContent3}>
                      {card.StudentReviewContent}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default StudentReview;
