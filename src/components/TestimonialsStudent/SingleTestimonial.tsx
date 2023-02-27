import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";
const defaultTestimonial = {
  image: "",
  name: "",
  text: "",
};
const SingleTestimonial = ({
  testimonial = { ...defaultTestimonial },
  className = "",
  userSelect = false,
}) => {
  const { image, name, text } = testimonial;

  return (
    <div
      style={{ userSelect: userSelect ? "auto" : "none" }}
      className={`testi-block ${className}`}
    >
      <div className="inner">
        <div className="icon">
          <span>“</span>
        </div>
        <div className="info">
          <div className="image">
            <Link href="/team">
              <a>
                <Image
                  src={`/assets/images/resource/${image}`}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="name">{name}</div>
          <div className="designation"></div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonial);
