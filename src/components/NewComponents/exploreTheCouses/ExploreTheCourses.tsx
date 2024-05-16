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
  const [activeContent, setActiveContent] = useState<string | null>();

  const contentRefs: React.RefObject<HTMLDivElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleSidePanelClick = (contentId: string) => {
    const index = sideHeadings.findIndex(
      (item) => item.contentId === contentId
    );
    if (index !== -1) {
      setActiveContent(contentId);
      const targetElement = contentRefs[index].current;

      if (targetElement) {
        const targetTop = targetElement.getBoundingClientRect().top;

        window.scrollTo({
          top: window.scrollY + targetTop - 100,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const contentId = entry.target.getAttribute("data-content-id");
          if (contentId) {
            setActiveContent(contentId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    contentRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [contentRefs]);

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
    { text: CourseOverviewData?.sideHeading, contentId: "CourseOverview" },
    { text: CourseCurriculumData?.sideHeading, contentId: "CourseCurriculum" },
    { text: DefenceToolboxData?.sideHeading, contentId: "DefenceToolbox" },
    {
      text: WorldClassFacultyData?.sideHeading,
      contentId: "WorldClassFaculty",
    },
    { text: ToolsCoveredData?.sideHeading, contentId: "ToolsCovered" },
    {
      text: PricingAcrossCountriesData?.sideHeading,
      contentId: "PricingAcrossCountries",
    },
  ];

  return (
    <div
      className={`${styles.appContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.headerSection}>
        <h2 className={styles.smallHeading}>{smallHeading}</h2>
        <h2 className={styles.bigHeading}>{bigHeading}</h2>
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
          {CourseOverviewData && (
            <div
              ref={contentRefs[0]}
              data-content-id={sideHeadings[0].contentId}
            >
              <CourseOverview {...CourseOverviewData} />
            </div>
          )}
          {CourseCurriculumData && (
            <div
              className={styles.contentspace}
              ref={contentRefs[1]}
              data-content-id={sideHeadings[1].contentId}
            >
              <CourseCurriculum {...CourseCurriculumData} />
            </div>
          )}
          {DefenceToolboxData && (
            <div
              className={styles.contentspace}
              ref={contentRefs[2]}
              data-content-id={sideHeadings[2].contentId}
            >
              <DefenceToolbox {...DefenceToolboxData} />
            </div>
          )}
          {WorldClassFacultyData && (
            <div
              className={styles.contentspace}
              ref={contentRefs[3]}
              data-content-id={sideHeadings[3].contentId}
            >
              <WorldClassFaculty {...WorldClassFacultyData} />
            </div>
          )}
          {ToolsCoveredData && (
            <div
              className={styles.contentspace}
              ref={contentRefs[4]}
              data-content-id={sideHeadings[4].contentId}
            >
              <ToolsCovered {...ToolsCoveredData} />
            </div>
          )}
          {PricingAcrossCountriesData && (
            <div
              className={styles.contentspace}
              ref={contentRefs[5]}
              data-content-id={sideHeadings[5].contentId}
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
