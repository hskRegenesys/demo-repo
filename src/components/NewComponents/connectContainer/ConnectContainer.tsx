import React from "react";
import styles from "./connectContainer.module.css";
import RequestForm from "../requestForm/RequestForm";
import connectContainerData from "../../../data/newComponentData/commonComponentData/ConnnectContainerData";
import Image from "next/image";
import StudentYoutubeVideos from "../studentYoutubeVideos/StudentYoutubeVideos";
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
    vectorWhiteIcon,
    whiteFilledStarIcon,
    discountIcon,
  } = connectContainerData;

  return (
    <>
      <div className={styles.connectContainer}>
        <div className={styles.containerContact}>
          <div className={styles.leftSection}>
            <h2 className={styles.heading}>{connectContainerHeader}</h2>
            <h2 className={styles.title}>{connectContainerTittle}</h2>
            <ul className={styles.textList}>
              <div className={styles.iconContainer}>
                {connectContainerText.map((text, index) => (
                  <div key={index} className={styles.icontext}>
                    <div className={styles.icon}>
                      <Image
                        src={
                          index === 0
                            ? vectorWhiteIcon
                            : index === 1
                            ? whiteFilledStarIcon
                            : discountIcon
                        }
                        alt={`Icon ${index + 1}`}
                        width={20}
                        height={20}
                      />
                    </div>

                    {index < connectContainerText?.length - 1 && (
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
      <StudentYoutubeVideos />
    </>
  );
};

export default ConnectContainer;
