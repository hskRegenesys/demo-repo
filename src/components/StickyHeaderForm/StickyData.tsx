import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import AllPageStickyData from "@/data/stickyData";
import { useRouter } from "next/router";
const StickyData = (props: any) => {
  const handleShow = () => setShow(true);
  const [isShown, setIsShown] = useState(true);
  const [show, setShow] = useState(false);
  const [isHide, setIsHide] = useState(true);
  setTimeout(() => setIsHide(false), 5000);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const AllPageStickText = AllPageStickyData[props.pageTitle];

  return (
    <div>
      {isShown && (
        <div className="sticky-form-header">
          {AllPageStickText && (
            <>
              {!isHide ? (
                <div className="sticky-form">
                  <div className="sticky-contant">
                    <span> {AllPageStickText}</span>
                  </div>
                  <div className="link-box inline-button-position">
                    <a className="theme-btn btn-style-two" onClick={handleShow}>
                      <i className="btn-curve"></i>
                      <span className="btn-title">Enquire Now</span>
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
              ) : null}
            </>
          )}
        </div>
      )}
      <Modal show={show}>
        <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </div>
  );
};

export default StickyData;
