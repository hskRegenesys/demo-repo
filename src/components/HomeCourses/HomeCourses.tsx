import React, { useState, useEffect, useContext } from "react";
import gallerySection from "@/data/gallerySection";

import ProductTab from "./ProductTab";
import Link from "next/link";
import { courseService } from "src/services";
import _ from "lodash";

let { title, tabBtns, pTabs, courseTab, cTab, pTabs2, describe } =
  gallerySection;

const HomeCourses = ({ className = "", carousel = "" }) => {
  const [courseData, setcourseData] = useState([]);
  const getData = async () => {
    let courseListResponse = await courseService.allParentCourses();
    setcourseData(courseListResponse);
  };

  useEffect(() => {
    getData();
  }, []);
  const [current, setCurrent] = useState("p-tab-1");
  const courseHome = carousel ? courseTab : cTab;
  let courses: any = [];
  let CourseCard: any = [];

  if (courseData.length) {
    courses = _.filter(
      courseData,
      (item) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }

  courseData.forEach(function (val) {
    if (val.parent_id === null && val.isAddon == false && val.mode_id === 1) {
      CourseCard.push(val);
    }
  });

  console.log("coursecard", CourseCard);

  return (
    <section className={`gallery-section-two ${className}`}>
      <div>{CourseCard.batches}</div>
      <div className="auto-container">
        <div className="sec-title">
          <h2>{title}</h2>
          <div></div>
          <h6 className="desc">{describe}</h6>
        </div>
      </div>
      <div className="project-tab">
        <div className="auto-container">
          <div className="tab-btns-box">
            <div className="tabs-header">
              <ul className="product-tab-btns clearfix text-start">
                {courses.map(({ id, name, tab, count }) => (
                  <li
                    key={id}
                    onClick={() => setCurrent(tab)}
                    className={`p-tab-btn${
                      current === tab ? " active-btn" : ""
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="auto-container">
          <div className="all-course-link">
            <Link href="/all-course">All Courses</Link>
          </div>
        </div>

        <div className={className ? "auto-container" : ""}>
          <div className="p-tabs-content">
            {courseHome.map((tab) => (
              <ProductTab
                carousel={carousel}
                tab={tab}
                key={tab.id}
                current={current}
                CourseCard={CourseCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
