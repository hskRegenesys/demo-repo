import React, { MouseEventHandler } from "react";
import Styles from "./whyChooseDR.module.css";
import whyChooseDRData from "../../../data/newComponentData/commonComponentData/WhyChooseDRData";
import Image from "next/image";
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
            <div className={Styles.cardImg}>
              <Image
                src={card.cardImg}
                alt={`Card ${index + 1}`}
                width={52}
                height={52}
              />
            </div>
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
