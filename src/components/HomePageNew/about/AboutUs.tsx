import React from "react";
import NewHomeData from "../../../data/newHomeData";
import Styles from "./aboutUs.module.css";

const AboutUs = () => {
  const { aboutUsImg, aboutTitle, aboutHeading, aboutParagraph, cards } =
    NewHomeData.AboutUsData;

  return (
    <div className={Styles.aboutUsContainer}>
      <div className={Styles.aboutUs}>
        <div className={Styles.aboutUsLeft}>
          <img
            src={aboutUsImg}
            alt="About Us"
            className={Styles.aboutUsImage}
          />
        </div>
        <div className={Styles.aboutUsRight}>
          <div className={Styles.aboutTitle}>{aboutTitle}</div>
          <div className={Styles.aboutHeading}>{aboutHeading}</div>
          <p className={Styles.aboutParagraph}>{aboutParagraph}</p>
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
