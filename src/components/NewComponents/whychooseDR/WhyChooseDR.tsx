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
  // const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={Styles.WhyChooseDRContainer}>
      <div className={Styles.topSection}>
        <p className="main-heading">{whyChooseDRHeading}</p>
        <h2 className="main-sub-heading">{whyChooseDRTitle}</h2>
      </div>
      <div className={Styles.cardsContainer}>
        {whyChooseDRCard.map((card, index) => (
          <div key={index} className={Styles.card}>
            <div className={Styles.cardImg}>
              <Image
                src={card.cardImg}
                // src={`${imageUrl}${card.cardImg}`}
                alt="Card Why choose"
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
