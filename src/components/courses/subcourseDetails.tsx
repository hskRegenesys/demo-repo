import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { dataScienceCode, digitalMarkrtingCode } from "../config/constant";
import { batchInfo } from "../config/helper";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".sub-courses",
  items: 3,
  slideBy: "page",
  autoplay: true,
  loop: false,
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
  const getData = async () => {
    setSubCourse([])
    let courseListResponse = await courseService.allCourses();

    if (page === "Data-Science") {
      const subCourse = _.filter(
        courseListResponse,
        (item) => item.parent_id === 10
      );

      setSubCourse(subCourse);
    } else {
      const subCourse = _.filter(
        courseListResponse,
        (item) => item.parent_id === 24
      );
      setSubCourse(subCourse);
    }
  };

  function redirectCard(name: any, code: any, id: any) {
    if (code === dataScienceCode || code === digitalMarkrtingCode) {
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
            <TinySlider
              options={{
                ...settings,
              }}
              ref={listRef}
            >
              {subCourse?.map(
                ({ id, name, courseMode, batches, code, durationInWeeks }: any) => (
                  <div ref={listRef} key={id} className="testi-block">
                    <div className="gallery-item tns-item">
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
                                <Link
                                  href={`/${name?.split(" ").join("-")}/${id}`}
                                >
                                  <a>{name}</a>
                                </Link>
                              </h5>
                            </div>

                            <div className="cat">
                              <ul className="about-seven__list list-unstyled">
                                <li>{courseMode.name} Classes</li>
                                <li>
                                  {durationInWeeks} Weeks
                                </li>
                                <li>International certification </li>
                                <li>Capstone projects </li>
                              </ul>
                            </div>
                            <div className="batch">
                              {batchInfo(batches)?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </TinySlider>

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
