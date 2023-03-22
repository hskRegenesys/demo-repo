import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "react-phone-number-input/style.css";

function ThankYouPopup(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal.Header
        closeButton
        onClick={(e) => props.setShows(false)}
      ></Modal.Header>

      <Modal.Body>
        <div className="modal-thankyou-text">
          <h4>THANK YOU FOR YOUR INTEREST!</h4>
          <p>
            Your details have been recorded and you can expect a call from one
            of our expert counsellor.
          </p>
        </div>
      </Modal.Body>
    </>
  );
}

export default ThankYouPopup;
