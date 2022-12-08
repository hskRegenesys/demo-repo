import { sponsorsSectionFour } from "@/data/sponsorsSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import LiveSection from "@/components/LiveSection/LiveSection";

const { title, pagedesc, subtitle, imagearrow, text1, text2, highlight } = sponsorsSectionFour;

const AboutUsDescription = () => {
  return (
    <section className="sponsors-section-four about-us-wave">
      <div className="auto-container ">
        <div className="content-box text-center">
          <h3>
            <TextSplit text={title} />
          </h3>
          <h6 className="desc">{pagedesc}</h6>
        </div>
            <Col md={12} lg={12}>
              <div className="about-us-bg">                
              </div>
            </Col>
              <Row>

            <Col md={7} lg={7}>
              <div className="about-me-one__content who-we-are">      
              <div className="sign-arrow">
                <Image src={imagearrow.src} alt="" />
              </div>  
                <p className="highlight">{highlight}</p>
                <p className="about-me-one__text">{text1}</p>
                <p className="about-me-one__text">{text2}</p>
                  
              </div>
            </Col>

            <Col md={5} lg={5}>
            <LiveSection />             
            </Col>
            </Row>
            </div>
       </section>
  );
};

export default AboutUsDescription;
