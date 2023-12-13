import React, { useEffect, useState } from "react";
import Styles from "./popupForm.module.css";
import RequestForm from "../requestForm/RequestForm";

interface PopupDSProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupDS: React.FC<PopupDSProps> = ({ isVisible, onClose }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const closePopup = () => {
    setIsPopupVisible(false);
    onClose(); // Call the provided onClose callback
  };

  useEffect(() => {
    if (isVisible) {
      setIsPopupVisible(true);
      // document.body.style.overflow = "hidden";
    } else {
      setIsPopupVisible(false);
      // document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div
          className={`${Styles.PopupContainer} ${
            isPopupVisible ? Styles.visible : ""
          }`}
          style={{
            backgroundColor: isPopupVisible ? "rgba(0, 0, 0, 0.5)" : "white",
          }}
        >
          <div
            className={`${Styles.Popup} ${
              isPopupVisible ? Styles.visible : ""
            }`}
          >
            <span className={Styles.CloseButton} onClick={closePopup}>
              &times;
            </span>
            <div className={Styles.Content}>
              <div className={Styles.ImageContainer}>
                <img
                  src="/assets/images/HomeNew/Web - Modal.png"
                  alt="Popup Image"
                  className={Styles.WebImage}
                />
                <img
                  src="/assets/images/HomeNew/Mobile - Modal.png"
                  alt="Popup Image"
                  className={Styles.MobileImage}
                />
              </div>
              <div className={Styles.TextContainer}>
                <div className={Styles.Form}>
                  <RequestForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupDS;
