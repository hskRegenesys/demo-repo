import featuredSection from "@/data/featuredSection";
import React, { useState } from 'react';
import { Col, Image, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
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

          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title">
                <h1>
                  {title}
                </h1>
                <FunFactSix />
              </div>

            </div>
          </Col>

          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image src={image} alt="" />
              </div>

              <a className="theme-btn btn-style-two banner-button" onClick={handleShow}>
                <i className="btn-curve"></i>
                <span className="btn-title">Request a Call</span>
              </a>
            </div>
          </Col>
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
