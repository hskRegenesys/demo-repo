import React, { useState, useEffect, useContext, useRef } from "react";
import Styles from "./AllCoursesSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import useActive from "@/hooks/useActive";
import _ from "lodash";
import { useRouter } from "next/router";
import { urlInfo } from "../../config/helper";
import Image from "next/image";

SwiperCore.use([Pagination, Autoplay]);

import {
  artificialIntelligenceCode,
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../../config/constant";
import imageBaseUrl from "src/utils/imageBaseUrl";

// import { allCourseList } from "@/data/courseData";
// import AllCourcesCardData from "../../../data/newComponentData/commonComponentData/AllCourcesCardData";

interface Card {
  cardProgram: string;
  code: any;
  id: string;
  parentId: string;
  cardImg: string;
  ImgAlt: string;
  cardWeek: string;
  cardCount: string;
  cardTool: string;
  CourseNameCode: string;
}

interface allCoursesSliderProps {
  handleEnrollButtonClick: (code?: string) => void;
  style?: React.CSSProperties; // Add style prop
  allCourseList: any;
  AllCourcesCardData: any;
}

const AllCoursesSlider: React.FC<allCoursesSliderProps> = ({
  handleEnrollButtonClick,
  style,
  allCourseList,
  AllCourcesCardData,
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
      router.push(
        name === "Digital Marketing with GenAI"
          ? "/all-courses/digital-marketing-course"
          : `/${programBaseUrl}/${urlInfo(name)}`
      );
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

  const addBottomValue = parentCourses.length <= 3 ? "0px" : "60px";

  return (
    <div className={Styles.allCoursesSliderContainer} style={style}>
      <p className="main-heading">
        {AllCourcesCardData.allCoursesSliderHeading}
      </p>
      <h2 className="main-sub-heading">
        {AllCourcesCardData.allCoursesSliderSubHeading}
      </h2>

      <div className={Styles.cardContainer}>
        <Swiper
          style={{ paddingBottom: addBottomValue }}
          className={`${Styles.swiperStyle} swiperStyle`}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
          slidesPerGroup={3}
          centeredSlides={false}
          // grabCursor={true}
          // modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
              centeredSlides: true,
            },
            865: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1700: {
              slidesPerView: 3,
              centeredSlides: false,
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
                  <Image
                    // src={parentCourse.cardImg}
                    src={parentCourse.cardImg}
                    alt="All course"
                    title={parentCourse.ImgAlt}
                    className={Styles.cardImage}
                    width={347}
                    height={220}
                    priority={true}
                  />
                </div>
                <div className={Styles.textContainer}>
                  <div className={Styles.line1}>
                    <div className={Styles.icon}>
                      <Image
                        src={AllCourcesCardData.cardTimeIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                        width={24}
                        height={24}
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
                      <Image
                        src={AllCourcesCardData.cardStudentsIcon}
                        alt="icon"
                        className={Styles.cardIcon}
                        width={24}
                        height={24}
                        priority={true}
                      />
                    </div>

                    <div className={Styles.boldText}>
                      {parentCourse.cardCount}
                    </div>
                    <div className={Styles.normalText}>
                      {AllCourcesCardData.cardStudentEnrollmentText}
                    </div>
                  </div>
                  {parentCourse.cardTool ? (
                    <div className={Styles.line3}>
                      <div className={Styles.icon}>
                        <Image
                          src={AllCourcesCardData.cardBookIcon}
                          alt="icon"
                          className={Styles.cardIcon}
                          width={24}
                          height={24}
                        />
                      </div>

                      <div className={Styles.boldText}>
                        {parentCourse.cardTool}
                      </div>
                      <div className={Styles.normalText}>
                        {AllCourcesCardData.cardToolsText}
                      </div>
                    </div>
                  ) : (
                    <div className={Styles.line3}>
                      <div className={Styles.icon}>
                        <Image
                          src={AllCourcesCardData.cardBookIcon}
                          alt="icon"
                          className={Styles.cardIcon}
                          width={24}
                          height={24}
                        />
                      </div>

                      <div className={Styles.normalText}>Capstone Projects</div>
                    </div>
                  )}
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
                    onClick={() => {
                      handleEnrollButtonClick(parentCourse.CourseNameCode);
                    }}
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
