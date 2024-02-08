import React from "react";
import styles from "./connectContainer.module.css";
import RequestForm from "../../HomePageNew/requestForm/RequestForm";
import connectContainerData from "../../../data/newComponentData/commonComponentData/ConnnectContainerData";

interface ConnectContainerProps {
  onFormSubmit: () => void;
}

const ConnectContainer: React.FC<ConnectContainerProps> = ({
  onFormSubmit,
}) => {
  const {
    connectContainerHeader,
    connectContainerTittle,
    connectContainerText,
    icon1,
    icon2,
    icon3,
  } = connectContainerData;

  return (
    <div className={styles.connectContainer}>
      <div className={styles.leftSection}>
        <div className={styles.heading}>{connectContainerHeader}</div>
        <div className={styles.title}>{connectContainerTittle}</div>
        <ul className={styles.textList}>
          <div className={styles.iconContainer}>
            {connectContainerText.map((text, index) => (
              <div key={index} className={styles.icontext}>
                <img
                  src={index === 0 ? icon1 : index === 1 ? icon2 : icon3}
                  alt={`Icon ${index + 1}`}
                  className={styles.icon}
                />

                {index < connectContainerText.length - 1 && (
                  <div className={styles.dottedLine}></div>
                )}
                <br></br>
                <br></br>
              </div>
            ))}
          </div>
          <div className={styles.textContainer}>
            {connectContainerText.map((text, index) => (
              <div key={index} className={styles.textcontent}>
                <li>{text}</li>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <RequestForm onFormSubmit={onFormSubmit} />
      </div>
    </div>
  );
};

export default ConnectContainer;
