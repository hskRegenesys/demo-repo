import React, { useState, useEffect, useContext, useRef } from "react";
import trendingSection from "@/data/trendingSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";
import { Image } from "react-bootstrap";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const responsive1 = {
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
  1500: {
    items: 4,
    gutter: 30,
  },
  1600: {
    items: 5,
    gutter: 30,
  },
};

const responsive2 = {
  600: {
    items: 1,
    gutter: 30,
  },
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
};

const settings = {
  loop: false,
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    991: {
      items: 2,
      gutter: 30,
    },
  },
};

const { title, details, description } = trendingSection;

const TrendingSection = (carousel:any) => {
  const [courseData, setcourseData] = useState([]);
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };

  useEffect(() => {
    getData();
  }, []);

  let courses: any = [];
  let CourseCard: any = [];

  if (courseData?.length) {
    courses = _.filter(
      courseData,
      (item:any) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }

  courseData?.forEach(function (val:any) {
    if (val.parent_id === null && val.isAddon == false && val.mode_id === 1) {
      CourseCard.push(val);
    }
  });
  const listRef = useRef(null);
  const ref = useActive("#testimonials");

  function getWeeksDiff(start_date:any, end_date:any) {
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
                container: `.my-slider-5`,
                nav: !carousel,
                responsive: carousel ? responsive2 : responsive1,
              }}
              ref={listRef}
            >
              {CourseCard?.map(({ id, name, courseMode, batches }:any) => (
                <div ref={listRef} className="gallery-item" key={id}>
                  <div className="inner-box">
                    <div className="icon">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </div>
                    <figure className="image">
                      <Image src={require(`/src/assets/images/gallery/1.jpg`)} alt="" />
                    </figure>
                    <a
                      className="lightbox-image overlay-box"
                      data-fancybox="gallery"
                    ></a>
                    <div className="cap-box">
                      <div className="cap-inner">
                        <div className="title">
                          <h5>
                            <Link href="/portfolio-single">
                              <a>{name}</a>
                            </Link>
                          </h5>
                        </div>

                        <div className="cat">
                          <ul className="about-seven__list list-unstyled">
                            <li>{courseMode.name}</li>
                            <li>
                              {batches.map((item:any) => (
                                <>
                                  {getWeeksDiff(item.start_date, item.end_date)}
                                  &nbsp;Week
                                </>
                              ))}
                            </li>
                            <li>Internation certification </li>
                            <li>Capstone projects </li>
                          </ul>
                        </div>
                        {batches.map((item:any) => (
                          <div className="batch">{item.description}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
