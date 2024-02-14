import React, { useState, useEffect, useRef } from "react";
import Styles from "./YoutubeVidioPopup.module.css";

interface YoutubeVidioPopupProps {
  onClose: () => void;
  isVisibleVidio: boolean;
  youtubeVideoLink: string;
}

const YoutubeVidioPopup: React.FC<YoutubeVidioPopupProps> = ({
  isVisibleVidio,
  onClose,
  youtubeVideoLink,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const closePopup = () => {
    onClose();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisibleVidio) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on the body
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = ""; // Restore scrolling on the body
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is restored on unmount
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisibleVidio]);

  return (
    <>
      {isVisibleVidio && (
        <div
          className={`${Styles.PopupContainer} ${Styles.visible}`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className={`${Styles.Popup} ${Styles.visible}`} ref={popupRef}>
            <div className={Styles.videoPopup}>
              <span className={Styles.CloseButton} onClick={closePopup}>
                &times;
              </span>
              <iframe
                className={Styles.iFrame}
                allow="autoplay; encrypted-media"
                src={youtubeVideoLink}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeVidioPopup;
