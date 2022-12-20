import { productDetails } from "@/data/productDetails";
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";

const { falgsa, flagnig, flagind, flagus, title, price, certifiedText1, certifiedText2, certifiedText3, subTitle, certifiedTitle1, certifiedTitle2, certifiedTitle3, admissionText, termsConditions } =
  productDetails;

const ProductDetailsPage = () => {
  return (
    <section className="product-details">
      <div className="auto-container">
        <Row>

          <Col lg={12} xl={12}>
            <div className="product-details__top">
              <h3 className="product-details__title">{title}</h3>
              <h5 className="product-details__subtitle mt-3">{subTitle}</h5>
            </div>

          </Col>

          <Col lg={12} xl={6}>
            <div className="product-details__content get__certified__section">
              <div className="subTitle">  <i className="flaticon-check"></i>{certifiedTitle1}</div>
              <p>{certifiedText1}</p>
              <div className="subTitle"><i className="flaticon-check"></i>{certifiedTitle2}</div>
              <p>{certifiedText2}</p>
              <div className="subTitle"><i className="flaticon-check"></i>{certifiedTitle3}</div>
              <p>{certifiedText3}</p>
            </div>
          </Col>

          <Col lg={12} xl={6}>

            <div className="product-details__flag">
              <h5 className="product-details__subtitle">Total Admission Fee</h5>
              <div className="flags">
                <Link href="/">
                  <a>
                    <Image src={flagind.src} alt="" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src={flagus.src} alt="" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src={falgsa.src} alt="" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src={flagnig.src} alt="" />
                  </a>
                </Link>
              </div>
            </div>

            <h2 className="product-details__price"> &#8377; {price} + GST</h2>


            <Link href="/">
              <a className="refer-link">
                Refer a friend
              </a>
            </Link>

            <p>{termsConditions}</p>
            <p>{admissionText}</p>
            <div className="product-details__buttons">
              <Link href="/">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Enroll Now</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
