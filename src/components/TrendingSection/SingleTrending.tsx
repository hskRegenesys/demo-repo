import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTrending = ({
  testimonial = {image:"", name:"", designation:"", tagline:[]},
  className = "",
  userSelect = false,
}) => {
  const { image, name, designation, tagline } = testimonial;

  return (
    <div
      style={{ userSelect: userSelect ? "auto" : "none" }}
      className={`testi-block ${className}`}
    >
      <div className="inner">
        <div className="icon">
          <i className="fa fa-share-alt" aria-hidden="true"></i>
        </div>
        <div className="info">
          <div className="image">
            <Link href="/team">
              <a>
                <Image
                  src={`/assets/images/gallery/${image}`}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="name">{name}</div>

          <div className="cat">
            <ul className="about-seven__list list-unstyled">
              {tagline?.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTrending);
