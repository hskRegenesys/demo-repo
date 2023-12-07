// Faq.js
import React, { useState } from "react";
import Styles from "./faq.module.css";
import NewHomeData from "../../../data/newHomeData";

type FAQDataItem = {
  question: string;
  answer: string;
};

type FAQData = {
  [key: string]: FAQDataItem[] | string;
};

const Faq: React.FC = () => {
  const {
    DigitalMarketing,
    DataScience,
    ArtificialIntelligence,
    ProjectManagement,
    CyberSecurity,
    arrowIcon,
    HeadingMobile,
    HeadingDesktop,
  } = NewHomeData.faqData;

  const faqData: FAQData = {
    DigitalMarketing,
    DataScience,
    ArtificialIntelligence,
    ProjectManagement,
    CyberSecurity,
  };

  const [selectedHeading, setSelectedHeading] =
    useState<keyof FAQData>("DigitalMarketing");
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className={Styles.faqContainer}>
      <h2 className={`${Styles.topcontent} ${Styles.desktopOnly}`}>
        {HeadingDesktop}
      </h2>
      <h2 className={`${Styles.topcontent} ${Styles.mobileOnly}`}>
        {HeadingMobile}
      </h2>
      <div className={Styles.faqSection}>
        <div className={Styles.section1}>
          <ul>
            {Object.keys(faqData).map((heading) => (
              <li
                key={heading}
                onClick={() => setSelectedHeading(heading as keyof FAQData)}
                className={`${Styles.heading} ${
                  selectedHeading === heading ? Styles.selectedHeding : ""
                }`}
              >
                {heading}
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.section2}>
          <h2>{selectedHeading}</h2>
          {Array.isArray(faqData[selectedHeading]) ? (
            <ul>
              {faqData[selectedHeading].map(
                (faq: FAQDataItem, index: number) => (
                  <li
                    key={index}
                    className={`${Styles.card} ${
                      selectedQuestion === index ? Styles.selectedQuestion : ""
                    }`}
                  >
                    <div
                      className={`${Styles.questionContainer} ${
                        selectedQuestion === index
                          ? Styles.selectedQuestion
                          : ""
                      }`}
                      onClick={() => toggleAnswer(index)}
                    >
                      <h3>{faq.question}</h3>
                      <img
                        src={arrowIcon}
                        alt="iconFaq"
                        className={`${Styles.arrowIcon} ${
                          selectedQuestion === index ? Styles.selectedarrow : ""
                        }`}
                      />
                    </div>
                    {selectedQuestion === index && <p>{faq.answer}</p>}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>{faqData[selectedHeading] as string}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
