import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

const GalleryItem = (props: any) => {
  const { item = {} } = props;
  const { image, title, tagline, filter } = item;

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className={`gallery-item position-absolute ${filter.join(" ")}`}
    >
      <div className="inner-box">
        <figure className="image">
          {/* <Image
            src={`/assets/images/gallery/${image}`}
            alt=""
          /> */}
          <Image
            priority={true}
            src={`/assets/images/gallery/${image}`}
            layout="responsive"
            width="274"
            height="182"
            alt=""
          />
        </figure>
        <a className="lightbox-image overlay-box"></a>
        <div className="cap-box">
          <div className="cap-inner">
            <div className="cat">
              <span>{tagline}</span>
            </div>
            <div className="title">
              <h5>
                <Link href="/portfolio-single">{title}</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default GalleryItem;
