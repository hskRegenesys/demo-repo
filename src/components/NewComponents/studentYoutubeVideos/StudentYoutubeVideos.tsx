import React, { useState } from "react";
import Slider from "react-slick";
import Styles from "./studentYoutubeVideos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoTestimonialData from "@/data/videoTestimonial";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";

const StudentYoutubeVideos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i: number) => (
      <div
        className={`${Styles.customDot} ${
          currentSlide === i ? Styles.activeDot : ""
        }`}
      />
    ),
    dotsClass: Styles.customDots,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={Styles.studentYoutubeContainer}>
      <h2 className={Styles.title}>
        Watch Our Students Share Their Experiences
      </h2>
      <div className={Styles.videoContainer}>
        <MultiCarousel childSettings={settings} className={Styles.sliderStyle}>
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
        </MultiCarousel>
      </div>
    </div>
  );
};

export default StudentYoutubeVideos;
