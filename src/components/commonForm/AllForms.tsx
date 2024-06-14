import React from "react";
import RequestForm from "../NewComponents/requestForm/RequestForm";
export default function LandingForm(contactform: any) {
  return (
    <>
      <div className="contact-section ">
        <div className="auto-container">
          <div className="form-box text-start">
            <RequestForm
              onFormSubmit={() => {}}
              type="contact"
              title="Get in touch with us"
            />
          </div>
        </div>
      </div>
    </>
  );
}
