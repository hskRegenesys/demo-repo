import React, { MouseEventHandler } from "react";
import Styles from "./whyChooseDR.module.css";
import whyChooseDRData from "../../../data/newComponentData/commonComponentData/WhyChooseDRData";

interface WhyChooseDRProps {
  handleEnrollButtonClick: MouseEventHandler<HTMLDivElement>;
}

const WhyChooseDR: React.FC<WhyChooseDRProps> = ({
  handleEnrollButtonClick,
}) => {
  const {
    whyChooseDRHeading,
    whyChooseDRTitle,
    whyChooseDRCard,
    whyChooseDRButtonText,
  } = whyChooseDRData;

  return (
    <div className={Styles.WhyChooseDRContainer}>
      <div className={Styles.topSection}>
        <h4>{whyChooseDRHeading}</h4>
        <strong>{whyChooseDRTitle}</strong>
      </div>
      <div className={Styles.cardsContainer}>
        {whyChooseDRCard.map((card, index) => (
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
      <div
        className={Styles.startLearningButton}
        onClick={handleEnrollButtonClick}
      >
        {whyChooseDRButtonText}
      </div>
    </div>
  );
};

export default WhyChooseDR;
