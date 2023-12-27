import React, { useState } from "react";
import styles from "../exploreTheCourses.module.css";

interface Content5Props {
  contentHeading: string;
  durationIcon: string;
  tickIcon: string;
  dropDown: string;
  curriculumContainer: {
    weekHeading: string;
    weekPoints: string[];
  }[];
}

const Content5: React.FC<Content5Props> = ({
  contentHeading,
  durationIcon,
  tickIcon,
  dropDown,
  curriculumContainer,
}) => {
  const [activeWeekIndex, setActiveWeekIndex] = useState<number | null>(0);

  const handleWeekClick = (index: number) => {
    setActiveWeekIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`${styles.content5} ${styles.content}`}>
      <h3>{contentHeading}</h3>

      <div className={styles.weekContainer}>
        {curriculumContainer.map((week, index) => (
          <div
            key={index}
            className={`${styles.weekCard} ${
              index === activeWeekIndex ? styles.active : ""
            }`}
            onClick={() => handleWeekClick(index)}
          >
            <div className={styles.weekHeader}>
              <div className={styles.textIcon}>
                <img src={durationIcon} alt="Duration Icon" />
                <span>{week.weekHeading}</span>
              </div>
              <img src={dropDown} alt="DropDown Icon" />
            </div>
            {index === activeWeekIndex && (
              <div className={styles.dropdown}>
                {week.weekPoints.map((value, pointIndex) => (
                  <div key={pointIndex} className={styles.weekPoint}>
                    <img src={tickIcon} alt="Tick Icon" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content5;
