import React, { useState } from "react";
import styles from "./CourseBenefitsCard.module.css";
import PopupData from "../popupForm/PopupData";
import PopupForm from "../popupForm/PopupForm";

interface CardData {
  cardIcon: string;
  text1: string;
  text2: string;
}
interface Props {
  data: {
    courcename: string;
    Heding: string;
    Card: CardData[];
  };
  CourseCode: string;
  popupData: any;
}

const CourseBenefitsCard: React.FC<Props> = ({
  data,
  CourseCode,
  popupData,
}) => {
  const { courcename, Heding, Card } = data;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.courseBenefitsCardContainer}>
      <PopupForm
        isVisible={isPopupVisible}
        onClose={handlePopupClose}
        popupData={popupData}
        CourseCode={CourseCode}
      />
      <h2 className={styles.Heding}>{courcename}</h2>
      <h2 className={styles.subHeding}>{Heding}</h2>
      <div className={styles.cardsContainer}>
        {Card.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={card.cardIcon}
              alt="Card Icon"
              className={styles.cardIcon}
            />
            <div className={styles.cardText}>
              <p className={styles.cardText1}>{card.text1}</p>
              <p className={styles.cardText2}>{card.text2}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.enrollNowButton}
        onClick={handleEnrollButtonClick}
      >
        Enrol Now
      </button>
    </div>
  );
};

export default CourseBenefitsCard;
