import React from "react";
import Styles from "./studentYoutubeVideos.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const StudentYoutubeVideos = () => {
  return (
    <div className={Styles.studentYoutubeContainer}>
      <h2 className={Styles.title}>
        Watch Our Students Share Their Experiences{" "}
      </h2>
      <div className={Styles.videoContainer}>
        <Swiper
          className={Styles.swiperStyle}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              pagination: { clickable: true }, // Fixed syntax error here
            },
            920: {
              slidesPerView: 2,
              pagination: { clickable: true }, // Fixed syntax error here
            },
          }}
        >
          <SwiperSlide>
            <iframe
              src="https://www.youtube.com/embed/ygZIi5tRC40"
              title="Video 1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={Styles.iframe}
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pxKOmOX5muU"
              title="Video 2"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={Styles.iframe}
            ></iframe>
          </SwiperSlide>
          {/* <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pxKOmOX5muU"
              title="Video 2"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={Styles.iframe}
            ></iframe>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default StudentYoutubeVideos;
