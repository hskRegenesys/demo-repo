import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTestimonialFive = (props: any) => {
  const { image, text, name } = props.testimonial;

  return (
    <div className="item" style={{ userSelect: "none" }}>
      <div className="testimonials-five-card">
        <Image src={image} alt="" className="testimonials-five-card__image" />
        <p className="testimonials-five-card__text">{text}</p>
        <h3 className="testimonials-five-card__title">{name}</h3>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonialFive);
