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

// Desktop Component
const FaqDesktop: React.FC<{
  faqData: FAQData;
  arrowIcon: string;
  HeadingDesktop: string;
}> = ({ faqData, arrowIcon, HeadingDesktop }) => {
  const [selectedHeading, setSelectedHeading] =
    useState<keyof FAQData>("DigitalMarketing");
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className={Styles.faqDesktop}>
      <h2 className={`${Styles.topcontent}`}>{HeadingDesktop}</h2>
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
              {(faqData[selectedHeading] as FAQDataItem[]).map(
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

// Mobile Component
// ... (imports and other code)

const FaqMobile: React.FC<{
  faqData: FAQData;
  arrowIcon: string;
  HeadingMobile: string;
}> = ({ faqData, arrowIcon, HeadingMobile }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [openHeadingDropdown, setOpenHeadingDropdown] = useState<string | null>(
    null
  );
  const [openQuestionDropdown, setOpenQuestionDropdown] = useState<
    string | null
  >(null);

  const toggleAnswer = (index: number, heading: string) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
    // Toggle questions dropdown independently
    setOpenQuestionDropdown(openQuestionDropdown === heading ? null : heading);
    // Close heading dropdown when clicking on a question
    setOpenHeadingDropdown(null);
  };

  const toggleDropdown = (heading: string) => {
    // Toggle heading dropdown independently
    setOpenHeadingDropdown((prev) => (prev === heading ? null : heading));
    // Close questions dropdown when clicking on a heading
    setOpenQuestionDropdown(null);
  };

  return (
    <div className={Styles.faqMobile}>
      <h2 className={`${Styles.topcontentMobile}`}>{HeadingMobile}</h2>
      <div className={Styles.faqSectionMobile}>
        <div className={Styles.section1Mobile}>
          <ul>
            {Object.keys(faqData).map((heading) => (
              <li
                key={heading}
                onClick={() => toggleDropdown(heading)}
                className={`${Styles.headingMobile} ${
                  openHeadingDropdown === heading
                    ? Styles.selectedHedingMobile
                    : ""
                }`}
              >
                <span
                  onClick={() => toggleDropdown(heading)}
                  className={`${Styles.hedingMobileText} ${
                    openHeadingDropdown === heading
                      ? Styles.hedingMobileTextSelected
                      : ""
                  }`}
                >
                  {heading}
                </span>
                <img
                  src={arrowIcon}
                  alt="iconFaq"
                  className={`${Styles.arrowIconMobileHeding} ${
                    openHeadingDropdown === heading
                      ? Styles.selectedHedingIcon
                      : ""
                  }`}
                />
                {openHeadingDropdown === heading && (
                  <ul className={Styles.dropdownListMobile}>
                    {Array.isArray(faqData[heading]) &&
                      (faqData[heading] as FAQDataItem[]).map(
                        (faq: FAQDataItem, index: number) => (
                          <li
                            key={index}
                            className={`${Styles.dropdownItem} ${
                              selectedQuestion === index
                                ? Styles.selectedQuestionMobile
                                : ""
                            }`}
                            onClick={() => toggleAnswer(index, heading)}
                          >
                            <div className={Styles.questionContainerMobile}>
                              <h3>{faq.question}</h3>
                              <img
                                src={arrowIcon}
                                alt="iconFaq"
                                className={`${Styles.arrowIconMobilequstion} ${
                                  selectedQuestion === index
                                    ? Styles.selectedarrowMobilequstion
                                    : ""
                                }`}
                              />
                            </div>
                            {selectedQuestion === index && (
                              <p className={Styles.answerMobile}>
                                {faq.answer}
                              </p>
                            )}
                          </li>
                        )
                      )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ... (other components and code)

// Combined Component
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

  return (
    <div className={Styles.faqContainer}>
      <FaqDesktop
        faqData={faqData}
        arrowIcon={arrowIcon}
        HeadingDesktop={HeadingDesktop}
      />
      <FaqMobile
        faqData={faqData}
        arrowIcon={arrowIcon}
        HeadingMobile={HeadingMobile}
      />
    </div>
  );
};

export default Faq;
