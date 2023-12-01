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

  const blinkingStyle = {
    animation: "blink 1s infinite",
  };

  return (
    <div>
      {isShown && (
        <div className="sticky-form-header">
          {AllPageStickText && (
            <>
              {!isHide ? (
                <div className="sticky-form">
                  <div className="sticky-contant">
                    <div style={{ display: "flex", textAlign: "left" }}>
                      {/* <span
                      className="persent-offer"
                      style={{
                        ...blinkingStyle,
                        animationName: "blinkKeyframes",
                        animationDuration: "2s",
                        fontSize: '20px',
                        fontWeight: '900',
                        margin : '0px 10px'
                        
                      }}
                    >
                      30%
                    </span> */}
                      <span> {AllPageStickText}</span>
                    </div>
                  </div>
                  <div className="Stacky-btn" onClick={handleShow}>
                    <span className="">Enquire Now</span>
                  </div>
                  {/* <div className="closeBtn">
                    <button
                      onClick={handleClick}
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                    ></button>
                  </div> */}
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
      <style>
        {`
          @keyframes blinkKeyframes {
            0% {
              color: yellow;
            }
                       100% {
              color: white;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StickyData;
