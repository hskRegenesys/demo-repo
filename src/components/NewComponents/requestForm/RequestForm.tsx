import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import { countryCodeService, courseService, leadService } from "src/services";
import { useRouter } from "next/router";
import { downloadFromBlob } from "@/components/config/helper";
import { allCourseList } from "@/data/courseData";
import Styles from "./requestForm.module.css";
import { brochureDetails } from "@/data/course";

function RequestForm(props: any) {
  const router = useRouter();
  const url = router?.asPath;

  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [btnDisable, setBtnDisable] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  const getCountryCode = async () => {
    let countryData = await countryCodeService.countryDetails();
    setCountryData(countryData);
    countryData ? setIsLoading(false) : setIsLoading(true);

    try {
      const response = await fetch("https://geolocation-db.com/json/");
      const result = await response.json();
      setGeoLocationData(result);

      return result;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getCountryCode();
  }, []);

  const hookForm: any = useForm();

  const { utm_source, utm_medium, utm_campaign, utm_content, id } =
    router.query;

  const {
    formState: { errors },
    reset,
    trigger,
    watch,
    setValue,
    setError,
    register,
    handleSubmit,
  } = hookForm;

  const programmeOfInterest = watch("Programme_Of_Interest");

  const onSubmit = async (data: any, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBtnDisable(true);
    const current = new Date();
    data.page_url = window.location.href;
    data.utm_parameters = window.location.href;
    if (utm_source) data.utm_source = utm_source;
    if (utm_medium) data.utm_medium = utm_medium;
    if (utm_campaign) data.utm_campaign = utm_campaign;
    if (utm_content) data.utm_content = utm_content;
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    if (date) {
      data.date = date;
    }

    // Get the selected course's code
    const selectedCourse = courses.find(
      (course: any) => course.name === data.Programme_Of_Interest
    );
    const brochureName: any = brochureDetails[selectedCourse.code];

    const result = await leadService.saveLead(data);

    if (result?.data && props?.title === "Download Brochure") {
      const response = await courseService.downloadBrochure(brochureName?.name);
      setSubmitted(true);
      toast.success(`Check the ${selectedCourse.name} Course Brochure!`, {
        position: "top-right",
        autoClose: 3000,
        className: Styles.tost,
      });
      props.onFormSubmit();
      reset();
      downloadFromBlob(response?.data, brochureName?.name) == false;
    }
    if (props?.title !== "Download Brochure") {
      props.isWhatsapp
        ? router.push(
            "https://api.whatsapp.com/send?phone=27733502575&text=Hi%20there"
          )
        : setSubmitted(true);
      toast.success(
        `Thank you for applying ${selectedCourse.name}course! We will get back to you.`,
        {
          position: "top-right",
          autoClose: 3000,
          className: Styles.tost,
        }
      );
      props.onFormSubmit();
      reset();
    }
  };

  let courses: any = [];

  // if (allCourseList.length) {
  //   courses = _.filter(
  //     allCourseList,
  //     (item: any) => item?.isAddon === false && item?.mode_id === 1
  //   );
  // }
  // if (allCourseList.length) {
  //   courses = _.filter(
  //     allCourseList,
  //     (item: any) =>
  //       item?.parent_id === null &&
  //       item?.isAddon === false &&
  //       item?.mode_id === 1
  //   );
  // }
  if (allCourseList.length) {
    courses = _.filter(
      allCourseList,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1 &&
        (url === "/all-courses/software-development-course"
          ? item?.id === 229
          : item?.id !== 229)
    );
  }

  useEffect(() => {
    if (id) {
      const filterData = _.find(allCourseList, (item: any) => item?.id === +id);
      // !!filterData?.parentCourse
      //   ? setValue("Programme_Of_Interest", filterData?.parentCourse?.name)
      //   : setValue("Programme_Of_Interest", filterData?.name);
    }
  }, [id]);
  return (
    <div className={Styles.RequestFormStyle}>
      <ToastContainer />

      <form className={Styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.FormCard}>
          <strong className={Styles.Title}>
            {" "}
            {props.title ? props.title : "Request a call"}
          </strong>
          <div className={Styles.formContentInput}>
            <div className={Styles.formContent}>
              <div className={Styles.inputLabelContainer}>
                <input
                  className={`${errors?.Name && "invalid"} ${Styles.inputForm}`}
                  placeholder="Full Name*"
                  {...register("Name", {
                    required: "Full Name is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid User Name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("Name");
                  }}
                />
                {errors?.Name && (
                  <small className={Styles.smallText}>
                    {errors?.Name?.message}
                  </small>
                )}
              </div>
            </div>
            <div className={Styles.inputLabelContainer}>
              <div className={Styles.inputFormContainer}>
                <input
                  className={`${errors?.Email && "invalid"} ${
                    Styles.inputForm
                  }`}
                  placeholder="Email*"
                  {...register("Email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("Email");
                  }}
                />
                {errors?.Email && (
                  <small className={Styles.smallText}>
                    {errors?.Email?.message}
                  </small>
                )}
              </div>
            </div>
            <div className={Styles.inputLabelContainer}>
              <div className={Styles.formGroupPositionRelative}>
                <input
                  className={Styles.inputForm}
                  type="hidden"
                  {...register("Phone", {
                    maxLength: {
                      value: 16,
                      message: "Cannot Exceed 10 digits",
                    },
                    minLength: {
                      value: 12,
                      message: "Valid phone number Required",
                    },
                    required: "Phone is Required",
                  })}
                />
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry={geoLocationData?.country_code}
                  placeholder="Select Country Code*"
                  value={watch("Phone")}
                  onChange={(e) => {
                    setValue("Phone", e);
                    setPhoneNumber(e);
                  }}
                  onBlur={() => {
                    trigger("Phone");
                  }}
                  className={`inputForm ${errors?.Phone && "invalid"} ${
                    Styles.inputForm
                  }`}
                />

                {errors?.Phone && (
                  <small className={Styles.smallText}>
                    {errors?.Phone?.message}
                  </small>
                )}
              </div>
            </div>
            <div className=" ">
              <div className="">
                <select
                  value={programmeOfInterest}
                  className={`select-course form-select${
                    errors?.Programme_Of_Interest &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  } ${Styles.inputForm}`}
                  {...register("Programme_Of_Interest", {
                    required: "Course is required",
                  })}
                >
                  <option value="" disabled selected>
                    Course you are looking for *
                  </option>

                  {courses.map((val: any) => (
                    <option
                      key={val.id}
                      value={val.name}
                      selected={val.code === props.CourseCode}
                    >
                      {val.name}
                    </option>
                  ))}
                </select>
                {errors?.Programme_Of_Interest && (
                  <small className={Styles.smallText}>
                    {errors?.Programme_Of_Interest?.message}
                  </small>
                )}
                {(programmeOfInterest === "Digital Marketing" ||
                  programmeOfInterest === "Design Thinking") && (
                  <small className="text-black">
                    *Learn collaboratively! Apply with 15 people to begin the
                    course
                  </small>
                )}
              </div>
            </div>
          </div>
          <div></div>
          <div className={Styles.buttenContainer}>
            <button
              type="submit"
              className={Styles.FormButton}
              disabled={btnDisable}
            >
              <i className=""></i>
              <span className={Styles.FormButtonText}>Submit</span>
            </button>
          </div>
          <small className={Styles.formFooterText}>
            By submitting this form, you agree to our
            <a href="https://www.digitalregenesys.com/privacy-policy">
              Privacy Policy
            </a>
            .
          </small>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;
