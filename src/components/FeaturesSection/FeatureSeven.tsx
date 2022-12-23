import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const FeatureSeven = ({ courseDetails }: any) => {
  const { title, features, desc } = courseDetails?.featureSeven;
  return (
    <section className="feature-seven">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>{title}</h2>

          <h6 className="desc">{desc}</h6>
        </div>
        <Row className="justify-content-center">
          {features?.map(({ id, title, designation, text, image }:any) => (
            <Col key={id} md={12} lg={4}>
              <div className="feature-seven-card">
                <div className="feature-seven-card__inner">
                  <div className="feature-seven-card__image">
                    <Image src={`/assets/images/faculties/${image}`} alt="" />
                  </div>
                  <div className="feature-seven-card__content">
                    <h3 className="feature-seven-card__title">{title}</h3>

                    <h6 className="designation">{designation}</h6>
                    <p className="feature-seven-card__text">{text}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
    </section>
  );
};

export default FeatureSeven;
