import React, { useState, useEffect, useContext, useRef } from "react";
import trendingSection from "@/data/trendingSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import { batchInfo } from "../config/helper";
import { dataScienceCode, digitalMarkrtingCode } from "../config/constant";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

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
  fixedWidth: 290,
};

const { title, details, description } = trendingSection;

const TrendingSection = () => {
  const router = useRouter();
  const [courseData, setcourseData] = useState([]);
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
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
      Math.abs(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }
  return (
    <section ref={ref} className="testimonials-section" id="testimonials">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>{title}</h2>
          <h6 className="desc">{description}</h6>
        </div>

        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider
              options={{
                ...settings,
              }}
              ref={listRef}
            >
              {CourseCard?.map(
                ({ id, name, courseMode, batches, code }: any) => (
                  <div ref={listRef} className="gallery-item" key={id}>
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
                              <li>{courseMode.name} Classes</li>
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
      </div>
    </section>
  );
};

export default TrendingSection;
