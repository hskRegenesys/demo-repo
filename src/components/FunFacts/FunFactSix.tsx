import { funFactSix } from "@/data/funFacts";
import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const FunFactSix = () => {
  return (
    <section className="funfact-six">
      <div className="auto-container">
        <Row>
          {funFactSix?.map(({ id, image, text, count }) => (
            <Col key={id} sm={12} md={6} lg={4} className="pl-0">
              <div className="funfact-six__item">              
                <div className="funfact-six__count count-box">             
                <div className="image-box">
                <Image src={image} alt="" />
              </div>


                  <div className="count-text text-start">
                    <VisibilityCountUp count={count}/><span>+</span>
                    
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
