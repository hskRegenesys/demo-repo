import React from "react";

const FeesDetails = ({ courseDetails }: any) => {
  const { title, text1 } = courseDetails?.productDescription;
  return (
    <section className="product-description">
      <div className="auto-container">
        <h3 className="product-description__title">{title}</h3>
        <p className="product-description__text">{text1}</p>
      </div>
    </section>
  );
};

export default FeesDetails;
