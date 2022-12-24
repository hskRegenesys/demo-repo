import React, { useState, useEffect, useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { courseService } from "src/services";
import _ from "lodash";
import Data from "@/data/AllformsData";

export default function LandingForm(contactform: any) {
  const [courseData, setcourseData] = useState([]);
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
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

  const onSubmit = (data: any) => console.log(data);

  const {
    formState: { errors },
    reset,
    trigger,
    setValue,
    setError,
    register,
    handleSubmit,
  } = useForm();

  return (
    <div className="contact-section ">
      <div className="auto-container">
        <form className="form-box text-start" onSubmit={handleSubmit(onSubmit)}>
 
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  className={`{errors.fullname && "invalid"}`}
                  placeholder="Full Name*"
                  {...register("fullname", {
                    required: "Full Name is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid User Name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("fullname");
                  }}
                />
                {errors.fullname && (
                  <small className="text-danger">
                    {errors.fullname.message}
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <label>Email*</label>
              <div className="form-group">
                <input
                  className={`{errors.email && "invalid"}`}
                  placeholder="Email*"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
            </div>
            </div>

            <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="hidden"
                  {...register("phone", {
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
                    setValue("phone", e);
                  }}
                  className={`${errors.phone && "invalid"}`}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>City*</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className={`form-control ${errors.city && "invalid"}`}
                  {...register("city", {
                    required: "City is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid City Name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("city");
                  }}
                />
                {errors.city && (
                  <small className="text-danger">{errors.city.message}</small>
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
                  {...register("Programme", {
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
                {errors.Programme && (
                  <small className="text-danger">
                    {errors.Programme.message}
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Interested Topic*</label>
                <input
                  className={`{errors.fullname && "invalid"}`}
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
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Select Highest Qualification</label>
                <select
                  className={`select-course form-select{
                    errors.gender &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  {...register("qualification", {
                    required: "Qualification is required",
                  })}
                >
                  <option value="">Highest Qualification</option>
                  {Data.qualification.map((item) => (
                    <option value={item.value}>{item.option}</option>
                  ))}
                </select>
                {errors.qualification && (
                  <small className="text-danger">
                    {errors.qualification.message}
                  </small>
                )}
              </div>
            </div>
            </div>




            {/* <div className="col-md-12 mt-4">
              <div className="form-group">
                <input type="submit" />
              </div>
            </div> */}
    
            <div className="row text-center">
            <a className="theme-btn btn-style-two mt-5" type="submit">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Request a Call</span>
            </a>         
            </div>
        </form>
      </div>
    </div>
  );
}
