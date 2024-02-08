import dynamic from "next/dynamic";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const FaqsSection = dynamic(
  () => import("@/components/FaqsSection/FaqsSection")
);
const CourseDetails = dynamic(
  () => import("@/components/CourseDetails/CourseDetails")
);
import VideoOne from "@/components/VideoSection/VideoOne";
import SkillDetailSection from "@/components/SkillDetailSection/SkillDetailSection";
import FeesDetails from "@/components/SkillDetailSection/FeesDetails";
import CourseBenefits from "@/components/CourseBenefits/CourseBenefits";

const ToolsCovered = dynamic(
  () => import("@/components/ToolsCovered/ToolsCovered")
);
import React, { useState, useEffect } from "react";

const CourseCurriculum = dynamic(
  () => import("@/components/CourseCurriculum/CourseCurriculum")
);

const JoinReasons = dynamic(
  () => import("@/components/JoinReasons/JoinReasons")
);

const FeatureSeven = dynamic(
  () => import("@/components/FeaturesSection/FeatureSeven")
);

import { useRouter } from "next/router";
import { brochureDetails, courseData } from "@/data/course";
import _ from "lodash";
import { urlInfo } from "@/components/config/helper";
import { programBaseUrl } from "@/components/config/constant";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";

import StickyBar from "@/components/StickyFooter/Sticky";
import PageBanner from "@/components/BannerSection/PageBanner";
import { allCourseList } from "@/data/courseData";
import CourseCertificate from "@/components/CourseCertificate/CourseCertificate";
import { Modal } from "react-bootstrap";
import ModalPopup from "@/components/Modal/ModalPopup";
import WhayTheySay from "@/components/whatTheySay/whatTheySay";
import videoTestimonialData from "@/data/videoTestimonial";
import ExploreTheCourses from "@/components/HomePageNew/exploreTheCouses/ExploreTheCourses";
import CareersTransformed from "@/components/HomePageNew/careersTransformed/CareersTransformed";
import CertificationDR from "@/components/HomePageNew/certificationDR/CertificationDR";
import PopupForm from "@/components/HomePageNew/popupForm/PopupForm";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/HomePageNew/faq/Faq";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import BannerWithVideo from "@/components/HomePageNew/Banner/BannerWithVideo/BannerWithVideo";
import BreadcrumbsDR from "@/components/HomePageNew/breadcrumbsDR/breadcrumbsDR";
import CourseBenefitsCard from "@/components/HomePageNew/courseBenefitsCard/CourseBenefitsCard";
import YoutubeVidioPopup from "@/components/HomePageNew/YoutubeVidioPopup/YoutubeVidioPopup";

const CourseCurriculumTwo = dynamic(
  () => import("@/components/CourseCurriculum/CourseCurriculumTwo")
);

const DigitalMarketing = (props: any) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isYoutubePopup, setIsisYoutubePopup] = useState(false);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState("");

  const courseId: any = router?.query?.id;

  const coursePriceDetails = _.filter(
    allCourseList,
    (item) => item.id === parseInt(courseId)
  );

  const parentCourse = _.filter(
    allCourseList,
    (item) => item.parent_id === null
  );

  const allContent: any = courseData;
  const code = coursePriceDetails[0]?.code;
  const courseDetails: any = allContent[code];

  const brochureName: any = brochureDetails[code];

  const filterData = _.find(
    parentCourse,
    (item) =>
      item?.parent_id === null &&
      item?.mode_id === 1 &&
      item?.isAddon === false &&
      item?.id === coursePriceDetails[0]?.parent_id
  );

  const parentToParentName = () => {
    let result = "";
    if (filterData?.name) {
      result = filterData?.name;
    }
    return result;
  };
  parentToParentName();

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

      <Schemas type={Constants.course} data={filterData ? filterData : {}} />
      <Style />
      <HeaderOne pageTitle={props.course} />

      <MobileMenu />
      <SearchPopup />
      <BreadcrumbsDR
        title={router?.query?.course?.toString().replace("-", " ")}
        parent="All courses"
        parentHref="/all-courses"
        parentToParent={parentToParentName()}
        parentToParentHref={`/${programBaseUrl}/${urlInfo(
          parentToParentName()
        )}`}
      />
      {/* <BannerWithVideo
        page={router?.query?.course?.toString()}
        handleEnrollButtonVidio={(videoLink) =>
          YoutubePopupButtonClick(videoLink)
        }
        handleEnrollButtonClick={handleEnrollButtonClick}
      /> */}
      {/* <CourseBenefitsCard
        page={router?.query?.course?.toString()}
        handleEnrollButtonClick={handleEnrollButtonClick}
      /> */}

      {/* {courseDetails && (
        <>

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

        
        </>
      )} */}

      {/* <BlogSection /> */}
      {/* <Faq /> */}
      {/* <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} /> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { id, course } = context.query;
  return { props: { course } };
}
export default DigitalMarketing;
