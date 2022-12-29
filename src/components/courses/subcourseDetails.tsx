import { digitalMarketingMain } from "@/data/course";
import React, { useState, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import { useRouter } from "next/router";
import { dataScienceCode, digitalMarkrtingCode } from "../config/constant";

const SubCourseDetails = ({ page }: any) => {
  const router = useRouter();
  const [subCourse, setSubCourse] = useState<any>([]);
  const getData = async () => {
    let courseListResponse = await courseService.allCourses();
     if (page === "Data-Science") {
      const subCourse = _.filter(courseListResponse, (item) => item.parent_id === 10);
      setSubCourse(subCourse);
    } else {
      const subCourse = _.filter(courseListResponse, (item) => item.parent_id === 24);
      setSubCourse(subCourse);
    }
  };

  function redirectCard(name: any, code: any, id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode ) {
      router.push(`/${name?.split(" ").join("-")}`);
    } else {
      router.push(`/${name?.split(" ").join("-")}/${id}`);
    }  
  }

  useEffect(() => {
    getData();
  }, [page]);
  function getWeeksDiff(start_date: any, end_date: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.abs(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }
  return (
    <>
      <section className="all-course-filter">
        <div className="auto-container">
          <Row>
            <Col sm={6} md={12} lg={12}>
              <Row>
                {subCourse?.map(
                ({ id, name, courseMode, batches, code }: any) => (
                            <Col
                    key={id}
                    sm={12}
                    md={3}
                    lg={4}
                    className="animated fadeInLeft testi-block"
                  >
                  <div className="gallery-item" key={id}>
                    <div className="inner-box" onClick={() => redirectCard(name, code, id)}>
                      {/* <div className="icon">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </div> */}
                      <figure className="image">
                        <Image
                          src={`/assets/images/gallery/${code}.png`}
                          alt=""
                        />
                      </figure>
                      <a
                        className="lightbox-image overlay-box"
                        data-fancybox="gallery"
                      ></a>
                      <div className="cap-box">
                        <div className="cap-inner">
                          <div className="title">
                            <h5>
                              <Link
                                href={`/${name?.split(" ").join("-")}/${id}`}
                              >
                                <a>{name}</a>
                              </Link>
                            </h5>
                          </div>

                          <div className="cat">
                            <ul className="about-seven__list list-unstyled">
                              <li>{courseMode.name}</li>
                              <li>
                                {batches?.map((item: any) => (
                                  <>
                                    {getWeeksDiff(
                                      item.start_date,
                                      item.end_date
                                    )}
                                    &nbsp;Week
                                  </>
                                ))}
                              </li>
                              <li>Internation certification </li>
                              <li>Capstone projects </li>
                            </ul>
                          </div>
                          {batches?.map((item: any) => (
                            <div className="batch">{item.description}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  </Col>
                )
              )}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SubCourseDetails;
