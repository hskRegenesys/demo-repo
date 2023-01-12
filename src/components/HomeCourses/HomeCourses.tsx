import React, { useState, useEffect, useContext } from "react";
import gallerySection from "@/data/gallerySection";

import ProductTab from "./ProductTab";
import Link from "next/link";
import _ from "lodash";

let { title, tabBtns, pTabs, courseTab, cTab, pTabs2, describe } =
  gallerySection;

const HomeCourses = ({ className = "", carousel = "", courses = [] }: any) => {
  const [current, setCurrent] = useState<any>();
  useEffect(() => {
    if (courses.length > 0) {
      setCurrent(0);
    }
  }, [courses.length]);

  let parentCourse: any = [];

  if (courses.length) {
    parentCourse = _.filter(courses, (item: any) => item?.parent_id === null);
    parentCourse.unshift({ id: 0, name: "All Courses", code: "all" });
  }

  return (
    <section className={`gallery-section-two ${className}`}>
      <div>{courses.batches}</div>
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
                {parentCourse?.map((item: any) => {
                  const { id, name } = item;
                  return (
                    <li
                      key={id}
                      onClick={() => {
                        setCurrent(id);
                      }}
                      className={`p-tab-btn${
                        current === id ? " active-btn" : ""
                      }`}
                    >
                      {name}
                    </li>
                  );
                })}
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
            <ProductTab
              carousel={carousel}
              courses={courses}
              current={current}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
