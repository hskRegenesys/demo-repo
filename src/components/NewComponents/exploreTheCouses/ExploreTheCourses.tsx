import React, { useEffect, useState, useRef } from "react";
import styles from "./exploreTheCourses.module.css";
import Content1 from "./ContentCourses/Content1";
import Content2 from "./ContentCourses/Content2";
import Content3 from "./ContentCourses/Content3";
import Content4 from "./ContentCourses/Content4";
import Content5 from "./ContentCourses/Content5";
import Content6 from "./ContentCourses/Content6";

interface Props {
  data: {
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
      content2?: {
        contentHeading: string;
        cardTools: { img: string; alt: string }[];
      };
      content3?: {
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
          weekPoints: string[] | { [key: string]: string[] };
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
          contaryFlag: string;
        }[];
      };
    };
  };

  handleEnrollButtonClick: (title?: string) => void;
}

interface MainCourseData {}

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
          // Get the contentId from the data attribute
          const contentId = entry.target.getAttribute("data-content-id");
          if (contentId) {
            setActiveContent(contentId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Attach the observer to each content element
    contentRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, [contentRefs]);

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
  } = data;

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
          {/* Render Content 1 */}
          <div ref={contentRefs[0]} data-content-id={sideHeadings[0].contentId}>
            <Content1 {...content1} />
          </div>
          {/* Render Content 5 */}
          {content5 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[1]}
              data-content-id={sideHeadings[1].contentId}
            >
              <Content5 {...content5} />
            </div>
          )}
          {/* Render Content 2 */}
          {content2 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[2]}
              data-content-id={sideHeadings[2].contentId}
            >
              <Content2 {...content2} />
            </div>
          )}

          {/* Render Content 3 */}
          {content3 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[3]}
              data-content-id={sideHeadings[3].contentId}
            >
              <Content3 {...content3} />
            </div>
          )}

          {/* Render Content 4 */}

          {content4 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[4]}
              data-content-id={sideHeadings[4].contentId}
            >
              <Content4 {...content4} />
            </div>
          )}
          {content6 && (
            <div
              className={styles.contentspace}
              ref={contentRefs[5]}
              data-content-id={sideHeadings[5].contentId}
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
