import { funFactSix } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const FunFactSix = () => {
  return (
    <section className="funfact-six">
      <div className="auto-container">
        <Row>
          {funFactSix?.map(({ id, icon, text, count }) => (
            <Col key={id} sm={12} md={6} lg={4}>
              <div className="funfact-six__item">
               
                <div className="funfact-six__count count-box">
                <i className={`funfact-six__icon ${icon}`}></i>
                  <div className="count-text text-start">
                    <VisibilityCountUp count={count} />
                    <p className="funfact-six__text">{text}</p>
                  </div>
                 
                </div>
              
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FunFactSix;
