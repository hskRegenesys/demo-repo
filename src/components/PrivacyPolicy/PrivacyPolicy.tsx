import React from "react";
import { privacyPolicy } from "@/data/privacyPolicy";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const {
  listTitleOne,
  listTitleTwo,
  listTitleThree,
  listTitleFour,
  listTitleFive,
  listTitleSix,
  listTitleSeven,
  listTitleEight,
  listTitleNine,
  listGroupOne,
  listGroupTwo,
  listGroupThree,
  listGroupFour,
  listGroupFive,
  listGroupSix,
  listGroupSeven,
  listGroupEight,
  listGroupNine,
  contactDetailsName,
  contactDetailsAddress,
  contactDetailsEmail,
  contactDetailsDescriptionOne,
  contactDetailsDescriptionTwo,
} = privacyPolicy;

const PrivacyPolicy = () => {
  return (
    <section className="privacy-bg">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={12}>
            <div className="p-0 privacy-policy">
              <h1 className="page-head">Privacy and Policy</h1>
              <div className="effective-date">
                <strong>Effective Date: </strong>
                <span>
                  13<sup>th</sup> June, 2024
                </span>
              </div>
              <h6>{listTitleOne}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupOne?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleTwo}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupTwo?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleThree}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupThree?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleFour}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupFour?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleFive}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupFive?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleSix}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupSix?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleSeven}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupSeven?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleEight}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupEight?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>

              <h6>{listTitleNine}</h6>
              <div className="terms-list-items">
                <ul>
                  {listGroupNine?.map((items) => (
                    <li>
                      <i className="far fa-check-circle"></i> {items}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="privacy-contact-details">
                <div>
                  <p>{contactDetailsName}</p>
                  <span>{contactDetailsAddress}</span>
                  <a href="mailto:info.digital@regenesys.net">
                    Email: {contactDetailsEmail}
                  </a>
                  <p>{contactDetailsDescriptionOne}</p>
                  <p>{contactDetailsDescriptionTwo}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
