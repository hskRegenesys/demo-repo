import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./TalentedComponent.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

interface TalentedComponentProp {
  handleEnrollButtonClick: () => void;
  FacultyData: any;
}

interface Faculty {
  facultyImg?: string;
  facultyName: string;
  facultyEducation: string;
  yearsOfExperience?: string;
}

const TalentedComponent: React.FC<TalentedComponentProp> = ({
  handleEnrollButtonClick,
  FacultyData,
}) => {
  const data: Faculty[] = Object.values(FacultyData);
  const [isMobile, setIsMobile] = useState(false);
  const imageUrl = imageBaseUrl();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: isMobile,
    Loop: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <div className={`slick-next ${styles.nextButton}`} />,
    prevArrow: <div className={`slick-prev ${styles.prevButton}`} />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.talentedComponent}>
      <div className={styles.leftSection}>
        <h2 className={styles.heading}>Meet our Faculty</h2>
        <h2 className={styles.subheading}>See Our Talented Faculty</h2>
        <button className={styles.btnStart} onClick={handleEnrollButtonClick}>
          Enrol Now
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.cardContainer}>
          <Slider {...settings} className={styles.sliderStyle}>
            {data.map((faculty: Faculty, index: number) => (
              <div key={index} className={styles.card}>
                <div className={styles.bgcolor}></div>
                <div className={styles.cardImg}>
                  {faculty.facultyImg && (
                    <Image
                      src={`${imageUrl}${faculty.facultyImg}`}
                      alt={faculty.facultyName}
                      title={faculty.facultyName}
                      width={110}
                      height={110}
                      priority
                    />
                  )}
                </div>
                <p className={styles.facultyName}>{faculty.facultyName}</p>
                <p className={styles.courseName}>{faculty.facultyEducation}</p>
                {faculty.yearsOfExperience && (
                  <p className={styles.yearsOfExperience}>
                    <span>{faculty.yearsOfExperience} </span>Years of Experience
                  </p>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <button
        className={styles.btnStartMobile}
        onClick={handleEnrollButtonClick}
      >
        Enrol Now
      </button>
    </div>
  );
};

export default TalentedComponent;
