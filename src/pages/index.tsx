import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";

import _ from "lodash";
import HomeSliderBanner from "@/components/NewComponents/homeSliderBanner/HomeSliderBanner";

const UspSection = dynamic(
  () => import("@/components/NewComponents/uspSection/UspSection")
);
const AboutUs = dynamic(
  () => import("@/components/NewComponents/about/AboutUs")
);
const AdmitsCompanies = dynamic(
  () => import("@/components/NewComponents/admitsCompanies/AdmitsCompanies")
);
const StudentReview = dynamic(
  () => import("@/components/NewComponents/studentReview/StudentReview")
);
const LearnersBenefit = dynamic(
  () => import("@/components/NewComponents/learnersBenefit/LearnersBenefit")
);
const ConnectContainer = dynamic(
  () => import("@/components/NewComponents/connectContainer/ConnectContainer")
);
const StudentYoutubeVideos = dynamic(
  () =>
    import(
      "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos"
    )
);
const BlogSection = dynamic(
  () => import("@/components/NewComponents/blogSection/BlogSection")
);
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"), {
  ssr: false,
});
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);
const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"), {
  ssr: false,
});
const FeaturedCourses = dynamic(
  () => import("@/components/NewComponents/featuredCourses/FeaturedCourses")
);
const OurLocation = dynamic(
  () => import("@/components/NewComponents/OurLocation/OurLocation")
);
const AllCoursesSlider = dynamic(
  () => import("@/components/NewComponents/allCoursesSlider/AllCoursesSlider")
);

const ToolCoveredCard = dynamic(
  () => import("@/components/NewComponents/ToolsCovered/ToolsCovered")
);
const TalentedComponent = dynamic(
  () => import("@/components/NewComponents/talentedComponent/TalentedComponent")
);
const LearnersSupport = dynamic(
  () => import("@/components/NewComponents/learnersSupport/LearnersSupport")
);
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown")
);

const HomeNew = ({ initialFaqData, homePageData }: any) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
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
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience-section");
      if (experienceSection) {
        const { top } = experienceSection.getBoundingClientRect();
        if (top < window.innerHeight * 0.5) {
          setIsPopupVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const PopupData = {
    PopupDesktop: "Images/Popup/Home-Desktop-Popup.webp",
    PopupMobile: "Images/Popup/Home-Mobile-Popup.webp",
  };

  return (
    <Layout pageTitle="new-home">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
        />
      )}
      <HeaderOne />
      <MobileMenu />
      <HomeSliderBanner
        onFormSubmit={() => {}}
        homeSliderBannerData={homePageData?.homeSliderBannerData}
      />
      <UspSection />
      <AdmitsCompanies
        handleEnrollButtonClick={handleEnrollButtonClick}
        AdmiteCompaniesData={homePageData?.AdmiteCompaniesData}
      />
      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        // style={{
        //   background:
        //     "linear-gradient(180deg, #f2fef6 0%, rgba(255, 255, 255, 0) 100%)",
        // }}
        allCourseList={homePageData?.allCourseList}
        AllCourcesCardData={homePageData?.AllCourcesCardData}
      />
      <AllCoursesSlider
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
        allCourseList={homePageData?.allCourseList}
        AllCourcesCardData={homePageData?.AllCourcesCardData}
      />
      <div id="experience-section"></div>

      <AboutUs handleEnrollButtonClick={handleEnrollButtonClick} />
      <ToolCoveredCard data={homePageData?.ToolsCoveredData} />
      <TalentedComponent
        handleEnrollButtonClick={handleEnrollButtonClick}
        FacultyData={homePageData?.FacultyData}
      />
      <OurLocation />

      <StudentReview
        handleEnrollButtonClick={handleEnrollButtonClick}
        StudentReviewData={homePageData?.StudentReviewData}
      />
      <LearnersBenefit
        LearnersBenefitData={homePageData?.LearnersBenefitData}
      />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={homePageData?.BlogSectionDataHome} />
      <LearnersSupport
        data={homePageData?.LearnersSupportSectionData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      {/* <Faq data={initialFaqData} /> */}
      <ReadMoreDropDown data={homePageData?.AllCoursesDynamicData?.ReadMore} />

      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { default: HomeDynamicData } = await import(
      "@/data/newComponentData/dynamicComponentData/HomeDynamicData"
    );

    return {
      props: {
        homePageData: HomeDynamicData,
        initialFaqData: HomeDynamicData?.faqSections,
      },
    };
  } catch (error) {
    return {
      props: {
        homePageData: [],
        initialFaqData: [],
      },
    };
  }
}

export default HomeNew;
