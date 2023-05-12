import React, { useState, useEffect, useContext } from "react";
import { productDetails } from "@/data/productDetails";
import { courseService } from "src/services";
import Link from "next/link";
import { Col, Modal, Row } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import ModalPopup from "../Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Loader from "../Loader/Loader";

import {
  indiaCountryId,
  nigeriaCountryId,
  ukCountryId,
  kenyaCountryId,
  southAfricaCountryId,
} from "../config/constant";
import { allCourseList } from "@/data/courseData";
import _ from "lodash";

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
    CsFundamentals,
    CsDefenceToolbox,
  } = courseDetails?.productDetails;

  const [coursePriceDetails, setcoursePrice] = useState<any>([]);
  const [priceDetails, setPriceDetails] = useState<any>(0);
  const [priceDetailsTwo, setPriceDetailsTwo] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);

  const getData = async () => {
    let courseListResponse = _.filter(
      allCourseList,
      (item) => item?.id === parseInt(courseId)
    );
    setcoursePrice(courseListResponse);
    courseListResponse ? setIsLoading(false) : setIsLoading(true);
  };
  useEffect(() => {
    if (coursePriceDetails?.length) {
      CoursePriceChange(1);
      CoursePriceChangeTwo(1);
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

  function CoursePriceChangeTwo(id: number) {
    if (coursePriceDetails?.length) {
      coursePriceDetails?.forEach(function (val: any) {
        if (val?.coursePricesTwo?.length) {
          val?.coursePricesTwo?.forEach(function (item: any) {
            if (item.country_id === id) {
              setPriceDetailsTwo(item);
            }
          });
        }
      });
    }
  }

  console.log("coursePriceDetails", coursePriceDetails);

  return (
    <section className="product-details">
      <div className="auto-container">
        <Row>
          <Col lg={12} xl={12}>
            <div className="product-details__top">
              <h2 className="product-details__title">
                {title}
                <i className="arrow-sign-right"></i>
              </h2>
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
            <div>
              <div className="product-details__flag">
                <h5 className="product-details__subtitle">{CsFundamentals}</h5>
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className="flags">
                    {coursePriceDetails[0]?.coursePrices?.map((item: any) => (
                      <>
                        <a onClick={() => CoursePriceChange(item.country_id)}>
                          <div
                            className={
                              item.country_id === priceDetails.country_id
                                ? "flag-shadow"
                                : ""
                            }
                          >
                            {item.country_id === southAfricaCountryId && (
                              // <Image src={flagsa} alt="South Africa" />
                              <Image
                                priority={true}
                                src={flagsa}
                                layout="intrinsic"
                                width="100"
                                height="69"
                                alt="South Africa"
                              />
                            )}
                            {item.country_id === indiaCountryId && (
                              // <Image src={flagind} alt="India" />
                              <Image
                                priority={true}
                                src={flagind}
                                layout="intrinsic"
                                width="100"
                                height="69"
                                alt="India"
                              />
                            )}
                            {item.country_id === nigeriaCountryId && (
                              // <Image src={flagnig} alt="Nigeria" />
                              <Image
                                priority={true}
                                src={flagnig}
                                alt="Nigeria"
                                layout="intrinsic"
                                width="100"
                                height="69"
                              />
                            )}
                            {item.country_id === ukCountryId && (
                              // <Image src={flagus} alt="UK" />
                              <Image
                                priority={true}
                                src={flagus}
                                alt="UK"
                                layout="intrinsic"
                                width="100"
                                height="69"
                              />
                            )}
                            {item.country_id === kenyaCountryId && (
                              // <Image src={flagken} alt="Kenya" />
                              <Image
                                priority={true}
                                src={flagken}
                                alt="Kenya"
                                layout="intrinsic"
                                width="100"
                                height="69"
                              />
                            )}
                          </div>
                        </a>
                      </>
                    ))}
                  </div>
                )}
              </div>

              <h2 className="product-details__price">
                {`${priceDetails?.country?.currency} ${priceDetails?.price} `}
                {priceDetails?.country_id === indiaCountryId && (
                  <span>+ GST</span>
                )}
              </h2>
            </div>

            {coursePriceDetails[0]?.coursePricesTwo && (
              <div>
                <div className="product-details__flag">
                  <h5 className="product-details__subtitle">
                    {CsDefenceToolbox}
                  </h5>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <div className="flags">
                      {coursePriceDetails[0]?.coursePricesTwo?.map(
                        (item: any) => (
                          <>
                            <a
                              onClick={() =>
                                CoursePriceChangeTwo(item.country_id)
                              }
                            >
                              <div
                                className={
                                  item.country_id === priceDetailsTwo.country_id
                                    ? "flag-shadow"
                                    : ""
                                }
                              >
                                {item.country_id === southAfricaCountryId && (
                                  // <Image src={flagsa} alt="South Africa" />
                                  <Image
                                    priority={true}
                                    src={flagsa}
                                    layout="intrinsic"
                                    width="100"
                                    height="69"
                                    alt="South Africa"
                                  />
                                )}
                                {item.country_id === indiaCountryId && (
                                  // <Image src={flagind} alt="India" />
                                  <Image
                                    priority={true}
                                    src={flagind}
                                    layout="intrinsic"
                                    width="100"
                                    height="69"
                                    alt="India"
                                  />
                                )}
                                {item.country_id === nigeriaCountryId && (
                                  // <Image src={flagnig} alt="Nigeria" />
                                  <Image
                                    priority={true}
                                    src={flagnig}
                                    alt="Nigeria"
                                    layout="intrinsic"
                                    width="100"
                                    height="69"
                                  />
                                )}
                                {item.country_id === ukCountryId && (
                                  // <Image src={flagus} alt="UK" />
                                  <Image
                                    priority={true}
                                    src={flagus}
                                    alt="UK"
                                    layout="intrinsic"
                                    width="100"
                                    height="69"
                                  />
                                )}
                                {item.country_id === kenyaCountryId && (
                                  // <Image src={flagken} alt="Kenya" />
                                  <Image
                                    priority={true}
                                    src={flagken}
                                    alt="Kenya"
                                    layout="intrinsic"
                                    width="100"
                                    height="69"
                                  />
                                )}
                              </div>
                            </a>
                          </>
                        )
                      )}
                    </div>
                  )}
                </div>

                <h2 className="product-details__price">
                  {`${priceDetailsTwo?.country?.currency} ${priceDetailsTwo?.price} `}
                  {priceDetailsTwo?.country_id === indiaCountryId && (
                    <span>+ GST</span>
                  )}
                </h2>
              </div>
            )}

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
        <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </section>
  );
};

export default ProductDetailsPage;
