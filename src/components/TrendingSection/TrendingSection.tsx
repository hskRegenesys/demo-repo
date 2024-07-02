import React, { useState, useEffect, useRef } from "react";
import trendingSection from "@/data/trendingSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import { batchInfo, urlInfo } from "../config/helper";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import {
  artificialIntelligenceCode,
  dataScienceCode,
  digitalMarkrtingCode,
  programBaseUrl,
} from "../config/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

import Loader from "../Loader/Loader";
import { allCourseList } from "@/data/courseData";

const { title, details, description } = trendingSection;

const TrendingSection = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const [courseCode, setcourseCode] = useState("");

  function redirectCard(name: any, code: any, id: any, parent_id: any) {
    if (
      code === dataScienceCode ||
      code === digitalMarkrtingCode ||
      code === artificialIntelligenceCode
    ) {
      router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    } else {
      const courseDetails = _.find(
        allCourseList,
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
    setIsLoading(false);
  }, []);

  let CourseCard: any = [];

  if (allCourseList?.length) {
    allCourseList?.forEach(function (val: any) {
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
      <div className="">
        <div className="sec-title text-center">
          <h2>{title}</h2>
          {/* <h6 className="desc">{description}</h6> */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="carousel-box">
            <div className="testimonials-carousel">
              <Swiper
                navigation={{
                  nextEl: ".tns-next",
                  prevEl: ".tns-prev",
                }}
                slidesPerView={3.7}
                // centeredSlides={true}
                slidesOffsetBefore={80}
                slidesOffsetAfter={80}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1.4,
                  },
                  570: {
                    slidesPerView: 1.4,
                  },
                  720: {
                    slidesPerView: 2.4,
                  },
                  992: {
                    slidesPerView: 2.1,
                  },
                  1200: {
                    slidesPerView: 3.4,
                  },
                  1440: {
                    slidesPerView: 3.7,
                  },
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
                    <SwiperSlide key={id}>
                      <div className="gallery-item">
                        <div className="inner-box">
                          <figure className="image">
                            <Image
                              priority={true}
                              src={`/assets/images/gallery/${code}.webp`}
                              layout="responsive"
                              width="274"
                              height="182"
                              alt="Trending Course"
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
                                  <li>International Certification </li>
                                  <li>Capstone Projects </li>
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
                              onClick={() => {
                                handleShow();
                                setcourseCode(code);
                              }}
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
                            courseCode={courseCode}
                          />
                        </Modal>
                        <Modal show={thankYouShow}>
                          <ThankYouPopup setShows={setThankYouShow} />
                        </Modal>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
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
