// ExploreTheCourses.js
import React, { useEffect, useState } from "react";
import {
  dataScienceMainCourse,
  digitalMarketingMainCourse,
} from "../../config/constant";
import exploreTheCoursesData from "./exploreTheCoursesData";
import styles from "./exploreTheCourses.module.css";
import Content1 from "./ContentCourses/Content1";
import Content2 from "./ContentCourses/Content2";
import Content3 from "./ContentCourses/Content3";
import Content4 from "./ContentCourses/Content4";

interface Props {
  page?: string;
}

interface MainCourseData {
  smallHeading: string;
  bigHeading: string;
  sideHeadings: string[];
  sideContents: {
    content1: {
      contentHeading: string;
      contentImg: string;
      contentText: string;
      contentCard: { icon: string; text: string }[];
    };
    content2: {
      contentHeading: string;
      cardTools: { img: string }[];
    };
    content3: {
      contentHeading: string;
      tutors: string;
      facultyCard: {
        facultyImg: string;
        facultyName: string;
        courseName: string;
        yearsOfExperience: string;
      }[];
    };
    content4: {
      contentHeading: string;
      pricingCard: {
        courseName: string;
        frameImg: string;
        price: string;
        tickIcon: string;
        list: string[];
      }[];
    };
  };
}

const ExploreTheCourses: React.FC<Props> = ({ page }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let mainCourseData: MainCourseData | undefined;

  if (page === dataScienceMainCourse) {
    mainCourseData = exploreTheCoursesData.dataScience;
  } else if (page === digitalMarketingMainCourse) {
    mainCourseData = exploreTheCoursesData.digitalMarketing;
  } else {
    mainCourseData = exploreTheCoursesData.artificialIntelligence;
  }

  if (!mainCourseData) {
    return null;
  }

  const {
    smallHeading,
    bigHeading,
    sideHeadings,
    sideContents: { content1, content2, content3, content4 },
  } = mainCourseData;

  return (
    <div
      className={`${styles.appContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.headerSection}>
        <h2 className={styles.smallHeading}>{smallHeading}</h2>
        <h1 className={styles.bigHeading}>{bigHeading}</h1>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.sidePanel}>
          <div className={styles.sidePanelInside}>
            {sideHeadings.map((heading, index: number) => (
              <p key={index} className={styles.sidePanelItem}>
                {heading}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.contentPanel}>
          {/* Render Content 1 */}
          <Content1 {...content1} />

          {/* Render Content 2 */}
          <Content2 {...content2} />

          {/* Render Content 3 */}
          <Content3 {...content3} />

          {/* Render Content 4 */}
          <Content4 {...content4} />
        </div>
      </div>
    </div>
  );
};

export default ExploreTheCourses;
