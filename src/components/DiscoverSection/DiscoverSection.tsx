import discoverSection from "@/data/discoverSection";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import TextSplit from "../Reuseable/TextSplit";
const MapBox = dynamic(() => import("../MapSection/MapBox"));

const { title, discovers, discovers2, discovers3 } = discoverSection;

const DiscoverSection = ({ ShowTitle = true, map = false }) => {
  return (
    <section className="discover-section">
      <div className="auto-container">
        <Row className="clearfix">
          {discovers?.map(({ id, image, title, buttonText, href, text }) => (
            <Col key={id} lg={4} md={4} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    priority={true}
                    src={`/assets/images/icons/${image}`}
                    layout="intrinsic"
                    width="232"
                    height="232"
                    alt="Icon"
                  />
                </div>
                <div className="cap-box  fadeInUp">
                  <div className="cap-inner">
                    <h5>{title}</h5>
                    <p>{text}</p>
                    <a
                      href={href}
                      className="theme-btn btn-style-four mobile-hide"
                      target="_blank"
                    >
                      {buttonText}
                    </a>
                  </div>
                </div>
              </div>

              <Row className="desktop-hide mobile-show">
                <Col>
                  <MapBox />
                </Col>
              </Row>
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
              text1,
            }) => (
              <Col key={id} lg={4} md={4} sm={12} className="discover-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div>
                      <Image
                        src={`/assets/images/icons/${image}`}
                        layout="intrinsic"
                        width="232"
                        height="232"
                        alt="Icon"
                      />
                    </div>
                  </div>
                  <div className="cap-box  fadeInUp">
                    <div className="cap-inner">
                      <h5>{title}</h5>
                      <p className="mb-0">{text}</p>
                      <p className="contact-equal-spacing">{text1}</p>
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
              <Col key={id} lg={4} md={4} sm={12} className="discover-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Image
                      priority={true}
                      src={`/assets/images/icons/${image}`}
                      layout="intrinsic"
                      width="232"
                      height="232"
                      alt="Icon"
                    />
                  </div>
                  <div className="cap-box  fadeInUp">
                    <div className="cap-inner">
                      <h5>{title}</h5>
                      <p className="contact-equal-spacing2">{text}</p>

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
