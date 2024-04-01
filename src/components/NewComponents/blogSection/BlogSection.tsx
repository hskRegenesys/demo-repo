import React from "react";
import Styles from "./blogSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

interface CardData {
  blogImg: string;
  blogQuestion: string;
  blogText: string;
  blogLink: string;
}

interface BlogSectionData {
  BlogSectionTitle: string;
  cards: CardData[];
}

interface BlogSectionProps {
  data: BlogSectionData;
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  if (!data || !data.cards || data.cards.length === 0) {
    // Return null if data is not provided or cards array is empty
    return null;
  }

  const addBottomValue = data.cards.length <= 3 ? "0px" : "60px";
  let paddingTopValue = "60px"; // Default value

  // Check if window is defined (i.e., if we're on the client-side)
  if (typeof window !== "undefined") {
    // Access window.innerWidth only on the client-side
    paddingTopValue = window.innerWidth <= 760 ? addBottomValue : "60px";
  }
  return (
    <div className={Styles.blogSectionContainer}>
      <h2 className={Styles.blogSectionTitle}>{data.BlogSectionTitle}</h2>

      <div className={Styles.blogCardsContainer}>
        <Swiper
          style={{ paddingBottom: paddingTopValue }}
          className={Styles.swiperStyle}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1260: {
              slidesPerView: 3,
            },
          }}
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div key={index} className={Styles.blogCard}>
                <img
                  src={card.blogImg}
                  alt="Blog"
                  className={Styles.blogImage}
                />

                <div className={Styles.blogContent}>
                  <div>
                    <h3 className={Styles.blogQuestion}>{card.blogQuestion}</h3>
                    <h2 className={Styles.blogText}>{card.blogText}</h2>
                  </div>
                  <div className={Styles.knowMore}>
                    <a href={card.blogLink} className={Styles.knowMoreLink}>
                      Know More{" "}
                      <span className={Styles.arrowIcon}>
                        {" "}
                        <img
                          src="/assets/images/new-component-assets/Readmore.svg"
                          alt="cardStar"
                          className={Styles.img}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
