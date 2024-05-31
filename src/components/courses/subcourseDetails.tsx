import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  artificialIntelligenceCode,
  artificialIntelligenceMainID,
  dataScienceCode,
  dataScienceMainCourse,
  dataScienceMainID,
  digitalMarketingMainCourse,
  digitalMarketingMainID,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../config/constant";
import { batchInfo, urlInfo } from "../config/helper";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Loader from "../Loader/Loader";
import { allCourseList } from "@/data/courseData";

const settings = {
  container: ".sub-courses",
  items: 3,
  slideBy: "page",
  autoplay: true,
  loop: false,
  lazyload: false,
  gutter: 30,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls9",
  fixedWidth: 320,
  mouseDrag: true,
};

const SubCourseDetails = ({ page }: any) => {
  const router = useRouter();
  const [subCourse, setSubCourse] = useState<any>([]);
  const [courseData, setCourseData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const getData = async () => {
    setSubCourse([]);

    allCourseList ? setIsLoading(false) : setIsLoading(true);
    const courses = _.filter(allCourseList, (item: any) => item?.mode_id === 1);
    setCourseData(courses);
    if (page === dataScienceMainCourse) {
      const subCourse = _.filter(
        allCourseList,
        (item) => item.parent_id === dataScienceMainID
      );

      setSubCourse(subCourse);
    } else if (page === digitalMarketingMainCourse) {
      const subCourse = _.filter(
        allCourseList,
        (item) => item.parent_id === digitalMarketingMainID
      );
      setSubCourse(subCourse);
    } else {
      const subCourse = _.filter(
        allCourseList,
        (item) => item.parent_id === artificialIntelligenceMainID
      );
      setSubCourse(subCourse);
    }
  };

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

  const listRef = useRef(null);

  return (
    <>
      <section className="all-course-filter">
        <div className="auto-container desktop-hide">
          <div className="sec-title">
            <h2>Explore Our Courses</h2>
            <h6 className="desc">Facilitator-led courses</h6>
          </div>
        </div>
        {subCourse?.length && (
          <div className="auto-container">
            {isLoading ? (
              <Loader />
            ) : (
              <TinySlider
                options={{
                  ...settings,
                }}
                ref={listRef}
              >
                {subCourse?.map(
                  ({
                    id,
                    name,
                    courseMode,
                    batches,
                    code,
                    durationInWeeks,
                    parent_id,
                  }: any) => (
                    <div ref={listRef} key={id} className="testi-block">
                      <div className="gallery-item tns-item">
                        <div
                          className="inner-box"
                          // onClick={() => redirectCard(name, code, id, parent_id)}
                        >
                          <figure className="image">
                            <Image
                              priority={true}
                              src={`/assets/images/gallery/${code}.webp`}
                              layout="responsive"
                              width="274"
                              height="182"
                              alt="Cards"
                            />
                          </figure>
                          <a
                            className="lightbox-image overlay-box"
                            data-fancybox="gallery"
                            onClick={() =>
                              redirectCard(name, code, id, parent_id)
                            }
                          ></a>
                          <div className="cap-box">
                            <div className="cap-inner">
                              <div className="title">
                                <h5>
                                  <a
                                    onClick={() =>
                                      redirectCard(name, code, id, parent_id)
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
                                  <li>International certification </li>
                                  <li>Capstone projects </li>
                                </ul>
                              </div>

                              <div className="batch">
                                {code != "ADDSCI" && code != "APDSCI" && (
                                  <div>{batchInfo(batches)?.description}</div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="link-box inline-button">
                            <a
                              className="theme-btn btn-style-two"
                              onClick={() =>
                                redirectCard(name, code, id, parent_id)
                              }
                            >
                              <i className="btn-curve"></i>
                              <span className="btn-title">Learn More</span>
                            </a>
                            <a
                              className="theme-btn btn-style-two"
                              onClick={handleShow}
                            >
                              <i className="btn-curve"></i>
                              <span className="btn-title">Enquire Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <Modal show={show}>
                        <ModalPopup
                          setShows={setShow}
                          thankYouShow={setThankYouShow}
                        />
                      </Modal>
                      <Modal show={thankYouShow}>
                        <ThankYouPopup setShows={setThankYouShow} />
                      </Modal>
                    </div>
                  )
                )}
              </TinySlider>
            )}

            <div className="tns-controls9">
              <button className="tns-prev">
                <span className="icon fa fa-angle-left"></span>
              </button>
              <button className="tns-next">
                <span className="icon fas fa-angle-right"></span>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SubCourseDetails;
