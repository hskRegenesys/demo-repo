import React, { useState, useEffect, useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { courseService, countryCodeService } from "src/services";
import _ from "lodash";
import Data from "@/data/AllformsData";
import { leadService } from "src/services";
import Modal from "react-bootstrap/Modal";

export default function StickyForm(contactform: any) {
  const hookForm: any = useForm();
  const [courseData, setcourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [btnDisable, sebtnDisable] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };

  const onSubmit = (data: any) => {
    sebtnDisable(true);
    const current = new Date();
    data.page_url = window.location.href;
    data.highestQualification = "Sticky form";
    data.interestedTopic = "Sticky form";
    data.utm_parameters = window.location.href;
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    if (date) {
      data.date = date;
    }
    handleShow();
    // router.push("/thankYou");

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
    <>
      {isShown && (
        <div>
          <div className="contact-section ">
            <div className="">
              <form
                className="form-box text-start"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="sticky-form">
                  <div className="sticky-contant">
                    <span>
                      Boost your career with a Data Science Course. Contact now
                      for free counselling!
                    </span>
                  </div>
                  <div className="sticky-form-fields-group">
                    <div className="form-group">
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
                        <small className="text-danger">
                          {errors?.Name?.message}
                        </small>
                      )}
                    </div>

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
                        <small className="text-danger">
                          {errors.Email.message}
                        </small>
                      )}
                    </div>
                    <div className="form-group position-relative">
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
                        // defaultCountry={geoLocationData?.country_code}
                        defaultCountry="ZA"
                        placeholder="Select Country Code*"
                        onChange={(e) => {
                          setValue("Phone", e);
                        }}
                        className={`${errors.Phone && "invalid"}`}
                      />
                      {errors.Phone && (
                        <small className="text-danger">
                          {errors.Phone.message}
                        </small>
                      )}
                    </div>

                    <div className="">
                      <button
                        className="theme-btn btn-style-two"
                        disabled={btnDisable}
                        type="submit"
                      >
                        <i className="btn-curve"></i>
                        <span className="btn-title">Submit</span>
                      </button>
                    </div>
                    <div className="closeBtn">
                      <button
                        onClick={handleClick}
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className="modal-thankyou-text">
                <h4>THANK YOU FOR YOUR INTEREST!</h4>
                <p>
                  Your details have been recorded and you can expect a call from
                  one of our expert counsellor.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
}
