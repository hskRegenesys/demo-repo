import React from "react";
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
  } = data;

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
              <span className={styles.point1}>{topSectionPoint1}</span>
              <span className={styles.point2}>{topSectionPoint2}</span>
            </div>
            <h2 className={styles.courseHeading}>
              Certification Programme in <span>{coursePageName}</span>
            </h2>
            <p className={styles.contentText}>{contentText}</p>
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
