import React, { useState } from "react";
import { Col, Image, Modal, Row } from "react-bootstrap";
import ModalPopup from "../Modal/ModalPopup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const ProcessOne = ({ courseDetails }: any) => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  return (
    <section className="process-one">
      <div className="FluidSection">
        {courseDetails?.processOne?.map(
          ({ id, image, title, text, lists }: any) => (
            <Row key={id}>
              <Col md={7}>
                <div className="process-one__content">
                  <div className="sec-title">
                    <h1>
                      {title} <span className="dot">.</span>
                    </h1>
                  </div>
                  <p className="process-one__summery">{text}</p>

                  <div className="product-details__buttons">
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

                  <ul className="list-unstyled process-one__list">
                    {lists?.map((text: string, i: number) => (
                      <li key={i}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col md={5} className="process-one__image__column">
                <div className="process-one__image animated fadeInLeft">
                  <Image
                    src={`/assets/images/update-01-10-2021/${image}`}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          )
        )}
      </div>
      <Modal show={show}>
        <ModalPopup setShows={setShow} title={title} query={router?.query} />
      </Modal>
    </section>
  );
};

export default ProcessOne;
