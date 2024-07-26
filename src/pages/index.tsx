import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import HomeSliderBanner from "@/components/NewComponents/homeSliderBanner/HomeSliderBanner";

const StudentYoutubeVideos = dynamic(
  () =>
    import(
      "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos"
    ),
  { ssr: false }
);
const UspSection = dynamic(
  () => import("@/components/NewComponents/uspSection/UspSection"),
  { ssr: false }
);
const AboutUs = dynamic(
  () => import("@/components/NewComponents/about/AboutUs"),
  { ssr: false }
);
const AdmitsCompanies = dynamic(
  () => import("@/components/NewComponents/admitsCompanies/AdmitsCompanies"),
  { ssr: false }
);
const StudentReview = dynamic(
  () => import("@/components/NewComponents/studentReview/StudentReview"),
  { ssr: false }
);
const LearnersBenefit = dynamic(
  () => import("@/components/NewComponents/learnersBenefit/LearnersBenefit"),
  { ssr: false }
);
const ConnectContainer = dynamic(
  () => import("@/components/NewComponents/connectContainer/ConnectContainer"),
  { ssr: false }
);
const BlogSection = dynamic(
  () => import("@/components/NewComponents/blogSection/BlogSection"),
  { ssr: false }
);
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR"),
  { ssr: false }
);
const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm"),
  { ssr: false }
);
const FeaturedCourses = dynamic(
  () => import("@/components/NewComponents/featuredCourses/FeaturedCourses"),
  { ssr: false }
);
const AllCoursesSlider = dynamic(
  () => import("@/components/NewComponents/allCoursesSlider/AllCoursesSlider"),
  { ssr: false }
);
const ToolCoveredCard = dynamic(
  () => import("@/components/NewComponents/ToolsCovered/ToolsCovered"),
  { ssr: false }
);
const TalentedComponent = dynamic(
  () =>
    import("@/components/NewComponents/talentedComponent/TalentedComponent"),
  { ssr: false }
);
const LearnersSupport = dynamic(
  () => import("@/components/NewComponents/learnersSupport/LearnersSupport"),
  { ssr: false }
);
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown"),
  { ssr: false }
);

const HomeNew = ({ initialFaqData, homePageData }: any) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

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

  useEffect(() => {
    const updateCityText = (geoipResponse: any) => {
      const countryCode = geoipResponse.country.iso_code.toLowerCase();
      console.log("Country code", countryCode);
      console.log("geo ip respo", geoipResponse.country);
      // if (countryCode === "gb") {
      //   window.location.href = `https://qa.digitalregenesys.com/uk`;
      // }
    };

    const onSuccess = (geoipResponse: any) => {
      updateCityText(geoipResponse);
    };

    const onError = (error: any) => {
      console.log("Error", error);
    };

    if (typeof (window as any).geoip2 !== "undefined") {
      (window as any).geoip2.city(onSuccess, onError);
    } else {
      console.log("Error fetching country");
    }
  }, []);

  return (
    <Layout pageTitle="new-home">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={homePageData?.PopupData}
        />
      )}
      <HeaderOne />
      <MobileMenu />
      <HomeSliderBanner
        homeSliderBannerData={homePageData?.homeSliderBannerData}
      />
      <UspSection UspSectionData={homePageData?.UspSectionData} />
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
      />{" "}
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
