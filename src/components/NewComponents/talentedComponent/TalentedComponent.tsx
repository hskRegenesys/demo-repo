import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import Styles from "./TalentedComponent.module.css";
import Image from "next/image";
import OurLocation from "../OurLocation/OurLocation";

SwiperCore.use([Navigation, Pagination]);

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
  const [paginationText, setPaginationText] = useState<any>(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 920;
      setPaginationText(isMobile ? { clickable: true } : false);
    };

    handleResize();

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
    <>
      <div className={Styles.talentedComponent}>
        <div className={Styles.leftSection}>
          <p className="main-heading-start">Meet our Faculty</p>
          <h2 className="main-sub-heading-start">See Our Talented Faculty</h2>
          <button className={Styles.btnStart} onClick={handleEnrollButtonClick}>
            Enrol Now
          </button>
        </div>

        <div className={Styles.rightSection}>
          <div className={Styles.cardContainer}>
            <div className={Styles.swiperNavigation}>
              <Swiper
                ref={swiperRef}
                className={`${Styles.swiperStyle} swiperStyle`}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                  },
                  452: {
                    slidesPerView: 2.2,
                  },
                  760: {
                    slidesPerView: 2.6,
                    slidesPerGroup: 1,
                  },
                  820: { slidesPerView: 1.5 },
                  1360: { slidesPerView: 2.2 },
                  1540: { slidesPerView: 2.3 },
                }}
              >
                {data.map((faculty: Faculty, index: number) => (
                  <SwiperSlide key={index}>
                    <div className={Styles.card}>
                      <div className={Styles.bgcolor}></div>
                      <div className={Styles.cardImg}>
                        {faculty.facultyImg && (
                          <Image
                            src={faculty.facultyImg}
                            alt="Faculty"
                            title={faculty.facultyName}
                            width={132}
                            height={132}
                          />
                        )}
                      </div>
                      <p className={Styles.facultyName}>
                        {faculty.facultyName}
                      </p>
                      <p className={Styles.courseName}>
                        {faculty.facultyEducation}
                      </p>
                      {faculty.yearsOfExperience && (
                        <p className={Styles.yearsOfExperience}>
                          <span>{faculty.yearsOfExperience} </span>Years of
                          Experience
                        </p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                aria-label="Arrow Button"
                className={`swiper-button-next ${Styles.nextButton}`}
                onClick={handleNextSlide}
              ></button>

              <button
                aria-label="Arrow Button"
                className={`swiper-button-prev ${Styles.prevButton}`}
                onClick={handlePrevSlide}
              ></button>
            </div>
          </div>
        </div>
        <button
          className={Styles.btnStartMobile}
          onClick={handleEnrollButtonClick}
        >
          Enrol Now
        </button>
      </div>
      <OurLocation />
    </>
  );
};

export default TalentedComponent;
