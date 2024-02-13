import React from "react";
import ToolsCoveredData from "./ToolsCoveredData";
import Styles from "./ToolsCovered.module.css";

const ToolCoveredCard = () => {
  return (
    <div className={Styles.toolCard}>
      <div className={Styles.bigCard}>
        <div className={Styles.bigCardHeading}>{ToolsCoveredData.heading}</div>
        <div className={Styles.bigCardTitle}>{ToolsCoveredData.title}</div>
        <div className={Styles.imagesContainer}>
          {ToolsCoveredData.images.map((image, index) => (
            <div key={index} className={Styles.imageCard}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolCoveredCard;
