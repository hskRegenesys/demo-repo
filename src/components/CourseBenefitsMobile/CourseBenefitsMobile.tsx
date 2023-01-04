import { courseBenefitsMobile } from "@/data/courseBenefits";
import React, { useState, useEffect, useContext, useRef } from "react";
import dynamic from "next/dynamic";
import { Col, Image, Row } from "react-bootstrap";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider2",
  items: 1,
  slideBy: "page",
  autoplay: true,
  loop: true,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls5",
};

const CourseBenefitsMobile = () => {
  const listRef = useRef(null);
  return (
    <section className="career-benefits-section" id="career-benefits-mobile">
      <div className="auto-container">
        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider
              options={{
                ...settings,
              }}
              ref={listRef}
            >
              {courseBenefitsMobile.tabsContents?.map(({ id, title, lists }) => (
                <div ref={listRef} className="gallery-item" key={id}>
                  <div className="partner-one__card">
                    <div className="careers-one__content mobile_course_benefits">
                      <h3 className="careers-one__title">{title}</h3>
                      <ul>
                        {lists?.map((text, i) => (
                          <li key={i}> {text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>

            <div className="tns-controls5 text-center">
              <button className="tns-prev">
                <span className="icon fa fa-angle-left"></span>
              </button>
              <button className="tns-next">
                <span className="icon fas fa-angle-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsMobile;
