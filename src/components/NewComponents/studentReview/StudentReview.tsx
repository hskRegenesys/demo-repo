import React, { useState } from "react";
import Styles from "./StudentReview.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";

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
  const imageUrl = imageBaseUrl();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    speed: 2000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i: number) => (
      <div
        className={`${Styles.customDot} ${
          currentSlide === i ? Styles.activeDot : ""
        }`}
      />
    ),
    dotsClass: Styles.customDots,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={Styles.reviewCardContainer}>
      <div className={Styles.topSection}>
        <h3 className={Styles.title}>{StudentReviewTitle}</h3>
        <h2 className={Styles.heading}>{StudentReviewHeading}</h2>
      </div>
      <div className={Styles.studentReviewCardContainer}>
        {/* <Slider {...settings} className={Styles.sliderStyle}> */}
        <MultiCarousel childSettings={settings}>
          {StudentReviewCard.map((item: any, index: number) => (
            <div key={index} className={Styles.studentReviewCard}>
              <div className={Styles.studentReviewCardImg}>
                <Image
                  src={`${imageUrl}${item.StudentReviewCardImg}`}
                  alt="Student Review"
                  width={88}
                  height={88}
                />
              </div>
              <div className={Styles.textContent}>
                <h3 className={Styles.textContent1}>
                  {item.StudentReviewName}
                </h3>
                <p className={Styles.textContent2}>{item.StudentReviewRole}</p>
                <p className={Styles.textContent3}>
                  {item.StudentReviewContent}
                </p>
              </div>
            </div>
          ))}
        </MultiCarousel>
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
