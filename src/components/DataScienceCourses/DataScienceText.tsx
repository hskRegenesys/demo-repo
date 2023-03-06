import { dataScienceText } from "@/data/dataScienceMain";
import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, pagedesc, imagearrow } = dataScienceText;

const DataScienceText = () => {
  return (
    <section className="all-course-section all-course-wave">
      <div className="FluidSection">
        <Col md={12} lg={12}>
          <div className="all-course-bg"></div>
        </Col>
      </div>

      <div className="auto-container">
        <div className="content-box text-left digital-marketing-text mt-5">
          <div className="sign-arrow">
            <Image src={imagearrow} alt="" />
          </div>
          <h3>
            <TextSplit text={title} />
          </h3>
          <h6 className="desc">{pagedesc}</h6>

          <Link href="">
            <a className="theme-btn btn-style-two">
              <i className="btn-curve"></i>
              <span className="btn-title">Request a Call</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataScienceText;
