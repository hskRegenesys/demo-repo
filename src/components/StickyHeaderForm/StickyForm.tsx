import React, { useState, useEffect, useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { courseService, countryCodeService } from "src/services";
import _ from "lodash";
import Data from "@/data/AllformsData";
import { leadService } from "src/services";
import Modal from "react-bootstrap/Modal";
import mixpanel from "mixpanel-browser";
import validator from "validator";

export default function StickyForm(contactform: any) {
  const hookForm: any = useForm();
  const [courseData, setcourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [btnDisable, sebtnDisable] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [formInteraction, setFormInteraction] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

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

  const createEmailData = (params: any) => ({
    fromAddressID: process.env.CM_DR_ADDRESSID,
    fromName: "Digital Regenesys",
    toAddress: params?.Email || params?.email,
    toName: params?.Name || params?.name,
    ccEmailAddress: "info.digital@regenesys.net",
    subject: "Digital Regenesys",
    htmlBody: `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html>
          <body>
            <p>Hello ${params?.Name || "Dear"}!</p>
          </body>
        </html>`,
    textBody: `Hello ${params?.Name || "Dear"}`,
    attachmentUrl:
      "https://dr-website-marketing.s3.ap-south-1.amazonaws.com/regenesys-logo-cm.jpg",
    attachmentFileName: "DigitalRegenesys.jpg",
    customerReference: "123456789",
  });

  const handleWhatsAppMessage = async (formData: any) => {
    try {
      await fetch("/api/whatsappMessages", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleEmailMessage = async (params: any) => {
    const emailData = createEmailData(params);
    try {
      await fetch("/api/emailMessageUrls", {
        method: "POST",
        body: JSON.stringify({ emailData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onSubmit = (data: any) => {
    if (phoneNumberError) {
      return;
    }
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
    mixpanel.track("submit-contact-form", { submit_value: true });

    // router.push("/thankYou");

    const result = leadService.saveLead(data);
    handleEmailMessage(data);
    handleWhatsAppMessage(data);
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
      {isShown && (
        <div>
          <div className="contact-section ">
            <div className="">
              <form
                className="form-box text-start"
                onSubmit={handleSubmit(onSubmit)}
                onBlur={handleFormBlur}
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
                            Filled:
                              (e.target as HTMLInputElement)?.value !== "",
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
                    <div className="form-group position-relative">
                      <input
                        type="hidden"
                        {...register("Phone", {
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
                          const phoneNumber = e ? e.toString() : "";
                          const isValid = validator.isMobilePhone(phoneNumber);
                          if (isValid) {
                            setValue("Phone", e);
                            mixpanel.track("Phone Changed", {
                              InputName: "Phone",
                              Filled: e !== "",
                              newValue: e,
                            });
                            setPhoneNumberError("");
                          } else {
                            setPhoneNumberError("Valid phone number Required");
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
