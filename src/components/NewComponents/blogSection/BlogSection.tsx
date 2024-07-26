import React from "react";
import Styles from "./blogSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
SwiperCore.use([Pagination, Autoplay]);

interface BlogSectionCardData {
  blogImg: string;
  blogQuestion: string;
  blogText: string;
  blogLink: string;
}

interface BlogSectionData {
  BlogSectionTitle: string;
  BlogSectionCards: BlogSectionCardData[];
}

interface BlogSectionProps {
  data: BlogSectionData;
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  if (!data || !data.BlogSectionCards || data.BlogSectionCards.length === 0) {
    return null;
  }

  const addBottomValue = data.BlogSectionCards.length <= 3 ? "0px" : "60px";
  const imageUrl = imageBaseUrl();

  return (
    <div className={Styles.blogSectionContainer}>
      <h2 className="main-sub-heading">{data.BlogSectionTitle}</h2>

      <div className={Styles.blogCardsContainer}>
        <Swiper
          style={{ paddingBottom: addBottomValue }}
          className={`${Styles.swiperStyle} swiperStyle`}
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
          {data?.BlogSectionCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div key={index} className={Styles.blogCard}>
                <Image
                  // src={`${imageUrl}${card.blogImg}`}
                  src={card.blogImg}
                  alt="Blog"
                  className={Styles.blogImage}
                  width={384}
                  height={187}
                  layout="responsive"
                />

                <div className={Styles.blogContent}>
                  <div>
                    <h3 className={Styles.blogQuestion}>{card.blogQuestion}</h3>
                    <h2 className={Styles.blogText}>{card.blogText}</h2>
                  </div>
                  <div className={Styles.knowMore}>
                    <a
                      href={card.blogLink}
                      className={Styles.knowMoreLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Know More
                      <span className={Styles.arrowIcon}>
                        <Image
                          // src={`${imageUrl}Icons/Readmore.svg`}
                          src="/assets/images/allImages/read-more-new.svg"
                          alt="card Star"
                          className={Styles.img}
                          width={12}
                          height={12}
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
