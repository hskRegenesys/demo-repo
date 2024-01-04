import React from "react";
import styles from "./BannerwithImg.module.css";
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
  introVideoLink?: string;
  bannerVideoLink?: string;
  BrochureIcon?: string;
  PlayVidio?: string;
};

interface BannerDataMap {
  [key: string]: BannerCourseData;
}

const BannerComponent: React.FC<BannerComponentProps> = ({ page }) => {
  if (!page) {
    return null;
  }

  // Check specific properties first
  let bannerAllData: BannerCourseData | undefined;

  if (page === "data-science") {
    bannerAllData = BannerData?.DataScience;
  } else if (page === "digital-marketing") {
    bannerAllData = BannerData?.digitalMarketing;
  } else if (page === "artificial-intelligence") {
    bannerAllData = BannerData?.artificialIntelligence;
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
    introVideoLink,
    BrochureIcon,
    tickIcon,
  } = bannerAllData;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImg}>
        <img
          src={bannerAllData.BannerImgDesktop}
          alt="Desktop Banner"
          className={styles.bannerImageDesktop}
        />
        <img
          src={bannerAllData.BannerImgMobile}
          alt="Mobile Banner"
          className={styles.bannerImageMobile}
        />
      </div>
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
            {introVideoLink && (
              <a
                href={introVideoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.watchVideoButton}
              >
                <div className={styles.playVideo}>
                  <div className={styles.Vidio}>
                    <img src={bannerAllData.PlayVidio} alt="playVideo" />
                  </div>
                  <span>Hear My Story</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.videoSection}></div>
    </div>
  );
};

export default BannerComponent;
