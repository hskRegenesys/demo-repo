import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  digitalMarketingText,
  dataScienceCourse,
  artificialIntelligenceCourse,
} from "@/data/course";
import Link from "next/link";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import ModalPopup from "../Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";

const CourseText = ({ page }: any) => {
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  let mainCourseData = {
    title: "",
    pagedesc: "",
    imagearrow: "",
  };
  if (page === "data-science") {
    mainCourseData = dataScienceCourse;
  } else if (page === "digital-marketing") {
    mainCourseData = digitalMarketingText;
  } else {
    mainCourseData = artificialIntelligenceCourse;
  }
  const { title, pagedesc, imagearrow } = mainCourseData;

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
            <h1 className="page-head">
              <TextSplit text={title} />
            </h1>
            <h6 className="desc">{pagedesc}</h6>

            <a className="theme-btn btn-style-two" onClick={handleShow}>
              <i className="btn-curve"></i>
              <span className="btn-title">Request a Call</span>
            </a>
          </div>
        </div>
      </section>
      <Modal show={show}>
        <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </>
  );
};

export default CourseText;
