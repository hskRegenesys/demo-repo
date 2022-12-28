import discoverSection from "@/data/discoverSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, discovers, discovers2, discovers3 } = discoverSection;

const DiscoverSection = ({ ShowTitle = true }) => {
  return (
    <section className="discover-section">
      <div className="auto-container">
        <Row className="clearfix">
          {discovers?.map(({ id, image, title, buttonText, href, text }) => (
            <Col key={id} lg={4} md={12} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image src={`/assets/images/icons/${image}`} alt="" />
                </div>
                <div className="cap-box animated fadeInUp">
                  <div className="cap-inner">
                    <h5>{title}</h5>
                    <p>{text}</p>

                    <a
                      href={href}
                      className="theme-btn btn-style-four"
                      target="_blank"
                    >
                      {buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          {discovers2?.map(
            ({
              id,
              image,
              title,
              buttonText1,
              buttonText2,
              phone2,
              phone3,
              text,
            }) => (
              <Col key={id} lg={4} md={12} sm={12} className="discover-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Image src={`/assets/images/icons/${image}`} alt="" />
                  </div>
                  <div className="cap-box animated fadeInUp">
                    <div className="cap-inner">
                      <h5>{title}</h5>
                      <p>{text}</p>
                      <a
                        className="theme-btn btn-style-four mr-2"
                        href={`tel:${phone2} `}
                      >
                        {buttonText1}
                      </a>
                      <a
                        className="theme-btn btn-style-four mr-2"
                        href={`tel:${phone3} `}
                      >
                        {buttonText2}
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            )
          )}
          {discovers3?.map(
            ({
              id,
              image,
              title,
              buttonText,

              email,
              text,
            }) => (
              <Col key={id} lg={4} md={12} sm={12} className="discover-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Image src={`/assets/images/icons/${image}`} alt="" />
                  </div>
                  <div className="cap-box animated fadeInUp">
                    <div className="cap-inner">
                      <h5>{title}</h5>
                      <p>{text}</p>

                      <a
                        className="theme-btn btn-style-four mr-2"
                        href={`mailto:${email}`}
                      >
                        {buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </div>
    </section>
  );
};

export default DiscoverSection;
