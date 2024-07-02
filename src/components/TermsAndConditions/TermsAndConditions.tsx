import React from "react";
import { termsConditions } from "@/data/termsConditions";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const { description, listItems, closingDescription } = termsConditions;

const TermsAndConditions = () => {
  return (
    <section className="privacy-bg">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={12}>
            <div className=" p-0 privacy-policy">
              <h1 className="page-head">Terms and Condition</h1>
              <div className="effective-date">
                <strong>Effective Date: </strong>
                <span>
                  01<sup>st</sup> June, 2023
                </span>
              </div>
              <p>{description}</p>

              <div className="terms-list-items">
                <ul>
                  {listItems?.map((items, index) => (
                    <li key={index}>
                      <i className="far fa-check-circle" />
                      <p dangerouslySetInnerHTML={{ __html: items }} />
                    </li>
                  ))}
                </ul>
              </div>
              <p>{closingDescription}</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TermsAndConditions;
