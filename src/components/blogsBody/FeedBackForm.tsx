import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import { leadService } from "src/services";
import { useRouter } from "next/router";
import mixpanel from "mixpanel-browser";
import Image from "next/image";

const FeedBackForm = () => {
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

  const onSubmit = async (data: { [key: string]: any }) => {
    const result = await leadService.saveLead(data);
    if (result?.data) {
      mixpanel.track("submit-feedback-form", { submit_value: true });
    }
    reset();
    notify();
  };

  const notify = () =>
    toast.success("Thank you for applying! We will get back to you.", {
      position: "top-right",
      duration: 3000,
      className: "tost",
    });

  const handleFormBlur = () => {
    mixpanel.track("partial_submitted");
  };

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(
      <Image
        key={i}
        src="/assets/images/allImages/red-star.svg"
        width={20}
        height={20}
        alt="Star icons"
      />
    );
  }

  return (
    <div
      style={{ background: "#88c2a4", borderRadius: "8px" }}
      className="d-flex flex-column p-4"
    >
      <div>
        <h6 className="fw-bold">Rate your read & Leave a comment</h6>
        <p className="text-white">
          Your email id will not be published. Required Fields are marked as *
        </p>
        <p>
          Rate the blog
          <span style={{ marginLeft: "5px", position: "relative", top: "4px" }}>
            {stars}
          </span>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} onBlur={handleFormBlur}>
          <div className="row">
            <div className="col-12">
              <div className="form-group mt-3">
                <textarea
                  className={`form-control ${errors.comment && "invalid"}`}
                  placeholder="Write your comment"
                  rows={5}
                  {...register("comment")}
                />
              </div>
            </div>
            <div className="col-6 feedback-form-wrapper">
              <div className="form-group mt-3">
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
                  <small className="text-danger">Full Name is Required</small>
                )}
              </div>
            </div>
            <div className="col-6 feedback-form-wrapper">
              <div className="form-group mt-3">
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
                      Valid phone number Required
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="col-6 feedback-form-wrapper">
              <div className="form-group mt-3">
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
                  onKeyUp={() => trigger("Email")}
                />
                {errors.Email && (
                  <small className="text-danger">Invalid email address</small>
                )}

              </div>
            </div>
            <div className="col-6 mt-2 feedback-form-wrapper">
              <button
                style={{ background: "#ffde59", color: "black" }}
                className="theme-btn btn-style-two mt-1 "
                type="submit"
              >
                <i className="btn-curve"></i>
                <span className="btn-title">Post Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default FeedBackForm;
