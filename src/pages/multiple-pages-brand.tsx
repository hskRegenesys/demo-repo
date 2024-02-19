import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import AboutUs from "@/components/NewComponents/about/AboutUs";
import AdmitsCompanies from "@/components/NewComponents/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import LearnersBenefit from "@/components/NewComponents/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/NewComponents/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/NewComponents/faq/Faq";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import _ from "lodash";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import MobileMenu from "@/components/Header/MobileMenu";
import FeaturedCourses from "@/components/NewComponents/featuredCourses/FeaturedCourses";
import OurLocation from "@/components/NewComponents/OurLocation/OurLocation";
import ToolCoveredCard from "@/components/NewComponents/ToolsCovered/ToolsCovered";
import BannerWithImg from "@/components/NewComponents/BannerwithImg/BannerwithImg";
import MultiplePagesBrandData from "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData";
import BreadcrumbsDR from "@/components/NewComponents/breadcrumbsDR/breadcrumbsDR";
import ToolsCoveredData from "@/data/newComponentData/commonComponentData/ToolsCoveredData";
import LearnersSupport from "@/components/NewComponents/learnersSupport/LearnersSupport";
import AllCoursesSlider from "@/components/NewComponents/allCoursesSlider/AllCoursesSlider";
import ReadMoreDropDown from "@/components/NewComponents/readMore/ReadMoreDropDown";
import TalentedComponent from "@/components/NewComponents/talentedComponent/TalentedComponent";
import { Style } from "@mui/icons-material";

const BrandHome = () => {
  const router = useRouter();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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

  return (
    <Layout pageTitle="">
      {isPopupVisible && (
        <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <BreadcrumbsDR title="Brand-page" page="Multiple Pages Brand" />
      <BannerWithImg
        handleEnrollButtonClick={handleEnrollButtonClick}
        data={MultiplePagesBrandData.BannerWithImg}
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
      <TalentedComponent />
      <OurLocation />
      <AdmitsCompanies handleEnrollButtonClick={handleEnrollButtonClick} />
      <StudentReview />
      <LearnersBenefit />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={MultiplePagesBrandData.BlogSectionDataHome} />
      <LearnersSupport
        data={MultiplePagesBrandData.LearnersSupportSectionData}
      />
      <Faq data={MultiplePagesBrandData.faqSections} />
      <ReadMoreDropDown data={MultiplePagesBrandData.ReadMoreBrandHome} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export default BrandHome;
