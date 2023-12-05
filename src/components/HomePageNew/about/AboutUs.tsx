// AboutUs.js

import React, { useState, useEffect } from "react";
import NewHomeData from "../../../data/newHomeData";
import Styles from "./aboutUs.module.css";

const AboutUs = () => {
  const { aboutUsImg, aboutTitle, aboutHeading, aboutParagraph, cards } =
    NewHomeData.AboutUsData;

  const [windowWidth, setWindowWidth] = useState(null);
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if paragraph needs truncation
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
          <img
            src={aboutUsImg}
            alt="About Us"
            className={Styles.aboutUsImage}
          />
        </div>
        <div className={Styles.aboutUsRight}>
          <div className={Styles.hedingDesktop}>
            <div className={Styles.aboutTitle}>{aboutTitle}</div>
            <div className={Styles.aboutHeading}>{aboutHeading}</div>
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

      <div className={Styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={Styles.card}>
            <img
              src={card.cardImg}
              alt={`Card ${index + 1}`}
              className={Styles.cardImg}
            />
            <div className={Styles.cardText}>{card.cardText}</div>
          </div>
        ))}
      </div>

      <div className={Styles.startLearningButton}>Start Learning</div>
    </div>
  );
};

export default AboutUs;
