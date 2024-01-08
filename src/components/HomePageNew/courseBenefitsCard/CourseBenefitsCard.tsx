import React from "react";
import CourseBenefitsCardData from "./CourseBenefitsCardData";
import styles from "./CourseBenefitsCard.module.css";

interface CardData {
  cardIcon: string;
  text1: string;
  text2: string;
}

interface MainCourseBenefitsData {
  courcename: string;
  Heding: string;
  Card: CardData[];
}

interface Props {
  page?: string;
}

const CourseBenefitsCard: React.FC<Props> = ({ page }) => {
  if (page === undefined) {
    return null;
  }

  let mainCourseBenefitsData: MainCourseBenefitsData | undefined;

  switch (page) {
    case "data-science":
      mainCourseBenefitsData = CourseBenefitsCardData.dataScience;
      break;
    case "basic-data-science":
      mainCourseBenefitsData = CourseBenefitsCardData.basicDataScience;
      break;
    case "advanced-data-science":
      mainCourseBenefitsData = CourseBenefitsCardData.advancedDataScience;
      break;
    case "applied-data-science":
      mainCourseBenefitsData = CourseBenefitsCardData.appliedDataScience;
      break;
    case "digital-marketing":
      mainCourseBenefitsData = CourseBenefitsCardData.digitalMarketing;
      break;
    case "digital-marketing-fundamentals":
      mainCourseBenefitsData =
        CourseBenefitsCardData.digitalMarketingFundamentals;
      break;
    case "advance-digital-marketing-course":
      mainCourseBenefitsData = CourseBenefitsCardData.digitalMarketingAdvanced;
      break;
    case "cyber-security":
      mainCourseBenefitsData = CourseBenefitsCardData.cyberSecurity;
      break;
    case "project-management":
      mainCourseBenefitsData = CourseBenefitsCardData.productManagement;
      break;
    case "artificial-intelligence":
      mainCourseBenefitsData = CourseBenefitsCardData.artificialIntelligence;
      break;
    case "ai-introductory":
      mainCourseBenefitsData =
        CourseBenefitsCardData.artificialIntelligenceIntroductory;
      break;
    case "ai-intermediary":
      mainCourseBenefitsData =
        CourseBenefitsCardData.artificialIntelligenceIntermediary;
      break;
    case "ai-advanced-applied":
      mainCourseBenefitsData =
        CourseBenefitsCardData.artificialIntelligenceAdvancedApplied;
      break;
    default:
      return null;
  }

  if (!mainCourseBenefitsData) {
    return null;
  }

  const { courcename, Heding, Card } = mainCourseBenefitsData;

  return (
    <div className={styles.courseBenefitsCardContainer}>
      <h2>{courcename} Career Outcomes</h2>
      <h3>{Heding}</h3>
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
      <button className={styles.enrollNowButton}>Enroll Now</button>
    </div>
  );
};

export default CourseBenefitsCard;
