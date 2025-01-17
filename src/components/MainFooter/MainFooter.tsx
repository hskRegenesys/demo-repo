import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { year, text, socials, addressDetails, links } = mainFooter;

interface MainFooterProps {
  normalPadding?: boolean;
  isBlogPage?: boolean;
}

const MainFooter: React.FC<MainFooterProps> = ({
  normalPadding = true,
  isBlogPage,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className={`widgets-section ${isBlogPage && "blog-widget-section"}`}>
        <Row className="clearfix">
          <Col xl={3} lg={4} md={12} sm={12} className="column">
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
                      {socials?.map(({ id, icon, href, title }) => (
                        <li key={id}>
                          <a href={href} target="_blank" rel="noreferrer">
                            <span title={title} className={icon}></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xl={9} lg={8} md={12} sm={12} className="column">
            <div className="footer-widget logo-widget">
              <div className="widget-content address">
                <h6>{text}</h6>
              </div>
              <div className="widget-content row">
                {addressDetails?.map(({ addressTitle, fullAddress }, index) => (
                  <Col
                    xl={3}
                    lg={6}
                    md={4}
                    sm={12}
                    xxl={3}
                    className="column-space"
                    key={index}
                  >
                    <h6>{addressTitle}</h6>
                    <Image
                      src="/assets/images/allImages/location-dot.svg"
                      width={14}
                      height={14}
                      style={{ paddingRight: "5px" }}
                      alt="location-dot"
                    ></Image>
                    <TextSplit text={fullAddress} />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom bg-secondary">
        <div className="inner clearfix">
          <div className="copyright">
            Copyright &copy; {year} | Regenesys Business School (Pty) Ltd | All
            Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
