import React, { useState, useEffect, useContext } from "react";
import gallerySection from "@/data/gallerySection";

import ProductTab from "./ProductTab";
import Link from "next/link";
import { Tab } from "react-bootstrap";
import { courseService } from "src/services";
import _ from "lodash";

let { title, tabBtns, pTabs, courseTab, cTab, pTabs2, describe } =
  gallerySection;

// const CourseCardHome = ["id", "image", "title", "batch"];

// const data = [{}];
// let blank = [];
// let blankObj = {};

// let blankObjArr = [
//   { id: "", image: "", title: "", batch: "" },
//   { id: "", image: "", title: "", batch: "" },
//   { id: "", image: "", title: "", batch: "" },
//   { id: "", image: "", title: "", batch: "" },
// ];

// blankObjArr.forEach(function (value, index) {
//   console.log(index, value);
// });

// const abc = [1, 2, 3];

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
  const newPTabs = carousel ? pTabs2 : pTabs;
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

  if (courseData.length) {
    CourseCard = ["id", "name", "description"];
    CourseCard = _.filter(
      courseData,
      (item) =>
        item?.parent_id === null &&
        item?.isAddon === false &&
        item?.mode_id === 1
    );
  }
  console.log("Ravindra", CourseCard);
  console.log("Ravindra1", courseHome);
  return (
    <section className={`gallery-section-two ${className}`}>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
