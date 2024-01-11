import React, { useEffect, useState } from "react";
import Styles from "./popupForm.module.css";
import RequestForm from "../requestForm/RequestForm";

interface PopupFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isVisible, onClose }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const closePopup = () => {
    setIsPopupVisible(false);
    onClose();
  };

  const handleFormSubmit = () => {
    closePopup(); // Close the popup when the form is submitted
  };

  useEffect(() => {
    if (isVisible) {
      setIsPopupVisible(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling on the body
    } else {
      setIsPopupVisible(false);
      document.body.style.overflow = ""; // Restore scrolling on the body
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is restored on unmount
    };
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
                  <RequestForm onFormSubmit={handleFormSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
