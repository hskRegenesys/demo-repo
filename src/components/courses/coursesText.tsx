import { digitalMarketingText, dataScienceCourse } from "@/data/course";
import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const CourseText = ({ page }: any) => {
  const { title, pagedesc, imagearrow } =
    page === "Data-Science" ? dataScienceCourse : digitalMarketingText;
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

export default CourseText;
