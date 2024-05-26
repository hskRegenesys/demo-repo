import React from "react";
import StudentReviewData from "../../../data/newComponentData/commonComponentData/StudentReviewData";
import Styles from "./StudentReview.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

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
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={Styles.reviewCardContainer}>
      <div className={Styles.topSection}>
        <h3 className={Styles.title}>{StudentReviewTitle}</h3>
        <h2 className={Styles.heading}>{StudentReviewHeading}</h2>
      </div>
      <div className={Styles.studentReviewCardContainer}>
        <Swiper
          className={Styles.swiperStyle}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.25, slidesPerGroup: 1, centeredSlides: true },
            560: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
              centeredSlides: true,
            },
            1200: { slidesPerView: 3 },
            1700: { slidesPerView: 3 },
          }}
        >
          {StudentReviewCard.map((item: any, index: number) => {
            // const starRating = card.StudentReviewStar; // Assuming this property exists
            // const fullStars = Math.floor(starRating);
            // const hasHalfStar = starRating % 1 !== 0;
            // const stars = [];

            // for (let i = 0; i < fullStars; i++) {
            //   stars.push(<img key={i} src={FullStarImg} alt="Full Star" />);
            // }

            // if (hasHalfStar) {
            //   stars.push(<img key="half" src={HalfStarImg} alt="Half Star" />);
            // }

            // const remainingStars = 5 - stars.length;

            // for (let i = 0; i < remainingStars; i++) {
            //   stars.push(
            //     <Image
            //       key={`gray-${i}`}
            //       src={FullGrayStarImg}
            //       alt="Full Gray Star"
            //       width={20}
            //       height={20}
            //     />
            //   );
            // }

            return (
              <SwiperSlide key={index}>
                <div className={Styles.studentReviewCard}>
                  {/* <div className={Styles.studentReviewSideTag}>
                    <Image
                      src={`${imageUrl}Icons/Logo-DR-side.svg`}
                      // src="/assets/images/new-component-assets/Logo-DR-side.png"
                      alt="Side Tag"
                      width={102}
                      height={106}
                    />
                  </div> */}
                  <div className={Styles.studentReviewCardImg}>
                    <Image
                      src={`${imageUrl}${item.StudentReviewCardImg}`}
                      // src={card.StudentReviewCardImg}
                      alt="Student Review"
                      width={88}
                      height={88}
                    />
                  </div>
                  {/* <div className={Styles.starRating}>{stars}</div> */}
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
            );
          })}
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
