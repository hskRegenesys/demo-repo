import React, { useEffect, useState, useRef } from "react";
import exploreTheCoursesData from "./exploreTheCoursesData";
import styles from "./exploreTheCourses.module.css";
import Content1 from "./ContentCourses/Content1";
import Content2 from "./ContentCourses/Content2";
import Content3 from "./ContentCourses/Content3";
import Content4 from "./ContentCourses/Content4";
import Content5 from "./ContentCourses/Content5";
import Content6 from "./ContentCourses/Content6";

interface Props {
  page?: string;
  handleEnrollButtonClick: () => void;
}

interface MainCourseData {
  smallHeading: string;
  bigHeading: string;
  sideHeadings: { text: string; contentId: string }[];
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
    content4?: {
      contentHeading: string;
      LevelCard: {
        courseName: string;
        frameImg: string;
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
    content6?: {
      ContentHeding: string;
      PriceIcon: string;
      durationIcon: string;
      EnrollmentIcon: string;
      contraryPricingCard: {
        contaryName: string;
        price: string;
        duration: string;
        Enrollment: string;
        contaryFlag: string;
      }[];
    };
  };
}

const ExploreTheCourses: React.FC<Props> = ({
  page,
  handleEnrollButtonClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(() => {
    if (page === "digital-marketing") {
      return exploreTheCoursesData.digitalMarketing.sideHeadings[0].contentId;
    } else if (page === "digital-marketing-fundamentals") {
      return exploreTheCoursesData.digitalMarketingFundamentals.sideHeadings[0]
        .contentId;
    } else if (page === "advance-digital-marketing-course") {
      return exploreTheCoursesData.digitalMarketingAdvanced.sideHeadings[0]
        .contentId;
    } else if (page === "cyber-security") {
      return exploreTheCoursesData.cyberSecurity.sideHeadings[0].contentId;
    } else if (page === "project-management") {
      return exploreTheCoursesData.productManagement.sideHeadings[0].contentId;
    } else if (page === "artificial-intelligence") {
      return exploreTheCoursesData.artificialIntelligence.sideHeadings[0]
        .contentId;
    } else if (page === "ai-introductory") {
      return exploreTheCoursesData.artificialIntelligenceIntroductory
        .sideHeadings[0].contentId;
    } else if (page === "ai-intermediary") {
      return exploreTheCoursesData.artificialIntelligenceIntermediary
        .sideHeadings[0].contentId;
    } else if (page === "ai-advanced-applied") {
      return exploreTheCoursesData.artificialIntelligenceAdvancedApplied
        .sideHeadings[0].contentId;
    } else if (page === "data-science") {
      return exploreTheCoursesData.dataScience.sideHeadings[0].contentId;
    } else if (page === "basic-data-science") {
      return exploreTheCoursesData.basicDataScience.sideHeadings[0].contentId;
    } else if (page === "advanced-data-science") {
      return exploreTheCoursesData.advancedDataScience.sideHeadings[0]
        .contentId;
    } else if (page === "applied-data-science") {
      return exploreTheCoursesData.appliedDataScience.sideHeadings[0].contentId;
    } else {
      return null;
    }
  });

  const contentRefs: React.RefObject<HTMLDivElement>[] = [
    useRef(null),
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

  const handleSidePanelClick = (contentId: string) => {
    const index = sideHeadings.findIndex(
      (item) => item.contentId === contentId
    );
    if (index !== -1) {
      setActiveContent(contentId);
      const targetElement = contentRefs[index].current;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        targetElement.style.paddingTop = "100px";
      }
    }
  };

  const handleMouseOver = (index: number, contentId: string) => {
    setActiveContent(contentId);
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

  // // --------------digital-marketing-------------
  else if (page === "digital-marketing") {
    mainCourseData = exploreTheCoursesData.digitalMarketing;
  } else if (page === "digital-marketing-fundamentals") {
    mainCourseData = exploreTheCoursesData.digitalMarketingFundamentals;
  } else if (page === "advance-digital-marketing-course") {
    mainCourseData = exploreTheCoursesData.digitalMarketingAdvanced;
  }

  // // ---------------cyber-security---------------
  else if (page === "cyber-security") {
    mainCourseData = exploreTheCoursesData.cyberSecurity;
  }
  // // -----------------project-management---------------
  else if (page === "project-management") {
    mainCourseData = exploreTheCoursesData.productManagement;
  }
  // // ----------------artificial-intelligence-----------------
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
    sideContents: {
      content1,
      content2,
      content3,
      content4,
      content5,
      content6,
    },
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
            {sideHeadings.map((heading) => (
              <p
                key={heading.contentId}
                className={`${styles.sidePanelItem} ${
                  activeContent === heading.contentId ? styles.active : ""
                }`}
                onClick={() => handleSidePanelClick(heading.contentId)}
              >
                {heading.text}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.contentPanel}>
          {/* Render Content 1 */}
          <div
            ref={contentRefs[0]}
            onMouseOver={() => handleMouseOver(0, sideHeadings[0].contentId)}
          >
            <Content1 {...content1} />
          </div>
          {/* Render Content 5 */}
          {content5 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[1]}
              onMouseOver={() => handleMouseOver(1, sideHeadings[1].contentId)}
            >
              <Content5 {...content5} />
            </div>
          )}
          {/* Render Content 2 */}
          <div
            className={styles.contentspace}
            ref={contentRefs[2]}
            onMouseOver={() => handleMouseOver(2, sideHeadings[2].contentId)}
          >
            <Content2 {...content2} />
          </div>
          {/* Render Content 3 */}
          <div
            className={styles.contentspace}
            ref={contentRefs[3]}
            onMouseOver={() => handleMouseOver(3, sideHeadings[3].contentId)}
          >
            <Content3 {...content3} />
          </div>
          {/* Render Content 4 */}

          {content4 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[4]}
              onMouseOver={() => handleMouseOver(4, sideHeadings[4].contentId)}
            >
              <Content4 {...content4} />
            </div>
          )}
          {content6 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[5]}
              onMouseOver={() => handleMouseOver(5, sideHeadings[5].contentId)}
            >
              <Content6
                {...content6}
                handleEnrollButtonClick={handleEnrollButtonClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreTheCourses;
