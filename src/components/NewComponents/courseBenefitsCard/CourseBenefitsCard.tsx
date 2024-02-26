import React from "react";
import styles from "./CourseBenefitsCard.module.css";

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
  handleEnrollButtonClick: () => void;
}

const CourseBenefitsCard: React.FC<Props> = ({
  handleEnrollButtonClick,
  data,
}) => {
  const { courcename, Heding, Card } = data;

  return (
    <div className={styles.courseBenefitsCardContainer}>
      <h2 className={styles.Heding}>{courcename} Career Outcomes</h2>
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
