import React, { forwardRef } from "react";
import Image from "next/image";

const SingleTestimonialFive = (props: any) => {
  const { image, text, name } = props.testimonial;

  return (
    <div className="item" style={{ userSelect: "none" }}>
      <div className="testimonials-five-card">
        {/* <Image src={image} alt="" className="testimonials-five-card__image" /> */}
        <Image
          priority={true}
          className="testimonials-five-card__image"
          src={image}
          alt=""
          layout="intrinsic"
          width="122"
          height="122"
        />
        <p className="testimonials-five-card__text">{text}</p>
        <h3 className="testimonials-five-card__title">{name}</h3>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonialFive);
