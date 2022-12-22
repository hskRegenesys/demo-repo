import { faqsSection } from "@/data/faqsSection";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = (props:any) => {
  const { faqs, defaultCurrent } = props.allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);

  return (
    <Col lg={12} md={12} sm={12} className="faq-block">
          <h3 className="with-curve-center text-center">Frequently Answered Questions</h3>
      <ul className="accordion-box clearfix">
        {faqs.map((item:any) => {
          let { id, title, text } = item;
          return (
          <li
            key={id}
            className={`accordion block${
              current === id ? " active-block" : ""
            }`}
          >
            <div
              onClick={() => setCurrent(id)}
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
        )})}
      </ul>
    </Col>
  );
};

const FaqsSection = () => {
  return (
    <section className="faqs-section">
      <div className="auto-container">
        <Row className="clearfix">
          {faqsSection.map((allFaqs) => (
            <Faqs key={allFaqs.id} allFaqs={allFaqs} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FaqsSection;
