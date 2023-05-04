import dynamic from "next/dynamic";
import CallToSection from "@/components/HomeSkillDescription/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import VideoOne from "@/components/VideoSection/VideoOne";
import SkillDetailSection from "@/components/SkillDetailSection/SkillDetailSection";
import FeesDetails from "@/components/SkillDetailSection/FeesDetails";
import CourseBenefits from "@/components/CourseBenefits/CourseBenefits";
import ToolsCovered from "@/components/ToolsCovered/ToolsCovered";
import React from "react";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";
import JoinReasons from "@/components/JoinReasons/JoinReasons";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
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

const DigitalMarketing = (props: any) => {
  const router = useRouter();

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
  return (
    <Layout pageTitle={props.course} courseId={courseId}>
      <Schemas type={Constants.course} data={filterData ? filterData : {}} />
      <Style />
      <HeaderOne pageTitle={props.course} />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title={router?.query?.course?.toString().replace("-", " ")}
        parent="All courses"
        parentHref="/all-courses"
        parentToParent={parentToParentName()}
        parentToParentHref={`/${programBaseUrl}/${urlInfo(
          parentToParentName()
        )}`}
      />
      {courseDetails && (
        <>
          <CourseDetails
            courseDetails={courseDetails}
            brochureName={brochureName}
          />
          <SkillDetailSection courseDetails={courseDetails} />
          <JoinReasons courseDetails={courseDetails} />
          <ToolsCovered courseDetails={courseDetails} />
          <FeatureSeven courseDetails={courseDetails} />
          <VideoOne courseDetails={courseDetails} />
          <CourseCurriculum courseDetails={courseDetails} />
          <FeesDetails courseDetails={courseDetails} courseId={courseId} />
          <CourseBenefits courseDetails={courseDetails} />
          <FaqsSection courseDetails={courseDetails} />
          <CallToSection />
        </>
      )}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const { id, course } = context.query;
  return { props: { course } };
}
export default DigitalMarketing;
