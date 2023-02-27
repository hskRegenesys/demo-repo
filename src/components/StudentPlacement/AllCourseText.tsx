import { allCourse } from "@/data/aboutUsDescriptionData";
import Link from "next/link";
import React, { useState } from 'react';
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import LiveSection from "@/components/LiveSection/LiveSection";
import Modal from 'react-bootstrap/Modal';
import ModalPopup from "@/components/Modal/ModalPopup";

const { title, pagedesc, imagearrow, text1, text2, highlight } = allCourse;

const AllCourseText = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <section className="all-course-section all-course-wave">
      <div className="FluidSection">
        <Col md={12} lg={12}>
          <div className="all-course-bg"></div>
        </Col>
      </div>

      <div className="auto-container">
        <div className="content-box text-left">
          <div className="sign-arrow">
            <Image src={imagearrow} alt="" />
          </div>
          <h1 className="page-head">
            <TextSplit text={title} />
          </h1>
          <h6 className="desc">{pagedesc}</h6>

          <Link href="">
            <a className="theme-btn btn-style-two" onClick={handleShow}>
              <i className="btn-curve"></i>
              <span className="btn-title">Request a Call</span>
            </a>
          </Link>
        </div>
      </div>
    </section>

<Modal show={show}>
<ModalPopup setShows={setShow} />
</Modal>
</>

  );
};

export default AllCourseText;
