import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React, { useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import DataSeparatorPages from "src/pages/DataSeparatorPages/DataSeparatorPages";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import YoutubeVidioPopup from "@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup";
import BreadcrumbsDR from "@/components/NewComponents/breadcrumbsDR/breadcrumbsDR";
import BannerWithVideo from "@/components/NewComponents/BannerWithVideo/BannerWithVideo";
import CourseBenefitsCard from "@/components/NewComponents/courseBenefitsCard/CourseBenefitsCard";
import ExploreTheCourses from "@/components/NewComponents/exploreTheCouses/ExploreTheCourses";
import CareersTransformed from "@/components/NewComponents/careersTransformed/CareersTransformed";
import CertificationDR from "@/components/NewComponents/certificationDR/CertificationDR";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/NewComponents/faq/Faq";
import ReadMoreDropDown from "@/components/NewComponents/readMore/ReadMoreDropDown";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import PopupData from "@/components/NewComponents/popupForm/PopupData";

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
    multiplePagesDatas,
  } = MainCourseData;

  const isPageDataAvailable =
    multiplePagesDatas && Object.keys(multiplePagesDatas).length > 0;

  return (
    <Layout pageTitle={props?.course} context="multiple-page">
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />
      <ToastContainer />

      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData.all}
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
        title={pageName}
        page={pageName}
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
      />
      <ExploreTheCourses
        data={ExploreTheCoursesData}
        handleEnrollButtonClick={handleEnrollButtonClick}
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
      <Faq data={faqSections} />
      {isPageDataAvailable && <ReadMoreDropDown data={multiplePagesDatas} />}
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const { id, course } = context.query;

  return { props: { course } };
}
export default Course;
