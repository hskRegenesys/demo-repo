import { allCourseGallery } from "@/data/allCourseGallery";
import React, { useEffect, useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { courseService } from "src/services";
import _ from "lodash";
import { useRouter } from "next/router";
import { dataScienceCode, digitalMarkrtingCode } from "../config/constant";
import { batchInfo } from "../config/helper";

const handleSearch = (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
};

const AllCourseGallery = () => {
  const router = useRouter();
  const [courseData, setcourseData] = useState<any>([]);
  const getData = async () => {
    let courseListResponse = await courseService.allCourses();
    const courses = _.filter(
      courseListResponse,
      (item: any) => item?.mode_id === 1
    );
    setcourseData(courses);
  };

  useEffect(() => {
    getData();
  }, []);

  function redirectCard(name: any, code: any, id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode) {
      router.push(`/${name?.split(" ").join("-")}`);
    } else {
      router.push(`/${name?.split(" ").join("-")}/${id}`);
    }
  }

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
        <div className="FluidSection">
          <Row>
            {/* <Col sm={12} md={3} lg={3} className="filter-section">
              <div className="shop-sidebar__single">

                <h5>Filter</h5>
                <h6 className="mt-5">Find Course</h6>
                <div className="shop-sidebar">
                  <div className="shop-search shop-sidebar__single">
                    <form onSubmit={handleSearch}>
                      <input type="text" placeholder="Search" name="search" />
                      <button type="submit">
                        <i className="flaticon-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>

                  <h6 className="border-bottom">All Classes</h6>
                  <Form.Check
                    inline-block
                    label="Data Science"
                    name="group1"
                    type="checkbox"
                    id="inline-checkbox1"
                  />

                  <Form.Check
                    inline-block
                    label="Digital Marketing"
                    name="group1"
                    type="checkbox"
                    id="inline-checkbox2"
                  />

                  <Form.Check
                    inline-block
                    label="Project Management"
                    name="group1"
                    type="checkbox"
                    id="inline-checkbox2"
                  />

                  <Form.Check
                    inline-block
                    label="Cyber Security"
                    name="group1"
                    type="checkbox"
                    id="inline-checkbox2"
                  />


                  <Form.Check
                    inline-block
                    label="Investment, Trading & Personal Finance"
                    name="group1"
                    type="checkbox"
                    id="inline-checkbox2"
                  />
                </div>
              </div>
            </Col> */}

            <Col sm={12} md={12} lg={12}>
              <Row>
                {courseData?.map(
                  ({ id, name, courseMode, batches, code }: any) => (
                    <Col
                      key={id}
                      sm={12}
                      md={3}
                      lg={3}
                      className="animated fadeInLeft testi-block"
                    >
                      <div className="gallery-item" key={id}>
                        <div
                          className="inner-box"
                          onClick={() => redirectCard(name, code, id)}
                        >
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
                                  <a>{name}</a>
                                </h5>
                              </div>

                              <div className="cat">
                                <ul className="about-seven__list list-unstyled">
                                  <li>{courseMode.name}</li>
                                  <li>
                                    {batchInfo(batches)?.map((item: any) => (
                                      <>
                                        {getWeeksDiff(
                                          item.start_date,
                                          item.end_date
                                        )}
                                        &nbsp;Week
                                      </>
                                    ))}
                                  </li>
                                  <li>International certification </li>
                                  <li>Capstone projects </li>
                                </ul>
                              </div>
                              {batchInfo(batches)?.map((item: any) => (
                                <div className="batch">{item.description}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                )}

                {/* <Pagination className="d-flex justify-content-center mt-3">
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Next />
                </Pagination> */}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AllCourseGallery;
