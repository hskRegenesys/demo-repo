import React, { useState, useEffect } from "react";
import Styles from "./ourCourses.module.css";
import NewHomeData from "../../../data/newHomeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface CardData {
  cardProgram: string;
  cardImg: string;
  cardCount: string;
  cardTool: string;
}

interface CourseData {
  [key: string]: CardData[];
}

interface OurCoursesData {
  OurCoursesTitle: string;
  OurCoursesHeading: string;
  cardTimeIcon: string;
  cardStudentsIcon: string;
  cardBookIcon: string;
  cardStudentEnrollmentText: string;
  cardToolsText: string;
  Courses: CourseData;
  DropdownarrowIcon: string;
}

interface NewHomeData {
  OurCoursesData: OurCoursesData;
}

interface OurCoursesProps {
  data: NewHomeData;
}

const OurCourses: React.FC<OurCoursesProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [mobileDropdownState, setMobileDropdownState] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    // Initialize the selected category with the first category
    const courseCategories = Object.keys(data?.OurCoursesData?.Courses || {});
    if (courseCategories.length > 0) {
      setSelectedCategory(courseCategories[0]);
      // Set default open state for the first dropdown
      setMobileDropdownState((prevState) => ({
        ...prevState,
        [courseCategories[0]]: true,
      }));
    }
  }, [data]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Close all other dropdowns and toggle the open/close state of the selected dropdown
    setMobileDropdownState((prevState) => {
      const newState = { [category]: !prevState[category] };
      // Close all other dropdowns
      Object.keys(prevState).forEach((key) => {
        if (key !== category) {
          newState[key] = false;
        }
      });
      return newState;
    });
  };

  if (!data || !data.OurCoursesData) {
    return null;
  }

  return (
    <div className={Styles.ourCoursesContainer}>
      {/* Head Section */}
      <div className={Styles.ourCoursesDesktop}>
        <div className={Styles.headSection}>
          <h2 className={Styles.smallTitle}>
            {data.OurCoursesData.OurCoursesTitle}
          </h2>
          <h1 className={Styles.bigTitle}>
            {data.OurCoursesData.OurCoursesHeading}
          </h1>
        </div>

        {/* Desktop view content */}
        <div className={Styles.OurCoursesDesktop}>
          {/* Top Section */}
          <div className={Styles.topSection}>
            {Object.keys(data.OurCoursesData.Courses).map((category) => (
              <div
                key={category}
                className={`${Styles.categoryBox} ${
                  selectedCategory === category ? Styles.selected : ""
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Down Section */}
          <div className={Styles.downSection}>
            {selectedCategory &&
              data.OurCoursesData.Courses[selectedCategory].map(
                (card: CardData, index: number) => (
                  <div key={index} className={Styles.card}>
                    <div className={Styles.cardHeading}>{card.cardProgram}</div>

                    <div className={Styles.imgCardContainer}>
                      <div className={Styles.cardStarContainer}>
                        <img
                          src={data.OurCoursesData.cardTimeIcon}
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
                            src={data.OurCoursesData.cardStudentsIcon}
                            alt="icon"
                            className={Styles.cardIcon}
                          />
                        </div>
                        <div className={Styles.boldText}>{card.cardCount}</div>
                        <div className={Styles.normalText}>
                          {data.OurCoursesData.cardStudentEnrollmentText}
                        </div>
                      </div>
                      <div className={Styles.line3}>
                        <div className={Styles.icon}>
                          <img
                            src={data.OurCoursesData.cardBookIcon}
                            alt="icon"
                            className={Styles.cardIcon}
                          />
                        </div>
                        <div className={Styles.boldText}>{card.cardTool}</div>
                        <div className={Styles.normalText}>
                          {data.OurCoursesData.cardToolsText}
                        </div>
                      </div>
                    </div>
                    <div className={Styles.buttonContainer}>
                      <button className={Styles.learnMoreButton}>
                        Learn More
                      </button>
                      <button className={Styles.enrollNowButton}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      {/* Render mobile or desktop view based on screen size */}
      <div className={Styles.OurCoursesMobile}>
        {Object.keys(data.OurCoursesData.Courses).map((category) => (
          <div key={category} className={Styles.mobileDropdown}>
            <div
              className={`${Styles.mobileDropdownHeader} ${
                selectedCategory === category ? Styles.selectedHeding : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category} {/* Render category name */}
              <span className={Styles.dropdownIcon}>
                {mobileDropdownState[category] ? (
                  <img
                    src={data.OurCoursesData.DropdownarrowIcon}
                    alt="iconFaq"
                    className={`${Styles.arrowIcon} ${
                      selectedCategory === category ? Styles.selectedarrow : ""
                    }`}
                  />
                ) : (
                  <img
                    src={data.OurCoursesData.DropdownarrowIcon}
                    alt="iconFaq"
                    className={Styles.arrowIconRotate}
                  />
                )}
              </span>
              {/* Update dropdown icon based on open/close state */}
            </div>
            {mobileDropdownState[category] && (
              <div className={Styles.mobileDropdownContent}>
                {/* Render cards for the selected category */}
                <Swiper
                  className={Styles.swiperStyle}
                  spaceBetween={30}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    720: {
                      slidesPerView: 2,
                    },
                    920: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.OurCoursesData.Courses[category].map((card, index) => (
                    <SwiperSlide key={index}>
                      <div key={index} className={Styles.card}>
                        <div className={Styles.cardHeading}>
                          {card.cardProgram}
                        </div>

                        <div className={Styles.imgCardContainer}>
                          <div className={Styles.cardStarContainer}>
                            <img
                              src={data.OurCoursesData.cardTimeIcon}
                              alt="cardStar"
                              className={Styles.cardStarIcon}
                            />
                            <span className={Styles.cardStarText}>
                              4.6 Ratings
                            </span>
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
                                src={data.OurCoursesData.cardStudentsIcon}
                                alt="icon"
                                className={Styles.cardIcon}
                              />
                            </div>
                            <div className={Styles.boldText}>
                              {card.cardCount}
                            </div>
                            <div className={Styles.normalText}>
                              {data.OurCoursesData.cardStudentEnrollmentText}
                            </div>
                          </div>
                          <div className={Styles.line3}>
                            <div className={Styles.icon}>
                              <img
                                src={data.OurCoursesData.cardBookIcon}
                                alt="icon"
                                className={Styles.cardIcon}
                              />
                            </div>
                            <div className={Styles.boldText}>
                              {card.cardTool}
                            </div>
                            <div className={Styles.normalText}>
                              {data.OurCoursesData.cardToolsText}
                            </div>
                          </div>
                        </div>
                        <div className={Styles.buttonContainer}>
                          <button className={Styles.learnMoreButton}>
                            Learn More
                          </button>
                          <button className={Styles.enrollNowButton}>
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default OurCourses;
