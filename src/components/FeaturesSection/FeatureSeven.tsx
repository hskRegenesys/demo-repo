import React, { useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import dynamic from "next/dynamic";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider3",
  gutter: 20,
  responsive: {
    475: {
      slideBy: "page",
      items: 1.5,
    },
    600: {
      items: 2,
      gutter: 30,
    },
    992: {
      items: 3,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
      disable: true,
      mode: "gallery",
    },
    1500: {
      gutter: 30,
    },
    1600: {
      gutter: 30,
    },
  },
  autoplay: true,
  loop: true,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls6",
};

const FeatureSeven = ({ courseDetails }: any) => {
  const { title, features, desc } = courseDetails?.featureSeven;
  const listRef = useRef(null);
  return (
    <section className="feature-seven">
      <div className="FludiSection">
        <div className="sec-title centered">
          <h2>{title}</h2>

          <h6 className="desc">{desc}</h6>
        </div>
        <Row className="justify-content-center">
          <TinySlider
            options={{
              ...settings,
            }}
            ref={listRef}
          >
            {features?.map(({ id, title, designation, text, image }: any) => (
              <Col ref={listRef} key={id} sm={6} md={4} lg={3}>
                <div className="feature-seven-card">
                  <div className="feature-seven-card__inner">
                    <div className="feature-seven-card__image">
                      {/* <Image src={`/assets/images/faculties/${image}`} alt="" /> */}
                      <Image
                        src={`/assets/images/faculties/${image}`}
                        layout="intrinsic"
                        width="300"
                        height="300"
                        alt=""
                      />
                    </div>
                    <div className="feature-seven-card__content">
                      <h3 className="feature-seven-card__title">{title}</h3>

                      <h6 className="designation">{designation}</h6>
                      <p className="feature-seven-card__text">{text}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </TinySlider>

          <div className="tns-controls6 text-center">
            <button className="tns-prev">
              <span className="icon fa fa-angle-left"></span>
            </button>
            <button className="tns-next">
              <span className="icon fas fa-angle-right"></span>
            </button>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default FeatureSeven;
