import React, { useState } from "react";
import Styles from "./faq.module.css";
import Image from "next/image";
interface FAQData {
  HeadingDesktop: string;
  HeadingMobile: string;

  sections: {
    heading: string;
    faqs: { question: string; answer: string }[];
  }[];
  arrowIcon: string;
}

const FaqDesktop: React.FC<{ data: FAQData }> = ({ data }) => {
  const [selectedHeading, setSelectedHeading] = useState<string | null>(
    data.sections.length > 0 ? data.sections[0].heading : null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className={Styles.faqDesktop}>
      <h2 className={`${Styles.topcontent}`}>{data.HeadingDesktop}</h2>
      <div className={Styles.faqSection}>
        <div className={Styles.section1}>
          <ul>
            {data.sections.map((section, index) => (
              <li
                key={index}
                onClick={() => setSelectedHeading(section.heading)}
                className={`${Styles.heading} ${
                  selectedHeading === section.heading
                    ? Styles.selectedHeding
                    : ""
                }`}
              >
                {section.heading}
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.section2}>
          {selectedHeading && <h2>{selectedHeading}</h2>}
          {selectedHeading && (
            <ul>
              {data.sections
                .find((section) => section.heading === selectedHeading)
                ?.faqs.map((faq, index) => (
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
                      <Image
                        src={data.arrowIcon}
                        alt="iconFaq"
                        className={`${Styles.arrowIcon} ${
                          selectedQuestion === index ? Styles.selectedarrow : ""
                        }`}
                        width={20}
                        height={20}
                      />
                    </div>
                    {selectedQuestion === index && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: faq.answer.replace(/\n/g, "<br> "),
                        }}
                      ></p>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const FaqMobile: React.FC<{ data: FAQData }> = ({ data }) => {
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
      <h2 className={`${Styles.topcontentMobile}`}>{data.HeadingMobile}</h2>
      <div className={Styles.faqSectionMobile}>
        <div className={Styles.section1Mobile}>
          <ul>
            {data.sections.map((section, index) => (
              <li
                key={index}
                onClick={() => toggleDropdown(section.heading)}
                className={`${Styles.headingMobile} ${
                  openHeadingDropdown === section.heading
                    ? Styles.selectedHedingMobile
                    : ""
                }`}
              >
                <span
                  className={`${Styles.hedingMobileText} ${
                    openHeadingDropdown === section.heading
                      ? Styles.hedingMobileTextSelected
                      : ""
                  }`}
                >
                  {section.heading}
                </span>
                <div
                  className={`${Styles.arrowIconMobileHeding} ${
                    openHeadingDropdown === section.heading
                      ? Styles.selectedHedingIcon
                      : ""
                  }`}
                >
                  <Image
                    src={data.arrowIcon}
                    alt="iconFaq"
                    width={20}
                    height={20}
                  />
                </div>
                {openHeadingDropdown === section.heading && (
                  <ul className={Styles.dropdownListMobile}>
                    {section.faqs.map((faq, index) => (
                      <li
                        key={index}
                        className={`${Styles.dropdownItem} ${
                          selectedQuestion === index
                            ? Styles.selectedQuestionMobile
                            : ""
                        }`}
                        onClick={() => toggleAnswer(index, section.heading)}
                      >
                        <div className={Styles.questionContainerMobile}>
                          <h3>{faq.question}</h3>
                          <div
                            className={`${Styles.arrowIconMobilequstion} ${
                              selectedQuestion === index
                                ? Styles.selectedarrowMobilequstion
                                : ""
                            }`}
                          >
                            <Image
                              src={data.arrowIcon}
                              alt="iconFaq"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                        {selectedQuestion === index && (
                          <p
                            className={Styles.answerMobile}
                            dangerouslySetInnerHTML={{
                              __html: faq.answer.replace(/\n/g, "<br><br>"),
                            }}
                          ></p>
                        )}
                      </li>
                    ))}
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

// Combined Component
const Faq: React.FC<{ data: FAQData }> = ({ data }) => {
  return (
    <div className={Styles.faqContainer}>
      {/* Render the desktop FAQ component */}
      <FaqDesktop data={data} />
      <FaqMobile data={data} />

      {/* Mobile FAQ component can be added here */}
    </div>
  );
};

export default Faq;
