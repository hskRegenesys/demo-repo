// CertificationDR.js
import React, { useState, useEffect, useRef, MouseEventHandler } from "react";
import CertificationDRData from "./CertificationDRData";
import Styles from "./CertificationDR.module.css";

interface CertificationData {
  heading: string;
  title: string;
  paragraph: string;
  achievementsHeading: string;
  achievementsText: string[];
  tickImage: string;
  image: string;
  imageText: string;
  buttonText: string;
}

interface CertificationDRProps {
  handleEnrollButtonClick: MouseEventHandler<HTMLDivElement>;
  page?: string;
}

interface Props {
  page?: string;
}

const CertificationDR: React.FC<CertificationDRProps> = ({
  handleEnrollButtonClick,
  page = "",
}) => {
  let certificationData: CertificationData | undefined;

  // --------data-science---------
  if (page === "basic-data-science") {
    certificationData = CertificationDRData.basicDataScience;
  } else if (page === "advanced-data-science") {
    certificationData = CertificationDRData.advancedDataScience;
  } else if (page === "applied-data-science") {
    certificationData = CertificationDRData.appliedDataScience;
  }
  // // --------------digital-marketing-------------
  else if (page === "digital-marketing-fundamentals") {
    certificationData = CertificationDRData.digitalMarketingFundamentals;
  } else if (page === "advance-digital-marketing-course") {
    certificationData = CertificationDRData.digitalMarketingAdvanced;
  }
  // // ---------------cyber-security---------------
  else if (page === "cyber-security") {
    certificationData = CertificationDRData.cyberSecurity;
  }
  // // -----------------project-management---------------
  else if (page === "project-management") {
    certificationData = CertificationDRData.productManagement;
  }
  // // ----------------artificial-intelligence-----------------
  else if (page === "ai-introductory") {
    certificationData = CertificationDRData.artificialIntelligenceIntroductory;
  } else if (page === "ai-intermediary") {
    certificationData = CertificationDRData.artificialIntelligenceIntermediary;
  } else if (page === "ai-advanced-applied") {
    certificationData =
      CertificationDRData.artificialIntelligenceAdvancedApplied;
  } else if (page === "all-courses-new") {
    certificationData = CertificationDRData.AllCourcesPage;
  } else if (page === "software-engineering-course") {
    certificationData = CertificationDRData.softwareEngineering;
  }

  if (!certificationData) {
    return null;
  }

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
  } = certificationData;

  const [isExpanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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
      <div className={Styles.topSectionMobile}>
        <h2>{heading}</h2>
        <h3>{title}</h3>
      </div>
      <div className={Styles.certificationContainer}>
        <div className={Styles.leftSection}>
          <div className={Styles.topSectionDesktop}>
            <h2>{heading}</h2>
            <h3>{title}</h3>
          </div>
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
                  <img
                    src={tickImage}
                    alt="Check Image"
                    className={Styles.checkImage}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={Styles.rightSection}>
          <img src={image} alt="Certification Image" />
          <p>{imageText}</p>
        </div>
      </div>
      <div className={Styles.enrollButton} onClick={handleEnrollButtonClick}>
        {buttonText}
      </div>
    </div>
  );
};

export default CertificationDR;
