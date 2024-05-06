import React, { useState, useEffect } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import HomeSliderBanner from "@/components/NewComponents/homeSliderBanner/HomeSliderBanner";
import Layout from "@/components/Layout/Layout";
import UspSection from "@/components/NewComponents/uspSection/UspSection";
import AboutUs from "@/components/NewComponents/about/AboutUs";
import AdmitsCompanies from "@/components/NewComponents/admitsCompanies/AdmitsCompanies";
import StudentReview from "@/components/NewComponents/studentReview/StudentReview";
import LearnersBenefit from "@/components/NewComponents/learnersBenefit/LearnersBenefit";
import ConnectContainer from "@/components/NewComponents/connectContainer/ConnectContainer";
import StudentYoutubeVideos from "@/components/NewComponents/studentYoutubeVideos/StudentYoutubeVideos";
import BlogSection from "@/components/NewComponents/blogSection/BlogSection";
import Faq from "@/components/NewComponents/faq/Faq";
import FooterDR from "@/components/NewComponents/footerDR/FooterDR";
import PopupForm from "@/components/NewComponents/popupForm/PopupForm";
import MobileMenu from "@/components/Header/MobileMenu";
import FeaturedCourses from "@/components/NewComponents/featuredCourses/FeaturedCourses";
import OurLocation from "@/components/NewComponents/OurLocation/OurLocation";
import HomeDynamicData from "@/data/newComponentData/dynamicComponentData/HomeDynamicData";
import AllCoursesSlider from "@/components/NewComponents/allCoursesSlider/AllCoursesSlider";
import PopupData from "@/components/NewComponents/popupForm/PopupData";
import ToolCoveredCard from "@/components/NewComponents/ToolsCovered/ToolsCovered";
import TalentedComponent from "@/components/NewComponents/talentedComponent/TalentedComponent";
import ToolsCoveredData from "@/data/newComponentData/commonComponentData/ToolsCoveredData";
import LearnersSupport from "@/components/NewComponents/learnersSupport/LearnersSupport";
import MultiplePagesBrandData from "@/data/newComponentData/multiplePagesData/MultiplePagesBrandData";

const HomeNew = () => {
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
      // Popup hasn't been displayed before
      const timeoutModal = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem("popupDisplayed", "true");
      }, 5000);

      return () => clearTimeout(timeoutModal);
    }
  }, []);

  return (
    <Layout pageTitle="new-home">
      {isPopupVisible && (
        <PopupForm
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          popupData={PopupData.all}
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
      <StudentReview handleEnrollButtonClick={handleEnrollButtonClick} />
      <LearnersBenefit />
      <ConnectContainer onFormSubmit={() => {}} />
      <StudentYoutubeVideos />
      <BlogSection data={MultiplePagesBrandData.BlogSectionDataHome} />
      <LearnersSupport
        data={MultiplePagesBrandData.LearnersSupportSectionData}
        handleEnrollButtonClick={handleEnrollButtonClick}
      />
      <Faq data={MultiplePagesBrandData.faqSections} />
      <FooterDR handleEnrollButtonClick={handleEnrollButtonClick} />
    </Layout>
  );
};

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
// import PopupData from "@/components/NewComponents/popupForm/PopupData";

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
