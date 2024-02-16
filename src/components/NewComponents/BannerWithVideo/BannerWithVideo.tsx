import React from "react";
import styles from "./BannerWithVideo.module.css";

interface Point {
  text: string;
}

interface BannerComponentProps {
  handleEnrollButtonVidio: (videoLink: string) => void;
  handleEnrollButtonClick: () => void;
  data: BannerCourseData; // Corrected type
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

const BannerWithVideo: React.FC<BannerComponentProps> = ({
  handleEnrollButtonVidio,
  handleEnrollButtonClick,
  data,
}) => {
  const {
    coursePageName,
    contentText,
    topSectionPoint1,
    topSectionPoint2,
    BrochureIcon,
    vidoPlayIcon,
  } = data;

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
              <div
                className={styles.enrollButton}
                onClick={handleEnrollButtonClick}
              >
                Enroll Now!
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              className={styles.imageBanner}
              src={data.BannerImgDesktop}
              alt={`Banner for ${coursePageName}`}
            />
            <div
              className={styles.playIconContainer}
              onClick={() =>
                data && handleEnrollButtonVidio(data.youtubeVideoLink)
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
