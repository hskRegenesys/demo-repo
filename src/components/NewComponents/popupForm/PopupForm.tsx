import React, { useEffect, useState } from "react";
import Styles from "./popupForm.module.css";
import RequestForm from "../requestForm/RequestForm";
import Image from "next/image";

interface PopupFormProps {
  isVisible: boolean;
  title?: string;
  CourseCode?: string;
  popupData: {
    PopupDesktop: string;
    PopupMobile: string;
  };
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({
  isVisible,
  onClose,
  popupData,
  title,
  CourseCode,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const imageUrl = `${process.env.awsImage_url}`;

  const closePopup = () => {
    setIsPopupVisible(false);
    onClose();
  };

  const handleFormSubmit = () => {
    closePopup();
  };

  useEffect(() => {
    if (isVisible) {
      setIsPopupVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsPopupVisible(false);
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
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
                <div className={Styles.WebImage}>
                  <Image
                    src={`${imageUrl}${popupData.PopupDesktop}`}
                    // src={popupData.PopupDesktop}
                    alt="Popup Image"
                    width={388}
                    height={500}
                  />
                </div>
                <div className={Styles.MobileImage}>
                  <Image
                    src={`${imageUrl}${popupData.PopupMobile}`}
                    // src={popupData.PopupMobile}
                    alt="Popup Image"
                    width={360}
                    height={210}
                  />
                </div>
              </div>
              <div className={Styles.TextContainer}>
                <div className={Styles.Form}>
                  <RequestForm
                    CourseCode={CourseCode}
                    onFormSubmit={handleFormSubmit}
                    title={title}
                  />
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
