import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import DataSeparatorPages from "src/pages/DataSeparatorPages/DataSeparatorPages";

const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const YoutubeVidioPopup = dynamic(
  () => import("@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup")
);
const BreadcrumbsDR = dynamic(
  () => import("@/components/NewComponents/breadcrumbsDR/breadcrumbsDR")
);
const BannerWithVideo = dynamic(
  () => import("@/components/NewComponents/BannerWithVideo/BannerWithVideo")
);
const CourseBenefitsCard = dynamic(
  () =>
    import("@/components/NewComponents/courseBenefitsCard/CourseBenefitsCard")
);
const ExploreTheCourses = dynamic(
  () => import("@/components/NewComponents/exploreTheCouses/ExploreTheCourses")
);
const CareersTransformed = dynamic(
  () =>
    import("@/components/NewComponents/careersTransformed/CareersTransformed")
);
const CertificationDR = dynamic(
  () => import("@/components/NewComponents/certificationDR/CertificationDR")
);
const BlogSection = dynamic(
  () => import("@/components/NewComponents/blogSection/BlogSection")
);
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"));
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown")
);
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);

const Course = (props: any) => {
  const router = useRouter();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");
  const page = router?.query?.course?.toString();

  const pageName = router?.query?.course
    ?.toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match: string) => match.toUpperCase());

  const handleEnrollButtonClick = (title?: string) => {
    setIsPopupVisible(true);
    setBannerTitle(title ?? "");
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const YoutubePopupButtonClick = (videoLink: string) => {
    setIsisYoutubePopup(true);
    setYoutubeVideoLink(videoLink);
  };

  const handleYoutubePopupClose = () => {
    setIsisYoutubePopup(false);
  };
  // useEffect(() => {
  //   const popupDisplayed = sessionStorage.getItem("popupDisplayed");
  //   if (!popupDisplayed) {
  //     const timeoutModal = setTimeout(() => {
  //       setIsPopupVisible(true);
  //       sessionStorage.setItem("popupDisplayed", "true");
  //     }, 5000);

  //     return () => clearTimeout(timeoutModal);
  //   }
  // }, []);

  const MainCourseData = DataSeparatorPages(page);

  if (!MainCourseData) {
    return null;
  }

  const {
    CourseCode,
    BannerWithVideoData,
    CourseBenefitsCardData,
    ExploreTheCoursesData,
    CertificationDRData,
    BlogSectionData,
    faqSections,
    PopupData,
    ReadMoreData,
  } = MainCourseData;

  return (
    <Layout pageTitle={props?.course} context="multiple-page">
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />

      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
          CourseCode={CourseCode}
          title={bannerTitle}
        />
      )}
      {isYoutubePopup && (
        <YoutubeVidioPopup
          isVisibleVidio={isYoutubePopup}
          youtubeVideoLink={youtubeVideoLink}
          onClose={handleYoutubePopupClose}
        />
      )}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BreadcrumbsDR
        title={
          pageName === "Digital Marketing Course"
            ? "Digital Marketing Course With Gen AI"
            : pageName
        }
        page={
          pageName === "Digital Marketing Course"
            ? "Digital Marketing Course With Gen AI"
            : pageName
        }
        parent="All courses"
        parentHref="/all-courses"
      />
      <BannerWithVideo
        data={BannerWithVideoData}
        handleEnrollButtonClick={handleEnrollButtonClick}
        handleEnrollButtonVidio={(videoLink: string) =>
          YoutubePopupButtonClick(videoLink)
        }
        pageName={pageName}
      />
      <CourseBenefitsCard
        data={CourseBenefitsCardData}
        handleEnrollButtonClick={handleEnrollButtonClick}
        pageName={pageName}
      />
      <ExploreTheCourses
        data={ExploreTheCoursesData}
        handleEnrollButtonClick={handleEnrollButtonClick}
        pageName={pageName}
      />
      <CareersTransformed
        handleEnrollButtonVidio={(videoLink) =>
          YoutubePopupButtonClick(videoLink)
        }
      />
      <CertificationDR
        handleEnrollButtonClick={handleEnrollButtonClick}
        data={CertificationDRData}
      />
      <BlogSection data={BlogSectionData} />
      <Faq data={faqSections} pageName={pageName} />
      {ReadMoreData && <ReadMoreDropDown data={ReadMoreData} />}
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const { id, course } = context.query;

  return { props: { course } };
}
export default Course;
