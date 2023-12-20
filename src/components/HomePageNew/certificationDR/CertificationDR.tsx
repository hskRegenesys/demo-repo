// CertificationDR.js

import React, { useState, useEffect, MouseEventHandler } from "react";
import NewHomeData from "../../../data/newHomeData";
import Styles from "./CertificationDR.module.css";

interface CertificationDRProps {
  handleEnrollButtonClick: MouseEventHandler<HTMLDivElement>;
}

const CertificationDR: React.FC<CertificationDRProps> = ({
  handleEnrollButtonClick,
}) => {
  const {
    CertificationDRHeding,
    CertificationDRTitle,
    CertificationDRparagarap,
    CertificationDRlistheding,
    CertificationDRlistText,
    CertificationDRTickImg,
    CertificationDRImage,
    CertificationDRImageText,
    CertificationDRButtenText,
  } = NewHomeData.CertificationDRData;

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

  const maxDesktopChars = 500;
  const maxMobileChars = 200;

  const toggleView = () => {
    setExpanded(!isExpanded);
  };

  const shouldRenderViewMore =
    !isExpanded &&
    CertificationDRparagarap.length >
      (isMobile ? maxMobileChars : maxDesktopChars);

  return (
    <div className={Styles.certification}>
      <div className={Styles.topsecionmobile}>
        <h2>{CertificationDRHeding}</h2>
        <h3>{CertificationDRTitle}</h3>
      </div>
      <div className={Styles.certificationContainer}>
        <div className={Styles.leftSection}>
          <div className={Styles.topsecionDesktop}>
            <h2>{CertificationDRHeding}</h2>
            <h3>{CertificationDRTitle}</h3>
          </div>
          <p>
            {isExpanded
              ? CertificationDRparagarap
              : `${CertificationDRparagarap.slice(
                  0,
                  isMobile ? maxMobileChars : maxDesktopChars
                )}`}
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
            <h4>{CertificationDRlistheding}</h4>
            <div className={Styles.certificationListText}>
              {CertificationDRlistText.map((item, index) => (
                <div key={index} className={Styles.certificationListItem}>
                  <img
                    src={CertificationDRTickImg}
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
          <img src={CertificationDRImage} alt="Certification Image" />
          <p>{CertificationDRImageText}</p>
        </div>
      </div>
      <div className={Styles.enrollButton} onClick={handleEnrollButtonClick}>
        {CertificationDRButtenText}
      </div>
    </div>
  );
};

export default CertificationDR;
