import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";

const CallToSection = ({
  className = "",
  container = true,
  courseCode,
}: {
  className?: string;
  container?: boolean;
  courseCode?: any;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`call-to-section ${className}`}>
        <div className={container ? "auto-container" : "inner clearfix"}>
          <div className={container ? "inner clearfix" : ""}>
            <div className="row h-100">
              <div className="col-md-8 align-self-start">
                <h2>
                  <i className="call-to-action-arrow"></i>Equip yourself with
                  the future-ready skills to elevate your career to new heights
                </h2>
              </div>

              <div className="link-box col-md-4 text-right">
                <a className="theme-btn btn-style-two" onClick={handleShow}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Request a Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show}>
        <ModalPopup
          setShows={setShow}
          courseCode={courseCode}
          thankYouShow={setThankYouShow}
        />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </>
  );
};

export default CallToSection;
