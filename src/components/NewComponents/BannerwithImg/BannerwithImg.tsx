import React, { useEffect, useState } from "react";
import styles from "./BannerwithImg.module.css";

interface Point {
  text: string;
}

interface BannerComponentProps {
  data: BannerCourseData; // This is missing in the original code
  handleEnrollButtonClick: () => void;
}

type BannerCourseData = {
  BannerImgDesktop: string;
  coursePageName: string;
  topSectionPoint1: string;
  topSectionPoint2: string;
  contentText: string;
  bannerVideoLink?: string;
  BrochureIcon?: string;
  UspSectionData: {
    part1: {
      card1text: string;
      iconImage1: string;
    };
    part2: {
      card2text: string;
      enrollmentCount: string;
      iconImage2: string;
      duration: string;
    };
    part3: {
      card3text: string;
      iconImage3: string;
    };
  };
};

const BannerComponent: React.FC<BannerComponentProps> = ({
  handleEnrollButtonClick,
  data,
}) => {
  const {
    coursePageName,
    contentText,
    topSectionPoint1,
    topSectionPoint2,
    BrochureIcon,
    UspSectionData: { part1, part2, part3 },
  } = data;

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(part2.enrollmentCount.substring(0, 3));

    if (start === end) return;

    // Fix the duration to 2000 milliseconds (2 seconds)
    let incrementTime = 2000 / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + part2.enrollmentCount.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [part2.enrollmentCount]);

  return (
    <div className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              src={data.BannerImgDesktop}
              alt={`Banner for ${coursePageName}`}
            />
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.card}>
            <div className={styles.topSection}>
              {/* <span className={styles.point1}>{topSectionPoint1}</span> */}
              <span className={styles.point2}>
                {topSectionPoint1}{" "}
                <span className={styles.pointInside}>{topSectionPoint2}</span>
              </span>
            </div>
            <h2 className={styles.courseHeading}>
              Your Gateway to Success Starts with <span>{coursePageName}</span>
            </h2>
            <p className={styles.contentText}>{contentText}</p>

            <div className={styles["usp-section-container"]}>
              <div className={styles["usp-card"]}>
                <img src={part1.iconImage1} alt="Icon 1" />
                <p className={styles["card-text"]}>{part1.card1text}</p>
              </div>
              <div
                className={`${styles["usp-card"]} ${styles["enrollment-card"]}`}
              >
                <img src={part2.iconImage2} alt="Icon 2" />
                <div className={styles["enrollment-container"]}>
                  <p className={styles["enrollment-count"]}>
                    {count}{" "}
                    <span className={styles["card-text"]}>
                      {part2.card2text}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles["usp-card"]}>
                <img src={part3.iconImage3} alt="Icon 3" />
                <p className={styles["card-text"]}>{part3.card3text}</p>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <div className={styles.brochureBtn}>
                <img
                  className={styles.brochureIcon}
                  src={BrochureIcon || ""}
                  alt="Brochure Icon"
                />
                Brochure
              </div>
              <div
                className={styles.enrollButton}
                onClick={handleEnrollButtonClick}
              >
                Enroll Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
