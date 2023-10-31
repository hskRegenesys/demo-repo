import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";

const StickyBar = (props: any) => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const [isShown, setIsShown] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setIsShown((current) => !current);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        setShowButton(true);
        setIsShown(true);
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
      {isShown && (
        <>
          <div className="styckySpace"></div>
          <div className="stickyRow">
            <div className="container">
              <div className="inlineSticky">
                <strong>
                  Schedule a free 1:1 career counselling session with Digital
                  Regenesys.
                </strong>

                <div className="sticky-footer-buttons">
                  <a className="theme-btn btn-style-two" onClick={handleShow}>
                    <i className="btn-curve"></i>
                    <span className="btn-title">Talk To a Career Expert</span>
                  </a>
                </div>
                <div className="closeBtn">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
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
