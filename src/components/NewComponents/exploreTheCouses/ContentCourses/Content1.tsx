// Content1.js
import React from "react";
import styles from "../exploreTheCourses.module.css";
import Image from "next/image";

interface Content1Props {
  contentHeading: string;
  contentImg: string;
  contentText: string;
  contentCard: { icon: string; text: string }[];
}

const Content1: React.FC<Content1Props> = ({
  contentHeading,
  contentImg,
  contentText,
  contentCard,
}) => {
  return (
    <div className={`${styles.content1} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <Image
        className={styles.content1img}
        src={contentImg}
        alt="Content 1"
        width={790}
        height={400}
      />
      <p>{contentText}</p>
      <ul>
        {contentCard.map((card, index) => (
          <li key={index}>
            <Image
              src={card.icon}
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

export default Content1;
