import React, { useState, useEffect, useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { courseService } from "src/services";
import _ from "lodash";
import Data from "@/data/AllformsData";
import { leadService } from "src/services";

export default function LandingForm(contactform: any) {
  const [courseData, setcourseData] = useState([]);

  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };

  const onSubmit = (data: any) => {
    const current = new Date();
    data.page_url = window.location.href;

    (data.zapUrl = process.env.LEADS_API_BASE_URL + "/leads"),
      (data.highestQualification = "");
    data.interestedTopic = "";
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    if (date) {
      data.date = date;
    }
    router.push("/thankYou");
    const result = leadService.saveLead(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let courses: any = [];

  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }
  const hookForm: any = useForm();
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_content } = router.query;
  const {
    formState: { errors },
    reset,
    trigger,
    setValue,
    setError,
    register,
    handleSubmit,
  } = hookForm;

  return (
    <div className="contact-section ">
      <div className="auto-container">
        <form className="form-box text-start" onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  className={`{errors.Name && "invalid"}`}
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
                  <small className="text-danger">{errors?.Name?.message}</small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <label>Email*</label>
              <div className="form-group">
                <input
                  className={`{errors.Email && "invalid"}`}
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
                {errors.Email && (
                  <small className="text-danger">{errors.Email.message}</small>
                )}
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group position-relative">
                <label>Phone</label>
                <input
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
                  defaultCountry="ZA"
                  placeholder="Select Country Code*"
                  onChange={(e) => {
                    setValue("Phone", e);
                  }}
                  className={`${errors.Phone && "invalid"}`}
                />
                {errors.Phone && (
                  <small className="text-danger">{errors.Phone.message}</small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>City*</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className={`${errors.City && "invalid"}`}
                  {...register("city", {
                    required: "City is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid City Name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("City");
                  }}
                />
                {errors.City && (
                  <small className="text-danger">{errors.City.message}</small>
                )}
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Course you are looking for*</label>
                <select
                  className={`select-course form-select{
                    errors.gender &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  {...register("interested_topic", {
                    required: "Course is required",
                  })}
                >
                  <option value="" disabled selected>
                    Course you are looking for *
                  </option>

                  {courses.map((val: any) => {
                    return (
                      <option key={val.id} value={val.name}>
                        {val.name}
                      </option>
                    );
                  })}
                </select>
                {errors.interested_topic && (
                  <small className="text-danger">
                    {errors.interested_topic.message}
                  </small>
                )}
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="form-group">
                <label>Interested Topic*</label>
                <input
                  className={`{errors.Name && "invalid"}`}
                  placeholder="Full Name*"
                  {...register("topic", {
                    required: "Full Name is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid User Name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("topic");
                  }}
                />
                {errors.topic && (
                  <small className="text-danger">{errors.topic.message}</small>
                )}
              </div>
            </div> */}
            <div className="col-md-6">
              <div className="form-group">
                <label>Select Highest Qualification</label>
                <select
                  className={`select-course form-select{
                    errors.gender &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  {...register("highest_qualification", {
                    required: "Qualification is required",
                  })}
                >
                  <option value="">Highest Qualification</option>
                  {Data.qualification.map((item) => (
                    <option value={item.value}>{item.option}</option>
                  ))}
                </select>
                {errors.highest_qualification && (
                  <small className="text-danger">
                    {errors.highest_qualification.message}
                  </small>
                )}
              </div>
            </div>
          </div>

          <div className="row text-center">
            <button className="theme-btn btn-style-two mt-5" type="submit">
              <i className="btn-curve"></i>
              <span className="btn-title">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}