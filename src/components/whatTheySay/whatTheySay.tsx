import courseTools from "@/data/courseTools";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Image from "next/image";
import Router from "next/router";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const WhayTheySay = ({ courseDetails }: any) => {
  const listRef = useRef(null);

  return (
    <>
      {courseDetails?.videos && (
        <section className={`sponsors-section tools-covered`}>
          <div className="video-testimonials">
            <h2 className="head-tools-covered">Hear it from the experts</h2>
            <div className="what-say-sponsors-outer">
              <div className="container">
                <div className="what-they-say-video">
                  {courseDetails?.videos?.map((item: any) => {
                    return (
                      <>
                        <div className="slide-item text-left pr-4">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WhayTheySay;
