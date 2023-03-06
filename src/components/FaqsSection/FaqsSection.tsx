import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = (props: any) => {
  const { faqs, defaultCurrent } = props.allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);
  const handleClick = (id: number) => {
    current === id ? setCurrent("") : setCurrent(id);
  };

  return (
    <Col lg={12} md={12} sm={12} className="faq-block ">
      <h2 className="with-curve-center faq-head text-center">
        Frequently Answered Questions
      </h2>
      <ul className="accordion-box clearfix">
        {faqs?.map((item: any) => {
          let { id, title, text } = item;
          return (
            <li
              key={id}
              className={`accordion block${
                current === id ? " active-block" : ""
              }`}
            >
              <div
                onClick={() => handleClick(id)}
                className={`acc-btn${current === id ? " active" : ""}`}
              >
                <span className="count">{id}.</span>
                {title}
              </div>
              <div
                className={`acc-content animated${
                  current === id ? " current slideInUp" : ""
                }`}
              >
                <div className="content">
                  <div className="text">{text}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Col>
  );
};

const FaqsSection = ({ courseDetails }: any) => {
  return (
    <section className="faqs-section">
      <div className="auto-container">
        <Row className="clearfix">
          {courseDetails?.faqsSection?.map((allFaqs: any) => (
            <Faqs key={allFaqs.id} allFaqs={allFaqs} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FaqsSection;
