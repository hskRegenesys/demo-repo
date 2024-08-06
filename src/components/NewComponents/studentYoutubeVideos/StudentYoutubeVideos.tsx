import React, { useState, useEffect } from "react";
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

const LazyLoadedIframe: React.FC<{
  videoId: string;
  title: string;
  className: string;
}> = ({ videoId, title, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const targetElement = document.getElementById(`video-${videoId}`);
    if (!targetElement) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [videoId]);

  return (
    <div
      id={`video-${videoId}`}
      className={`${className} ${isVisible ? Styles.visible : Styles.hidden}`}
    >
      {isVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={Styles.iframe}
        ></iframe>
      )}
    </div>
  );
};

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
              <LazyLoadedIframe
                videoId={video.id}
                title={video.title}
                className={Styles.lazyLoadedIframe}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StudentYoutubeVideos;
