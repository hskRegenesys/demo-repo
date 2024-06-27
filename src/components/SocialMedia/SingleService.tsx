import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleService = (props: any) => {
  const { href, href2, icon, title } = props.service;

  return (
    <Col xl={3} lg={6} md={6} sm={12} className="service-block-two">
      <div className="inner-box  fadeInUp">
        <a href={href} target="_blank" rel="noreferrer">
          <div className="icon-box">
            <span className={icon}></span>
            <TextSplit text={title} />
          </div>

          <div className="link-box">
            <span className="fa fa-arrow-right"></span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default SingleService;
