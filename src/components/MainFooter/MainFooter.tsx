import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  year,
  author,
  logo,
  text,
  socials,
  links,
  address,
  address3,
  address2,
  phone,
  phone2,
  phone3,
  web,
  web2,
  web3,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="widgets-section">
        <Row className="clearfix">
          <Col xl={3} lg={4} md={4} sm={12} className="column">
            <div className="footer-widget links-widget">
              <div className="widget-content footer-section-yellow">
                <h6>Quick links</h6>
                <Row className="clearfix">
                  <Col md={12} sm={12}>
                    <ul>
                      {links.slice(0, 8)?.map(({ id, href, title }) => (
                        <li key={id}>
                          <Link href={href}>{title}</Link>
                        </li>
                      ))}
                    </ul>

                    <ul className="social-links clearfix">
                      {socials?.map(({ id, icon, href }) => (
                        <li key={id}>
                          <a href={href}>
                            <span className={icon}></span>
                          </a>
                        </li>
                      ))}
                    </ul>

                  </Col>

                </Row>
              </div>
            </div>
          </Col>


          <Col xl={9} lg={8} md={8} sm={12} className="column">
            <div className="footer-widget logo-widget">
              <div className="widget-content row">
                <h5>{text}</h5>
                </div>
                <div className="widget-content row">
                <Col xl={3} lg={6} md={6} sm={12} className="column">
                  <div className="footer-widget info-widget">
                    <div className="widget-content address">
                      <h6>South Africa Campus</h6>
                      <ul className="contact-info">
                        <li className="address">
                          <span className="icon flaticon-pin-1"></span>{" "}
                          <TextSplit text={address} />
                        </li>

                        <h6>Contact Details</h6>
                        <li>
                          <span className="icon flaticon-call"></span>
                          <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                        </li>
                        <li>
                          <span className="icon flaticon-link"></span>
                          <a href={`${web}`}>{web}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>


                <Col xl={3} lg={6} md={6} sm={12} className="column">
                  <div className="footer-widget info-widget">
                    <div className="widget-content">
                      <h6>India Corporate Office</h6>
                      <ul className="contact-info">
                        <li className="address">
                          <span className="icon flaticon-pin-1"></span>{" "}
                          <TextSplit text={address2} />
                        </li>
                        <h6>Contact Details</h6>
                        <li>
                          <span className="icon flaticon-call"></span>
                          <a href={`tel:${phone2.split(" ").join("")}`}>{phone2}</a>
                        </li>
                        <li>
                          <span className="icon flaticon-link"></span>
                          <a href={`${web2}`}>{web2}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>


                <Col xl={3} lg={6} md={6} sm={12} className="column">
                  <div className="footer-widget info-widget">
                    <div className="widget-content ">
                      <h6>Nigeria Corporate Office</h6>
                      <ul className="contact-info">
                        <li className="address">
                          <span className="icon flaticon-pin-1"></span>{" "}
                          <TextSplit text={address3} />
                        </li>
                        <h6>Contact Details</h6>
                        <li>
                          <span className="icon flaticon-call"></span>
                          <a href={`tel:${phone3.split(" ").join("")}`}>{phone3}</a>
                        </li>
                        <li>
                          <span className="icon flaticon-link "></span>
                          <a href={`${web3}`}>{web3}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>


              </div>
            </div>
          </Col>



        </Row>

      </div>
      <div className="footer-bottom bg-secondary">
        <div className="inner clearfix">
          <div className="copyright">
            Copyright &copy; {year} | Regenesys Business School (Pvt) Ltd | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
