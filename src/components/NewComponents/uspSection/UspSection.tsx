import React, { useState, useEffect, useRef } from "react";
import UspSectionData from "../../../data/newComponentData/commonComponentData/UspSectionData";
import styles from "./uspSection.module.css";
import Image from "next/image";

interface UspSectionDataProps {
  UspSectionData: typeof UspSectionData;
}

const UspSection: React.FC<UspSectionDataProps> = ({ UspSectionData }) => {
  return (
    <div className={styles.uspSectionContainer}>
      <div className={styles.uspSectionGroupMobile}>
        <Image
          src="/assets/images/allImages/DR-logo.webp"
          alt="Logo"
          width={34}
          height={40}
          priority={true}
        />
        <h2>REGENESYS GROUP</h2>
      </div>
      <div className={styles.uspSectionContent}>
        <div className={styles.uspSectionGroup}>
          <Image
            src="/assets/images/allImages/DR-logo.webp"
            alt="Logo"
            width={34}
            height={40}
            priority={true}
          />
          <h2>REGENESYS GROUP</h2>
        </div>
        <div className={styles.uspSection}>
          <div className={styles.uspCard}>
            <h3 className={styles.uspGreenText}>
              {UspSectionData.uspLocationCard.uspEnrollmentCount}
            </h3>
            <p className={styles.CardText}>
              {UspSectionData.uspLocationCard.uspLocationText}
            </p>
          </div>
          <div className={`${styles.uspCard} ${styles.enrollmentCard}`}>
            <div className={styles.uspCard}>
              <h4 className={styles.uspGreenText}>
                {UspSectionData.uspEnrollmentCard.uspEnrollmentCount}
              </h4>
              <p className={styles.CardText}>
                {UspSectionData.uspEnrollmentCard.uspEnrollmentTextMobile}
              </p>
            </div>
          </div>
          <div className={styles.uspCard}>
            <h4 className={styles.uspGreenText}>
              {UspSectionData.uspUpskillCard.uspEnrollmentCount}
            </h4>
            <p className={styles.CardText}>
              {UspSectionData.uspUpskillCard.uspUpskillText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UspSection;
