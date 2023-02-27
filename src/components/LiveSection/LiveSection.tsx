import liveSection from "@/data/liveSection";
import Link from "next/link";
import React, { useState } from "react";
import TextSplit from "../Reuseable/TextSplit";
// import VideoModal from "../VideoModal/VideoModal";

const { bg, videoId } = liveSection;

const LiveSection = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className={`live-section ${className}`}>
        
          {/* <div className="sec-title centered">
            <h2>
              {secTitle}
              <span className="dot">.</span>
            </h2>
          </div> */}
          <div className="main-image-box">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="inner clearfix">
              <div className="animated fadeInUp round-box">
           
                  <div className="vid-link">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                      <div className="icon">
                        <span className="flaticon-play-button-1"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>           
              
          
              </div>
            </div>
    
        </div>
      </section>
      {/* <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} /> */}
    </>
  );
};

export default LiveSection;
