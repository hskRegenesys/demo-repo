import { allCourseGallery, courseCheckbox } from "@/data/allCourseGallery";
import React, { useEffect, useState, useRef } from "react";
import { Col, Row, Image } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { courseService } from "src/services";
import _ from "lodash";
import { useRouter } from "next/router";
import { dataScienceCode, digitalMarkrtingCode } from "../config/constant";
import { batchInfo } from "../config/helper";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider2",
  items: 1.2,
  gutter: 20,
  fixedWidth: 320,
  autoplay: true,
  loop: true,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls5",
};

const handleSearch = (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
};

const AllCourseGallery = () => {
  const checkBoxData = courseCheckbox;

  const router = useRouter();
  const [courseData, setcourseData] = useState<any>([]);
  const [allData, setAllData] = useState<any>([]);
  const [checkCourseData, setCheckCourseData] = useState<any>([]);
  const [checkFilterData, setCheckFilterData] = useState<any>([]);

  const getData = async () => {
    let courseListResponse = await courseService.allCourses();

    const courses = _.filter(
      courseListResponse,
      (item: any) => item?.mode_id === 1
    );
    checkData(courses);
    setAllData(courses);
    setcourseData(courses);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    checkFilter(checkFilterData);
  }, [checkFilterData]);

  function redirectCard(name: any, code: any, id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode) {
      router.push(`/${name?.split(" ").join("-")}`);
    } else {
      router.push(`/${name?.split(" ").join("-")}/${id}`);
    }
  }

  function searchFilter(value: string) {
    const result = [];
    for (let i = 0; i < allData.length; i++) {
      let entry = allData[i];

      if (
        entry &&
        entry.name &&
        entry.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        result.push(entry);
      }

      setcourseData(result);
    }
  }

  function checkData(courses: any) {
    const filterData = _.filter(
      courses,

      (item) =>
        item?.parent_id === null &&
        item?.mode_id === 1 &&
        item?.isAddon === false
    );
    const checkCourseList = ["DSCI", "DM", "PM", "CS"];

    const result: any = [];

    checkCourseList.forEach((courseCode) => {
      if (filterData?.length) {
        filterData?.forEach((item) => {
          if (item.code === courseCode) {
            result?.push(item);
          }
        });
      }
    });
    setCheckCourseData(result);
  }
  function checkFilter(value: any) {
    if (value.length === 0) {
      setcourseData(allData);
      return;
    }
    const result: any = [];
    value.forEach((item: any) => {
      allData.forEach((element: any) => {
        if (
          element.id === parseInt(item) ||
          element.parent_id === parseInt(item)
        ) {
          result.push(element);
        }
      });
    });

    setcourseData(result);
  }

  function getWeeksDiff(start_date: any, end_date: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.abs(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }
  const listRef = useRef(null);
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
                      <input
                        onChange={(e) => searchFilter(e.target.value)}
                        type="text"
                        placeholder="Search"
                        name="search"
                      />
                      <button type="submit">
                        <i className="flaticon-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>

                  <h6 className="border-bottom">All Courses</h6>
                  {checkCourseData?.map(({ code, name, id }: any) => (
                    <Form.Check
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckFilterData([
                            ...checkFilterData,
                            e.target.value,
                          ]);
                        } else {
                          setCheckFilterData(
                            checkFilterData.filter(
                              (item: any) => parseInt(item) !== id
                            )
                          );
                        }
                      }}
                      inline-block
                      label={name}
                      name={name}
                      type="checkbox"
                      id={code}
                      value={id}
                    />
                  ))}
                </div>
              </div>
            </Col>

            <Col sm={12} md={9} lg={9}>
              <Row className="desktop-hide">
                <TinySlider
                  options={{
                    ...settings,
                  }}
                  ref={listRef}
                >
                  {courseData?.map(
                    ({ id, name, courseMode, batches, code }: any) => (
                      <Col
                        ref={listRef}
                        key={id}
                        className="animated testi-block gallery-item"
                      >
                        <div
                          className="inner-box"
                          onClick={() => redirectCard(name, code, id)}
                        >
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
                                  <li>{courseMode.name} classes</li>
                                  <li>
                                    {batchInfo(batches)?.map((item: any) => (
                                      <>
                                        {getWeeksDiff(
                                          item.start_date,
                                          item.end_date
                                        )}
                                        &nbsp;Weeks
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
                      </Col>
                    )
                  )}
                </TinySlider>

                <div className="tns-controls5 desktop-hide text-center">
                  <button className="tns-prev">
                    <span className="icon fa fa-angle-left"></span>
                  </button>
                  <button className="tns-next">
                    <span className="icon fas fa-angle-right"></span>
                  </button>
                </div>     
              </Row>

              


                 <Row className="mobile-hide">       
                  {courseData?.map(
                    ({ id, name, courseMode, batches, code }: any) => (
                      <Col 
                        ref={listRef}
                        key={id} 
                        className="animated testi-block gallery-item"  md={6} lg={4}
                      >
                        <div
                          className="inner-box"
                          onClick={() => redirectCard(name, code, id)}
                        >
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
                                  <li>{courseMode.name} classes</li>
                                  <li>
                                    {batchInfo(batches)?.map((item: any) => (
                                      <>
                                        {getWeeksDiff(
                                          item.start_date,
                                          item.end_date
                                        )}
                                        &nbsp;Weeks
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
