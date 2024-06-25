import React, { useEffect, useState, useRef } from "react";
import styles from "./exploreTheCourses.module.css";
import CourseOverview from "./ContentCourses/CourseOverview";
import CourseCurriculum from "./ContentCourses/CourseCurriculum";
import PricingAcrossCountries from "./ContentCourses/PricingAcrossCountries";
import ToolsCovered from "./ContentCourses/ToolsCovered";
import WorldClassFaculty from "./ContentCourses/WorldClassFaculty";
import DefenceToolbox from "./ContentCourses/DefenceToolbox";

interface Props {
  data: {
    smallHeading: string;
    bigHeading: string;
    contents: {
      CourseOverviewData?: {
        sideHeading: string;
        contentHeading: string;
        contentImg: string;
        contentText: string;
        contentCard: { icon: string; text: string }[];
      };
      CourseCurriculumData?: {
        sideHeading: string;
        contentHeading: string;
        durationIcon: string;
        tickIcon: string;
        dropDown: string;
        curriculumContainer: {
          weekHeading: string;
          weekPoints: string[] | { [key: string]: string[] };
        }[];
      };
      WorldClassFacultyData?: {
        sideHeading: string;
        contentHeading: string;
        tutors: string;
        facultyCard: {
          facultyImg: string;
          facultyName: string;
          facultyEducation: string;
          courseName: string;
          yearsOfExperience: string;
        }[];
      };
      ToolsCoveredData?: {
        sideHeading: string;
        contentHeading: string;
        cardTools: { img: string; alt: string }[];
      };
      PricingAcrossCountriesData?: {
        sideHeading: string;
        ContentHeding: string;
        PriceIcon: string;
        durationIcon: string;
        EnrollmentIcon: string;
        contraryPricingCard: {
          contaryName: string;
          price: string;
          duration: string;
          contaryFlag: string;
        }[];
      };
      DefenceToolboxData?: {
        sideHeading: string;
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
      };
    };
  };
  handleEnrollButtonClick: (title?: string) => void;
}

const ExploreTheCourses: React.FC<Props> = ({
  data,
  handleEnrollButtonClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [activeContent, setActiveContent] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize contentRefs based on the number of content sections available
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current = Object.keys(data.contents).map(() => null);
  }, [data.contents]);

  const handleClick = (contentId: string) => {
    const index = sideHeadings.findIndex(
      (item) => item.contentId === contentId
    );
    if (index !== -1) {
      setActiveContent(contentId);
      const targetElement = contentRefs.current[index];

      if (targetElement) {
        const targetTop = targetElement.getBoundingClientRect().top;

        window.scrollTo({
          top: window.scrollY + targetTop - 100,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    const contentPanel = contentRef.current;

    if (contentPanel && contentPanel.scrollTop > 0) {
      setScrolled(true);
    } else if (contentPanel) {
      setScrolled(false);
    }

    const sections = contentRefs.current;
    let current = "Content-0";

    sections.forEach((section, index) => {
      if (section && window.pageYOffset >= section.offsetTop + 1200) {
        current = `Content-${index}`;
      }
    });

    setCurrentSection(current);
  };

  useEffect(() => {
    const contentPanel = contentRef.current;

    if (contentPanel) {
      contentPanel.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (contentPanel) {
        contentPanel.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    smallHeading,
    bigHeading,
    contents: {
      CourseOverviewData,
      CourseCurriculumData,
      DefenceToolboxData,
      WorldClassFacultyData,
      ToolsCoveredData,
      PricingAcrossCountriesData,
    },
  } = data;

  const sideHeadings = [
    { text: CourseOverviewData?.sideHeading, contentId: "Content-0" },
    { text: CourseCurriculumData?.sideHeading, contentId: "Content-1" },
    { text: DefenceToolboxData?.sideHeading, contentId: "Content-2" },
    { text: WorldClassFacultyData?.sideHeading, contentId: "Content-3" },
    { text: ToolsCoveredData?.sideHeading, contentId: "Content-4" },
    { text: PricingAcrossCountriesData?.sideHeading, contentId: "Content-5" },
  ];

  return (
    <div
      className={`${styles.appContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.headerSection}>
        <h2 className="main-heading">{smallHeading}</h2>
        <p className="main-sub-heading">{bigHeading}</p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.sidePanel}>
          <div className={styles.sidePanelInside}>
            {sideHeadings.map((heading, index) => (
              <p
                key={heading.contentId}
                onClick={() => handleClick(heading.contentId)}
                className={`${
                  currentSection === heading.contentId ? styles.active : ""
                }`}
              >
                {heading.text}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.contentPanel} ref={contentRef}>
          {CourseOverviewData && (
            <div ref={(el) => (contentRefs.current[0] = el)} id="Content-0">
              <CourseOverview {...CourseOverviewData} />
            </div>
          )}
          {CourseCurriculumData && (
            <div
              className={styles.contentspace}
              ref={(el) => (contentRefs.current[1] = el)}
              id="Content-1"
            >
              <CourseCurriculum {...CourseCurriculumData} />
            </div>
          )}
          {DefenceToolboxData && (
            <div
              className={styles.contentspace}
              ref={(el) => (contentRefs.current[2] = el)}
              id="Content-2"
            >
              <DefenceToolbox {...DefenceToolboxData} />
            </div>
          )}
          {WorldClassFacultyData && (
            <div
              className={styles.contentspace}
              ref={(el) => (contentRefs.current[3] = el)}
              id="Content-3"
            >
              <WorldClassFaculty {...WorldClassFacultyData} />
            </div>
          )}
          {ToolsCoveredData && (
            <div
              className={styles.contentspace}
              ref={(el) => (contentRefs.current[4] = el)}
              id="Content-4"
            >
              <ToolsCovered {...ToolsCoveredData} />
            </div>
          )}
          {PricingAcrossCountriesData && (
            <div
              className={styles.contentspace}
              ref={(el) => (contentRefs.current[5] = el)}
              id="Content-5"
            >
              <PricingAcrossCountries
                {...PricingAcrossCountriesData}
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
