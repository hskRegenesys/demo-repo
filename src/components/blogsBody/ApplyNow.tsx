import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { courseService } from "src/services";
import PhoneInput from "react-phone-number-input";
import Data from "@/data/AllformsData";
import _ from "lodash";

const ApplyNow = (props: any) => {
  const hookForm: any = useForm();
  const [courseData, setcourseData] = useState([]);

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

  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }

  const {
    formState: { errors },
    trigger,
    setValue,
    register,
    handleSubmit,
  } = hookForm;
  return (
    <div
      className={`text-center p-3 rounded ${
        props.isBlack ? " bg-light-black" : " bg-light-green"
      }`}
    >
      <h6 style={{ color: `${props.isBlack ? "yellow" : "black"}` }}>
        Apply Now
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-2">
          <input
            className={`form-control ${errors.Name && "invalid"}`}
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

        <div className="form-group mt-2">
          <input
            className={`form-control ${errors.Email && "invalid"}`}
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

        <div className="form-group mt-2 position-relative">
          <input
            type="hidden"
            {...register("Phone*", {
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
            className={`blogs-apply-now form-control ${
              errors.Phone && "invalid"
            }`}
          />
          {errors.Phone && (
            <small className="text-danger">{errors.Phone.message}</small>
          )}
        </div>

        <div className="form-group mt-2">
          <input
            type="text"
            placeholder="Enter City*"
            className={`form-control ${errors?.City && "invalid"}`}
            {...register("City", {
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
          {errors?.City && (
            <small className="text-danger">{errors?.City?.message}</small>
          )}
        </div>

        <div className="form-group mt-2">
          <select
            className={`form-control form-select ${
              errors.gender &&
              " focus:border-red-500 focus:ring-red-500 border-red-500"
            }`}
            {...register("Programme_Of_Interest", {
              required: "Course is required",
            })}
          >
            <option value="" disabled selected>
              Course you are looking for *
            </option>

            {Data.allCourses.map((item: any) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              );
            })}
          </select>
          {errors.Programme_Of_Interest && (
            <small className="text-danger">
              {errors.Programme_Of_Interest.message}
            </small>
          )}
        </div>

        <div className="form-group mt-2">
          <select
            className={`form-control form-select ${
              errors.gender &&
              " focus:border-red-500 focus:ring-red-500 border-red-500"
            }`}
            {...register("highest_qualification", {
              required: "Qualification is required",
            })}
          >
            <option value="">Highest Qualification</option>
            {Data.qualification.map((item) => (
              <option key={item.value} value={item.value}>
                {item.option}
              </option>
            ))}
          </select>
          {errors.highest_qualification && (
            <small className="text-danger">
              {errors.highest_qualification.message}
            </small>
          )}
        </div>

        <div className=" text-center">
          <button
            style={{
              background: props?.yellowBtn ? "#ffde59" : "",
              color: props?.yellowBtn ? "black" : "white",
            }}
            className={"theme-btn btn-style-two mt-5"}
            type="submit"
          >
            <i className="btn-curve"></i>
            <span className="btn-title">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;
