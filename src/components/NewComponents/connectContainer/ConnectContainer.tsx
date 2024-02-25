import React from "react";
import styles from "./connectContainer.module.css";
import RequestForm from "../requestForm/RequestForm";
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
      <div className={styles.containerContact}>
        <div className={styles.leftSection}>
          <h3 className={styles.heading}>{connectContainerHeader}</h3>
          <h2 className={styles.title}>{connectContainerTittle}</h2>
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
    </div>
  );
};

export default ConnectContainer;
