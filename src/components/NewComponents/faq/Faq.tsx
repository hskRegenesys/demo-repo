import React, { useState } from "react";
import Styles from "./faq.module.css";
import Image from "next/image";

interface FAQData {
  sections: {
    heading: string;
    faqs: { question: string; answer: string }[];
  }[];
}

const FaqDesktop: React.FC<{ data: FAQData }> = ({ data }) => {
  const [selectedHeading, setSelectedHeading] = useState<string | null>(
    data.sections.length > 0 ? data.sections[0].heading : null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const handleHeadingClick = (heading: string) => {
    setSelectedHeading(heading);
    setSelectedQuestion(null); // Reset selected question when heading changes
  };

  return (
    <div className={Styles.faqDesktop}>
      <h2 className="main-sub-heading">Frequently Asked Questions</h2>
      <div className={Styles.faqSection}>
        <div className={Styles.section1}>
          <ul>
            {data.sections.map((section, index) => (
              <li
                key={index}
                onClick={() => handleHeadingClick(section.heading)}
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
                        src="/assets/images/allImages/arrow_drop_down.svg"
                        alt="icon Faq"
                        className={`${Styles.arrowIcon} ${
                          selectedQuestion === index ? Styles.selectedarrow : ""
                        }`}
                        width={20}
                        height={20}
                      />
                    </div>
                    {selectedQuestion === index && (
                      <p
                        className={Styles.whiteSpaceText}
                        dangerouslySetInnerHTML={{
                          __html: faq.answer
                            .replace(/\n/g, "<br>")
                            .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                            .replace(/ {2}/g, "&nbsp;&nbsp;"),
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

  const toggleAnswer = (index: number, heading: string) => {
    if (openHeadingDropdown !== heading) {
      // If the heading dropdown is not open, do nothing
      return;
    }
    // Toggle the question within the open heading dropdown
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const toggleDropdown = (heading: string) => {
    if (openHeadingDropdown === heading) {
      // Close the heading dropdown and any open questions within it
      setOpenHeadingDropdown(null);
      setSelectedQuestion(null);
    } else {
      // Open the new heading dropdown and close any open questions
      setOpenHeadingDropdown(heading);
      setSelectedQuestion(null);
    }
  };

  return (
    <div className={Styles.faqMobile}>
      <h2 className={`${Styles.topcontentMobile}`}>FAQ</h2>
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
                    src="/assets/images/allImages/arrow_drop_down.svg"
                    alt="icon Faq"
                    width={20}
                    height={20}
                  />
                </div>
                {openHeadingDropdown === section.heading && (
                  <ul className={Styles.dropdownListMobile}>
                    {section.faqs.map((faq, faqIndex) => (
                      <li
                        key={faqIndex}
                        className={`${Styles.dropdownItem} ${
                          selectedQuestion === faqIndex
                            ? Styles.selectedQuestionMobile
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAnswer(faqIndex, section.heading);
                        }}
                      >
                        <div className={Styles.questionContainerMobile}>
                          <h3>{faq.question}</h3>
                          <div
                            className={`${Styles.arrowIconMobilequstion} ${
                              selectedQuestion === faqIndex
                                ? Styles.selectedarrowMobilequstion
                                : ""
                            }`}
                          >
                            <Image
                              src="/assets/images/allImages/arrow_drop_down.svg"
                              alt="icon Faq"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                        {selectedQuestion === faqIndex && (
                          <p
                            className={Styles.answerMobile}
                            dangerouslySetInnerHTML={{
                              __html: faq.answer
                                .replace(/\n/g, "<br> ")
                                .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;"),
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
      <FaqMobile data={data} />{" "}
    </div>
  );
};

export default Faq;
