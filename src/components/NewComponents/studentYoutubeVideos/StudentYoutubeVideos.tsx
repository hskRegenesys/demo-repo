import React from "react";
import Styles from "./studentYoutubeVideos.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "ygZIi5tRC40", title: "Video 1" },
  { id: "pxKOmOX5muU", title: "Video 2" },
];

const StudentYoutubeVideos: React.FC = () => {
  return (
    <div className={Styles.studentYoutubeContainer}>
      <h2 className="main-sub-heading">
        Watch Our Students Share Their Experiences
      </h2>
      <div className={Styles.videoContainer}>
        <Swiper
          className={`${Styles.swiperStyleYoutube} swiperStyle`}
          spaceBetween={30}
          loop={true}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.25, slidesPerGroup: 1, centeredSlides: true },
            560: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
              centeredSlides: true,
            },
            1220: {
              slidesPerView: 2,
            },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={Styles.iframe}
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StudentYoutubeVideos;
