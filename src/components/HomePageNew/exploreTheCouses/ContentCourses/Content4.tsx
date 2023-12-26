// Content4.js
import React from "react";
import styles from "../exploreTheCourses.module.css";

interface PricingCard {
  courseName: string;
  frameImg: string;
  price: string;
  tickIcon: string;
  list: string[];
}

interface Content4Props {
  contentHeading: string;
  pricingCard: PricingCard[];
}

const Content4: React.FC<Content4Props> = ({ contentHeading, pricingCard }) => {
  return (
    <div className={`${styles.content4} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <div className={styles.cardContainer4}>
        {pricingCard.map((pricing, index) => (
          <div key={index} className={styles.card4}>
            {/* Frame Image in the top-left corner */}
            <img
              src="/assets/images/HomeNew/Group 2.svg"
              alt="Frame"
              className={styles.frameImage}
            />
            {/* Course Name in the top */}
            <p className={styles.courseNameContent4}>{pricing.courseName}</p>
            {/* Price in green color */}
            <p className={styles.price} style={{ color: "green" }}>
              {pricing.price}
            </p>
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
              <button className={styles.applyNowButton}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content4;
