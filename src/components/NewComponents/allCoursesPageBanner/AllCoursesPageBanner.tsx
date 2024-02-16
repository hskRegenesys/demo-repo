import React from "react";
import Styles from "./allCoursesPageBanner.module.css";
import allCoursesPageBannerData from "../../../data/newComponentData/commonComponentData/allCoursesPageBannerData";

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
    ParagraphTextDesktop,
    ButtonText,
    ParagraphTextMobile,
  } = allCoursesPageBannerData;

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
        <p className={Styles.paragraphText1}>{ParagraphTextDesktop}</p>
        <p className={Styles.paragraphText2}>{ParagraphTextMobile}</p>

        <button className={Styles.button} onClick={handleEnrollButtonClick}>
          {ButtonText}
        </button>
      </div>
    </div>
  );
};

export default AllCoursesPageBanner;
