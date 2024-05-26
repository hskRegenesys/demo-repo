import React, { useState, useEffect } from "react";
import AboutUsData from "../../../data/newComponentData/commonComponentData/AboutUsData";
import Styles from "./aboutUs.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
interface AboutUsProps {
  handleEnrollButtonClick: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ handleEnrollButtonClick }) => {
  const {
    aboutUsImg,
    aboutTitle,
    aboutHeading,
    aboutParagraph,
    aboutUsCardsData,
    aboutUsImgAlt,
  } = AboutUsData;

  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const imageUrl = imageBaseUrl();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const truncatedParagraph =
      windowWidth && windowWidth > 920
        ? aboutParagraph.slice(0, 520)
        : aboutParagraph.slice(0, 275);
    setNeedsTruncation(truncatedParagraph !== aboutParagraph);
  }, [aboutParagraph, windowWidth]);

  const toggleParagraph = () => {
    if (needsTruncation) {
      setShowFullParagraph(!showFullParagraph);
    }
  };

  return (
    <div className={Styles.aboutUsContainer}>
      <div className={Styles.hedingMobile}>
        <div className={Styles.aboutTitle}>{aboutTitle}</div>
        <div className={Styles.aboutHeading}>{aboutHeading}</div>
      </div>

      <div className={Styles.aboutUs}>
        <div className={Styles.aboutUsLeft}>
          <Image
            src={`${imageUrl}${aboutUsImg}`}
            alt={aboutUsImgAlt}
            title={aboutUsImgAlt}
            className={Styles.aboutUsImage}
            width={480}
            height={320}
            priority
          />
        </div>
        <div className={Styles.aboutUsRight}>
          <div className={Styles.hedingDesktop}>
            <h2 className={Styles.aboutTitle}>{aboutTitle}</h2>
            <h2 className={Styles.aboutHeading}>{aboutHeading}</h2>
          </div>
          <p className={Styles.aboutParagraph}>
            {showFullParagraph
              ? aboutParagraph
              : `${
                  windowWidth && windowWidth > 920
                    ? aboutParagraph.slice(0, 520)
                    : aboutParagraph.slice(0, 275)
                }`}
            {needsTruncation && (
              <>
                {!showFullParagraph && (
                  <span
                    className={Styles.viewMoreButton}
                    onClick={toggleParagraph}
                  >
                    ...View More
                  </span>
                )}
                {showFullParagraph && (
                  <span
                    className={Styles.viewLessButton}
                    onClick={toggleParagraph}
                  >
                    View Less
                  </span>
                )}
              </>
            )}
          </p>
        </div>
      </div>

      <div className={Styles.aboutusCardsContainer}>
        {aboutUsCardsData.map((item, index) => (
          <div key={index} className={Styles.aboutusCard}>
            <div className={Styles.aboutusCardImg}>
              <Image
                src={`${imageUrl}${item.image}`}
                alt={`Card ${index + 1}`}
                width={52}
                height={52}
              />
            </div>
            <div className={Styles.aboutusCardText}>{item.title}</div>
          </div>
        ))}
      </div>

      <div
        className={Styles.startLearningButton}
        onClick={handleEnrollButtonClick}
      >
        Enrol Now
      </div>
    </div>
  );
};

export default AboutUs;
