import React from "react";
import Styles from "./LearnersSupport.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";
interface LearnerSupportCardData {
  LsImg: string;
  LsQuestion: string;
  LsText: string;
  LsButtonText: string;
}

interface LearnersSupportSectionData {
  LsSectionTitle: string;
  LsHeding: string;
  LearnersSupportCards: LearnerSupportCardData[];
}

interface LearnersSupportSectionProps {
  data: LearnersSupportSectionData;
  handleEnrollButtonClick: () => void;
}

const LearnersSupport: React.FC<LearnersSupportSectionProps> = ({
  data,
  handleEnrollButtonClick,
}) => {
  // const imageUrl = imageBaseUrl();

  return (
    <div className={Styles.LsSectionContainer}>
      <h2 className="main-sub-heading mb-3">{data.LsSectionTitle}</h2>
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
          {data?.LearnersSupportCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={index} className={Styles.LsCard}>
                <div className={Styles.LsImage}>
                  <Image
                    src={item.LsImg}
                    //src={`${imageUrl}${item.LsImg}`}
                    alt="Learning Support"
                    width={360}
                    height={160}
                    loading="eager"
                  />
                </div>

                <div className={Styles.LsContent}>
                  <h3 className={Styles.LsQuestion}>{item.LsQuestion}</h3>
                  <p className={Styles.LsText}>{item.LsText}</p>
                </div>
                <div className={Styles.buttonsContainer}>
                  <button
                    className={Styles.learnMoreButton}
                    onClick={handleEnrollButtonClick}
                  >
                    {item.LsButtonText}
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
