// Content2.js
import React from "react";
import styles from "../exploreTheCourses.module.css";

interface Content2Props {
  contentHeading: string;
  cardTools: { img: string }[];
}

const Content2: React.FC<Content2Props> = ({ contentHeading, cardTools }) => {
  return (
    <div className={`${styles.content2} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <ul className={styles.horizontalCardContainer}>
        {cardTools.map((tool, index) => (
          <li key={index} className={styles.horizontalCard}>
            <img
              src={tool.img}
              alt={`Tool ${index + 1}`}
              className={styles.toolImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content2;
