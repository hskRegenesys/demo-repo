// Content3.js
import React from "react";
import styles from "../exploreTheCourses.module.css";

interface FacultyCard {
  facultyImg: string;
  facultyName: string;
  courseName: string;
  yearsOfExperience: string;
}

interface Content3Props {
  contentHeading: string;
  tutors: string;
  facultyCard: FacultyCard[];
}

const Content3: React.FC<Content3Props> = ({
  contentHeading,
  tutors,
  facultyCard,
}) => {
  return (
    <div className={`${styles.content3} ${styles.content}`}>
      <div className={styles.cardContainer}>
        <h3>{contentHeading}</h3>
        <ul>
          {facultyCard.map((faculty, index) => (
            <li key={index} className={styles.card}>
              <div className={styles.bgcolor}> </div>
              <img src={faculty.facultyImg} alt={`Faculty ${index + 1}`} />
              <p className={styles.facultyName}>{faculty.facultyName}</p>
              <p className={styles.courseName}>{faculty.courseName}</p>
              <span>{faculty.yearsOfExperience}</span>
            </li>
          ))}
        </ul>
        <p className={styles.tutors}>{tutors}</p>
      </div>
    </div>
  );
};

export default Content3;
