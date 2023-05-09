import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = (props: any) => {
  let { allFaqs } = props;
  const { faqs, defaultCurrent } = allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);

  const handleClick = (id: number) => {
    current === id ? setCurrent("") : setCurrent(id);
  };

  return (
    <Col lg={12} md={12} sm={12} className="faq-block curriculum">
      <h2 className="text-center">
        <i className="arrow-sign-right"></i>Course curriculum
      </h2>
      <ul className="accordion-box clearfix">
        {faqs?.map((item: any) => {
          let { id, title, firstPara, secondPara, boldText, lists, lastPara } =
            item;
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
                {/* <span className="count">{id}.</span> */}
                {title}
              </div>
              <div
                className={`acc-content animated${
                  current === id ? " current slideInUp" : ""
                }`}
              >
                <div className="content">
                  <div className="text">
                    {firstPara && <span>{firstPara}</span>}
                    {secondPara && <span>{secondPara}</span>}
                    {boldText && <strong>{boldText}</strong>}
                    {lists?.map((text: string, i: number) => (
                      <ul key={`${text}-${i}`}>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          {text}
                        </li>
                      </ul>
                    ))}
                    {lastPara && <span>{lastPara}</span>}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Col>
  );
};

const CourseCurriculum = ({ courseDetails }: any) => {
  return (
    <section className="faqs-section curriculum">
      <div className="auto-container">
        <Row className="clearfix">
          {courseDetails?.CourseCurriculum?.map((allFaqs: any) => (
            <Faqs key={allFaqs.id} allFaqs={allFaqs} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CourseCurriculum;
