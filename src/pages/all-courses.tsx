import React, { useEffect, useState } from "react";
import _ from "lodash";
import dynamic from "next/dynamic";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import AllCoursesPageBanner from "@/components/NewComponents/allCoursesPageBanner/AllCoursesPageBanner";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";

const WhyChooseDR = dynamic(
  () => import("@/components/NewComponents/whychooseDR/WhyChooseDR")
);
const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"));
const StudentReview = dynamic(
  () => import("@/components/NewComponents/studentReview/StudentReview")
);
const CertificationDR = dynamic(
  () => import("@/components/NewComponents/certificationDR/CertificationDR")
);
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));

const FeaturedCourses = dynamic(
  () => import("@/components/NewComponents/featuredCourses/FeaturedCourses")
);
const AllCoursesSlider = dynamic(
  () => import("@/components/NewComponents/allCoursesSlider/AllCoursesSlider")
);
const ReadMoreDropDown = dynamic(
  () => import("@/components/NewComponents/readMore/ReadMoreDropDown")
);

const AllCoursesNew = ({
  initialCourses,
  intitialCoursesCardData,
  initialStudentReviewData,
  initialAllCoursesDynamicData,
}: any) => {
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

  // useEffect(() => {
  //   const popupDisplayed = sessionStorage.getItem("popupDisplayed");
  //   if (!popupDisplayed) {
  //     // Popup hasn't been displayed before
  //     const timeoutModal = setTimeout(() => {
  //       setIsPopupVisible(true);
  //       sessionStorage.setItem("popupDisplayed", "true");
  //     }, 5000);

  //     return () => clearTimeout(timeoutModal);
  //   }
  // }, []);
  const PopupData = {
    PopupDesktop: "/assets/images/allImages/Home-Desktop-Popup.webp",
    PopupMobile: "/assets/images/allImages/Home-Mobile-Popup.webp",
  };
  return (
    <Layout pageTitle="allCourse">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData}
        />
      )}
      <HeaderOne />
      <MobileMenu />
      <AllCoursesPageBanner handleEnrollButtonClick={handleEnrollButtonClick} />
      <WhyChooseDR handleEnrollButtonClick={handleEnrollButtonClick} />
      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
        allCourseList={initialCourses}
        AllCourcesCardData={intitialCoursesCardData}
      />
      <AllCoursesSlider
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background: "none",
        }}
        allCourseList={initialCourses}
        AllCourcesCardData={intitialCoursesCardData}
      />
      <div id="experience-section"></div>

      <CertificationDR
        data={initialAllCoursesDynamicData?.CertificationDRData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <StudentReview
        handleEnrollButtonClick={handleEnrollButtonClick}
        StudentReviewData={initialStudentReviewData}
      />
      <BlogSection data={initialAllCoursesDynamicData?.BlogSectionData} />
      {/* <Faq data={initialAllCoursesDynamicData?.faqSections} /> */}
      <ReadMoreDropDown data={initialAllCoursesDynamicData?.ReadMore} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { allCourseList } = await import("@/data/courseData");
    const { default: AllCourcesCardData } = await import(
      "@/data/newComponentData/commonComponentData/AllCourcesCardData"
    );

    const { default: StudentReviewData } = await import(
      "@/data/newComponentData/commonComponentData/StudentReviewData"
    );
    const { default: AllCoursesDynamicData } = await import(
      "@/data/newComponentData/dynamicComponentData/AllCoursesDynamicData"
    );

    return {
      props: {
        initialCourses: allCourseList,
        intitialCoursesCardData: AllCourcesCardData,
        initialStudentReviewData: StudentReviewData,
        initialAllCoursesDynamicData: AllCoursesDynamicData,
      },
    };
  } catch (error) {
    return {
      props: {
        initialCourses: [],
        intitialCoursesCardData: [],
        initialAllCoursePageBannerData: [],
        initialStudentReviewData: [],
        initialAllCoursesDynamicData: [],
      },
    };
  }
}

export default AllCoursesNew;
