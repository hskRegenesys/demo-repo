import { aboutMeOne } from "@/data/aboutSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const { title, text, text2, text3, highlight, subtitle } = aboutMeOne;

const AboutMarko = () => {
  return (
    <section className="about-me-one about-me-bg">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12 col-lg-6 d-block d-lg-none">
            <div className="about-me-one__image">
              <Image
                src="/assets/images/marko.webp"
                layout="intrinsic"
                width="450"
                height="511"
                alt="Dr Marko"
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="about-me-one__content">
              <div className="sec-title">
                <h2>{title}</h2>
              </div>
              <div className="about-me-subtitle">{subtitle}</div>
              <p className="highlight">{highlight}</p>
              <p className="about-me-one__text">{text}</p>
              <p className="about-me-one__text">{text2}</p>
              <p className="about-me-one__text">{text3}</p>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 d-none d-lg-block">
            <div className="about-me-one__image">
              <Image
                src="/assets/images/marko.webp"
                layout="intrinsic"
                width="450"
                height="511"
                alt="Dr Marko"
              />
            </div>
          </div>
        </div>

        {/* <Row>
          <Col md={12} lg={6} className="mobile-show desktop-hide">
            <div className="about-me-one__image">
              <Image
                src="/assets/images/marko.webp"
                layout="intrinsic"
                width="450"
                height="511"
                alt="Dr Marko"
              />
            </div>
          </Col>

          <Col md={12} lg={6}>
            <div className="about-me-one__content">
              <div className="sec-title">
                <h2>{title}</h2>
              </div>
              <div className="about-me-subtitle">{subtitle}</div>
              <p className="highlight">{highlight}</p>
              <p className="about-me-one__text">{text}</p>
              <p className="about-me-one__text">{text2}</p>
              <p className="about-me-one__text">{text3}</p>
            </div>
          </Col>

          <Col md={12} lg={6} className="mobile-hide">
            <div className="about-me-one__image">
              <Image
                src="/assets/images/marko.webp"
                layout="intrinsic"
                width="450"
                height="511"
                alt="Dr Marko"
              />
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
};

export default AboutMarko;
