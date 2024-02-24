import React, { useEffect, useState } from "react";
import styles from "./BannerWithVideo.module.css";
import { Modal } from "react-bootstrap";
import ModalPopup from "@/components/Modal/ModalPopup";
import { useRouter } from "next/router";

interface Point {
  data: BannerCourseData; // This is missing in the original code
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
    UspSectionData: { part1, part2, part3 },
  } = data;

  const router = useRouter();
  const [count, setCount] = useState("0");
  const [show, setShow] = useState<boolean>(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const [title, setTitle] = useState("");

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
              <a
                className={styles.brochureBtn}
                onClick={handleEnrollButtonClick}
              >
                <img
                  className={styles.brochureIcon}
                  src={BrochureIcon}
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

        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              className={styles.imageBanner}
              src={data.BannerImgDesktop}
              alt={`Banner for ${coursePageName}`}
            />
            <div
              className={styles.playIconContainer}
              onClick={() => handleEnrollButtonVidio(data.youtubeVideoLink)}
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
