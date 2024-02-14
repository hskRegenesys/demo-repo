import React, { useState, useEffect, useContext, useRef } from "react";
import Styles from "./AllCoursesSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useActive from "@/hooks/useActive";
import _ from "lodash";
import { useRouter } from "next/router";
import { urlInfo } from "../../config/helper";

import {
  artificialIntelligenceCode,
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../../config/constant";

import { allCourseList } from "@/data/courseData";
import AllCourcesCardData from "../../../data/newComponentData/commonComponentData/AllCourcesCardData";

interface Card {
  cardProgram: string;
  code: any;
  id: string;
  parentId: string;
  cardImg: string;
  cardWeek: string;
  cardCount: string;
  cardTool: string;
}

interface allCoursesSliderProps {
  handleEnrollButtonClick: () => void;
  style?: React.CSSProperties; // Add style prop
}

const AllCoursesSlider: React.FC<allCoursesSliderProps> = ({
  handleEnrollButtonClick,
  style,
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  function redirectCard(name: any, code: any, id: any, parent_id: any) {
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
      courseDetails
        ? router.push(
            `/${programBaseUrl}/${urlInfo(courseDetails?.name)}/${urlInfo(
              name
            )}`
          )
        : router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, [allCourseList]);

  let CourseCard: any = [];

  if (allCourseList?.length) {
    allCourseList?.forEach(function (val: any) {
      if (val.parent_id === null && val.isAddon == false && val.mode_id === 1) {
        CourseCard.push(val);
      }
    });
  }

  const listRef = useRef(null);
  const ref = useActive("#testimonials");
  function getWeeksDiff(start_date: any, end_date: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.ceil(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }

  let parentCourses: any = [];

  if (AllCourcesCardData?.Courses) {
    const coursesData = AllCourcesCardData.Courses as {
      [key: string]: {
        parentCource?: any;
      };
    };

    // Loop through each category in Courses
    Object.keys(coursesData).forEach((category) => {
      const categoryData = coursesData[category];

      // Check if the category has a parentCource
      if (categoryData.parentCource) {
        parentCourses.push(categoryData.parentCource);
      }
    });
  }
  return (
    <div className={Styles.allCoursesSliderContainer} style={style}>
      <h2 className={Styles.smallHeading}>
        {AllCourcesCardData.allCoursesSliderHeading}
      </h2>
      <h1 className={Styles.bigHeading}>
        {AllCourcesCardData.allCoursesSliderSubHeading}
      </h1>
      <div>
        <img
          src="/assets/images/HomeNew/Rocket BG.svg"
          alt="rocket"
          className={Styles.rocketImg}
        />
      </div>
      <div className={Styles.cardContainer}>
        <Swiper
          className={Styles.swiperStyle}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
        >
          {parentCourses.map((parentCourse: any, index: number) => (
            <SwiperSlide key={index}>
              <div className={Styles.card}>
                <div className={Styles.cardHeading}>
                  {parentCourse.cardProgram}
                </div>
                <div className={Styles.imgCardContainer}>
                  <div className={Styles.cardStarContainer}>
                    <img
                      src={AllCourcesCardData.cardStarIcon}
                      alt="cardStar"
                      className={Styles.cardStarIcon}
                    />
                    <span className={Styles.cardStarText}>4.6 Ratings</span>
                  </div>
                  <img
                    src={parentCourse.cardImg}
                    alt={parentCourse.cardProgram}
                    className={Styles.cardImage}
                  />
                </div>
                <div className={Styles.textContainer}>
                  <div className={Styles.line1}>
                    <div className={Styles.icon}>
                      <img
                        src={AllCourcesCardData.cardTimeIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                      />
                    </div>
                    <div className={Styles.boldText}>
                      {parentCourse.cardWeek}
                    </div>
                    <div className={Styles.normalText}>
                      {AllCourcesCardData.cardProgramText}
                    </div>
                  </div>
                  <div className={Styles.line2}>
                    <div className={Styles.icon}>
                      <img
                        src={AllCourcesCardData.cardStudentsIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                      />
                    </div>

                    <div className={Styles.boldText}>
                      {parentCourse.cardCount}
                    </div>
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
                    <div className={Styles.boldText}>
                      {parentCourse.cardTool}
                    </div>
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
                        parentCourse.cardProgram,
                        parentCourse.code,
                        parentCourse.id,
                        parentCourse.parentId
                      )
                    }
                  >
                    Learn More
                  </button>
                  <button
                    onClick={handleEnrollButtonClick}
                    className={Styles.enrollNowButton}
                  >
                    Enrol Now
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

export default AllCoursesSlider;
