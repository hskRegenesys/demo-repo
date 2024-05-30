import React, { useEffect, useState } from "react";
import styles from "./BannerWithVideo.module.css";
import Image from "next/image";
interface BannerComponentProps {
  handleEnrollButtonVidio: (videoLink: string) => void;
  data: BannerCourseData;
  pageName: any;
  handleEnrollButtonClick: (title?: string) => void;
}

type BannerCourseData = {
  BannerImgDesktop: string;
  coursePageName: string;
  BestSaleText: string;
  topTextMessage: string;
  contentText: string;
  bannerVideoLink?: string;
  BrochureIcon: string;
  vidoPlayIcon?: string;
  youtubeVideoLink: string;
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

const BannerWithVideo: React.FC<BannerComponentProps> = ({
  handleEnrollButtonVidio,
  handleEnrollButtonClick,
  data,
  pageName,
}) => {
  const {
    coursePageName,
    contentText,
    BestSaleText,
    topTextMessage,
    BrochureIcon,
    vidoPlayIcon,
    UspSectionData: { uspLocationCard, uspEnrollmentCard, uspUpskillCard },
  } = data;

  const [count, setCount] = useState("0");
  const [title, setTitle] = useState("");
  const imageUrl = `${process.env.awsImage_url}`;

  useEffect(() => {
    let start = 0;
    const end = parseInt(uspEnrollmentCard.uspEnrollmentCount.substring(0, 3));

    if (start === end) return;

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
        <div className={styles.contentSection}>
          <div className={styles.card}>
            <div className={styles.topSection}>
              <span className={styles.topTextBestsale}>{BestSaleText}</span>
              <span className={styles.topTextMessage}>{topTextMessage}</span>
            </div>
            <h1 className={styles.courseHeading}>{coursePageName}</h1>
            <p className={styles.contentText}>{contentText}</p>

            <div className={styles.uspSectionContainer}>
              <div className={styles.uspCardCountry}>
                <Image
                  //src={`${imageUrl}${uspLocationCard.usplocationIcon}`}
                  src={uspLocationCard.usplocationIcon}
                  alt="Icon 1"
                  width={40}
                  height={40}
                />
                <p className={styles.CardText}>
                  {uspLocationCard.uspLocationText}
                </p>
              </div>
              <div
                className={`${styles.uspCardCount} ${styles.enrollmentCard}`}
              >
                <Image
                  //src={`${imageUrl}${uspEnrollmentCard.StudentEnrolIcon}`}
                  src={uspEnrollmentCard.StudentEnrolIcon}
                  alt="Icon 2"
                  width={40}
                  height={40}
                />
                <div className={styles.enrollmentContainer}>
                  <p className={styles.uspEnrollmentCount}>
                    {count}{" "}
                    <span className={styles.CardText}>
                      {uspEnrollmentCard.uspEnrollmentText}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.uspCardUpskill}>
                <Image
                  //src={`${imageUrl}${uspUpskillCard.uspBookIcon}`}
                  src={uspUpskillCard.uspBookIcon}
                  alt="Icon 3"
                  width={40}
                  height={40}
                />
                <p className={styles.CardText}>
                  {uspUpskillCard.uspUpskillText}
                </p>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <a
                className={styles.enrollButton}
                onClick={() => {
                  handleEnrollButtonClick("Enrol Now!");
                }}
              >
                Enrol Now
              </a>
              <a
                className={styles.brochureBtn}
                onClick={() => {
                  handleEnrollButtonClick("Download Brochure");
                }}
              >
                <Image
                  className={styles.brochureIcon}
                  //src={`${imageUrl}${BrochureIcon}`}
                  src={BrochureIcon}
                  alt="Brochure Icon"
                  width={24}
                  height={24}
                />
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <img
              className={styles.imageBanner}
              //src={`${imageUrl}${data.BannerImgDesktop}`}
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
                    //src={`${imageUrl}${vidoPlayIcon}`}
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
