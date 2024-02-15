import React, { useState } from "react";
import styles from "./ReadMoreDropDown.module.css";

// Define a type for the data prop
interface ReadMoreData {
  heading: string;
  readmore: {
    pheading: string;
    paragraphs: string[];
  }[];
}

const ReadMoreDropDown: React.FC<{ data: ReadMoreData }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.Readmore}>
      <div className={styles.ReadmoreSection}>
        <div className={styles.headingRow}>
          <div className={styles.banner}>{data.heading}</div>
          {!isOpen && (
            <button onClick={toggleReadMore} className={styles.readmoreButton}>
              Read More
              <span>
                <img
                  onClick={toggleReadMore}
                  src="./assets/images/HomeNew/DoubleArrowWhite.svg"
                  alt="Arrow"
                />
              </span>
            </button>
          )}
          {isOpen && (
            <button onClick={closeDropdown} className={styles.closeButton}>
              Close
            </button>
          )}
        </div>
        {isOpen && (
          <div className={styles.paragraph}>
            {data.readmore &&
              data.readmore.map((item, index) => (
                <div key={index}>
                  <h2>{item.pheading}</h2>
                  {item.paragraphs &&
                    item.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{` ${paragraph}`}</p>
                    ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadMoreDropDown;
