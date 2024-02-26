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
        <h2 className={Styles.bigCardHeading}>{data.heading}</h2>
        <h2 className={Styles.bigCardTitle}>{data.title}</h2>
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
