import sponsors from "@/data/courseTools";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: false,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    600: {
      items: 2,
      gutter: 30,
    },
    768: {
      items: 4,
      gutter: 30,
    },
    992: {
      items: 6,
      gutter: 30,
    },
    1200: {
      items: 8,
      gutter: 30,
    },
  },
};

const StudentPlacement = ({ className = "" }) => {
  const listRef = useRef(null);

  return (
    <section className={`sponsors-section ${className}`}>
      <div className="sponsors-outer">
        <div className="FluidSection">
        <div className="sec-title animated fadeInLeft text-center">
              <h4>
              Our Students Have Been Placed at
              </h4>
            </div>
          <div className="sponsors-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-15` }}
              ref={listRef}
            >
              {sponsors.map((image, index) => (
                <div
                  ref={listRef}
                  key={index}
                  className="slide-item text-center"
                >
                  <figure className="image-box">
                    <a href="#">
                      <Image
                        src={`/assets/images/clients/${
                            className.includes("dark") ? "dark-1.png" : image
                          }`
                        }
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPlacement;
