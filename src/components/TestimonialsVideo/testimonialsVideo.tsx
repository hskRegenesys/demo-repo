import courseTools from "@/data/courseTools";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Image from "next/image";

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
      items: 1,
      gutter: 30,
    },
    768: {
      items: 2,
      gutter: 30,
    },

    1200: {
      items: 2,
      gutter: 30,
    },
  },
};

const TestimonialsVideo = ({ videoDetails }: any) => {
  const listRef = useRef(null);

  return (
    <section className={`sponsors-section tools-covered`}>
      <div className="video-testimonials">
        <h2 className="head-tools-covered">Video Testimonials</h2>
        <div className="sponsors-outer">
          <div className="container">
            <div className="sponsors-carousel-video">
              <TinySlider
                options={{ ...settings, container: `.my-slider-14` }}
                ref={listRef}
              >
                {videoDetails?.videos?.map((item: any, index: any) => {
                  return (
                    <>
                      <div
                        ref={listRef}
                        key={index}
                        className="slide-item text-center"
                      >
                        <figure className="video-box-video-testimonial">
                          <iframe
                            width="560"
                            height="380"
                            src={item.url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </figure>
                      </div>
                    </>
                  );
                })}
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
      </div>
    </section>
  );
};

export default TestimonialsVideo;