// CourseOverview.js

import React from "react";
import styles from "../exploreTheCourses.module.css";
import Image from "next/image";

interface CourseOverviewProps {
  contentHeading: string;
  contentImg: string;
  contentText: string;
  contentCard: { icon: string; text: string }[];
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  contentHeading,
  contentImg,
  contentText,
  contentCard,
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${styles.content1} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <Image
        className={styles.content1img}
        src={`${imageUrl}${contentImg}`}
        alt="Content 1"
        width={790}
        height={400}
      />
      <p>{contentText}</p>
      <ul>
        {contentCard.map((card, index) => (
          <li key={index}>
            <Image
              src={`${imageUrl}${card.icon}`}
              alt={`card ${index + 1}`}
              width={32}
              height={32}
            />
            <p>{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOverview;
