import { featuresSectionTwo } from "@/data/featuresSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, title2 } = featuresSectionTwo;

const FeaturesSectionTwo = () => {
  return (
    <section className="features-section-two">
      <div className="auto-container">
        <div className="content-container">
          <Row className="clearfix">
            <Col lg={12} md={12} sm={12} className="left-col">
              <div className="inner">
                <div className="sec-title">
                  <h1>
                    <i className="contact-page call-to-action-arrow"> </i>
                    {title}
                  </h1>

                  <h6 className="desc">{title2}</h6>
                </div>
                <div className="sign-arrow-contact">
                  <Image
                    src="/assets/images/background/sign-arrow-left.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionTwo;
