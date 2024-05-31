import sponsors from "@/data/courseTools";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Image from "next/image";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  gutter: 20,
  fixedWidth: 200,
  responsive: {
    475: {
      slideBy: 1,
      items: 4,
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
    },
  },
  autoplay: true,
  loop: false,
  lazyload: true,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
};

const StudentPlacement = ({ className = "" }) => {
  const listRef = useRef(null);

  return (
    <section className={`sponsors-section ${className}`}>
      <div className="sponsors-outer">
        <div className="FluidSection">
          <div className="sec-title animated fadeInLeft text-center">
            <h2 className="small-heading">Our alumni are working at</h2>
          </div>
          <div className="sponsors-carousel">
            <TinySlider options={{ ...settings, container: `.my-slider-15` }}>
              {sponsors?.map((image, index) => (
                <div
                  ref={listRef}
                  key={index}
                  className="slide-item text-center"
                >
                  <figure className="image-box">
                    <Image
                      priority={true}
                      src={`/assets/images/clients/${
                        className.includes("dark") ? "dark-1.png" : image
                      }`}
                      alt="Placement"
                      layout="intrinsic"
                      width="240"
                      height="150"
                    />
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
