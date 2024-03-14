import React, { useState, useEffect } from "react";
import UspSectionData from "../../../data/newComponentData/commonComponentData/UspSectionData";
import styles from "./uspSection.module.css";

const UspSection = () => {
  const { uspLocationCard, uspEnrollmentCard, uspUpskillCard } = UspSectionData;

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(uspEnrollmentCard.uspEnrollmentCount.substring(0, 3));

    if (start === end) return;

    // Fix the duration to 2000 milliseconds (2 seconds)
    let incrementTime = 2000 / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(
        String(start) + uspEnrollmentCard.uspEnrollmentCount.substring(3)
      );
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [uspEnrollmentCard.uspEnrollmentCount]);

  return (
    <div className={styles.uspSectionContainer}>
      <div className={styles.uspCard}>
        <img src={uspLocationCard.usplocationIcon} alt="Icon 1" />
        <p className={styles.CardText}>{uspLocationCard.uspLocationText}</p>
      </div>
      <div className={`${styles.uspCard} ${styles.enrollmentCard}`}>
        <img src={uspEnrollmentCard.StudentEnrolIcon} alt="Icon 2" />
        <div className={styles.enrollmentContainer}>
          <p className={styles.uspEnrollmentCount}>
            {count}
            <span className={styles.CardText}>
              {uspEnrollmentCard.uspEnrollmentText}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.uspCard}>
        <img src={uspUpskillCard.uspBookIcon} alt="Icon 3" />
        <p className={styles.CardText}>{uspUpskillCard.uspUpskillText}</p>
      </div>
    </div>
  );
};

export default UspSection;
