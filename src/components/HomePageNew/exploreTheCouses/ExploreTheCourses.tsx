import React, { useEffect, useState, useRef } from "react";
import exploreTheCoursesData from "./exploreTheCoursesData";
import styles from "./exploreTheCourses.module.css";
import Content1 from "./ContentCourses/Content1";
import Content2 from "./ContentCourses/Content2";
import Content3 from "./ContentCourses/Content3";
import Content4 from "./ContentCourses/Content4";
import Content5 from "./ContentCourses/Content5";

interface Props {
  page?: string;
}

interface MainCourseData {
  smallHeading: string;
  bigHeading: string;
  sideHeadings: string[];
  sideContents: {
    content1?: {
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
    content5?: {
      contentHeading: string;
      durationIcon: string;
      tickIcon: string;
      dropDown: string;
      curriculumContainer: {
        weekHeading: string;
        weekPoints: string[];
      }[];
    };
  };
}

const ExploreTheCourses: React.FC<Props> = ({ page }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeContent, setActiveContent] = useState(0);
  const contentRefs: React.RefObject<HTMLDivElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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

  const handleSidePanelClick = (index: number) => {
    setActiveContent(index);
    contentRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  let mainCourseData: MainCourseData | undefined;

  // --------data-science---------
  if (page === "data-science") {
    mainCourseData = exploreTheCoursesData.dataScience;
  } else if (page === "basic-data-science") {
    mainCourseData = exploreTheCoursesData.basicDataScience;
  } else if (page === "advanced-data-science") {
    mainCourseData = exploreTheCoursesData.advancedDataScience;
  } else if (page === "applied-data-science") {
    mainCourseData = exploreTheCoursesData.appliedDataScience;
  }

  // --------------digital-marketing-------------
  else if (page === "digital-marketing") {
    mainCourseData = exploreTheCoursesData.digitalMarketing;
  } else if (page === "digital-marketing-fundamentals") {
    mainCourseData = exploreTheCoursesData.digitalMarketingFundamentals;
  } else if (page === "advance-digital-marketing-course") {
    mainCourseData = exploreTheCoursesData.digitalMarketingAdvanced;
  }

  // ---------------cyber-security---------------
  else if (page === "cyber-security") {
    mainCourseData = exploreTheCoursesData.cyberSecurity;
  }
  // -----------------project-management---------------
  else if (page === "project-management") {
    mainCourseData = exploreTheCoursesData.productManagement;
  }
  // ----------------artificial-intelligence-----------------
  else if (page === "artificial-intelligence") {
    mainCourseData = exploreTheCoursesData.artificialIntelligence;
  } else if (page === "ai-introductory") {
    mainCourseData = exploreTheCoursesData.artificialIntelligenceIntroductory;
  } else if (page === "ai-intermediary") {
    mainCourseData = exploreTheCoursesData.artificialIntelligenceIntermediary;
  } else if (page === "ai-advanced-applied") {
    mainCourseData =
      exploreTheCoursesData.artificialIntelligenceAdvancedApplied;
  }
  if (!mainCourseData) {
    return null;
  }

  const {
    smallHeading,
    bigHeading,
    sideHeadings,
    sideContents: { content1, content2, content3, content4, content5 },
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
            {sideHeadings.map((heading, index) => (
              <p
                key={index}
                className={`${styles.sidePanelItem} ${
                  activeContent === index ? styles.active : ""
                }`}
                onClick={() => handleSidePanelClick(index)}
              >
                {heading}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.contentPanel}>
          {/* Render Content 1 */}
          {content1 && (
            <div ref={contentRefs[0]}>
              <Content1 {...content1} />
            </div>
          )}
          {content5 && (
            <div ref={contentRefs[1]}>
              <Content5 {...content5} />
            </div>
          )}
          {/* Render Content 2 */}
          <div ref={contentRefs[2]}>
            <Content2 {...content2} />
          </div>
          {/* Render Content 3 */}
          <div ref={contentRefs[3]}>
            <Content3 {...content3} />
          </div>
          {/* Render Content 4 */}
          <div ref={contentRefs[4]}>
            <Content4 {...content4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheCourses;
