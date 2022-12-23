import { allCourseGallery } from "@/data/allCourseGallery";
import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

const handleSearch = (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get("search"));
};

const AllCourseGallery = () => {
  return (
    <>
      <section className="all-course-filter">
        <div className="FluidSection">
          <Row>

            <Col sm={12} md={3} lg={3} className="filter-section">
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
            </Col>

            <Col sm={12} md={9} lg={9}>
              <Row>

                {allCourseGallery?.map(({ id, name, tagline, image }) => (
                  <Col key={id} sm={12} md={3} lg={4} className="animated fadeInLeft testi-block">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <div className="info">
                        <div className="image">
                          <Link href="/team">
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
                            {tagline?.map((list:any, i:number) => (
                              <li key={i}>{list}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}

                <Pagination className="d-flex justify-content-center mt-3">
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </Row>
            </Col>

          </Row>
        </div>
      </section>
    </>
  );
};

export default AllCourseGallery;
