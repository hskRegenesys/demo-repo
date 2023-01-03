import { partnerOne } from "@/data/partnerSection";
import React, { useState, useEffect, useContext, useRef } from "react";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import { Col, Image, Row } from "react-bootstrap";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider1",
  items: 1,
  slideBy: "page",
  autoplay: true,
  loop: false,
  gutter: 30,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls3",
  mouseDrag: true,
};



const ExperienceSectionMobile = () => {
  const listRef = useRef(null);


  return (
    <section className="experience-section desktop-hide mobile-show" id="experience-mobile">
      <div className="auto-container">
        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider
              options={{
                ...settings,
              }}
              ref={listRef}
            >
              {partnerOne?.map(({ id, image, title, text }) => (
                <div ref={listRef} className="gallery-item" key={id}>
                
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
                  </div>  
              ))}
            </TinySlider>

            <div className="tns-controls3">
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

export default ExperienceSectionMobile;
