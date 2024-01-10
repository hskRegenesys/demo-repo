import React from "react";
import styles from "./BannerWithVideo.module.css";
import BannerData from "../BannerData";

interface Point {
  text: string;
}

interface BannerComponentProps {
  page: string | undefined;
  handleEnrollButtonClick: (videoLink: string) => void;
}

type BannerCourseData = {
  BannerImgDesktop: string;
  coursePageName: string;
  topSectionPoint1: string;
  topSectionPoint2: string;
  contentText: string;
  bannerVideoLink?: string;
  BrochureIcon?: string;
  vidoPlayIcon?: string;
  youtubeVideoLink: string;
};

interface BannerDataMap {
  [key: string]: BannerCourseData;
}

const BannerWithVideo: React.FC<BannerComponentProps> = ({
  page,
  handleEnrollButtonClick,
}) => {
  if (!page) {
    return null;
  }

  // Check specific properties first
  let bannerAllData: BannerCourseData | undefined;

  if (page === "basic-data-science") {
    bannerAllData = BannerData?.basicDataScience;
  } else if (page === "advanced-data-science") {
    bannerAllData = BannerData?.advancedDataScience;
  } else if (page === "applied-data-science") {
    bannerAllData = BannerData?.appliedDataScience;
  } else if (page === "digital-marketing-fundamentals") {
    bannerAllData = BannerData?.digitalMarketingFundamentals;
  } else if (page === "advance-digital-marketing-course") {
    bannerAllData = BannerData?.digitalMarketingAdvanced;
  } else if (page === "cyber-security") {
    bannerAllData = BannerData?.cyberSecurity;
  } else if (page === "project-management") {
    bannerAllData = BannerData?.projectManagement;
  } else if (page === "ai-introductory") {
    bannerAllData = BannerData?.artificialIntelligenceIntroductory;
  } else if (page === "ai-intermediary") {
    bannerAllData = BannerData?.artificialIntelligenceIntermediary;
  } else if (page === "ai-advanced-applied") {
    bannerAllData = BannerData?.artificialIntelligenceAdvancedApplied;
  }

  // If specific properties not available, try the page directly
  // if (!bannerAllData) {
  //   bannerAllData = BannerData[page];
  // }

  // If still not available, return null
  if (!bannerAllData) {
    return null;
  }

  const {
    coursePageName,
    contentText,
    topSectionPoint1,
    topSectionPoint2,
    BrochureIcon,
    vidoPlayIcon,
    youtubeVideoLink,
  } = bannerAllData;

  return (
    <div className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
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
                  src={BrochureIcon}
                  alt="Brochure Icon"
                />
                Brochure
              </div>
              <div className={styles.enrollButton}>Enroll Now!</div>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              className={styles.imageBanner}
              src={bannerAllData.BannerImgDesktop}
              alt={`Banner for ${coursePageName}`}
            />
            <div
              className={styles.playIconContainer}
              onClick={() =>
                bannerAllData &&
                handleEnrollButtonClick(bannerAllData.youtubeVideoLink)
              }
            >
              <div className="video-main">
                <div className="promo-video">
                  <div className={styles.wavesBlock}>
                    <div className={`${styles.waves} ${styles.wave1}`}></div>
                    <div className={`${styles.waves} ${styles.wave2}`}></div>
                    <div className={`${styles.waves} ${styles.wave3}`}></div>
                  </div>
                </div>
                <div className={styles.playIconStyle}>
                  <img
                    src={vidoPlayIcon}
                    className={styles.playIcon}
                    alt="play Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithVideo;
