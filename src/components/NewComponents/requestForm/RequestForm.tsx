import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import _ from "lodash";
import { countryCodeService, courseService, leadService } from "src/services";
import { useRouter } from "next/router";
import { downloadFromBlob } from "@/components/config/helper";
import { allCourseList } from "@/data/courseData";
import Styles from "./requestForm.module.css";
import { brochureDetails } from "@/data/courseBrochure";
import mixpanel from "mixpanel-browser";

function RequestForm(props: any) {
  const router = useRouter();
  const url = router?.asPath;

  const [isLoading, setIsLoading] = useState(true);
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [countryData, setCountryData] = useState<any>({});
  const [btnDisable, setBtnDisable] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [formInteraction, setFormInteraction] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

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

      props.onFormSubmit();
      reset();
      downloadFromBlob(response?.data, brochureName?.name) == false;
      handleWhatsAppMessage(data);
      handleEmailMessage(data);
      if (response?.status === 200) {
        mixpanel.track("submit-brochure-form", { submit_value: true });
      }
    }
    if (props?.title !== "Download Brochure") {
      props.isWhatsapp
        ? router.push(
            "https://api.whatsapp.com/send?phone=27733502575&text=Hi%20there"
          )
        : setSubmitted(true);
      handleWhatsAppMessage(data);
      handleEmailMessage(data);
      mixpanel.track("submit-counselling-form", { submit_value: true });
      props.onFormSubmit();
      reset();
    }
    notify();
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
  const notify = () =>
    toast.success("Thank you for applying! We will get back to you.", {
      position: "top-right",
      duration: 3000,
      className: Styles.tost,
    });

  return (
    <div className={Styles.RequestFormStyle}>
      <Toaster />
      <form
        className={Styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}
        onBlur={handleFormBlur}
      >
        <div className={Styles.FormCard}>
          <strong
            className={
              props.type === "contact" ? Styles.TitleContact : Styles.Title
            }
          >
            {props.title ? props.title : "Request a call"}
          </strong>
          <div
            className={
              props.type === "contact"
                ? Styles.ContectForm
                : Styles.formContentInput
            }
          >
            <div className={Styles.formContent}>
              <div className={Styles.inputLabelContainer}>
                <input
                  className={`${errors?.Name && "invalid"} ${Styles.inputForm}`}
                  placeholder="Full Name*"
                  {...register("Name", {
                    required: "*Full Name is Required",
                    pattern: {
                      value: /^[a-zA-Z_ ]+$/,
                      message: "Invalid User Name",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("Name");
                    mixpanel.track("Name Changed", {
                      InputName: "name",
                      Filled: (e.target as HTMLInputElement)?.value !== "",
                      newValue: (e.target as HTMLInputElement)?.value,
                    });
                  }}
                />
                {errors?.Name && (
                  <small className={Styles.smallText}>
                    {errors?.Name?.message}
                  </small>
                )}
              </div>
              <div className={Styles.inputLabelContainer}>
                <div className={Styles.inputFormContainer}>
                  <input
                    className={`${errors?.Email && "invalid"} ${
                      Styles.inputForm
                    }`}
                    placeholder="Email*"
                    {...register("Email", {
                      required: "*Email is Required",
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
                  {errors?.Email && (
                    <small className={Styles.smallText}>
                      {errors?.Email?.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className={Styles.formsplit}>
              <div className={Styles.inputLabelContainer}>
                <div className={Styles.formGroupPositionRelative}>
                  <input
                    className={
                      props.type === "contact"
                        ? Styles.inputFormContact
                        : Styles.inputForm
                    }
                    type="hidden"
                    {...register("Phone", {
                      required: "*Phone number is Required",
                    })}
                  />
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry={geoLocationData?.country_code}
                    placeholder="Select Country Code*"
                    value={watch("Phone")}
                    {...register("Phone", {
                      required: "*Phone number is Required",
                    })}
                    onChange={(e) => {
                      const phoneNumber = e ? e.toString() : "";
                      const isValid = validator.isMobilePhone(phoneNumber);
                      setPhoneNumber(phoneNumber);

                      // Activate validation after typing 4 digits
                      if (phoneNumber.replace(/[^0-9]/g, "").length >= 4) {
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
                          setPhoneNumberError("Valid phone number required");
                        }
                      } else {
                        setPhoneNumberError("");
                      }
                    }}
                    onBlur={() => {
                      trigger("Phone");
                    }}
                    className={`inputForm ${phoneNumberError && "invalid"} ${
                      Styles.inputForm
                    }`}
                  />
                  {phoneNumberError ? (
                    <small className={Styles.smallText}>
                      {phoneNumberError}
                    </small>
                  ) : (
                    (phoneNumber.length === 0
                      ? !phoneNumberError
                      : phoneNumberError) &&
                    errors?.Phone && (
                      <small className={Styles.smallText}>
                        {errors?.Phone?.message}
                      </small>
                    )
                  )}
                </div>
              </div>
              <div className=" ">
                <div className="">
                  <select
                    aria-label="Select Course"
                    name="Course"
                    value={programmeOfInterest}
                    className={`select-course form-select${
                      errors?.Programme_Of_Interest &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"
                    } ${Styles.inputForm}`}
                    {...register("Programme_Of_Interest", {
                      required: "*Course is required",
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
                    <small className={Styles.formFooterText}>
                      *Learn collaboratively! Apply with 15 people to begin the
                      course
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className={Styles.buttenContainer}>
            <button
              type="submit"
              className={Styles.FormButton}
              disabled={btnDisable}
              aria-label="submit button"
            >
              <i className=""></i>
              <span className={Styles.FormButtonText}>Submit</span>
            </button>
          </div>
          <small className={Styles.formFooterText}>
            By submitting this form, <br /> you agree to our
            <a
              href="https://www.digitalregenesys.com/privacy-policy"
              aria-label="Privacy policy"
            >
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
