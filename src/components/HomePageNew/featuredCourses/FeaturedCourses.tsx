// FeaturedCourses.jsx

import React from "react";
import NewHomeData from "../../../data/newHomeData";
import Styles from "./featuredCourses.module.css";

const FeaturedCourses = () => {
  return (
    <div className={Styles.featuredCoursesContainer}>
      <h2 className={Styles.smallHeading}>
        {NewHomeData.FeaturedCoursesData.FeaturedCoursesHeading}
      </h2>
      <h1 className={Styles.bigHeading}>
        {NewHomeData.FeaturedCoursesData.FeaturedCoursesSubHeading}
      </h1>
      <div>
        <img
          src="/assets/images/HomeNew/Rocket BG.svg"
          alt="rocket"
          className={Styles.rocketImg}
        />
      </div>
      <div className={Styles.cardContainer}>
        {NewHomeData.FeaturedCoursesData.cards.map((card, index) => (
          <div key={index} className={Styles.card}>
            <div className={Styles.cardHeading}>{card.cardProgram}</div>

            <div className={Styles.imgCardContainer}>
              <div className={Styles.cardStarContainer}>
                <img
                  src={NewHomeData.FeaturedCoursesData.cardStarIcon}
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
              <div className={Styles.line1}>
                <div className={Styles.icon}>
                  <img
                    src={NewHomeData.FeaturedCoursesData.cardTimeIcon}
                    alt="icon"
                    className={Styles.cardIcon}
                  />
                </div>
                <div className={Styles.boldText}>{card.cardWeek}</div>
                <div className={Styles.normalText}>
                  {NewHomeData.FeaturedCoursesData.cardProgramText}
                </div>
              </div>
              <div className={Styles.line2}>
                <div className={Styles.icon}>
                  <img
                    src={NewHomeData.FeaturedCoursesData.cardStudentsIcon}
                    alt="icon"
                    className={Styles.cardIcon}
                  />
                </div>

                <div className={Styles.boldText}>{card.cardCount}</div>
                <div className={Styles.normalText}>
                  {NewHomeData.FeaturedCoursesData.cardStudentEnrollmentText}
                </div>
              </div>
              <div className={Styles.line3}>
                <div className={Styles.icon}>
                  <img
                    src={NewHomeData.FeaturedCoursesData.cardBookIcon}
                    alt="icon"
                    className={Styles.cardIcon}
                  />
                </div>
                <div className={Styles.boldText}>{card.cardTool}</div>
                <div className={Styles.normalText}>
                  {NewHomeData.FeaturedCoursesData.cardToolsText}
                </div>
              </div>
            </div>
            <div className={Styles.buttonContainer}>
              <button className={Styles.learnMoreButton}>Learn More</button>
              <button className={Styles.enrollNowButton}>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
