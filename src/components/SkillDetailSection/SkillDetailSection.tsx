import React from "react";

const FeesDetails = ({ courseDetails }: any) => {
  const { title, text1 } = courseDetails?.productDescription;
  return (
    <section className="product-description">
      <div className="auto-container">
        <h2 className="product-description__title mobile-hide">{title}</h2>
        <p className="product-description__text mobile-hide">{text1}</p>
      </div>
    </section>
  );
};

export default FeesDetails;
