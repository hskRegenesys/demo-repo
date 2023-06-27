import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const CourseCertificate = ({ courseDetails }) => {
  // const { title, subTitle } = courseDetails?.courseCertificate;
  const [showImage, setShowImage] = useState(false);
  const toggleModal = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="certificate-row">
      <div className="row">
        <div className="col-lg-6">
          <h2>Masterful Certification in Digital Marketing Fundamentals</h2>
          <div className="certificate-content">
            <strong>
              Unleash Your Digital Marketing Potential with Digital Regenesys’s
              Digital Marketing course.
            </strong>
            <span>
              With our Digital Marketing programme, you can gain the skills and
              knowledge to stay ahead in the competition by working on projects,
              simulations, and cases.
            </span>
            <span>With Digital Marketing Certificate, you will get:</span>
            <ul>
              <li>
                <NavigateNextIcon />
                International Recognition
              </li>
              <li>
                <NavigateNextIcon /> Industry-Relevant Curriculum
              </li>
              <li>
                <NavigateNextIcon /> Hands-on Experience
              </li>
              <li>
                <NavigateNextIcon /> Tools and Technologies
              </li>
              <li>
                <NavigateNextIcon /> Data-Driven Decision Making
              </li>
            </ul>
            <span>
              Our Digital Marketing Certificate will open doors to various roles
              for you, whether you are a fresher, graduate or experienced
              professional.
            </span>
            <ul>
              <li>
                <NavigateNextIcon /> Digital Marketing Specialist
              </li>
              <li>
                <NavigateNextIcon /> Social Media Manager
              </li>
              <li>
                <NavigateNextIcon /> PPC Specialist
              </li>
              <li>
                <NavigateNextIcon /> Email Marketing Specialist
              </li>
              <li>
                <NavigateNextIcon /> E-commerce Specialist
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="certificate-sample">
            <div className="certificate-image">
              <Image
                src="/assets/images/background/DR-Sample_certificate.jpg"
                layout="intrinsic"
                width="550"
                height="394"
                alt="DR certificate"
              />

              <a href="javascript:void(0)" onClick={toggleModal}>
                <ZoomInOutlinedIcon /> Click to zoom
              </a>
            </div>
            <div className="modal-modify">
              <Modal show={showImage} onHide={toggleModal} centered>
                <Modal.Body>
                  <img
                    src="/assets/images/background/DR-Sample_certificate.jpg"
                    alt="Certificate Image"
                    className="img-fluid"
                  />
                  <div className="closeBtn">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
            <div className="certificate-bg">
              <Image
                src="/assets/images/background/shape-certificate.png"
                layout="intrinsic"
                objectFit="cover"
                width="450"
                height="559"
                alt="DR certificate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
