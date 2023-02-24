import React, { useState, useEffect, useContext } from "react";
import { productDetails } from "@/data/productDetails";
import { courseService } from "src/services";
import Link from "next/link";
import { Col, Image, Modal, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import ModalPopup from "../Modal/ModalPopup";
import {
  indiaCountryId,
  nigeriaCountryId,
  ukCountryId,
  kenyaCountryId,
  southAfricaCountryId,
} from "../config/constant";

const ProductDetailsPage = ({ courseDetails, courseId }: any) => {
  const {
    flagsa,
    flagnig,
    flagind,
    flagus,
    flagken,
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
  const [coursePriceDetails, setcoursePrice] = useState<any>([]);
  const [priceDetails, setPriceDetails] = useState<any>(0);
  const [show, setShow] = useState(false);

  const getData = async () => {
    let courseListResponse = await courseService.allcoursePrice(courseId);
    console.log("courseListResponse ======>", courseListResponse)
    setcoursePrice(courseListResponse);
  };
  useEffect(() => {
    if (coursePriceDetails?.length) {
      CoursePriceChange(1);
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

          <Col lg={12} xl={6} className="mobile-pricing-section">
            <div className="product-details__flag">
              <h5 className="product-details__subtitle">Total Admission Fee</h5>
              <div className="flags">
                {coursePriceDetails[0]?.coursePrices?.map((item: any) => (
                  <>
                    <a onClick={() => CoursePriceChange(item.country_id)}>
                      {item.country_id === southAfricaCountryId && (
                        <Image src={flagsa} alt="South Africa" />
                      )}
                      {item.country_id === indiaCountryId && (
                        <Image src={flagind} alt="India" />
                      )}
                      {item.country_id === nigeriaCountryId && (
                        <Image src={flagnig} alt="Nigeria" />
                      )}
                      {item.country_id === ukCountryId && (
                        <Image src={flagus} alt="UK" />
                      )}
                      {item.country_id === kenyaCountryId && (
                        <Image src={flagken} alt="Kenya" />
                      )}
                    </a>
                  </>
                ))}
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
