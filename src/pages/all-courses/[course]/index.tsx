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
import React from "react";
import PartnerOne from "@/components/ExperienceSection/ExperienceSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import PopularTopics from "@/components/PopularTopics/PopularTopics";
// import SubCourseDetails from "@/components/courses/subcourseDetails";
import { useRouter } from "next/router";
import Schemas from "../../../schemas";
import { Constants } from "../../../schemas/data";
import StickyBar from "@/components/StickyFooter/Sticky";
import CareersTransformed from "@/components/HomePageNew/careersTransformed/CareersTransformed";
import ExploreTheCourses from "@/components/HomePageNew/exploreTheCouses/ExploreTheCourses";

const PageBanner = dynamic(
  () => import("@/components/BannerSection/PageBanner")
);
const SubCourseDetails = dynamic(
  () => import("@/components/courses/subcourseDetails")
);

const Course = (props: any) => {
  const router = useRouter();

  const pageName = router?.query?.course?.toString().replace("-", " ");

  return (
    <Layout pageTitle={props?.course}>
      <Style />
      {/* <HeaderOne pageTitle={props?.course} />
      <MobileMenu /> */}
      <SearchPopup />
      <Schemas
        type={Constants.course}
        data={{ name: pageName, description: pageName }}
      />
      <PageBanner
        title={pageName}
        page={pageName}
        parent="All courses"
        parentHref="/all-courses"
      />
      <ExploreTheCourses page={router?.query?.course?.toString()} />
      <CareersTransformed />
      {/* //working */}
      <CourseText page={router?.query?.course?.toString()} />
      <SubCourseDetails page={router?.query?.course?.toString()} />
      <PartnerOne />
      <VideoOne />
      <PopularTopics />
      <CallToSection />
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const { id, course } = context.query;

  return { props: { course } };
}
export default Course;
