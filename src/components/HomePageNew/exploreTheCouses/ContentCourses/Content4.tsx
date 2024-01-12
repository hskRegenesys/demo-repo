// Content4.js
import React from "react";
import styles from "../exploreTheCourses.module.css";

interface LevelCard {
  courseName: string;
  frameImg: string;
  tickIcon: string;
  list: string[];
}

interface Content4Props {
  contentHeading: string;
  LevelCard: LevelCard[];
}

const Content4: React.FC<Content4Props> = ({ contentHeading, LevelCard }) => {
  return (
    <div className={`${styles.content4} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <div className={styles.cardContainer4}>
        {LevelCard.map((pricing, index) => (
          <div className={styles.card4} key={index}>
            {/* Frame Image in the top-left corner */}
            <img
              src="/assets/images/HomeNew/Group 2.svg"
              alt="Frame"
              className={styles.frameImage}
            />
            {/* Course Name in the top */}
            <p className={styles.courseNameContent4}>{pricing.courseName}</p>
            {/* Tick Icon and List */}
            <div className={styles.tickListContainer}>
              <ul>
                {pricing.list.map((item, subIndex) => (
                  <li key={subIndex}>
                    <img
                      src="/assets/images/HomeNew/Check.svg"
                      alt="Tick Icon"
                      className={styles.tickIcon}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Buttons */}
            <div className={styles.buttonsContainer}>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content4;
