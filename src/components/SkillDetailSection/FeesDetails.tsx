import { socials } from "@/data/header";
import { productDetails } from "@/data/productDetails";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image, title, price, text, text2, text3, subTitle, admissionText, termsConditions } =
  productDetails;

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="product-details">
      <div className="auto-container">
        <Row>

          <Col lg={12} xl={6}>
            <div className="product-details__top">
              <h3 className="product-details__title">{title}</h3>
              <h5 className="product-details__subtitle">{subTitle}</h5>
            </div>

            <div className="product-details__content">
              <p>{text}</p>
              <p>
                <TextSplit text={text2} />
              </p>
              <p>
                <TextSplit text={text3} />
              </p>
            </div>
          </Col>

          <Col lg={12} xl={6}>

            <div className="product-details__social">
              <h5 className="product-details__subtitle">Total Admission Fee</h5>

              <div className="flags">
                <Link href="/">
                  <a className="theme-btn btn-style-two">
                    <Image src={image.src} alt="" />
                  </a>
                </Link>

                <Link href="/">
                  <a className="theme-btn btn-style-two">
                    <Image src={image.src} alt="" />
                  </a>
                </Link>

                <Link href="/">
                  <a className="theme-btn btn-style-two">
                    <Image src={image.src} alt="" />
                  </a>
                </Link>

                <Link href="/">
                  <a className="theme-btn btn-style-two">
                    <Image src={image.src} alt="" />
                  </a>
                </Link>
              </div>
            </div>

            <p className="product-details__price"> &#8377; {price} + GST</p>

          
            <Link href="/">
              <a className="refer-link">
                Refer a friend
              </a>
            </Link>

            <p>{termsConditions}</p>
            <p>{admissionText}</p>
            <div className="product-details__buttons">
              <Link href="/">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Enroll Now</span>
                </a>
              </Link>
            </div>
          </Col>


        </Row>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
