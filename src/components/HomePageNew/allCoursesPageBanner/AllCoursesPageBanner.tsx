import React from "react";
import Styles from "./allCoursesPageBanner.module.css";
import NewHomeData from "../../../data/newHomeData";

interface AllCoursesPageBannerProps {
  handleEnrollButtonClick: () => void;
}

const AllCoursesPageBanner: React.FC<AllCoursesPageBannerProps> = ({
  handleEnrollButtonClick,
}) => {
  const {
    DesktopBannerImg,
    MobileBannerImg,
    HeadingText,
    ParagraphText,
    ButtonText,
  } = NewHomeData.allCoursesPageBannerData;

  return (
    <div className={Styles.bannerContainer}>
      <img
        src={DesktopBannerImg}
        alt="Banner"
        className={Styles.bannerImageDesktop}
      />
      <img
        src={MobileBannerImg}
        alt="Banner"
        className={Styles.bannerImageMobile}
      />

      <div className={Styles.bannerTextContainer}>
        <h1 className={Styles.headingText}>{HeadingText}</h1>
        <p className={Styles.paragraphText}>{ParagraphText}</p>
        <button className={Styles.button} onClick={handleEnrollButtonClick}>
          {ButtonText}
        </button>
      </div>
    </div>
  );
};

export default AllCoursesPageBanner;
