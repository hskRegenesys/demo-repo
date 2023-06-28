import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Carousel } from "antd";
const CourseCertificate = ({ courseDetails }) => {
  const {
    certificateTitle,
    certificateSubTitle,
    certificateSubSubTitle,
    certificateListPara,
    certificateListTitle,
    certificateSkillList,
    certificateRolesList,
    CertificateImage,
  } = courseDetails?.courseCertificate;
  const [showImage, setShowImage] = useState(false);
  const toggleModal = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="certificate-row">
      <div className="row">
        <div className="col-lg-6">
          <h2>{certificateTitle}</h2>
          <div className="certificate-content">
            <strong>{certificateSubTitle}</strong>
            <span>{certificateSubSubTitle}</span>
            <span>{certificateListTitle}</span>
            <ul>
              {certificateSkillList?.map((item) => (
                <li>
                  <NavigateNextIcon />
                  {item}
                </li>
              ))}
            </ul>
            <span>{certificateListPara}</span>
            <ul>
              {certificateRolesList?.map((item) => (
                <li>
                  <NavigateNextIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="certificate-sample">
            <div className="certificate-image">
              <Carousel
                autoplaySpeed={2000}
                slidesToShow={1}
                slidesToScroll={1}
                dots={false}
                autoplay={true}
                arrows={true}
                infinite
                nextArrow={<ChevronRight fontSize="large" />}
                prevArrow={<ChevronLeft fontSize="large" />}
                swipeToSlide={true}
              >
                {CertificateImage?.map((image) => (
                  <figure className="image-box">
                    <Image
                      src={`/assets/images/background/${image}`}
                      layout="intrinsic"
                      width="550"
                      height="394"
                      alt="DR certificate"
                    />
                  </figure>
                ))}
              </Carousel>
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
