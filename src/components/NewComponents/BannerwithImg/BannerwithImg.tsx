import React, { useEffect, useState } from "react";
import styles from "./BannerwithImg.module.css";

interface Point {
  text: string;
}

interface BannerComponentProps {
  data: BannerCourseData; // This is missing in the original code
  handleEnrollButtonClick: () => void;
  pageName: any;
}

type BannerCourseData = {
  BannerImgDesktop: string;
  coursePageName: string;
  BestSaleText: string;
  topTextMessage: string;
  contentText: string;
  bannerVideoLink?: string;
  BrochureIcon?: string;
  BannerImgAlt: string;
  UspSectionData: {
    uspLocationCard: {
      uspLocationText: string;
      usplocationIcon: string;
    };
    uspEnrollmentCard: {
      uspEnrollmentText: string;
      uspEnrollmentCount: string;
      StudentEnrolIcon: string;
      duration: string;
    };
    uspUpskillCard: {
      uspUpskillText: string;
      uspBookIcon: string;
    };
  };
};

const BannerComponent: React.FC<BannerComponentProps> = ({
  handleEnrollButtonClick,
  data,
  pageName,
}) => {
  const {
    coursePageName,
    BannerImgAlt,
    contentText,
    BestSaleText,
    topTextMessage,
    BrochureIcon,
    UspSectionData: { uspLocationCard, uspEnrollmentCard, uspUpskillCard },
  } = data;

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
    <div className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              src={data.BannerImgDesktop}
              alt={data.BannerImgAlt}
              title={data.BannerImgAlt}
            />
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.card}>
            <div className={styles.topSection}>
              {/* <span className={styles.topTextBestsale}>{BestSaleText}</span> */}
              <h2 className={styles.topTextMessage}>
                {BestSaleText}{" "}
                <span className={styles.pointInside}>{topTextMessage}</span>
              </h2>
            </div>
            <h1 className={styles.courseHeading}>{pageName}</h1>
            <p className={styles.contentText}>{contentText}</p>

            <div className={styles.uspSectionContainer}>
              <div className={styles.uspCardCountry}>
                <img src={uspLocationCard.usplocationIcon} alt="Icon 1" />
                <p className={styles.CardText}>
                  {uspLocationCard.uspLocationText}
                </p>
              </div>
              <div
                className={`${styles.uspCardCount} ${styles.enrollmentCard}`}
              >
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
              <div className={styles.uspCardUpskill}>
                <img src={uspUpskillCard.uspBookIcon} alt="Icon 3" />
                <p className={styles.CardText}>
                  {uspUpskillCard.uspUpskillText}
                </p>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <a
                className={styles.brochureBtn}
                onClick={handleEnrollButtonClick}
              >
                <img
                  className={styles.brochureIcon}
                  src={BrochureIcon || ""}
                  alt="Brochure Icon"
                />
                Brochure
              </a>
              <a
                className={styles.enrollButton}
                onClick={handleEnrollButtonClick}
              >
                Enrol Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
