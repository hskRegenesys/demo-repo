import { allCourseGallery, courseCheckbox } from "@/data/allCourseGallery";
import React, { useEffect, useState, useRef } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import _ from "lodash";
import { useRouter } from "next/router";
import {
  artificialIntelligenceCode,
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../config/constant";
import { batchInfo, urlInfo } from "../config/helper";

import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Loader from "../Loader/Loader";
import { allCourseList } from "@/data/courseData";

const handleSearch = (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
};

const AllCourseGallery = () => {
  const pageSize = 10;

  const checkBoxData = courseCheckbox;

  const router = useRouter();
  const [courseData, setcourseData] = useState<any>([]);
  const [allData, setAllData] = useState<any>([]);
  const [checkCourseData, setCheckCourseData] = useState<any>([]);
  const [checkFilterData, setCheckFilterData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [courseCode, setcourseCode] = useState("");

  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  const getData = () => {
    allCourseList ? setIsLoading(false) : setIsLoading(true);

    const courses = _.filter(allCourseList, (item: any) => item?.mode_id === 1);
    checkData(courses);
    setAllData(courses);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setcourseData(allData);
  }, [allData]);

  useEffect(() => {
    checkFilter(checkFilterData);
  }, [checkFilterData]);

  function redirectCard(name: any, code: any, id: any, parent_id: any) {
    if (
      code === dataScienceCode ||
      code === digitalMarkrtingCode ||
      code === artificialIntelligenceCode
    ) {
      router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    } else {
      const courseDetails = _.find(
        courseData,
        (item) => item?.id === parent_id
      );
      courseDetails
        ? router.push(
            `/${programBaseUrl}/${urlInfo(courseDetails?.name)}/${urlInfo(
              name
            )}`
          )
        : router.push(`/${programBaseUrl}/${urlInfo(name)}`);
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
    const checkCourseList = [
      "DSCI",
      // "OSCM",
      "PDM",
      "FSD",
      "MD",
      "DBA",
      "DSN",
      "AIN",
      "CSC",
      "PM",
      "DM",
      "DMN",
      "DTC",
      "DT",
      "AI",
    ];

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
            <Col sm={12} md={12} lg={3} className="filter-section">
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
                      key={id}
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

            <Col sm={12} md={12} lg={9}>
              {isLoading ? (
                <Loader />
              ) : (
                <Row>
                  <>
                    {courseData?.map(
                      ({
                        id,
                        name,
                        courseMode,
                        batches,
                        code,
                        durationInWeeks,
                        parent_id,
                      }: any) => (
                        <>
                          <Col
                            ref={listRef}
                            key={id}
                            lg={4}
                            md={6}
                            className="gallery-item"
                          >
                            <div
                              className="inner-box"
                              // onClick={() => redirectCard(name, code, id, parent_id)}
                            >
                              <figure className="image">
                                <Image
                                  src={`/assets/images/gallery/${code}.webp`}
                                  alt=""
                                />
                              </figure>
                              <a
                                onClick={() =>
                                  redirectCard(name, code, id, parent_id)
                                }
                                className="lightbox-image overlay-box"
                                data-fancybox="gallery"
                              ></a>
                              <div className="cap-box">
                                <div className="cap-inner">
                                  <div className="title">
                                    <h5>
                                      <a
                                        onClick={() =>
                                          redirectCard(
                                            name,
                                            code,
                                            id,
                                            parent_id
                                          )
                                        }
                                      >
                                        {name}
                                      </a>
                                    </h5>
                                  </div>

                                  <div className="cat">
                                    <ul className="about-seven__list list-unstyled">
                                      <li>{courseMode.name} Classes</li>
                                      <li>{durationInWeeks} Weeks</li>
                                      <li>International Certification </li>
                                      <li>Capstone Projects </li>
                                    </ul>
                                  </div>

                                  <div className="batch">
                                    {batchInfo(batches)?.description}
                                  </div>
                                  <div className="link-box inline-button">
                                    <a
                                      className="theme-btn btn-style-two"
                                      onClick={() =>
                                        redirectCard(name, code, id, parent_id)
                                      }
                                    >
                                      <i className="btn-curve"></i>
                                      <span className="btn-title">
                                        Learn More
                                      </span>
                                    </a>
                                    <a
                                      className="theme-btn btn-style-two"
                                      onClick={() => {
                                        handleShow();
                                        setcourseCode(code);
                                      }}
                                    >
                                      <i className="btn-curve"></i>
                                      <span className="btn-title">
                                        Enquire Now
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </>
                      )
                    )}
                  </>

                  <div className="tns-controls5 desktop-hide text-center">
                    <button className="tns-prev">
                      <span className="icon fa fa-angle-left"></span>
                    </button>
                    <button className="tns-next">
                      <span className="icon fas fa-angle-right"></span>
                    </button>
                  </div>
                </Row>
              )}
              {/* <Pagination className="d-flex justify-content-center mt-3">
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>

                  <Pagination.Next />
                </Pagination> */}
            </Col>
          </Row>
          <Modal show={show}>
            <ModalPopup
              setShows={setShow}
              courseCode={courseCode}
              thankYouShow={setThankYouShow}
            />
          </Modal>
          <Modal show={thankYouShow}>
            <ThankYouPopup setShows={setThankYouShow} />
          </Modal>
        </div>
      </section>
    </>
  );
};

export default AllCourseGallery;
