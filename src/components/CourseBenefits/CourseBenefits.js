import { courseBenefits } from "@/data/courseBenefits";
import React, { useState } from "react";
import SingleCourseBenefits from "./SingleCourseBenefits";
import { Col, Image, Row } from "react-bootstrap";
import CourseBenefitsMobile from "@/components/CourseBenefitsMobile/CourseBenefitsMobile";

const CourseBenefits = ({ courseDetails }) => {
  const { title, tabBtns, tabsContents, desc } = courseDetails?.courseBenefits;
  const [current, setCurrent] = useState("tab-1");

  return (
    <section className="we-work-section">
      <div className="FluidSection">
        <Row className="mobile-hide">
          <Col md={4}>
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image
                  src="/assets/images/background/career-support.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="sec-title">
              <h2>
                {title}
                <i className="arrow-sign-left"></i>
              </h2>
            </div>
            <p>{desc}</p>
            <div className="work-tabs tabs-box">
              <ul className="tab-btns tab-buttons clearfix">
                {tabBtns?.map(({ id, title }) => (
                  <li
                    onClick={() => setCurrent(id)}
                    key={id}
                    className={`tab-btn${current === id ? " active-btn" : ""}`}
                  >
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
              <div className="tabs-content">
                {tabsContents?.map((work) => (
                  <SingleCourseBenefits
                    key={work.id}
                    work={work}
                    current={current}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mobile-show desktop-hide">
          <Col>
          <div className="sec-title">
              <h2>
                {title}
                </h2>
            </div>
            <p>{desc}</p>
            <CourseBenefitsMobile />
            </Col>
        </Row>
      </div>
    </section>
  );
};

export default CourseBenefits;
