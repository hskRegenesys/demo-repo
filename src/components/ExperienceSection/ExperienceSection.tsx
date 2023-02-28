import { partnerOne } from "@/data/partnerSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ExperienceSectionMobile from "./ExperienceSectionMobile";


const ExperienceSection = () => {
  return (
    <section className="partner-one">
      <div className="auto-container">
        <div className="sec-title">
          <h2 className="title-width-2">
            An immersive experience by Digital Regenesys
          </h2>
          <h6 className="desc">We are here to build your career</h6>
        </div>


        <Row className="mobile-hide">
          {partnerOne?.map(({ id, image, title, text }) => (
            <>
            {id ===4 && <Col key={id} md={2} lg={2}></Col>}
            <Col key={id} md={6} lg={4}>
              <div className="partner-one__card">
                <div className="partner-one__image">
                  <Image
                    src={`/assets/images/icons/${image}`}
                    alt=""
                  />
                </div>
                <div className="partner-one__content">
                  <h3 className="partner-one__title">{title}</h3>
                  <p className="partner-one__text">{text}</p>
                </div>
              </div>
            </Col>
            </>
          ))}
        </Row>

       
          <ExperienceSectionMobile />

      </div>
    </section>
  );
};

export default ExperienceSection;
