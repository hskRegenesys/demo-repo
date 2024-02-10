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
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import StickyBar from "@/components/StickyFooter/Sticky";
import CareersTransformed from "@/components/NewComponents/careersTransformed/CareersTransformed";
import ExploreTheCourses from "@/components/NewComponents/exploreTheCouses/ExploreTheCourses";
import RelatedCourses from "@/components/HomePageNew/All-Cources/Related Courses/RelatedCourses";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/NewComponents/faq/Faq";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import CertificationDR from "@/components/NewComponents/certificationDR/CertificationDR";
import BannerComponent from "@/components/HomePageNew/Banner/BannerwithImg/BannerwithImg";
import { Breadcrumbs } from "@mui/material";
import CourseBenefitsCard from "@/components/NewComponents/courseBenefitsCard/CourseBenefitsCard";
import YoutubeVidioPopup from "@/components/NewComponents/YoutubeVidioPopup/YoutubeVidioPopup";

const BreadcrumbsDR = dynamic(
  () => import("@/components/NewComponents/breadcrumbsDR/breadcrumbsDR")
);
const SubCourseDetails = dynamic(
  () => import("@/components/courses/subcourseDetails")
);

const Course = (props: any) => {
  const router = useRouter();

  const pageName = router?.query?.course?.toString().replace("-", " ");

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");

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

  return (
    <>
      {/* {isPopupVisible && (
        <PopupForm isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
      {isYoutubePopup && (
        <YoutubeVidioPopup
          isVisibleVidio={isYoutubePopup}
          youtubeVideoLink={youtubeVideoLink}
          onClose={handleYoutubePopupClose}
        />
      )} */}
      {/* <Style /> */}
      {/* <HeaderOne pageTitle={props?.course} />
       */}

      {/* <HeaderOne />
      <BreadcrumbsDR
        title={pageName}
        page={pageName}
        parent="All courses"
        parentHref="/all-courses"
      /> */}
      {/* <BannerComponent
        page={router?.query?.course?.toString()}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <CourseBenefitsCard
        page={router?.query?.course?.toString()}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <ExploreTheCourses
        page={router?.query?.course?.toString()}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <CareersTransformed
        handleEnrollButtonVidio={(videoLink) =>
          YoutubePopupButtonClick(videoLink)
        }
      />
      <CertificationDR
        handleEnrollButtonClick={handleEnrollButtonClick}
        page={router?.query?.course?.toString()}
      />
      <RelatedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        page={router?.query?.course?.toString()}
      />
      <BlogSection />
      <Faq />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} /> */}
    </>
  );
};
export async function getServerSideProps(context: any) {
  const { id, course } = context.query;

  return { props: { course } };
}
export default Course;
