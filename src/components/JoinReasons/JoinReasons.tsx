import { joinReasons } from "@/data/joinReasons";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, subTitle1, subTitle2, subTitle3, subTitle4, desc1, desc2, desc3, desc4, bg1, bg2, bg3, bg4 } =
joinReasons;

const JoinReasons = () => {
  return (
    <section className="service-block-three">
      <div className="Fluidsection">
        <div className="sec-title centered">
          <h2 className="curve-right">
          {title}
          </h2>          
        </div>
        
        <Row>       
            <Col sm={12} md={6} lg={4} className="animated fadeInLeft">
              <div className="reasons__secOne">
            <Image src={bg1.src} alt="" />
              <div className="join__reasons">
                <h5 className="heading">              
                  {subTitle1}
                </h5>
                <p>
                  {desc1}
                </p>
              </div>
              </div>
            </Col>

            <Col sm={12} md={6} lg={8} className="animated fadeInLeft">

              <div className="reasons__secTwo">
            <Image src={bg2.src} alt="" />              
              <div className="join__reasons">
                <h5 className="heading">              
                  {subTitle2}
                </h5>
                <p>
                  {desc2}
                </p>
              </div>
              </div>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col sm={12} md={6} lg={8} className="animated fadeInLeft secThree">
            <div className="reasons__secThree">
            <Image src={bg3.src} alt="" />
              <div className="join__reasons">
                <h5 className="heading">              
                  {subTitle3}
                </h5>
                <p>
                  {desc3}
                </p>
              </div>
              </div>
            </Col>


            <Col sm={12} md={6} lg={4} className="animated fadeInLeft secFour">
              <div className="reasons__secFour">
            <Image src={bg4.src} alt="" />
              <div className="join__reasons">
                <h5 className="heading">              
                  {subTitle4}
                </h5>
                <p>
                  {desc4}
                </p>
              </div>
              </div>
            </Col>
        </Row>
      </div>
    </section>
  );
};

export default JoinReasons;
