import React, { useState } from "react";
import styles from "./ReadMoreDropDown.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
interface ReadMoreData {
  heading: string;
  readmore: {
    pheading: string;
    paragraphs: string[];
  }[];
}

const ReadMoreDropDown: React.FC<{ data: ReadMoreData }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = imageBaseUrl();

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
          <h2 className={styles.banner}>{data.heading}</h2>
          {!isOpen && (
            <button onClick={toggleReadMore} className={styles.readmoreButton}>
              Read More
              <span style={{ margin: "auto 0", display: "flex" }}>
                <Image
                  onClick={toggleReadMore}
                  src="/assets/images/allImages/single-arrow-right.svg"
                  alt="Arrow"
                  className="right-single-arrow"
                  width={20}
                  height={20}
                  priority
                />
              </span>
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
                      <p
                        key={pIndex}
                        dangerouslySetInnerHTML={{
                          __html: paragraph,
                        }}
                      ></p>
                    ))}
                </div>
              ))}
          </div>
        )}
        <div className={styles.closeButtonContainer}>
          {isOpen && (
            <button onClick={closeDropdown} className={styles.closeButton}>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreDropDown;
