import React, { useState, useEffect, useContext } from "react";
import { productDetails } from "@/data/productDetails";
import { courseService } from "src/services";
import Link from "next/link";
import { Col, Image, Modal, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import ModalPopup from "../Modal/ModalPopup";

const ProductDetailsPage = ({ courseDetails, courseId }: any) => {
  const {
    falgsa,
    flagnig,
    flagind,
    flagus,
    title,
    price,
    certifiedText1,
    certifiedText2,
    certifiedText3,
    subTitle,
    certifiedTitle1,
    certifiedTitle2,

    certifiedTitle3,
    admissionText,
    termsConditions,
  } = courseDetails?.productDetails;
  const [coursePriceDetails, setcoursePrice] = useState([]);
  const [priceDetails, setPriceDetails] = useState<any>(0);
  const [show, setShow] = useState(false);

  const getData = async () => {
    let courseListResponse = await courseService.allcoursePrice(courseId);
    setcoursePrice(courseListResponse);
    console.log("CountryPrice", courseListResponse);
  };

  useEffect(() => {
    if (coursePriceDetails?.length) {
      CoursePriceChange(2);
    }
  }, [coursePriceDetails]);
  useEffect(() => {
    if (courseId) {
      getData();
    }
  }, [courseId]);

  function CoursePriceChange(id: number) {
    if (coursePriceDetails?.length) {
      coursePriceDetails?.forEach(function (val: any) {
        if (val?.coursePrices?.length) {
          val?.coursePrices?.forEach(function (item: any) {
            if (item.country_id === id) {
              setPriceDetails(item);
            }
          });
        }
      });
    }
  }

  return (
    <section className="product-details">
      <div className="auto-container">
        <Row>
          <Col lg={12} xl={12}>
            <div className="product-details__top">
              <h3 className="product-details__title">
                {title}
                <i className="arrow-sign-right"></i>
              </h3>
              <h5 className="product-details__subtitle mt-3">{subTitle}</h5>
            </div>
          </Col>

          <Col lg={12} xl={6}>
            <div className="product-details__content get__certified__section">
              <div className="subTitle">
                <i className="flaticon-check"></i>
                {certifiedTitle1}
              </div>
              <p>{certifiedText1}</p>
              <div className="subTitle">
                <i className="flaticon-check"></i>
                {certifiedTitle2}
              </div>
              <p>{certifiedText2}</p>
              <div className="subTitle">
                <i className="flaticon-check"></i>
                {certifiedTitle3}
              </div>
              <p>{certifiedText3}</p>
            </div>
          </Col>

          <Col lg={12} xl={6}>
            <div className="product-details__flag">
              <h5 className="product-details__subtitle">Total Admission Fee</h5>
              <div className="flags">
                <a onClick={() => CoursePriceChange(2)}>
                  <Image src={flagind} alt="India" />
                </a>

                <a onClick={() => CoursePriceChange(1)}>
                  <Image src={falgsa} alt="South Africa" />
                </a>

                <a onClick={() => CoursePriceChange(3)}>
                  <Image src={flagnig} alt="Nigeria" />
                </a>
              </div>
            </div>

            <h2 className="product-details__price">{`${priceDetails?.country?.currency} ${priceDetails?.price}`}</h2>

            <Link href="/">
              <a className="refer-link">Refer a friend</a>
            </Link>

            <p>{termsConditions}</p>
            <p>{admissionText}</p>
            <div className="product-details__buttons">
              <a
                className="theme-btn btn-style-two"
                onClick={() => setShow(!show)}
              >
                <i className="btn-curve"></i>
                <span className="btn-title">Enroll Now</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Modal show={show}>
        <ModalPopup setShows={setShow} />
      </Modal>
    </section>
  );
};

export default ProductDetailsPage;
