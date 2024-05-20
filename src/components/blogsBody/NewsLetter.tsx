import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import mixpanel from "mixpanel-browser";
import { useForm } from "react-hook-form";
import validator from "validator";

const NewsLetter = () => {
  const [formInteraction, setFormInteraction] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

  const hookForm: any = useForm();

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

  const handleCheckboxChange = (e: any) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const onSubmit = (data: any) => {
    if (!isCheckboxChecked) {
      setCheckBoxError("*Please accept the conditions.");
      return;
    }
    console.log(data);
    reset();
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
          <form onBlur={handleFormBlur} onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-sm-flex w-100 flex-sm-wrap align-items-center justify-content-sm-evenly">
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Name*"
                    type="text"
                    {...register("Name", { required: "Name is required" })}
                  />
                  {errors?.Name && (
                    <span className="text-danger">{errors?.Name?.message}</span>
                  )}
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Email*"
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.Email && (
                    <span className="text-danger">{errors.Email.message}</span>
                  )}
                </div>
                <div className="form-group mt-3 position-relative">
                  <input
                    type="hidden"
                    {...register("Phone", {
                      required: "*Phone number is required",
                    })}
                  />
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="ZA"
                    placeholder="Select Country Code*"
                    value={watch("Phone")}
                    {...register("Phone", {
                      required: "*Phone number is required",
                    })}
                    onChange={(e) => {
                      const phoneNumber = e ? e.toString() : "";
                      const isValid = validator.isMobilePhone(phoneNumber);
                      if (isValid) {
                        setValue("Phone", phoneNumber);
                        setPhoneNumber(phoneNumber);
                        setPhoneNumberError("");
                      } else {
                        setPhoneNumberError("Valid phone number required");
                      }
                    }}
                    onBlur={() => {
                      trigger("Phone");
                    }}
                    className="blogs-apply-now form-control"
                  />

                  {errors?.Phone && (
                    <span className="text-danger">
                      {errors?.Phone?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Checkbox className="mt-3" onChange={handleCheckboxChange}>
                By Checking this box, you confirm that you have read & agree to
                our Terms of use regarding the storage of data submitted through
                this form
              </Checkbox>
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
    </div>
  );
};

export default NewsLetter;
