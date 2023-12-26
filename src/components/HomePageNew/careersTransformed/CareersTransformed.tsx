import React from "react";
import Styles from "./careersTransformed.module.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import careersTransformedData from "./careersTransformedData";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CareersTransformed = ({ page }) => {
  const mainCourseData = careersTransformedData[page];

  if (!mainCourseData) {
    return null;
  }

  const {
    heading,
    subheading,
    "three-card": { card1, card2, card3 },
    swiperCardContainer,
  } = mainCourseData;

  const swiperSettings = {
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1 className={Styles.heading}>{heading}</h1>
        <p className={Styles.subheading}>{subheading}</p>
      </div>

      <div className={Styles.cardsContainer}>
        <div className={Styles.card1}>
          <div className={Styles.cardTop}>
            <p className={Styles.cardtext1}>{card1.percentage}</p>
          </div>
          <div className={Styles.cardBottom}>
            <p className={Styles.cardText}>{card1.text}</p>
          </div>
        </div>

        <div className={Styles.card2}>
          <div className={Styles.cardTop}>
            <p className={Styles.cardtext1}>{card2.rating}</p>
            <img
              className={Styles.ratingImg}
              src={card2.ratingImg}
              alt="Rating"
            />
          </div>
          <div className={Styles.cardBottom}>
            <p className={Styles.cardText}>{card2.text}</p>
          </div>
        </div>

        <div className={Styles.card3}>
          <div className={Styles.cardTop}>
            <p className={Styles.cardtext1}>{card3.count}</p>
          </div>
          <div className={Styles.cardBottom}>
            <p className={Styles.cardText}>{card3.text}</p>
          </div>
        </div>
      </div>

      <div className={Styles.swiperContainer}>
        <Swiper {...swiperSettings}>
          {swiperCardContainer.map((swiperCard, index) => (
            <SwiperSlide key={index} className={Styles.swiperCard}>
              <div className={Styles.topSection}>
                <img
                  className={Styles.profileImg}
                  src={swiperCard.profileImg}
                  alt="Profile"
                />
                <div className={Styles.nameRole}>
                  <h4 className={Styles.name}>{swiperCard.name}</h4>
                  <p className={Styles.role}>{swiperCard.role}</p>
                </div>
                <div className={Styles.smallCard}>
                  <div className={Styles.smallCardIndide}>
                    <img
                      className={Styles.riseImg}
                      src={swiperCard.riseImg}
                      alt="Rise"
                    />
                    <h2>50%</h2>
                  </div>
                  <p className={Styles.increment}>Increment in salary</p>
                </div>
              </div>
              <div className={Styles.contentSection}>
                <p className={Styles.experienceText}>
                  {swiperCard.experienceText}
                </p>
              </div>
              <div className={Styles.downSection}>
                <div className={Styles.roleCard1}>
                  <p className={Styles.roleText}>{swiperCard.firstRole}</p>
                  <img
                    className={Styles.companyImg}
                    src={swiperCard.companyFirstRoleImg}
                    alt="Company"
                  />
                </div>
                <img
                  className={Styles.arrowImg}
                  src="/lp/images/DS-new-page/Arrow.webp"
                  alt="Arrow"
                />
                <div className={Styles.roleCard2}>
                  <p className={Styles.roleText}>{swiperCard.secondRole}</p>
                  <img
                    className={Styles.companyImg}
                    src={swiperCard.companySecondRoleImg}
                    alt="Company"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CareersTransformed;
