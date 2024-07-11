import React from "react";
import Styles from "./allCoursesPageBanner.module.css";
import allCoursesPageBannerData from "../../../data/newComponentData/commonComponentData/allCoursesPageBannerData";
import Image from "next/image";
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
    <div className={Styles.bannerContainer} onClick={handleEnrollButtonClick}>
      <div className={Styles.bannerImageDesktop}>
        <Image
          src={DesktopBannerImg}
          alt="Banner"
          width={1440}
          height={580}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          unoptimized
          priority
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          loading="eager"
        />
      </div>
      <div className={Styles.bannerImageMobile}>
        <Image
          src={MobileBannerImg}
          alt="Banner"
          width={360}
          height={524}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          unoptimized
          priority
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          loading="eager"
        />
      </div>
      <h1 className={Styles.HeadTag}>Explore Online Courses </h1>
      {/* <div className={Styles.bannerTextContainer}>
        <h1 className={Styles.headingText}>{HeadingText}</h1>
        <p className={Styles.paragraphText1}>{ParagraphTextDesktop}</p>
        <p className={Styles.paragraphText2}>{ParagraphTextMobile}</p>

        <button className={Styles.button} onClick={handleEnrollButtonClick}>
          {ButtonText}
        </button>
      </div> */}
    </div>
  );
};

export default AllCoursesPageBanner;
