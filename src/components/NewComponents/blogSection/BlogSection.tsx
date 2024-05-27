import React, { useState } from "react";
import Styles from "./blogSection.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
import MultiCarousel from "@/components/multiCarousel/multiCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const addBottomValue = data.BlogSectionCards.length <= 3 ? "0px" : "60px";
  const imageUrl = imageBaseUrl();

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    speed: 500,
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
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={Styles.blogSectionContainer}>
      <h2 className={Styles.blogSectionTitle}>{data.BlogSectionTitle}</h2>

      <div className={Styles.blogCardsContainer}>
        <MultiCarousel childSettings={settings}>
          {data?.BlogSectionCards.map((card, index) => (
            <div key={index}>
              <div key={index} className={Styles.blogCard}>
                <Image
                  src={`${imageUrl}${card.blogImg}`}
                  // src={card.blogImg}
                  alt="Blog"
                  className={Styles.blogImage}
                  width={360}
                  height={190}
                  priority
                />

                <div className={Styles.blogContent}>
                  <div>
                    <h3 className={Styles.blogQuestion}>{card.blogQuestion}</h3>
                    <h2 className={Styles.blogText}>{card.blogText}</h2>
                  </div>
                  <div className={Styles.knowMore}>
                    <a href={card.blogLink} className={Styles.knowMoreLink}>
                      Know More
                      <span className={Styles.arrowIcon}>
                        <Image
                          src={`${imageUrl}Icons/Readmore.svg`}
                          // src="/assets/images/new-component-assets/Readmore.svg"
                          alt="cardStar"
                          className={Styles.img}
                          width={12}
                          height={12}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default BlogSection;
