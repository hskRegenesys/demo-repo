// DefenceToolbox.js

import React, { useState } from "react";
import styles from "../exploreTheCourses.module.css";
import Image from "next/image";

interface DefenceToolboxProps {
  contentHeading: string;
  durationIcon: string;
  tickIcon: string;
  dropDown: string;

  DedenceToolBoxContainer: {
    Heading: string;
    PassageTop: string;
    PassageBottom: string;
    Points: string[] | { [key: string]: string[] };
  }[];
}

const DefenceToolbox: React.FC<DefenceToolboxProps> = ({
  contentHeading,
  durationIcon,
  tickIcon,
  dropDown,
  DedenceToolBoxContainer,
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
        {DedenceToolBoxContainer.map((week, index) => (
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
                  //src={`${imageUrl}${durationIcon}`}
                  src={durationIcon}
                  alt="Duration Icon"
                  width={24}
                  height={24}
                />
                <span>{week.Heading}</span>
              </div>
              <Image
                //src={`${imageUrl}${dropDown}`}
                src={dropDown}
                alt="DropDown Icon"
                width={24}
                height={24}
              />
            </div>

            {index === activeWeekIndex && (
              <div>
                <p
                  className={styles.weekPointText}
                  dangerouslySetInnerHTML={{
                    __html: week.PassageTop.replace(/\n/g, "<br>"),
                  }}
                ></p>
                <div className={styles.dropdown}>
                  {Array.isArray(week.Points) ? (
                    <ul>
                      {week.Points.map((value, pointIndex) => (
                        <li key={pointIndex} className={styles.weekPoint}>
                          <div className={styles.weekPointImg}>
                            <Image
                              //src={`${imageUrl}${tickIcon}`}
                              src={tickIcon}
                              alt="Tick Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <span className={styles.weekPointText}>{value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      {Object.entries(week.Points).map(
                        ([key, value], pointIndex) => (
                          <div key={key} style={{ marginBottom: "20px" }}>
                            <h6 className={styles.sideHeding}>{key}</h6>
                            <ul>
                              {value.map((item: string, index: number) => (
                                <li key={index} className={styles.weekPoint}>
                                  <div className={styles.weekPointImg}>
                                    <Image
                                      //src={`${imageUrl}${tickIcon}`}
                                      src={tickIcon}
                                      alt="Tick Icon"
                                      width={20}
                                      height={20}
                                    />
                                  </div>
                                  <span className={styles.weekPointText}>
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </ul>
                  )}
                </div>
                <p className={styles.weekPointText}>{week.PassageBottom}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefenceToolbox;
