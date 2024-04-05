import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { courseService } from "src/services";
import PhoneInput from "react-phone-number-input";
import Data from "@/data/AllformsData";
import _ from "lodash";
import { useRouter } from "next/router";
import ImageModalPopup from "../Modal/ImageModalPopup";
import RequestForm from "../NewComponents/requestForm/RequestForm";

const ApplyNow = (props: any) => {
  const hookForm: any = useForm();
  const [courseData, setcourseData] = useState([]);
  const router = useRouter();
  const url = router?.asPath;
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };

  const onSubmit = (data: any) => {
    console.log("form data", data);
  };

  useEffect(() => {
    getData();
  }, []);

  let courses: any = [];

  // if (courseData.length) {
  //   courses = _.filter(
  //     courseData,
  //     (item: any) =>
  //       item?.parent_id === null &&
  //       item?.isAddon === false &&
  //       item?.mode_id === 1
  //   );
  // }
  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1 &&
        (url === "/all-courses/software-development-course"
          ? item?.id === 229
          : item?.id !== 229)
    );
  }
  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1 &&
        (url === "/all-courses/software-development-course"
          ? item?.id === 229
          : item?.id !== 229)
    );
  }
  const {
    formState: { errors },
    trigger,
    setValue,
    register,
    handleSubmit,
    watch,
  } = hookForm;
  const selectedCourse = watch("Programme_Of_Interest");

  return (
    <div
      className={`text-center p-3 rounded ${
        props.isBlack ? " bg-light-green" : " bg-light-green"
      }`}
    >
      {/* <h6 style={{ color: `${props.isBlack ? "yellow" : "black"}` }}>
        Apply Now
      </h6> */}
      <RequestForm onFormSubmit={() => {}} title="Apply Now" />
    </div>
  );
};

export default ApplyNow;
