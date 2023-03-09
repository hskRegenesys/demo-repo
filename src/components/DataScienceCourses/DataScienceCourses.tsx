import { dataScienceMain } from "@/data/dataScienceMain";
import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";

const DataScienceCourses = () => {
  return (
    <>
      <section className="all-course-filter">
        <div className="auto-container">
          <Row>
            <Col sm={6} md={12} lg={12}>
              <Row>
                {dataScienceMain.map(({ id, name, tagline, image }) => (
                  <Col
                    key={id}
                    sm={12}
                    md={3}
                    lg={4}
                    className="animated fadeInLeft testi-block"
                  >
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <div className="info">
                        <div className="image">
                          <Link href="/all-courses/digital-marketing/basic-digital-marketing">
                            <a>
                              <Image
                                src={`/assets/images/gallery/${image}`}
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>

                        <div className="name">{name}</div>

                        <div className="cat">
                          <ul className="about-seven__list list-unstyled">
                            {tagline.map((list, i) => (
                              <li key={i}>{list}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default DataScienceCourses;
