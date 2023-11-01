import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ModalPopup from "../Modal/ModalPopup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Image from "next/image";

const ProcessOne = ({ courseDetails, brochureName }: any) => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const [title, setTitle] = useState("");

  return (
    <section className="process-one">
      <div className="FluidSection">
        {courseDetails?.processOne?.map(
          ({ id, image, youtubeUrl, title, text, lists }: any) => (
            <Row key={id}>
              <Col md={7} className="tablet-fix">
                <div className="process-one__content">
                  <div className="sec-title">
                    <h1 className="arrow-right-bottom">
                      <i className="arrow-sign-right"></i>
                      <span className="page-head">{title}</span>
                    </h1>
                  </div>

                  <Col
                    xs={12}
                    className="process-one__image__column desktop-hide"
                  >
                    <div className="process-one__image animated fadeInLeft">
                      {/* <Image
                        src={`/assets/images/update-01-10-2021/${image}`}
                        alt=""
                      /> */}
                      <div className="iframe-border">
                        <iframe
                          width="320"
                          height="330"
                          src={youtubeUrl}
                          title="YouTube video player"
                        ></iframe>
                      </div>
                      <div className="btn-customize-programme-wise">
                        <strong className="text-white text-center d-block">
                          Enrol Now & Get a 30% Discount
                        </strong>
                        <a
                          className="theme-btn btn-style-two"
                          onClick={() => {
                            setShow(!show);
                            setTitle("Enquire now");
                          }}
                        >
                          <i className="btn-curve"></i>
                          <span className="btn-title">Enrol Now</span>
                        </a>
                      </div>
                    </div>
                  </Col>

                  <p className="process-one__summery mobile-hide">{text}</p>

                  <ul className="list-unstyled process-one__list desktop-hide">
                    {lists?.map((text: string, i: number) => (
                      <li key={i}>
                        <i className="fa fa-check mr-3" aria-hidden="true"></i>
                        {text}
                      </li>
                    ))}
                  </ul>

                  <div className="product-details__buttons mobile-product-buttons">
                    <a
                      className="theme-btn btn-style-two"
                      onClick={() => {
                        setShow(!show);
                        setTitle("Enquire now");
                      }}
                    >
                      <i className="btn-curve"></i>
                      <span className="btn-title">Enquire now</span>
                    </a>

                    <a
                      className="theme-btn btn-style-four"
                      onClick={() => {
                        setShow(!show);
                        setTitle("Download Brochure");
                      }}
                    >
                      <i className="btn-curve"></i>
                      <span className="btn-title">Download Brochure</span>
                    </a>
                  </div>

                  <ul className="list-unstyled process-one__list mobile-hide">
                    {lists?.map((text: string, i: number) => (
                      <li key={i}>
                        <i className="fa fa-check mr-3" aria-hidden="true"></i>
                        {text}
                      </li>
                    ))}
                  </ul>

                  <p className="process-one__summery desktop-hide">{text}</p>
                </div>
              </Col>

              <Col md={5} className="process-one__image__column mobile-hide">
                <div className="process-one__image animated fadeInLeft">
                  {/* <Image
                    src={`/assets/images/update-01-10-2021/${image}`}
                    alt=""
                  /> */}
                  {/* <Image
                    priority={true}
                    src={`/assets/images/update-01-10-2021/${image}`}
                    layout="intrinsic"
                    width="500"
                    height="596"
                    alt=""
                  /> */}
                  <div className="iframe-border">
                    <iframe
                      width="440"
                      height="440"
                      src={youtubeUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>

                  <div className="btn-customize-programme-wise">
                    <strong className="text-white text-center d-block">
                      Enrol Now & Get a 30% Discount
                    </strong>
                    <div className="product-details__buttons mobile-product-buttons d-block text-center">
                      <a
                        className="theme-btn btn-style-two"
                        onClick={() => {
                          setShow(!show);
                          setTitle("Enquire now");
                        }}
                      >
                        <i className="btn-curve"></i>
                        <span className="btn-title">Enrol Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )
        )}
      </div>
      <Modal show={show}>
        <ModalPopup
          setShows={setShow}
          thankYouShow={setThankYouShow}
          title={title}
          query={router?.query}
          brochureName={brochureName}
          courseDetails={courseDetails}
        />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </section>
  );
};

export default ProcessOne;
