import { faqsSection } from "@/data/CourseCurriculum";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = (props:any) => {
  let { allFaqs } = props;
  const { faqs, defaultCurrent } = allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);

  return (
    <Col lg={12} md={12} sm={12} className="faq-block curri">
       <h3 className="with-curve-center text-center">Course curriculum</h3>
      <ul className="accordion-box clearfix">
        {faqs?.map((item:any) => {
          let { id, title, text } = item;
          return(
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
              {/* <span className="count">{id}.</span> */}
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

const CourseCurriculum = () => {
  return (
    <section className="faqs-section curriculum">
      <div className="auto-container">
        <Row className="clearfix">
          {faqsSection?.map((allFaqs) => (
            <Faqs key={allFaqs.id} allFaqs={allFaqs} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CourseCurriculum;
