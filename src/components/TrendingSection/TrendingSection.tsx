import trendingSection from "@/data/trendingSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SingleTrending from "./SingleTrending";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});


const responsive1 = {
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
  1500: {
    items: 4,
    gutter: 30,
  },
  1600: {
    items: 5,
    gutter: 30,
  },
};

const responsive2 = {
  600: {
    items: 1,
    gutter: 30,
  },
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
};

const settings = {
  loop: false,
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    991: {
      items: 2,
      gutter: 30,
    },
  },
};

const { title, details, description, tagline } = trendingSection;

const TrendingSection = (carousel ) => {
  const listRef = useRef(null);
  const ref = useActive("#testimonials");

  return (
    <section ref={ref} className="testimonials-section" id="testimonials">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>
            {title}          
          </h2>
          <h6 className="desc">{description}</h6>
        </div>
        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-5`  , nav: !carousel,
              responsive: carousel ? responsive2 : responsive1, }} 
              ref={listRef}
            >
              {details.map((details) => (
                <SingleTrending
                  key={details.id}
                  testimonial={details}
                  ref={listRef}
                />
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
