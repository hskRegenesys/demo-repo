import Link from "next/link";
import React, { useState, useEffect } from "react";
// import styles from "components/stickyFooter/Sticky.module.css";
// import Data from "./data";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";

const StickyBar = (props: any) => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  //   const stickyData = Data[props.data];
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <Modal show={show}>
          <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
        </Modal>
        <Modal show={thankYouShow}>
          <ThankYouPopup setShows={setThankYouShow} />
        </Modal>
      </div>
      {showButton && (
        <>
          <div className="styckySpace"></div>
          <div className="stickyRow">
            <div className="container">
              <div className="inlineSticky">
                <span>
                  Schedule a 1:1 Free Career Counseling session with Digital
                  Regenesys.
                </span>

                <div className="sticky-footer-buttons">
                  <button onClick={handleShow}>Talk To a Career Expert</button>
                  <button onClick={handleShow}>Download Brochure</button>
                  <button onClick={handleShow}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StickyBar;
