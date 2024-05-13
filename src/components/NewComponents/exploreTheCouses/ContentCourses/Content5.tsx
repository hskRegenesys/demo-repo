import React, { useState } from "react";
import styles from "../exploreTheCourses.module.css";
import Image from "next/image";
interface Content5Props {
  contentHeading: string;
  durationIcon: string;
  tickIcon: string;
  dropDown: string;
  curriculumContainer: {
    weekHeading: string;
    weekPoints: string[] | { [key: string]: string[] };
  }[];
}

const Content5: React.FC<Content5Props> = ({
  contentHeading,
  durationIcon,
  tickIcon,
  dropDown,
  curriculumContainer,
}) => {
  const [activeWeekIndex, setActiveWeekIndex] = useState<number | null>(0);
  const imageUrl = `${process.env.awsImage_url}`;

  const handleWeekClick = (index: number) => {
    setActiveWeekIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`${styles.content5} ${styles.content}`}>
      <h3>{contentHeading}</h3>

      <div className={styles.weekContainer}>
        {curriculumContainer.map((week, index) => (
          <div
            key={index}
            className={`${styles.weekCard} ${
              index === activeWeekIndex ? styles.active : ""
            }`}
            onClick={() => handleWeekClick(index)}
          >
            <div className={styles.weekHeader}>
              <div className={styles.textIcon}>
                <Image
                  src={`${imageUrl}${durationIcon}`}
                  // src={durationIcon}
                  alt="Duration Icon"
                  width={24}
                  height={24}
                />
                <span>{week.weekHeading}</span>
              </div>
              <Image
                src={`${imageUrl}${dropDown}`}
                // src={dropDown}
                alt="DropDown Icon"
                width={24}
                height={24}
              />
            </div>
            {index === activeWeekIndex && (
              <div className={styles.dropdown}>
                {Array.isArray(week.weekPoints) ? (
                  <ul>
                    {week.weekPoints.map((value, pointIndex) => (
                      <li key={pointIndex} className={styles.weekPoint}>
                        <Image
                          src={`${imageUrl}${tickIcon}`}
                          // src={tickIcon}
                          alt="Tick Icon"
                          width={20}
                          height={20}
                        />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    {Object.entries(week.weekPoints).map(
                      ([key, value], pointIndex) => (
                        <div key={key} style={{ marginBottom: "20px" }}>
                          <h6 className={styles.sideHeding}>{key}</h6>
                          <ul>
                            {value.map((item: string, index: number) => (
                              <li key={index} className={styles.weekPoint}>
                                <Image
                                  src={`${imageUrl}${tickIcon}`}
                                  // src={tickIcon}
                                  alt="Tick Icon"
                                  width={20}
                                  height={20}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content5;
