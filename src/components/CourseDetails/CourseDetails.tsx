import { processOne } from "@/data/courseDetails";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

const ProcessOne = () => {
  return (
    <section className="process-one">
      <div className="FluidSection">
        {processOne.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={7}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>
                    {title} <span className="dot">.</span>
                  </h2>
                </div>
                <p className="process-one__summery">{text}</p>

                <div className="product-details__buttons">
                  <a className="theme-btn btn-style-two">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Enquire now</span>
                  </a>

                  <a className="theme-btn btn-style-four">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Download Brouchure</span>
                  </a>
                </div>

                <ul className="list-unstyled process-one__list">
                  {lists.map((text, i) => (
                    <li key={i}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col md={5} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={`/assets/images/update-01-10-2021/${image}`
                  }
                  alt=""
                />
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default ProcessOne;
