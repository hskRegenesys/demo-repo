import React from "react";
import Styles from "./LearnersSupport.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
interface CardData {
  LsImg: string;
  LsQuestion: string;
  LsText: string;
  ButtenText: string;
}

interface LearnersSupportSectionData {
  LsSectionTitle: string;
  LsHeding: string;
  cards: CardData[];
}

interface LearnersSupportSectionProps {
  data: LearnersSupportSectionData;
  handleEnrollButtonClick: () => void;
}

const LearnersSupport: React.FC<LearnersSupportSectionProps> = ({
  data,
  handleEnrollButtonClick,
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={Styles.LsSectionContainer}>
      <h2 className={Styles.LsSectionTitle}>{data.LsSectionTitle}</h2>
      <h2 className={Styles.LsSectionHeding}>{data.LsHeding}</h2>

      <div className={Styles.LsCardsContainer}>
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
              <div key={index} className={Styles.LsCard}>
                <div className={Styles.LsImage}>
                  <Image
                    // src={card.LsImg}
                    src={`${imageUrl}${card.LsImg}`}
                    alt="Ls"
                    width={360}
                    height={160}
                    loading="eager"
                  />
                </div>

                <div className={Styles.LsContent}>
                  <h3 className={Styles.LsQuestion}>{card.LsQuestion}</h3>
                  <p className={Styles.LsText}>{card.LsText}</p>
                </div>
                <div className={Styles.buttonsContainer}>
                  <button
                    className={Styles.learnMoreButton}
                    onClick={handleEnrollButtonClick}
                  >
                    {card.ButtenText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearnersSupport;
