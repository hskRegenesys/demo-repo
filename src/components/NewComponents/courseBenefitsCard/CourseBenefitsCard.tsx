import React from "react";
import styles from "./CourseBenefitsCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Image from "next/image";
interface CardData {
  cardIcon: string;
  text1: string;
  text2: string;
}
interface Props {
  data: {
    courcename: string;
    Heding: string;
    Card: CardData[];
  };
  handleEnrollButtonClick: (title?: string) => void;
  pageName?: string;
}

const CourseBenefitsCard: React.FC<Props> = ({
  handleEnrollButtonClick,
  data,
  pageName,
}) => {
  const { courcename, Heding, Card } = data;
  const addBottomValue = Card.length <= 3 ? "0px" : "60px";
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={styles.courseBenefitsCardContainer}>
      <h2 className="main-heading">{courcename}</h2>
      <h2 className="main-sub-heading mb-6">{Heding}</h2>

      <div className={styles.cardsContainer}>
        <Swiper
          style={{ paddingBottom: addBottomValue }}
          className={`${styles.swiperStyle} swiperStyle`}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            460: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 3,
            },
          }}
        >
          {Card.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className={`${styles.card} ${
                  pageName === "Digital Marketing Course" && styles.dmCard
                }`}
              >
                <Image
                  //src={`${imageUrl}${card.cardIcon}`}
                  src={card.cardIcon}
                  alt="Card Icon"
                  className={styles.cardIcon}
                  width={pageName === "Digital Marketing Course" ? 54 : 64}
                  height={pageName === "Digital Marketing Course" ? 54 : 64}
                  layout="fixed"
                />
                <div className={styles.cardText}>
                  {/* <p className={styles.cardText1}>{card.text1}</p> */}
                  <p className={styles.cardText2}>{card.text2}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className={styles.enrollNowButton}
        onClick={() => {
          handleEnrollButtonClick("Enrol Now!");
        }}
      >
        Enrol Now
      </button>
    </div>
  );
};

export default CourseBenefitsCard;
