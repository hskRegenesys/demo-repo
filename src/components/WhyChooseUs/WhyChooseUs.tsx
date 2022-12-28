import { serviceSectionThree } from "@/data/servicesSection";
import React from "react";
import { Col, Row } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <section className="service-block-three">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2 className="with-curve-center title-width mx-auto">
            Why Choose Digital Regenesys
          </h2>
          <h6 className="desc">
            In a one to one setting, a tutor is able to focus on the individual
            learner's needs
          </h6>
        </div>
        <Row>
          {serviceSectionThree?.map(({ id, icon, title, desc }) => (
            <Col key={id} sm={12} md={6} lg={6} className="animated fadeInLeft">
              <div className="service-block-three__single">
                <div className="icon-box">
                  <span className={icon}></span>
                  {title}
                </div>
                <h6>{desc}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default WhyChooseUs;
