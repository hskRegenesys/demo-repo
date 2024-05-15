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
const Faq = dynamic(() => import("@/components/NewComponents/faq/Faq"));
const FooterDR = dynamic(
  () => import("@/components/NewComponents/footerDR/FooterDR")
);
const PopupForm = dynamic(
  () => import("@/components/NewComponents/popupForm/PopupForm")
);
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
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

const HomeNew = ({
  initialCourses,
  intitialCoursesCardData,
  initialStudentReviewData,
  initialMultiplePagesBrandData,
  initialAllCoursesDynamicData,
  initialToolsCoveredData,
  initialAdmiteCompaniesData,
  initialLearnersBenefitData,
  initialFacultyData,
}: any) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleEnrollButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const popupDisplayed = sessionStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
      const timeoutModal = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem("popupDisplayed", "true");
      }, 5000);

      return () => clearTimeout(timeoutModal);
    }
  }, []);

  const PopupData = {
    PopupDesktop: "Images/Popup/Home-Desktop-Popup.png",
    PopupMobile: "Images/Popup/Home-Mobile-Popup.png",
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
      <HomeSliderBanner onFormSubmit={() => {}} />
      <UspSection />

      <FeaturedCourses
        handleEnrollButtonClick={handleEnrollButtonClick}
        style={{
          background:
            "linear-gradient(180deg, #f2fef6 0%, rgba(255, 255, 255, 0) 100%)",
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
      <AboutUs handleEnrollButtonClick={handleEnrollButtonClick} />
      <ToolCoveredCard data={initialToolsCoveredData} />
      <TalentedComponent
        handleEnrollButtonClick={handleEnrollButtonClick}
        FacultyData={initialFacultyData}
      />
      <OurLocation />
      <AdmitsCompanies
        handleEnrollButtonClick={handleEnrollButtonClick}
        AdmiteCompaniesData={initialAdmiteCompaniesData}
      />
      <StudentReview
        handleEnrollButtonClick={handleEnrollButtonClick}
        StudentReviewData={initialStudentReviewData}
      />
      <LearnersBenefit LearnersBenefitData={initialLearnersBenefitData} />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={initialMultiplePagesBrandData?.BlogSectionDataHome} />
      <LearnersSupport
        data={initialMultiplePagesBrandData?.LearnersSupportSectionData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <Faq data={initialMultiplePagesBrandData?.faqSections} />
      <ReadMoreDropDown data={initialAllCoursesDynamicData?.ReadMore} />

      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { allCourseList } = await import("@/data/courseData");
    const { default: videoTestimonialData } = await import(
      "@/data/videoTestimonial"
    );
    const { default: AllCourcesCardData } = await import(
      "@/data/newComponentData/commonComponentData/AllCourcesCardData"
    );
    const { default: StudentReviewData } = await import(
      "@/data/newComponentData/commonComponentData/StudentReviewData"
    );
    const { default: MultiplePagesBrandData } = await import(
      "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData"
    );
    const { default: AllCoursesDynamicData } = await import(
      "@/data/newComponentData/dynamicComponentData/AllCoursesDynamicData"
    );
    const { default: ToolsCoveredData } = await import(
      "@/data/newComponentData/commonComponentData/ToolsCoveredData"
    );
    const { default: AdmiteCompaniesData } = await import(
      "@/data/newComponentData/commonComponentData/AdmiteCompaniesData"
    );

    const { default: LearnersBenefitData } = await import(
      "@/data/newComponentData/commonComponentData/LearnersBenefitData"
    );

    const { default: FacultyData } = await import(
      "@/data/newComponentData/commonComponentData/FacultyData"
    );

    return {
      props: {
        initialCourses: allCourseList,
        initialVideoTestimonialData: videoTestimonialData,
        intitialCoursesCardData: AllCourcesCardData,
        initialStudentReviewData: StudentReviewData,
        initialMultiplePagesBrandData: MultiplePagesBrandData,
        initialAllCoursesDynamicData: AllCoursesDynamicData,
        initialToolsCoveredData: ToolsCoveredData,
        initialAdmiteCompaniesData: AdmiteCompaniesData,
        initialLearnersBenefitData: LearnersBenefitData,
        initialFacultyData: FacultyData,
      },
    };
  } catch (error) {
    return {
      props: {
        initialCourses: [],
        initialVideoTestimonialData: [],
        initialAllCoursePageBannerData: [],
        initialStudentReviewData: [],
        initialMultiplePagesBrandData: [],
        initialAllCoursesDynamicData: [],
        initialToolsCoveredData: [],
        initialAdmiteCompaniesData: [],
        initialLearnersBenefitData: [],
        initialFacultyData: [],
      },
    };
  }
}

export default HomeNew;

// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// // import HomeBanner from "@/components/HomeBanner/HomeBanner";
// // import HomeCourses from "@/components/HomeCourses/HomeCourses";
// import HeaderOne from "@/components/Header/HeaderOne";
// import MobileMenu from "@/components/Header/MobileMenu";
// // import CallToSection from "@/components/HomeSkillDescription/CallToSection";
// // import HomeSkillDescription from "@/components/HomeSkillDescription/HomeSkillDescription";
// // import Layout from "@/components/Layout/Layout";
// // import MainFooter from "@/components/MainFooter/MainFooter";
// import Style from "@/components/Reuseable/Style";
// // import SearchPopup from "@/components/SearchPopup/SearchPopup";
// // import StudentPlacement from "@/components/StudentPlacement/StudentPlacement";
// // import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
// // import PopularTopics from "@/components/PopularTopics/PopularTopics";
// // import TestimonialsStudent from "@/components/TestimonialsStudent/TestimonialsStudent";
// // import TrendingSection from "@/components/TrendingSection/TrendingSection";
// // import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
// import _ from "lodash";
// import Schemas from "../schemas";
// import { Constants } from "src/schemas/data";
// import StickyBar from "@/components/StickyFooter/Sticky";
// import { allCourseList } from "@/data/courseData";

// // import ImageModalPopup from "@/components/Modal/ImageModalPopup";
// // import ThankYouPopup from "@/components/Modal/ThankYouPopup";
// import GoogleMap from "@/components/GoogleMap/GoogleMap";
// import TestimonialsVideo from "@/components/TestimonialsVideo/testimonialsVideo";
// import videoTestimonialData from "@/data/videoTestimonial";
// import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ExperienceSection = dynamic(
//   () => import("@/components/ExperienceSection/ExperienceSection")
// );
// const TrendingSection = dynamic(
//   () => import("@/components/TrendingSection/TrendingSection")
// );
// const TestimonialsStudent = dynamic(
//   () => import("@/components/TestimonialsStudent/TestimonialsStudent")
// );
// const PopularTopics = dynamic(
//   () => import("@/components/PopularTopics/PopularTopics")
// );
// const WhyChooseUs = dynamic(
//   () => import("@/components/WhyChooseUs/WhyChooseUs")
// );
// const StudentPlacement = dynamic(
//   () => import("@/components/StudentPlacement/StudentPlacement")
// );
// const SearchPopup = dynamic(
//   () => import("@/components/SearchPopup/SearchPopup")
// );
// const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
// const Layout = dynamic(() => import("@/components/Layout/Layout"));
// const HomeSkillDescription = dynamic(
//   () => import("@/components/HomeSkillDescription/HomeSkillDescription")
// );
// const CallToSection = dynamic(
//   () => import("@/components/HomeSkillDescription/CallToSection")
// );
// // const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
// const HomeBanner = dynamic(() => import("@/components/HomeBanner/HomeBanner"));
// const HomeCourses = dynamic(
//   () => import("@/components/HomeCourses/HomeCourses")
// );

// const Home2 = () => {
//   const [show, setShow] = useState(false);
//   const [thankYouShow, setThankYouShow] = useState<boolean>(false);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   // const [courses, setCourses] = useState(initialCourses);
//   // const [videoTestimonialData, setVideoTestimonialData] = useState(
//   //   initialVideoTestimonialData
//   // );

//   let courses: any = [];

//   if (allCourseList?.length) {
//     courses = _.filter(
//       allCourseList,
//       (item: any) => item?.isAddon === false && item?.mode_id === 1
//     );
//   }

//   useEffect(() => {
//     const timeoutModal = setTimeout(() => {
//       setShow(true);
//     }, 4000);

//     return () => clearTimeout(timeoutModal);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const experienceSection = document.getElementById("experience-section");
//       if (experienceSection) {
//         const { top } = experienceSection.getBoundingClientRect();
//         if (top < window.innerHeight * 0.5) {
//           setIsPopupVisible(true);
//           window.removeEventListener("scroll", handleScroll);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handlePopupClose = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <Layout pageTitle="home">
//       <Schemas type={Constants.home} />
//       <Style />
//       <HeaderOne pageTitle="home" />
//       <MobileMenu />
//       <SearchPopup />
//       <HomeBanner />
//       <StudentPlacement />
//       <HomeSkillDescription />
//       <TrendingSection />
//       <TestimonialsVideo videoDetails={videoTestimonialData} />
//       <GoogleMap />
//       <HomeCourses courses={courses} />
//       <div id="experience-section"></div>
//       <ExperienceSection />

//       <WhyChooseUs />
//       <PopularTopics />
//       <TestimonialsStudent />

//       <CallToSection />
//       <MainFooter normalPadding={false} />
//       <StickyBar />
//       {/* <div id="tawk_5825dfc218d9f16af02abeea"></div>; */}
//       {/* <Modal show={show} onHide={() => setShow(false)}>
//         <ImageModalPopup bgImage="DR-website-popup-1.webp" setShows={setShow} />
//       </Modal> */}

//       {isPopupVisible && (
//         <PopupForm
//           isVisible={isPopupVisible}
//           onClose={handlePopupClose}
//           popupData={PopupData.homePage}
//         />
//       )}

//       {/* <Modal show={thankYouShow}>
//         <ThankYouPopup setShows={setThankYouShow} />
//       </Modal> */}
//       <ToastContainer />
//     </Layout>
//   );
// };

// // export async function getStaticProps() {
// //   try {
// //     const { allCourseList } = await import("@/data/courseData");
// //     const { default: videoTestimonialData } = await import(
// //       "@/data/videoTestimonial"
// //     );

// //     let initialCourses: any = [];

// //     if (allCourseList?.length) {
// //       initialCourses = _.filter(
// //         allCourseList,
// //         (item: any) => item?.isAddon === false && item?.mode_id === 1
// //       );
// //     }
// //     return {
// //       props: {
// //         initialCourses,
// //         initialVideoTestimonialData: videoTestimonialData,
// //       },
// //     };
// //   } catch (error) {
// //     return {
// //       props: {
// //         initialCourses: [],
// //         initialVideoTestimonialData: [],
// //       },
// //     };
// //   }
// // }

// export default Home2;
