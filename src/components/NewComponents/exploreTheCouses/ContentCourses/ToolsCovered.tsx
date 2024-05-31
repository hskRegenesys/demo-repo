// ToolsCovered.js

import React from "react";
import styles from "../exploreTheCourses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

interface ToolsCoveredProps {
  contentHeading: string;
  cardTools: { img: string; alt: string }[];
}

const ToolsCovered: React.FC<ToolsCoveredProps> = ({
  contentHeading,
  cardTools,
}) => {
  const addBottomValue = cardTools.length <= 4 ? "0px" : "60px";
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={`${styles.content2} ${styles.content}`}>
      <h3>{contentHeading}</h3>
      <ul className={styles.horizontalCardContainer}>
        <Swiper
          style={{ paddingBottom: addBottomValue }}
          className={styles.swiperStyle}
          slidesPerView={4}
          slidesPerGroup={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            480: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            720: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {cardTools.map((tool, index) => (
            <SwiperSlide key={index}>
              <li key={index} className={styles.horizontalCard}>
                <Image
                  //src={`${imageUrl}Images/Tools/${tool.img}`}
                  src={tool.img}
                  alt="Tools Covered"
                  className={styles.toolImage}
                  width={144}
                  height={82}
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default ToolsCovered;
