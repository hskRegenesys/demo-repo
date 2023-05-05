import { Checkbox } from "antd";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";

const NewsLetter = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const onChange = (name: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <div
        style={{ background: "#88c2a4" }}
        className="d-flex flex-column mt-4 p-3"
      >
        <div className="container">
          <h4 className="text-center w-100">Our Newsletters!</h4>
          <p className="text-center text-white w-100">
            Get notified about the latest career insights, study tips & offers
            at DIGITAL REGENYSYS
          </p>
          <form>
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-sm-flex w-100 flex-sm-wrap align-items-center justify-content-sm-evenly">
                <div className="form-group mt-3">
                  <input
                    className={`form-control `}
                    placeholder="Name*"
                    name="name"
                    type="text"
                    onChange={({ target: { name, value } }) =>
                      onChange(name, value)
                    }
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className={"form-control "}
                    placeholder="Email*"
                    name="email"
                    onChange={(e) => {
                      onChange("phone", e.target.value as string);
                    }}
                  />
                </div>
                <div className="form-group mt-3 position-relative">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="ZA"
                    placeholder="Select Country Code*"
                    onChange={(e) => {
                      onChange("Phone", e as string);
                    }}
                    className="blogs-apply-now form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Checkbox className="mt-3">
                By Checking this box, you confirm that you have read & agree to
                our Terms of use regarding the storage of data submitted through
                this form
              </Checkbox>
            </div>

            <div className="form-group mt-3 w-100 text-center">
              <button
                style={{ background: "#ffde59", color: "black" }}
                className="theme-btn btn-style-two mt-1 pt-1"
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
