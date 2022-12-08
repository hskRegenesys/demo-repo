import { howItWorksPage } from "@/data/howItWorks";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const MissionVison = () => {
  return (
    <section className="how-it-works">
      <div className="FluidSection">
        <Row>
          {howItWorksPage.map(({ id, title, text }) => (
            <Col key={id} md={6} lg={6}>
              <div className="how-it-works-card">
                <div className="how-it-works-card__inner">                 
                  <h2 className="how-it-works-card__title">
                    {title}
                  </h2>
                  <p className="how-it-works-card__text">{text}</p>                
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default MissionVison;
