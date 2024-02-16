import React from "react";
import Styles from "./ToolsCovered.module.css";

interface ToolCoveredData {
  heading: string;
  title: string;
  images: string[];
}

interface ToolCoveredCardProps {
  data: ToolCoveredData;
}

const ToolCoveredCard: React.FC<ToolCoveredCardProps> = ({ data }) => {
  return (
    <div className={Styles.toolCard}>
      <div className={Styles.bigCard}>
        <div className={Styles.bigCardHeading}>{data.heading}</div>
        <div className={Styles.bigCardTitle}>{data.title}</div>
        <div className={Styles.imagesContainer}>
          {data.images.map((image, index) => (
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
