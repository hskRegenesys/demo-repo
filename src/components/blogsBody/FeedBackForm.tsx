import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

const FeedBackForm = () => {
  const {
    formState: { errors },
    trigger,
    setValue,
    register,
    handleSubmit,
  }: any = useForm();
  const onSubmit = (data: any) => {};
  return (
    <>
      <div
        style={{ background: "#88c2a4", borderRadius: "8px" }}
        className="d-flex flex-column p-4 "
      >
        <div>
          <h6 className="fw-bold">Rate your read & Leave a comment</h6>
          <p className="text-white">
            Your email id will not be published. Required Fields are marked as *
          </p>
          <p>
            Rate the blog <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="form-group mt-3">
                  <textarea
                    className={`form-control ${errors.Name && "invalid"}`}
                    placeholder="Write your comment"
                    rows={5}
                    {...register("comment")}
                  />
                </div>
              </div>
              <div className="col-6">
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
                    <small className="text-danger">
                      {errors?.Name?.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mt-3 position-relative">
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
                    defaultCountry="ZA"
                    placeholder="Select Country Code*"
                    onChange={(e) => {
                      setValue("Phone", e);
                    }}
                    className={`blogs-apply-now form-control ${
                      errors.Phone && "invalid"
                    }`}
                  />
                  {errors.Phone && (
                    <small className="text-danger">
                      {errors.Phone.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-6">
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
              </div>
              <div className="col-6 mt-2">
                <button
                  style={{ background: "#ffde59", color: "black" }}
                  className="theme-btn btn-style-two mt-1 pt-1"
                  type="submit"
                >
                  <i className="btn-curve"></i>
                  <span className="btn-title">Post Comment</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;