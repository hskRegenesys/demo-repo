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
  const [imageName, setImageName] = useState(false);
  const toggleModal = (imageName) => {
    setImageName(imageName);
    setShowImage(!showImage);
  };
  const CertificateModal = () => {
    return (
      <div className="modal-modify">
        <Modal show={showImage} onHide={toggleModal} centered>
          <button
            onClick={toggleModal}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
          <Modal.Body>
            <img
              src={`/assets/images/certificate/${imageName}`}
              alt="Certificate Image"
              className="img-fluid"
            />

            <div className="closeBtn"></div>
          </Modal.Body>
        </Modal>
      </div>
    );
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
                autoplaySpeed={3000}
                slidesToShow={1}
                slidesToScroll={1}
                dots={false}
                autoplay={true}
                arrows={false}
                infinite
                prevArrow={<ChevronLeft fontSize="large" />}
                nextArrow={<ChevronRight fontSize="large" />}
                swipeToSlide={true}
              >
                {CertificateImage?.map((image) => (
                  <>
                    <figure className="image-box">
                      <Image
                        src={`/assets/images/certificate/${image}`}
                        layout="intrinsic"
                        width="550"
                        height="394"
                        alt="DR certificate"
                        name={CertificateImage?.imageName}
                      />
                    </figure>
                    <a
                      href="javascript:void(0)"
                      onClick={() => toggleModal(image)}
                    >
                      <ZoomInOutlinedIcon /> Click to zoom
                    </a>
                  </>
                ))}
              </Carousel>
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
      <CertificateModal />
    </div>
  );
};

export default CourseCertificate;
