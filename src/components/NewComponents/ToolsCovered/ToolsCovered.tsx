import React from "react";
import Styles from "./ToolsCovered.module.css";
import Image from "next/image";
interface ToolCoveredData {
  heading: string;
  title: string;
  images: { img: string; alt: string }[];
}

interface ToolCoveredCardProps {
  data: ToolCoveredData;
}

const ToolCoveredCard: React.FC<ToolCoveredCardProps> = ({ data }) => {
  return (
    <div className={Styles.toolCard}>
      <div className={Styles.bigCard}>
        <p className="main-heading">{data.heading}</p>
        <h2 className="main-sub-heading">{data.title}</h2>
        <div className={Styles.imagesContainer}>
          {data.images.map((image, index) => (
            <div key={index} className={Styles.imageCard}>
              <Image
                src={image.img}
                alt="Tools Covered"
                title={image.alt}
                width={148}
                height={82}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolCoveredCard;
