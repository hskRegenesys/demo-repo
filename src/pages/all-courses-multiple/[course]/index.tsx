import dynamic from "next/dynamic";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import CourseText from "@/components/courses/coursesText";
import React, { useEffect, useState } from "react";
import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
import { useRouter } from "next/router";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import StickyBar from "@/components/StickyFooter/Sticky";
import DataSeparatorPages from "src/pages/DataSeparatorPages/DataSeparatorPages";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import YoutubeVidioPopup from "@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup";
import BreadcrumbsDR from "@/components/NewComponents/breadcrumbsDR/breadcrumbsDR";
import { programBaseUrl } from "@/components/config/constant";
import { urlInfo } from "@/components/config/helper";
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

  const pageName = router?.query?.course
    ?.toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match: string) => match.toUpperCase());

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");

  const courseId: any = router?.query?.id;
  const allCourseList: any = [];

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

  const page = router?.query?.course?.toString();

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

  useEffect(() => {
    const popupDisplayed = sessionStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
      // Popup hasn't been displayed before
      const timeoutModal = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem("popupDisplayed", "true");
      }, 5000);

      return () => clearTimeout(timeoutModal);
    }
  }, []);

  return (
    <Layout pageTitle={props?.course} context="multiple-page">
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
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />
      <BreadcrumbsDR title={pageName} page={pageName} />
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
