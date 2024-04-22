import React, { useState, useEffect, useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { countryCodeService } from "src/services";
import _ from "lodash";
import Data from "@/data/AllformsData";
import { leadService } from "src/services";
import Modal from "react-bootstrap/Modal";
import Loader from "../Loader/Loader";
import { allCourseList } from "@/data/courseData";
import { useRouter } from "next/router";
import mixpanel from "mixpanel-browser";
import validator from "validator";

export default function LandingForm(contactform: any) {
  const hookForm: any = useForm();
  const router = useRouter();
  const url = router?.asPath;
  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [btnDisable, sebtnDisable] = useState(false);
  const [formInteraction, setFormInteraction] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

  const [show, setShow] = useState(false);

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

  const onSubmit = (data: any) => {
    if (phoneNumberError) {
      return;
    }
    sebtnDisable(true);
    const current = new Date();
    data.page_url = window.location.href;
    data.highestQualification = "";
    data.interestedTopic = "";
    data.utm_parameters = window.location.href;
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    if (date) {
      data.date = date;
    }
    handleShow();
    mixpanel.track("submit-contact-form", { submit_value: true });
    // router.push("/thankYou");
    const result = leadService.saveLead(data);
  };

  useEffect(() => {
    getCountryCode();
  }, []);

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
  const {
    formState: { errors },
    reset,
    trigger,
    setValue,
    setError,
    register,
    handleSubmit,
    watch,
  } = hookForm;
  const selectedCourse = watch("Programme_Of_Interest");

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
    <>
      <div className="contact-section ">
        <div className="auto-container">
          {isLoading ? (
            <Loader />
          ) : (
            <form
              className="form-box text-start"
              onSubmit={handleSubmit(onSubmit)}
              onBlur={handleFormBlur}
            >
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
                      onKeyUp={(e) => {
                        trigger("Name");
                        mixpanel.track("Name Changed", {
                          InputName: "name",
                          Filled: (e.target as HTMLInputElement).value !== "",
                          newValue: (e.target as HTMLInputElement).value,
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
                      onKeyUp={(e) => {
                        trigger("Email");
                        mixpanel.track("Email Changed", {
                          InputName: "Email",
                          Filled: (e.target as HTMLInputElement)?.value !== "",
                          newValue: (e.target as HTMLInputElement)?.value,
                        });
                      }}
                    />
                    {errors.Email && (
                      <small className="text-danger">
                        {errors.Email.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-group position-relative">
                    <label>Phone*</label>
                    <input
                      type="hidden"
                      {...register("Phone", {
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
                        const isValid = validator.isMobilePhone(phoneNumber);
                        if (isValid) {
                          setValue("Phone", e);
                          mixpanel.track("Phone Changed", {
                            InputName: "Phone",
                            Filled: e !== "",
                            newValue: e,
                          });
                          errors.Phone("");
                        } else {
                          errors.Phone.message;
                        }
                      }}
                      className={`${phoneNumberError && "invalid"}`}
                    />
                    {errors.Phone && (
                      <small className="text-danger">
                        {errors.Phone.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Course you are looking for*</label>
                    <select
                      className={`select-course form-select{
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

                      {courses.map((val: any) => {
                        return (
                          <option key={val.id} value={val.name}>
                            {val.name}
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
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group">
                    <label>City*</label>
                    <input
                      type="text"
                      placeholder="Enter City*"
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
              </div>

              {/* <div className="row mb-4">
                <div className="col-md-6">
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
            </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Highest Qualification*</label>
                    <select
                      className={`select-course form-select{
                    errors.gender &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                      {...register("highest_qualification", {
                        required: "Qualification is required",
                      })}
                    >
                      <option value="">Highest Qualification*</option>
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
              </div> */}
              <div className="text-center">
                {(selectedCourse === "Digital Marketing" ||
                  selectedCourse === "Design Thinking") && (
                  <small className="text-black">
                    *Learn collaboratively! Apply with 15 people to begin the
                    course
                  </small>
                )}
              </div>
              <div className="row text-center">
                <button
                  className="theme-btn btn-style-two mt-5"
                  disabled={btnDisable}
                  type="submit"
                >
                  <i className="btn-curve"></i>
                  <span className="btn-title">Submit</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-thankyou-text">
            <h4>THANK YOU FOR YOUR INTEREST!</h4>
            <p>
              Your details have been recorded and you can expect a call from one
              of our expert counsellor.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
