import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import _ from "lodash";
import Data from "@/data/AllformsData";

import { countryCodeService, courseService, leadService } from "src/services";
import { useRouter } from "next/router";
import { downloadFromBlob } from "@/components/config/helper";

function ModalPopup(props: any) {
  const router = useRouter();
  const [courseData, setcourseData] = useState([]);
  const [countryData, setCountryData] = useState<any>({});
  const [show, setShow] = useState(false);
  const [btnDisable, sebtnDisable] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };
  const getCountryCode = async () => {
    let countryData = await countryCodeService.countryDetails();
    setCountryData(countryData);
  };
  useEffect(() => {
    getData();
    getCountryCode();
  }, []);

  const hookForm: any = useForm();

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

  const onSubmit = async (data: any) => {
    sebtnDisable(true);
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

    const result = await leadService.saveLead(data);

    if (result?.data && props?.title === "Download Brochure") {
      const response = await courseService.downloadBrochure(
        props?.brochureName?.name
      );
      props.setShows(false);
      downloadFromBlob(response?.data, props?.brochureName?.name) == false;
    }
    if (props?.title !== "Download Brochure") {
      props.setShows(false);
      props.thankYouShow(true);
    }
  };

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
  return (
    <>
      <Modal.Header closeButton onClick={(e) => props.setShows(false)}>
        <Modal.Title>
          {props.title ? props.title : "Request a call"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          className="form-box text-start popup-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  className={`${errors?.Name && "invalid"}`}
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
                  className={`${errors?.Email && "invalid"}`}
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
                  <small className="text-danger">
                    {errors?.Email?.message}
                  </small>
                )}
              </div>
            </div>
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
                  // defaultCountry={countryData?.country_code}
                  defaultCountry="ZA"
                  placeholder="Select Country Code*"
                  onChange={(e) => {
                    setValue("Phone", e);
                  }}
                  className={`${errors?.Phone && "invalid"}`}
                />
                {errors?.Phone && (
                  <small className="text-danger">
                    {errors?.Phone?.message}
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>City*</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className={`${errors?.City && "invalid"}`}
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
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Course you are looking for*</label>
                <select
                  className={`select-course form-select${
                    errors?.Programme_Of_Interest &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  {...register("Programme_Of_Interest", {
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
                {errors?.Programme_Of_Interest && (
                  <small className="text-danger">
                    {errors?.Programme_Of_Interest?.message}
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Select Highest Qualification</label>
                <select
                  className={`select-course form-select${
                    errors?.highest_qualification &&
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
                {errors?.highest_qualification && (
                  <small className="text-danger">
                    {errors?.highest_qualification?.message}
                  </small>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex mt-3 justify-content-center align-items-center">
            <button
              className="theme-btn btn-style-two mr-2"
              onClick={(e) => props.setShows(false)}
            >
              <i className="btn-curve"></i>
              <span className="btn-title">Cancel</span>
            </button>

            <button
              type="submit"
              className="theme-btn btn-style-two"
              onClick={handleShow}
              disabled={btnDisable}
            >
              <i className="btn-curve"></i>
              <span className="btn-title">Submit</span>
            </button>
          </div>
        </form>
      </Modal.Body>
    </>
  );
}

export default ModalPopup;
