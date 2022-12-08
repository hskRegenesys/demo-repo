import featuredSection from "@/data/featuredSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, features } = featuredSection;
import FunFactSix from "@/components/FunFacts/FunFactSix";

const HomeBanner = ({ className = "" }) => {
  return (
    <section className={`featured-section ${className}`}>
      <div className="auto-container">
        <Row className="row clearfix">
      
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  {title}                
                </h2>
                <FunFactSix />
              </div>
              
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="yellow-half-bg"></div>
      </div>     
    </section>
  );
};

export default HomeBanner;
