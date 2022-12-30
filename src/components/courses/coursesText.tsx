import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { digitalMarketingText, dataScienceCourse } from "@/data/course";
import Link from "next/link";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import ModalPopup from "../Modal/ModalPopup";

const CourseText = ({ page }: any) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { title, pagedesc, imagearrow } =
    page === "Data-Science" ? dataScienceCourse : digitalMarketingText;
  return (
    <>
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

            <a className="theme-btn btn-style-two" onClick={handleShow}>
              <i className="btn-curve"></i>
              <span className="btn-title">Request a Call</span>
            </a>
          </div>
        </div>
      </section>
      <Modal show={show}>
        <ModalPopup setShows={setShow} />
      </Modal>
    </>
  );
};

export default CourseText;
