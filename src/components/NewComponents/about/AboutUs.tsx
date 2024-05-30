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

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [showFullParagraph, setShowFullParagraph] = useState<boolean>(false);

  useEffect(() => {
    // Set the window width on the client-side only
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    setIsClient(true); // Mark as client-side rendering

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  // Determine if truncation is needed based on client-side window width
  const needsTruncation = isClient
    ? windowWidth > 920
      ? aboutParagraph.length > 520
      : aboutParagraph.length > 275
    : false;

  return (
    <div className={Styles.aboutUsContainer}>
      <div className={Styles.hedingMobile}>
        <p className="main-heading">{aboutTitle}</p>
        <h2 className="main-sub-heading">{aboutHeading}</h2>
      </div>

      <div className={Styles.aboutUs}>
        <div className={Styles.aboutUsLeft}>
          <Image
            src={aboutUsImg}
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
              : aboutParagraph.slice(
                  0,
                  isClient && windowWidth > 920 ? 520 : 275
                )}
            {needsTruncation && (
              <>
                {!showFullParagraph ? (
                  <span
                    className={Styles.viewMoreButton}
                    onClick={toggleParagraph}
                  >
                    ...View More
                  </span>
                ) : (
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
                src={item.image}
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
