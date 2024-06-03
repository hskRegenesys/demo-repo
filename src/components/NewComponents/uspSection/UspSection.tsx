import React, { useState, useEffect, useRef } from "react";
import UspSectionData from "../../../data/newComponentData/commonComponentData/UspSectionData";
import styles from "./uspSection.module.css";
import Image from "next/image";

const UspSection: React.FC = () => {
  const { uspLocationCard, uspEnrollmentCard, uspUpskillCard } = UspSectionData;

  // const [enrollmentCount, setEnrollmentCount] = useState("0");
  // const [locationCount, setLocationCount] = useState("0");
  // const [upskillCount, setUpskillCount] = useState("0");
  // const [isMobile, setIsMobile] = useState(false);
  // const [hasAnimated, setHasAnimated] = useState(false);
  // const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const countAnimation = (
  //     startValue: number,
  //     endValue: string,
  //     setCount: React.Dispatch<React.SetStateAction<string>>,
  //     duration: number
  //   ) => {
  //     let start = startValue;
  //     const end = parseInt(endValue.substring(0, endValue.length - 1));

  //     if (start === end) return;

  //     const increment = (end - start) / (duration / 100); // Calculate increment value for each tick

  //     let current = start;

  //     const timer = setInterval(() => {
  //       current += increment;
  //       if (current >= end) {
  //         setCount(endValue); // Set final value when animation completes
  //         clearInterval(timer);
  //       } else {
  //         setCount(Math.floor(current).toString() + endValue.slice(-1)); // Update count value
  //       }
  //     }, 100); // Update every 100ms

  //     return () => clearInterval(timer);
  //   };

  //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //     if (entries[0].isIntersecting && !hasAnimated) {
  //       setHasAnimated(true); // Mark the animation as triggered
  //       countAnimation(
  //         299900,
  //         uspEnrollmentCard.uspEnrollmentCount,
  //         setEnrollmentCount,
  //         3000
  //       );
  //       countAnimation(
  //         0,
  //         uspLocationCard.uspEnrollmentCount,
  //         setLocationCount,
  //         2000
  //       );
  //       countAnimation(
  //         0,
  //         uspUpskillCard.uspEnrollmentCount,
  //         setUpskillCount,
  //         2500
  //       );
  //     }
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.5,
  //   });

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, [
  //   uspEnrollmentCard.uspEnrollmentCount,
  //   uspLocationCard.uspEnrollmentCount,
  //   uspUpskillCard.uspEnrollmentCount,
  //   hasAnimated, // Add hasAnimated to dependencies
  // ]);

  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth <= 560);
  //   };

  //   checkIsMobile();

  //   window.addEventListener("resize", checkIsMobile);

  //   return () => window.removeEventListener("resize", checkIsMobile);
  // }, []);

  return (
    <div className={styles.uspSectionContainer}>
      {/* <div className={styles.uspSectionContainer} ref={sectionRef}> */}

      <div className={styles.uspSectionGroupMobile}>
        <Image
          src="/assets/images/allImages/DR-logo.webp"
          alt="Logo"
          width={34}
          height={40}
        />
        <h2>REGENESYS GROUP</h2>
      </div>
      <div className={styles.uspSectionContent}>
        <div className={styles.uspSectionGroup}>
          <Image
            src="/assets/images/allImages/DR-logo.webp"
            alt="Logo"
            width={34}
            height={40}
          />
          <h2>REGENESYS GROUP</h2>
        </div>
        <div className={styles.uspSection}>
          <div className={styles.uspCard}>
            <h3 className={styles.uspGreenText}>
              {uspLocationCard.uspEnrollmentCount}
            </h3>
            <p className={styles.CardText}>{uspLocationCard.uspLocationText}</p>
          </div>
          <div className={`${styles.uspCard} ${styles.enrollmentCard}`}>
            <div className={styles.uspCard}>
              <h4 className={styles.uspGreenText}>
                {uspEnrollmentCard.uspEnrollmentCount}
              </h4>
              <p className={styles.CardText}>
                {uspEnrollmentCard.uspEnrollmentTextMobile}
              </p>
            </div>
          </div>
          <div className={styles.uspCard}>
            <h4 className={styles.uspGreenText}>
              {uspUpskillCard.uspEnrollmentCount}
            </h4>
            <p className={styles.CardText}>{uspUpskillCard.uspUpskillText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UspSection;
