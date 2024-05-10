import React, { useState, useEffect } from "react";
import UspSectionData from "../../../data/newComponentData/commonComponentData/UspSectionData";
import styles from "./uspSection.module.css";
import Image from "next/image";

const UspSection = () => {
  const { uspLocationCard, uspEnrollmentCard, uspUpskillCard } = UspSectionData;
  const imageUrl = `${process.env.awsImage_url}`;

  const [count, setCount] = useState("0");
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 560);
    };

    // Initial check
    checkIsMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIsMobile);

    // Clean up the listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className={styles.uspSectionContainer}>
      <div className={styles.uspCard}>
        <Image
          // src={uspLocationCard.usplocationIcon}
          src={`${imageUrl}${uspLocationCard.usplocationIcon}`}
          alt="Icon 1"
          width={40}
          height={40}
        />
        <p className={styles.CardText}>{uspLocationCard.uspLocationText}</p>
      </div>
      <div className={`${styles.uspCard} ${styles.enrollmentCard}`}>
        <Image
          // src={uspEnrollmentCard.StudentEnrolIcon}
          src={`${imageUrl}${uspEnrollmentCard.StudentEnrolIcon}`}
          alt="Icon 2"
          width={40}
          height={40}
        />
        <div className={styles.enrollmentContainer}>
          <p className={styles.uspEnrollmentCount}>
            {count}
            <span className={styles.CardText}>
              {isMobile
                ? ` ${uspEnrollmentCard.uspEnrollmentTextMobile}`
                : `${uspEnrollmentCard.uspEnrollmentText}`}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.uspCard}>
        <Image
          // src={uspUpskillCard.uspBookIcon}
          src={`${imageUrl}${uspUpskillCard.uspBookIcon}`}
          alt="Icon 3"
          width={40}
          height={40}
        />
        <p className={styles.CardText}>{uspUpskillCard.uspUpskillText}</p>
      </div>
    </div>
  );
};

export default UspSection;
