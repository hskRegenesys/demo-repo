import discoverSection from "@/data/discoverSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, discovers } = discoverSection;

const DiscoverSection = ({ ShowTitle = true }) => {
  return (
    <section className="discover-section">
      <div className="auto-container">        
        <Row className="clearfix">
          {discovers?.map(({ id, image, title, buttonText, text }) => (
            <Col key={id} lg={4} md={12} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src={`/assets/images/icons/${image}`}
                    alt=""
                  />
                </div>
                <div className="cap-box animated fadeInUp">
                  <div className="cap-inner">
                    <h5>{title}</h5>
                    <p>
                    {text} 
                    </p>                
                      <Link href="/about">
                        <a className="theme-btn btn-style-four">                          
                          {buttonText}
                        </a>
                      </Link>
                 
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default DiscoverSection;
