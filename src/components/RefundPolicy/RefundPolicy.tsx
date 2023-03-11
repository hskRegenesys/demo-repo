import React from "react";
import { refundPolicy } from "@/data/refundPolicy";
import { Col, Row } from "react-bootstrap";

const {
  title1,
  paragraph1,
  title2,
  list1,
  list2,
  title3,
  list3,
  list4,
  paragraph2,
} = refundPolicy;

const RefundPolicy = () => {
  return (
    <section className="privacy-bg">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={12}>
            <div className=" p-0 privacy-policy">
              <h1 className="page-head">Refund Policy</h1>
              <h6>{title1}</h6>
              <p>{paragraph1}</p>

              <h6>{title2}</h6>

              <ul>
                <li>
                  <i className="far fa-check-circle"></i>
                  {list1}
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  {list2}
                </li>
              </ul>
              <h6>{title3}</h6>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i>
                  {list3}
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  {list4}
                </li>
              </ul>
              <p>{paragraph2}</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default RefundPolicy;
