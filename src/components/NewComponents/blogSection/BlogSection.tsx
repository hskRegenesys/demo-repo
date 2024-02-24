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
  return (
    <div className={Styles.blogSectionContainer}>
      <h2 className={Styles.blogSectionTitle}>{data.BlogSectionTitle}</h2>

      <div className={Styles.blogCardsContainer}>
        <Swiper
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
            920: {
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
                  <h3 className={Styles.blogQuestion}>{card.blogQuestion}</h3>
                  <p className={Styles.blogText}>{card.blogText}</p>
                  <div className={Styles.knowMore}>
                    <a href={card.blogLink} className={Styles.knowMoreLink}>
                      Know More{" "}
                      <span className={Styles.arrowIcon}>
                        {" "}
                        <img
                          src="/assets/images/HomeNew/Readmore.svg"
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
