import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import FormInput from "./FormInput";
import CourseSelect from "./CourseSelect";

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

  useEffect(() => {
    const fetchData = async () => {
      let countryData = await countryCodeService.countryDetails();
      setCountryData(countryData);
      countryData ? setIsLoading(false) : setIsLoading(true);

      try {
        const response = await fetch("https://geolocation-db.com/json/");
        const result = await response.json();
        setGeoLocationData(result);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };

    fetchData();
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
      // handleWhatsAppMessage(data);
      // handleEmailMessage(data);
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
      // handleWhatsAppMessage(data);
      // handleEmailMessage(data);
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
              <FormInput
                type="text"
                name="Name"
                placeholder="Full Name*"
                register={register}
                errors={errors}
                trigger={trigger}
                mixpanel={mixpanel}
              />
              <FormInput
                type="email"
                name="Email"
                placeholder="Email*"
                register={register}
                errors={errors}
                trigger={trigger}
                mixpanel={mixpanel}
              />
            </div>
            <div className={Styles.formsplit}>
              <FormInput
                type="phone"
                name="Phone"
                placeholder="Select Country Code*"
                register={register}
                errors={errors}
                trigger={trigger}
                setValue={setValue}
                setPhoneNumber={setPhoneNumber}
                setPhoneNumberError={setPhoneNumberError}
                geoLocationData={geoLocationData}
                validator={validator}
                mixpanel={mixpanel}
                phoneNumber={phoneNumber}
                phoneNumberError={phoneNumberError}
              />
              <CourseSelect
                register={register}
                errors={errors}
                courses={courses}
                programmeOfInterest={programmeOfInterest}
                mixpanel={mixpanel}
              />
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
