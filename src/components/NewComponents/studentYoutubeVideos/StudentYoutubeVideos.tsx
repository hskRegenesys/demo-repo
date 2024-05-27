import React, { useState } from "react";
import Slider from "react-slick";
import Styles from "./studentYoutubeVideos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoTestimonialData from "@/data/videoTestimonial";

const StudentYoutubeVideos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={Styles.studentYoutubeContainer}>
      <h2 className={Styles.title}>
        Watch Our Students Share Their Experiences
      </h2>
      <div className={Styles.videoContainer}>
        <Slider
          className={Styles.sliderStyle}
          dots={true}
          slidesToShow={2}
          slidesToScroll={2}
          afterChange={handleSlideChange}
          customPaging={(i) => (
            <div
              className={`${Styles.customDot} ${
                currentSlide === i ? Styles.activeDot : ""
              }`}
            />
          )}
          dotsClass={Styles.customDots}
          appendDots={(dots) => <ul>{dots}</ul>}
          responsive={[
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {videoTestimonialData.videos.map((video, index) => (
            <div key={index} className={Styles.iframesecton}>
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={Styles.iframe}
                aria-label={`Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StudentYoutubeVideos;
