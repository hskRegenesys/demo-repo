import courseTools from "@/data/courseTools";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: false,
  lazyload: false,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls-tools",
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    600: {
      items: 3,
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

const ToolsCovered = ({ courseDetails }) => {
  const listRef = useRef(null);
  return (
    <section className={`sponsors-section tools-covered`}>
      <h5>Tools Covered</h5>
      <div className="sponsors-outer">
        <div className="fluidSection">
          <div className="sponsors-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-15` }}
              ref={listRef}
            >
              {courseDetails?.courseTools?.map((image, index) => (
                <div
                  ref={listRef}
                  key={index}
                  className="slide-item text-center"
                >
                  <figure className="image-box">
                    <Image src={`/assets/images/clients/${image}`} alt="" />
                  </figure>
                </div>
              ))}
            </TinySlider>

            <div className="tns-controls-tools">
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

export default ToolsCovered;
