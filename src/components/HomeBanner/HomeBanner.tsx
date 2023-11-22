import featuredSection from "@/data/featuredSection";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Image from "next/image";
import CountDownSeatsAvailable from "../../components/CountDownSeatsAvailable/CountDownSeatsAvailable";

const { image, title, subtitle, subsubtitle, features } = featuredSection;
import FunFactSix from "@/components/FunFacts/FunFactSix";

const HomeBanner = ({ className = "" }) => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  // -----Animation text --------
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = " Last 3 Days to Avail";
  const speed = 200;

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowCursor(false);
          setCurrentIndex(0);
          setDisplayText("");
          setShowCursor(true);
        }, speed * 3);
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed, currentIndex]);
  // -----------------------------------------

  return (
    <>
      <section className={`featured-section ${className}`}>
        <div className="auto-container tablet-spacing">
          <Row className="row clearfix">
            <Col lg={6} md={6} sm={12} className="right-col">
              <div className="inner">
                <div className="sec-title">
                  <h1 className="title-home">
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                    <div style={{ display: "flex" }}>
                      <p>{subsubtitle}</p>
                      <p className="animi-text">
                        {displayText} {showCursor && "|"}
                      </p>
                    </div>
                  </h1>
                  {/* <div>
                    <div className="seats-count" style={{ margin: "40px 0px" }}>
                      <h5 className="bold-heading">Seats Left</h5>
                      <div className={"d-flex gap-2"}>
                        <CountDownSeatsAvailable />
                      </div>
                    </div>
                  </div> */}
                  <FunFactSix />
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className="left-col center-block-image">
              <div className="inner center-image animated fadeInLeft">
                <div className="image-box">
                  <Image
                    priority={true}
                    src={image}
                    layout="responsive"
                    width="432"
                    height="547"
                    alt="gmba banner"
                  />
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
              <h2 className="desktop-hide">
                Revolutionise your career with <br />
                future-ready skills
              </h2>
            </div>
            <p className="para-text">
              Embark on a next-generation digital skills journey with silicon
              valley's cutting-edge Ed-Tech. Introducing Digital Regenesys, the
              renowned EdTech platform by Regenesys Business School, an
              international business school with campuses in Johannesburg,
              Mumbai, and Lagos. Experience career-transforming,
              skill-enhancing, and cutting-edge online courses across various
              digital domains. Our online courses are meticulously designed to
              align with the evolving digital and technological requirements of
              diverse industries. Gain a competitive edge through instructor-led
              training, increasing your chances of securing prestigious
              positions in top MNCs and organizations. Immerse yourself in the
              comprehensive content of our certificate courses, delivered by a
              highly experienced and globally recognized faculty. Join us now
              and become a vital part of the digital revolution.
            </p>
          </Row>

          <div className="yellow-half-bg"></div>
        </div>
      </section>

      <Modal show={show}>
        <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </>
  );
};

export default HomeBanner;
