// YoutubeVidioPopup.tsx
import React, { useState, useEffect } from "react";
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
  const [isYoutubePopupVisible, setIsYoutubePopupVisible] = useState(false);

  const closePopup = () => {
    setIsYoutubePopupVisible(false);
    onClose();
  };

  useEffect(() => {
    setIsYoutubePopupVisible(isVisibleVidio);
  }, [isVisibleVidio]);

  return (
    <>
      {isVisibleVidio && (
        <div
          className={`${Styles.PopupContainer} ${
            isYoutubePopupVisible ? Styles.visible : ""
          }`}
          style={{
            backgroundColor: isYoutubePopupVisible
              ? "rgba(0, 0, 0, 0.5)"
              : "white",
          }}
        >
          <div
            className={`${Styles.Popup} ${
              isYoutubePopupVisible ? Styles.visible : ""
            }`}
          >
            <span className={Styles.CloseButton} onClick={closePopup}>
              &times;
            </span>
            <div className={Styles.videoPopup}>
              <span className={Styles.CloseButton} onClick={closePopup}>
                &times;
              </span>
              <iframe
                title="YouTube Video Popup"
                width="700"
                height="420"
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
