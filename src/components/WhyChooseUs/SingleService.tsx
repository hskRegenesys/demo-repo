import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleService = ({ service = {icon:'', title:''} }) => {
  const { icon, title } = service;

  return (
    <Col xl={3} lg={6} md={6} sm={12} className="service-block-two">
      <div className="inner-box animated fadeInUp">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <span className={icon}></span>
        </div>
        <h5>
          <a href="#">
            <TextSplit text={title} />
          </a>
        </h5>

        <div className="link-box">
          <a href="#">
            <span className="fa fa-arrow-right"></span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
