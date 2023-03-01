import featuredSection from "@/data/featuredSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";

const { image, title, text, features } = featuredSection;
import FunFactSix from "@/components/FunFacts/FunFactSix";

const HomeBanner = ({ className = "" }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`featured-section ${className}`}>
        <div className="auto-container">
          <Row className="row clearfix">
            <Col lg={6} md={6} sm={12} className="right-col">
              <div className="inner">
                <div className="sec-title">
                  <h1 className="title-home">{title}</h1>
                  <FunFactSix />
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="image-box">
                  <Image src={image} alt="" />
                </div>

                <a
                  className="theme-btn btn-style-two banner-button"
                  onClick={handleShow}
                >
                  <i className="btn-curve"></i>
                  <span className="btn-title">Request a Call</span>
                </a>
              </div>
            </Col>
          </Row>

          <Row className="revolutionise-text desktop-hide">
            <div className="sec-title animated fadeInLeft text-center">
              <h4>
                Revolutionise your career with
                <br />
                future-ready skills
              </h4>
            </div>
            <p className="para-text">
              Learn the next-gen digital skills with India’s leading EdTech
              platform introduced by Regenesys Business School, an international
              business school with campuses in Johannesburg, Mumbai, and Lagos.
              Digital Regenesys is here to provide career transforming,
              skill-enhancing, and upgrading online courses in many digital
              fields. The self-paced online courses offered by Digital Regenesys
              are in sync with the demands of almost every industry and their
              digital and technological needs. The instructor-led training gives
              students an advantage in getting placed within top MNCs and
              organisations. Expose yourself to content within our certificate
              courses taught by a highly experienced and world-recognised
              faculty. Come and be a part of the digital revolution.
            </p>
          </Row>

          <div className="yellow-half-bg"></div>
        </div>
      </section>

      <Modal show={show}>
        <ModalPopup setShows={setShow} />
      </Modal>
    </>
  );
};

export default HomeBanner;
