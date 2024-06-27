import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import { countryCodeService, leadService } from "src/services";
import { useRouter } from "next/router";
import mixpanel from "mixpanel-browser";

const NewsLetter = () => {
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_content } = router.query;

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");

  const {
    formState: { errors },
    reset,
    trigger,
    watch,
    setValue,
    register,
    handleSubmit,
  } = useForm();

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

  const onSubmit = async (data: { [key: string]: any }) => {
    if (!isCheckboxChecked) {
      setCheckBoxError("*Please accept the conditions.");
      return;
    }

    const result = await leadService.saveLead(data);

    if (result?.data) {
      mixpanel.track("submit-newsletter-form", { submit_value: true });
      reset();
    }
    handleEmailMessage(data);
    handleWhatsAppMessage(data);
    reset();
    setIsCheckboxChecked(false);
    notify();
  };

  const notify = () =>
    toast.success("Thank you for applying! We will get back to you.", {
      position: "top-right",
      duration: 3000,
      className: "tost",
    });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
    if (e.target.checked) {
      setCheckBoxError("");
    }
  };

  return (
    <div>
      <div
        style={{ background: "#88c2a4" }}
        className="d-flex flex-column mt-4 p-3"
      >
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="text-center w-100">Our Newsletters!</h2>
          </div>
          <p className="text-center text-white w-100">
            Get notified about the latest career insights, study tips & offers
            at DIGITAL REGENYSYS
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex  justify-content-center">
              <div className="d-sm-flex w-100 flex-sm-wrap  justify-content-sm-evenly">
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Full Name*"
                    {...register("Name", {
                      required: "*Full Name is Required",
                      pattern: {
                        value: /^[a-zA-Z_ ]+$/,
                        message: "Invalid User Name",
                      },
                    })}
                    onKeyUp={() => trigger("Name")}
                  />
                  {errors?.Name?.message && (
                    <span className="text-danger">*Full Name is Required</span>
                  )}
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Email*"
                    {...register("Email", {
                      required: "*Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    onKeyUp={() => trigger("Email")}
                  />
                  {errors?.Email?.message && (
                    <span className="text-danger">*Email is Required</span>
                  )}
                </div>
                <div className="form-group mt-3 position-relative">
                  <input
                    type="hidden"
                    {...register("Phone", {
                      required: "*Phone number is Required",
                    })}
                  />
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="ZA"
                    placeholder="Select Country Code*"
                    value={watch("Phone")}
                    onChange={(e) => {
                      const phoneNumber = e ? e.toString() : "";
                      const isValid = validator.isMobilePhone(phoneNumber);
                      if (isValid) {
                        setValue("Phone", phoneNumber);
                        mixpanel.track("Phone Changed", {
                          InputName: "Phone",
                          Filled: phoneNumber !== "",
                          newValue: phoneNumber,
                        });
                        setPhoneNumberError("");
                      } else {
                        setPhoneNumberError("Valid phone number Required");
                      }
                    }}
                    onBlur={() => trigger("Phone")}
                    className="blogs-apply-now form-control"
                  />
                  {phoneNumberError ? (
                    <span className="text-danger">{phoneNumberError}</span>
                  ) : (
                    errors?.Phone?.message && (
                      <span className="text-danger">
                        Valid phone number Required{" "}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="new-letter-checkbox-class">
                <input
                  type="checkbox"
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                  className="label-input-field"
                />
                By Checking this box, you confirm that you have read & agree to
                our Terms of use regarding the storage of data submitted through
                this form
              </label>
            </div>
            {checkBoxError && (
              <span className="text-danger">{checkBoxError}</span>
            )}
            <div className="form-group mt-3 w-100 text-center">
              <button
                style={{ background: "#ffde59", color: "black" }}
                className="theme-btn btn-style-two mt-1"
                type="submit"
              >
                <i className="btn-curve"></i>
                <span className="btn-title">Get Notified!</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default NewsLetter;
