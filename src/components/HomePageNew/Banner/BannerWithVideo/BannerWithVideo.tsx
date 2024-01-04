import React from "react";
import styles from "./BannerWithVideo.module.css";
import BannerData from "../BannerData";

interface Point {
  text: string;
}

interface BannerComponentProps {
  page: string | undefined;
}

type BannerCourseData = {
  BannerImgDesktop: string;
  BannerImgMobile: string;
  coursePage: string;
  contentDesktop: string;
  contentMobile: string;
  tickIcon: string;
  points: string[];
  bannerVideoLink?: string;
  BrochureIcon?: string;
};

interface BannerDataMap {
  [key: string]: BannerCourseData;
}

const BannerWithVideo: React.FC<BannerComponentProps> = ({ page }) => {
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
  if (!bannerAllData) {
    bannerAllData = BannerData[page];
  }

  // If still not available, return null
  if (!bannerAllData) {
    return null;
  }

  const {
    coursePage,
    contentDesktop,
    contentMobile,
    points,
    bannerVideoLink,
    BrochureIcon,
    tickIcon,
  } = bannerAllData;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.contents}>
        <div className={styles.contentSection}>
          <h1>{coursePage}</h1>
          <div className={styles.contentDesktop}>{contentDesktop}</div>
          <div className={styles.contentMobile}>{contentMobile}</div>
          <div className={styles.points}>
            {points.map((point, index) => (
              <div key={index} className={styles.pointsRow}>
                <img src={tickIcon} alt="tick" className={styles.tickIcon} />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttonsContainer}>
            <button className={styles.enrollButton}>Enroll Now</button>
            <button className={styles.BrochureBtn}>
              <img
                src={BrochureIcon}
                alt="Brochure"
                className={styles.brochureIcon}
              />
              Brochure
            </button>
          </div>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.videoCard}>
            <iframe
              title="Banner Video"
              width="100%"
              height="100%"
              src={bannerVideoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "32px 32px 0 0" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithVideo;
