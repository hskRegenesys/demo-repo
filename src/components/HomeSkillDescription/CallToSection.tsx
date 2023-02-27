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

            <div className="row h-100">
              <div className="col-md-8 align-self-start">
              
                <h2><i className='call-to-action-arrow'></i>Equip yourself with the future-ready skills to elevate your career to new heights
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
        <ModalPopup setShows={setShow} />
      </Modal>


    </>
  );
};

export default CallToSection;
