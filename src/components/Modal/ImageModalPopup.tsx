import React, { useState, useEffect, useContext, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import _ from "lodash";
import Data from "@/data/AllformsData";
import mixpanel from "mixpanel-browser";
import validator from "validator";

import { countryCodeService, courseService, leadService } from "src/services";
import { useRouter } from "next/router";
import { downloadFromBlob } from "@/components/config/helper";

import Loader from "../Loader/Loader";
import { allCourseList } from "@/data/courseData";
import Image from "next/image";

function ImageModalPopup(props: any) {
  const bgImage = props.bgImage ?? "Pop-up_bg.webp";
  const router = useRouter();
  const url = router?.asPath;
  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [btnDisable, sebtnDisable] = useState(false);
  const [formInteraction, setFormInteraction] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const onSubmit = async (data: any) => {
    if (phoneNumberError) {
      return;
    }
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
      if (response?.status === 200) {
        mixpanel.track("submit-brochure-form", { submit_value: true });
      }
      downloadFromBlob(response?.data, props?.brochureName?.name) == false;
    }
    if (props?.title !== "Download Brochure") {
      props.setShows(false);
      !!props.thankYouShow && props.thankYouShow(true);
      mixpanel.track("submit-counselling-form", { submit_value: true });
    }
  };

  let courses: any = [];

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
      setValue("Programme_Of_Interest", filterData?.name);
    }
  }, [id]);
  // Phone validation limit
  let regexValidation = /^(\+?\d{1,3}-?)\d{10}$/;
  let minMaxValue = 13;
  if (
    geoLocationData?.country_code === "NG" ||
    phoneNumber?.startsWith("+234")
  ) {
    minMaxValue = 14;
    regexValidation = /^(\+?\d{1,3}-?)\d{10}$/;
  } else if (
    geoLocationData?.country_code === "KE" ||
    phoneNumber?.startsWith("+254")
  ) {
    minMaxValue = 13;
    regexValidation = /^(\+?\d{1,3}-?)\d{9}$/;
  } else if (
    geoLocationData?.country_code === "ZA" ||
    phoneNumber?.startsWith("+27")
  ) {
    minMaxValue = 12;
    regexValidation = /^(\+?\d{1,3}-?)\d{9}$/;
  }

  useEffect(() => {
    const beforeUnload = () => {
      if (formInteraction) {
        mixpanel.track("partial_submitted");
      }
    };
    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
    };
  }, [formInteraction]);

  const handleFormBlur = () => {
    setFormInteraction(true);
    mixpanel.track("partial_submitted");
  };

  return (
    <div className="image-modal-style">
      <Modal.Header
        className="modal_close_modify"
        closeButton
        onClick={(e) => props.setShows(false)}
      >
        <Modal.Title>{props.title ? props.title : ""}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {isLoading ? (
          // <div className="d-flex justify-content-center w-100">
          //   <div className="spinner-border" role="status">
          //     <span className="sr-only" />
          //   </div>
          // </div>
          <Loader />
        ) : (
          <form
            className="form-box text-start popup-form"
            onSubmit={handleSubmit(onSubmit)}
            onBlur={handleFormBlur}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="d-none d-lg-block">
                  <Image
                    src={`/assets/images/background/${
                      props?.courseDetails?.modalImage ?? bgImage
                    }`}
                    alt="discount banner"
                    layout="fill"
                    width="800"
                    height="500"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="modal-pop-style-modify">
                    <strong className="d-none d-lg-block">
                      Request a Call
                    </strong>
                    <h5 className="d-block d-lg-none">Enrol Now</h5>
                    <div className="col-md-12">
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
                          onKeyUp={(e) => {
                            trigger("Name");
                            mixpanel.track("Name Changed", {
                              InputName: "name",
                              Filled:
                                (e.target as HTMLInputElement)?.value !== "",
                              newValue: (e.target as HTMLInputElement)?.value,
                            });
                          }}
                        />
                        {errors?.Name && (
                          <small className="text-danger">
                            {errors?.Name?.message}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
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
                          onKeyUp={(e) => {
                            trigger("Email");
                            mixpanel.track("Email Changed", {
                              InputName: "Email",
                              Filled:
                                (e.target as HTMLInputElement)?.value !== "",
                              newValue: (e.target as HTMLInputElement)?.value,
                            });
                          }}
                        />
                        {errors?.Email && (
                          <small className="text-danger">
                            {errors?.Email?.message}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group position-relative">
                        <label>Phone</label>
                        <input
                          type="hidden"
                          {...register("Phone", {
                            maxLength: {
                              value: minMaxValue,
                              message: "Can not Exceed 10 digits",
                            },
                            minLength: {
                              value: minMaxValue,
                              message: "Valid phone number Required",
                            },
                            pattern: {
                              value: regexValidation,
                              message: "Invalid phone number format",
                            },
                            required: "Phone is Required",
                          })}
                        />
                        <PhoneInput
                          international
                          countryCallingCodeEditable={false}
                          defaultCountry={geoLocationData?.country_code}
                          // defaultCountry="ZA"
                          placeholder="Select Country Code*"
                          onChange={(e) => {
                            const phoneNumber = e ? e.toString() : "";
                            const isValid =
                              validator.isMobilePhone(phoneNumber);
                            if (isValid) {
                              setValue("Phone", phoneNumber);
                              setPhoneNumber(phoneNumber);
                              mixpanel.track("Phone Changed", {
                                InputName: "Phone",
                                Filled: phoneNumber !== "",
                                newValue: phoneNumber,
                              });
                              setPhoneNumberError("");
                            } else {
                              setPhoneNumberError(
                                "Valid phone number Required"
                              );
                            }
                          }}
                          className={`${phoneNumberError && "invalid"}`}
                        />

                        {phoneNumberError && (
                          <small className="text-danger">
                            {phoneNumberError}
                          </small>
                        )}
                      </div>
                    </div>
                    {/* <div className="col-md-12 d-none">
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
                          <small className="text-danger">
                            {errors?.City?.message}
                          </small>
                        )}
                      </div>
                    </div> */}
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <label>Course you are looking for*</label>
                        <select
                          value={programmeOfInterest}
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
                        {(programmeOfInterest === "Digital Marketing" ||
                          programmeOfInterest === "Design Thinking") && (
                          <small className="text-black">
                            *Learn collaboratively! Apply with 15 people to
                            begin the course
                          </small>
                        )}
                      </div>
                    </div>
                    {/* <div className="col-md-12 d-none">
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
                    </div> */}
                    <div className="d-flex mt-3 justify-content-center align-items-center">
                      {/* <button
                className="theme-btn btn-style-two mr-2"
                onClick={(e) => props.setShows(false)}
              >
                <i className="btn-curve"></i>
                <span className="btn-title">Cancel</span>
              </button> */}

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
                    <small>
                      By submitting this form, you agree to our Privacy Policy.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Modal.Body>
    </div>
  );
}

export default ImageModalPopup;
