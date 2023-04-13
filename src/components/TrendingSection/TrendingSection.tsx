import React, { useState, useEffect, useContext, useRef } from "react";
import trendingSection from "@/data/trendingSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import { batchInfo, urlInfo } from "../config/helper";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import {
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../config/constant";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

import Loader from "../Loader/Loader";

const settings = {
  container: ".my-slider2",
  items: 3,
  slideBy: "page",
  autoplay: true,
  loop: true,
  gutter: 30,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls1",
  mouseDrag: true,
  startIndex: 1,
  fixedWidth: 320,
};

const { title, details, description } = trendingSection;

const TrendingSection = () => {
  const router = useRouter();
  const [courseData, setcourseData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const getData = async () => {
    let courseListResponse = await courseService.allCourses();
    setcourseData(courseListResponse);
    courseListResponse ? setIsLoading(false) : setIsLoading(true);
  };

  function redirectCard(name: any, code: any, id: any, parent_id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode) {
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
  }, []);

  let courses: any = [];
  let CourseCard: any = [];

  if (courseData?.length) {
    courses = _.filter(
      courseData,
      (item: any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }
  if (courseData?.length) {
    courseData?.forEach(function (val: any) {
      if (val.parent_id === null && val.isAddon == false && val.mode_id === 1) {
        CourseCard.push(val);
      }
    });
  }
  const listRef = useRef(null);
  const ref = useActive("#testimonials");
  function getWeeksDiff(start_date: any, end_date: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.ceil(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }
  return (
    <section ref={ref} className="testimonials-section" id="testimonials">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>{title}</h2>
          {/* <h6 className="desc">{description}</h6> */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="carousel-box">
            <div className="testimonials-carousel">
              <TinySlider
                options={{
                  ...settings,
                }}
                ref={listRef}
              >
                {CourseCard?.map(
                  ({
                    id,
                    name,
                    courseMode,
                    batches,
                    code,
                    durationInWeeks,
                    parent_id,
                  }: any) => (
                    <div ref={listRef} className="gallery-item" key={id}>
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
                                <li>{courseMode.name} Classes</li>
                                <li>{durationInWeeks} Weeks</li>
                                <li>International certification </li>
                                <li>Capstone projects </li>
                              </ul>
                            </div>
                            <div className="batch">
                              {batchInfo(batches)?.description}
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

              <div className="tns-controls1">
                <button className="tns-prev">
                  <span className="icon fa fa-angle-left"></span>
                </button>
                <button className="tns-next">
                  <span className="icon fas fa-angle-right"></span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
