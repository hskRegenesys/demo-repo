import { videoOne } from "@/data/videoSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";

const { image, videoId, title, text1, text2 } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-one">
        <div className="auto-container">
          <div className="video-one__image">
            <Image
              src={image}
              alt="Linoor is trusted by millions of customers"
            />
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
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
