import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import dynamic from "next/dynamic";
// import ModalPopup from "@/components/Modal/ModalPopup";
// import ThankYouPopup from "../Modal/ThankYouPopup";
const ModalPopup = dynamic(() => import("@/components/Modal/ModalPopup"));
const ThankYouPopup = dynamic(() => import("../Modal/ThankYouPopup"));

const StickyBar = (props: any) => {
  const [isStickyDismissed, setIsStickyDismissed] = useState<boolean>(false);
  const [showSticky, setShowSticky] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem("isStickyDismissed");
      if (dismissed === "true") {
        setIsStickyDismissed(true);
      } else {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight; // Scroll position from the top + visible screen height
          const totalHeight = document.body.scrollHeight; // Total height of the page
          const scrollPercentage = (scrollPosition / totalHeight) * 100;

          if (scrollPercentage >= 50) {
            setShowSticky(true); // Show sticky when scrolled 50% or more
          }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
          // Cleanup the event listener on component unmount
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, []);

  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    setIsStickyDismissed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("isStickyDismissed", "true");
    }
    setShowSticky(false); // Hide the sticky bar when dismissed
  };

  if (isStickyDismissed || !showSticky) {
    return null; // Don't render if dismissed or not set to show
  }

  return (
    <div>
      <Modal show={show}>
        <ModalPopup
          setShows={setShow}
          courseCode={props.courseCode}
          thankYouShow={setThankYouShow}
        />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
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
    </div>
  );
};

export default StickyBar;
