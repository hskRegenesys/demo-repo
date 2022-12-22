import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleCourseBenefits = ({ work = {}, current }) => {
  const { id, text1, text2, lists } = work;

  return (
    <div
      className={`tab animated${current === id ? " active-tab fadeInUp" : ""}`}
      id={id}
    >
      <Row className="clearfix">
        <Col lg={12} md={12} sm={12} className="text-col">
          <div className="inner">
            <div className="content">
              <div className="text">
                <p>{text1}</p>
                <p>{text2}</p>
                <ul>
                  {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleCourseBenefits;
