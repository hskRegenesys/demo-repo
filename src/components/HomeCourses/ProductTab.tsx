import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  dataScienceCode,
  digitalMarkrtingCode,
  allCoursesId,
  programBaseUrl,
} from "../config/constant";
import { batchInfo, urlInfo } from "../config/helper";
import _ from "lodash";

import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  slideBy: "page",
  autoplay: true,
  loop: true,
  gutter: 30,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
};

const ProductTab = ({ courses = [], current }: any) => {
  const router = useRouter();
  const [filterCourses, setFilterCourses] = useState([]);

  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  function getWeeksDiff(start_date: any, end_date: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.abs(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }

  function redirectCard(name: any, code: any, id: any, parent_id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode) {
      router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    } else {
      const courseDetails = _.find(courses, (item) => item?.id === parent_id);
      courseDetails
        ? router.push(
            `/${programBaseUrl}/${urlInfo(courseDetails?.name)}/${urlInfo(
              name
            )}`
          )
        : router.push(`/${programBaseUrl}/${urlInfo(name)}`);
    }
  }

  const listRef = useRef(null);
  let id = current;
  const filterCourse = (id: number) => {
    let filterCourse: any = [];
    if (courses?.length) {
      courses?.forEach((item: any) => {
        if (item.id === id || item.parent_id === id) {
          filterCourse.push(item);
        } else if (id === 1) {
        } else if (id === allCoursesId) {
          filterCourse = courses;
        }
      });
    }
    const courseOrder: any = _.filter(
      filterCourse,
      (item) =>
        item.code !== dataScienceCode && item.code !== digitalMarkrtingCode
    );
    setFilterCourses(courseOrder);
  };
  useEffect(() => {
    if (current >= 0) {
      filterCourse(current);
    }
  }, [current]);

  if (filterCourses.length) {
    return (
      <div className={`p-tab${current === id ? " active-tab" : ""}`}>
        <div className="project-carousel tabFullBox">
          {filterCourses?.map(
            ({
              id,
              name,
              courseMode,
              batches,
              code,
              durationInWeeks,
              parent_id,
            }: any) => (
              <div ref={listRef} className="gallery-item tab-item" key={id}>
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
                        <h5>{name}</h5>
                      </div>

                      <div className="cat">
                        <ul className="about-seven__list list-unstyled">
                          <li>{courseMode.name} Classes</li>
                          <li>{durationInWeeks} Weeks</li>
                          <li>Internation Certification </li>
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
                      onClick={() => redirectCard(name, code, id, parent_id)}
                    >
                      <i className="btn-curve"></i>
                      <span className="btn-title">Learn More</span>
                    </a>

                    <a className="theme-btn btn-style-two" onClick={handleShow}>
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
        </div>
      </div>
    );
  }
  return <></>;
};

export default ProductTab;
