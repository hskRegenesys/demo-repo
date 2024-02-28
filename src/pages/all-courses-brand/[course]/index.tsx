import dynamic from "next/dynamic";
// import PageBanner from "@/components/BannerSection/PageBanner";
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
// import SubCourseDetails from "@/components/courses/subcourseDetails";
import { useRouter } from "next/router";
import _ from "lodash";

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
import MultiplePagesBrandData from "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData";
import FeaturedCourses from "@/components/NewComponents/featuredCourses/FeaturedCourses";
import AllCoursesSlider from "@/components/NewComponents/allCoursesSlider/AllCoursesSlider";
import AboutUs from "@/components/NewComponents/about/AboutUs";
import ToolCoveredCard from "@/components/NewComponents/ToolsCovered/ToolsCovered";
import ToolsCoveredData from "@/data/newComponentData/commonComponentData/ToolsCoveredData";
import TalentedComponent from "@/components/NewComponents/talentedComponent/TalentedComponent";
import OurLocation from "@/components/NewComponents/OurLocation/OurLocation";
import AdmitsCompanies from "@/components/NewComponents/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import LearnersBenefit from "@/components/NewComponents/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/NewComponents/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos";
import LearnersSupport from "@/components/NewComponents/learnersSupport/LearnersSupport";
import BannerWithImg from "@/components/NewComponents/BannerwithImg/BannerwithImg";

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const SubCourseDetails = dynamic(
  () => import("@/components/courses/subcourseDetails")
);

const Course = (props: any) => {
  const router = useRouter();

  const pageName = router?.query?.course
    ?.toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");

  const courseId: any = router?.query?.id;
  const allCourseList: any = [];

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const timeoutModal = setTimeout(() => {
      setIsPopupVisible(true);
    }, 4000);

    return () => clearTimeout(timeoutModal);
  }, []);

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
  const filterData = _.find(
    allCourseList,
    (item: any) =>
      item?.parent_id === null &&
      item?.mode_id === 1 &&
      item?.isAddon === false &&
      item?.id === parseInt(courseId)
  );

  const parentToParentName = () => {
    let result = "";
    if (filterData?.name) {
      result = filterData?.name;
    }
    return result;
  };
  const { multiplePagesDatas } = MainCourseData;
  const isPageDataAvailable =
    multiplePagesDatas && Object.keys(multiplePagesDatas).length > 0;

  return (
    <Layout pageTitle={props?.course}>
      {isPopupVisible && (
        <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
      {isYoutubePopup && (
        <YoutubeVidioPopup
          isVisibleVidio={isYoutubePopup}
          youtubeVideoLink={youtubeVideoLink}
          onClose={handleYoutubePopupClose}
        />
      )}
      <HeaderOne pageTitle={props?.course} />
      <MobileMenu />
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />
      <BreadcrumbsDR title={pageName} page={pageName} />
      <BannerWithImg
        handleEnrollButtonClick={handleEnrollButtonClick}
        data={MultiplePagesBrandData.BannerWithImg}
        pageName={pageName}
      />
      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
      />
      <AllCoursesSlider
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
      />
      <AboutUs handleEnrollButtonClick={handleEnrollButtonClick} />
      <ToolCoveredCard data={ToolsCoveredData} />
      <TalentedComponent handleEnrollButtonClick={handleEnrollButtonClick} />
      <OurLocation />
      <AdmitsCompanies handleEnrollButtonClick={handleEnrollButtonClick} />
      <StudentReview />
      <LearnersBenefit />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={MultiplePagesBrandData.BlogSectionDataHome} />
      <LearnersSupport
        data={MultiplePagesBrandData.LearnersSupportSectionData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <Faq data={MultiplePagesBrandData.faqSections} />
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
