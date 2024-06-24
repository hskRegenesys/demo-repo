// CertificationDR.js
import React, { useState, useEffect, useRef } from "react";
import Styles from "./CertificationDR.module.css";
import Image from "next/image";
interface CertificationDRProps {
  handleEnrollButtonClick: (title?: string) => void;
  data: {
    heading: string;
    title: string;
    paragraph: string;
    achievementsHeading: string;
    achievementsText: string[];
    tickImage: string;
    image: string;
    imageText: string;
    buttonText: string;
  };
}

const CertificationDR: React.FC<CertificationDRProps> = ({
  handleEnrollButtonClick,
  data,
}) => {
  const {
    heading,
    title,
    paragraph,
    achievementsHeading,
    achievementsText,
    tickImage,
    image,
    imageText,
    buttonText,
  } = data;

  const [isExpanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxChars = isMobile ? 200 : 500;
  const truncatedText = paragraph.slice(0, maxChars);

  const toggleView = () => {
    setExpanded(!isExpanded);
  };

  const shouldRenderViewMore = !isExpanded && paragraph.length > maxChars;

  return (
    <div className={Styles.certification}>
      {isMobile && (
        <div className={Styles.topSectionMobile}>
          <h2 className={Styles.hedingmobile}>
            {heading}
            <br></br>
            <span className={Styles.subHedingmobile}>{title}</span>
          </h2>
        </div>
      )}
      <div className={Styles.certificationContainer}>
        <div className={Styles.leftSection}>
          {!isMobile && (
            <div className={Styles.topSectionDesktop}>
              <h2 className={Styles.heding}>
                {heading}
                <br></br>
                <span className={Styles.subHeding}> {title}</span>
              </h2>
            </div>
          )}
          <p>
            {isExpanded ? paragraph : `${truncatedText}`}
            {shouldRenderViewMore && (
              <span className={Styles.viewMore} onClick={toggleView}>
                ...View More
              </span>
            )}
            {isExpanded && (
              <span className={Styles.viewMore} onClick={toggleView}>
                View Less
              </span>
            )}
          </p>
          <div className={Styles.certificationList}>
            <h4>{achievementsHeading}</h4>
            <div className={Styles.certificationListText}>
              {achievementsText.map((item: string, index: number) => (
                <div key={index} className={Styles.certificationListItem}>
                  <Image
                    src={tickImage}
                    alt="Check Image"
                    className={Styles.checkImage}
                    width={20}
                    height={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={Styles.rightSection}>
          <Image
            src={image}
            alt="Certification Image"
            width={468}
            height={336}
          />
          <p>{imageText}</p>
        </div>
      </div>
      <div
        className={Styles.enrollButton}
        onClick={() => handleEnrollButtonClick("Enrol Now!")}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default CertificationDR;
