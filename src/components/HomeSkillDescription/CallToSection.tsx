import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalPopup from "@/components/Modal/ModalPopup";

const CallToSection = ({ className = "", container = true }) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <section className={`call-to-section ${className}`}>
        <div className={container ? "auto-container" : "inner clearfix"}>
          <div className={container ? "inner clearfix" : ""}>
            <div className={container ? "" : "auto-container clearfix"}>
              <h2>Revolutionise your career with future{container ? <br /> : ""}
                ready skills
              </h2>
              <div className="link-box">
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
        <ModalPopup setShows={setShow} />
      </Modal>


    </>
  );
};

export default CallToSection;
