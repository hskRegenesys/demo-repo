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
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={Styles.toolCard}>
      <div className={Styles.bigCard}>
        <h2 className={Styles.bigCardHeading}>{data.heading}</h2>
        <h2 className={Styles.bigCardTitle}>{data.title}</h2>
        <div className={Styles.imagesContainer}>
          {data.images.map((image, index) => (
            <div key={index} className={Styles.imageCard}>
              <Image
                src={`${imageUrl}Images/Tools/${image.img}`}
                // src={`/assets/images/clients/${image.img}`}
                alt={image.alt}
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
