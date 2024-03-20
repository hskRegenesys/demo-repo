// RelatedCourses.js
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Styles from "./RelatedCourses.module.css";
import _ from "lodash";
import { useRouter } from "next/router";
import { urlInfo } from "../../../config/helper";
import {
  artificialIntelligenceCode,
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../../../config/constant";
import { allCourseList } from "@/data/courseData";

import AllCourcesCardData from "../../../../data/newComponentData/commonComponentData/AllCourcesCardData";

interface RelatedCoursesProps {
  handleEnrollButtonClick: () => void;
  page: string | undefined;
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({
  handleEnrollButtonClick,
  page,
}) => {
  const router = useRouter();

  // Function to handle redirection when a card is clicked
  const redirectCard = (name: string, code: any, id: any, parent_id: any) => {
    if (
      code === dataScienceCode ||
      code === digitalMarkrtingCode ||
      code === artificialIntelligenceCode
    ) {
      router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    } else {
      const courseDetails = _.find(
        allCourseList,
        (item) => item?.id === parent_id
      );
      const parentPath = courseDetails
        ? `/${programBaseUrl}/${urlInfo(courseDetails?.name)}/`
        : `/${programBaseUrl}/`;
      router.push(`${parentPath}${urlInfo(name)}`);
    }
  };

  // Filter courses based on the selected page
  const coursesData =
    page === "data-science"
      ? AllCourcesCardData.Courses.DataScience.SubCources
      : // : page === "digital-marketing"
      // ? AllCourcesCardData.Courses.DigitalMarketing.SubCources
      page === "artificial-intelligence"
      ? AllCourcesCardData.Courses.ArtificialIntelligence.SubCources
      : null;

  // Return null if no courses found
  if (!coursesData) {
    return null;
  }

  const numberOfSlides = coursesData.length;

  return (
    <div className={Styles.RelatedCourses}>
      <div className={Styles.headSection}>
        <h2 className={Styles.smallTitle}>
          {AllCourcesCardData.RelatedCoursesTitle}
        </h2>
        <h1 className={Styles.bigTitle}>
          {AllCourcesCardData.RelatedCoursesHeding}
        </h1>
      </div>
      <div className={Styles.RelatedCoursesCardContainer}>
        <Swiper
          className={Styles.swiperStyle}
          spaceBetween={30}
          slidesPerView={numberOfSlides}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            720: { slidesPerView: 2 },
            1200: { slidesPerView: numberOfSlides },
          }}
        >
          {coursesData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className={Styles.card}>
                <div className={Styles.cardHeading}>{card.cardProgram}</div>

                <div className={Styles.imgCardContainer}>
                  <div className={Styles.cardStarContainer}>
                    <img
                      src={AllCourcesCardData.cardTimeIcon}
                      alt="cardStar"
                      className={Styles.cardStarIcon}
                    />
                    <span className={Styles.cardStarText}>4.6 Ratings</span>
                  </div>
                  <img
                    src={card.cardImg}
                    alt={card.cardProgram}
                    className={Styles.cardImage}
                  />
                </div>

                <div className={Styles.textContainer}>
                  <div className={Styles.line2}>
                    <div className={Styles.icon}>
                      <img
                        src={AllCourcesCardData.cardStudentsIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                      />
                    </div>
                    <div className={Styles.boldText}>{card.cardCount}</div>
                    <div className={Styles.normalText}>
                      {AllCourcesCardData.cardStudentEnrollmentText}
                    </div>
                  </div>
                  <div className={Styles.line3}>
                    <div className={Styles.icon}>
                      <img
                        src={AllCourcesCardData.cardBookIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                      />
                    </div>
                    <div className={Styles.boldText}>{card.cardTool}</div>
                    <div className={Styles.normalText}>
                      {AllCourcesCardData.cardToolsText}
                    </div>
                  </div>
                </div>

                <div className={Styles.buttonContainer}>
                  <button
                    className={Styles.learnMoreButton}
                    onClick={() =>
                      redirectCard(
                        card.cardProgram,
                        card.code,
                        card.id,
                        card.parentId
                      )
                    }
                  >
                    Learn More
                  </button>
                  <button
                    onClick={handleEnrollButtonClick}
                    className={Styles.enrollNowButton}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedCourses;
