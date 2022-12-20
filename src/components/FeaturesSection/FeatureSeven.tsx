import { featureSeven } from "@/data/featuresSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, features, desc } = featureSeven;

const FeatureSeven = () => {
  return (
    <section className="feature-seven">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title}          
          </h2>

          <h6 className="desc">
            {desc}          
          </h6>
        </div>
        <Row className="justify-content-center">
          {features.map(({ id, title, href, text, image }) => (
            <Col key={id} md={12} lg={4}>
              <div className="feature-seven-card">
                <div className="feature-seven-card__inner">
                  <div className="feature-seven-card__image">
                    <Image
                      src={
                        require(`@/images/faculties/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </div>
                  <div className="feature-seven-card__content">
                    <h3 className="feature-seven-card__title">
                    {title}
                    </h3>
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
