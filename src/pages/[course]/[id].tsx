import PageBanner from "@/components/BannerSection/PageBanner";
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
import React, { useEffect, useState } from "react";
import CourseCurriculum from "@/components/CourseCurriculum/CourseCurriculum";
import JoinReasons from "@/components/JoinReasons/JoinReasons";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import { useRouter } from "next/router";
import { courseService } from "src/services";
import { brochureDetails, courseData } from "@/data/course";
import _ from "lodash";

const DigitalMarketing = () => {
  const router = useRouter();
  const courseId = router?.query?.id;
  const [coursePriceDetails, setcoursePrice] = useState<any>([]);
  const [parentCourse, setParentCourse] = useState<any>([]);
  const getData = async () => {
    let courseListResponse = await courseService.allcoursePrice(courseId);
    const parentCourses = await courseService.allParentCourses();
    setParentCourse(parentCourses);
    setcoursePrice(courseListResponse);
  };
  useEffect(() => {
    if (courseId) {
      getData();
    }
  }, [courseId]);
  const allContent: any = courseData;
  const code = coursePriceDetails[0]?.code;
  const courseDetails: any = allContent[code];
  const brochureName: any = brochureDetails[code];

  console.log("allContent--", allContent);
  const parentToParentName = () => {
    let result = "";
    const filterData = _.find(
      parentCourse,
      (item) =>
        item?.parent_id === null &&
        item?.mode_id === 1 &&
        item?.isAddon === false &&
        item?.id === coursePriceDetails[0]?.parent_id
    );
    if (filterData?.name) {
      result = filterData?.name;
    }
    return result;
  };
  parentToParentName();

  return (
    <Layout pageTitle={router?.query?.course}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title={router?.query?.course?.toString().replace("-", " ")}
        parent="All courses"
        parentHref="/all-course"
        parentToParent={parentToParentName()}
        parentToParentHref={`/${parentToParentName()
          ?.toLowerCase()
          .split(" ")
          .join("-")}`}
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
    </Layout>
  );
};

export default DigitalMarketing;
