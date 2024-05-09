import React from "react";
import { refundPolicy } from "@/data/refundPolicy";
import { Col, Row } from "react-bootstrap";

const {
  heading,
  titleIntro,
  titleIntroParaph,
  titleAdmissionFee,
  titleAdmissionFeeParaph,
  titleRefundStructure,
  list1,
  list2,
  paragraph1,
  details,
  paragraph2,
} = refundPolicy;

const RefundPolicy = () => {
  return (
    <section className="privacy-bg">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={12}>
            <div className=" p-0 privacy-policy">
              <h1 className="page-head">{heading}</h1>
              <h6>{titleIntro}</h6>
              <p>{titleIntroParaph}</p>

              <h6>{titleAdmissionFee}</h6>
              <p>{titleAdmissionFeeParaph}</p>

              <h6>{titleRefundStructure}</h6>
              <ul>
                {details.map((item) => {
                  return (
                    <li>
                      <i className="far fa-check-circle"></i>
                      {item.item}
                    </li>
                  );
                })}
              </ul>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default RefundPolicy;
