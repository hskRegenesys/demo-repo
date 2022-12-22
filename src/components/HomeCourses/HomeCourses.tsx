import React, { useState, useEffect, useContext } from "react";
import gallerySection from "@/data/gallerySection";

import ProductTab from "./ProductTab";
import Link from "next/link";

let { title, tabBtns, pTabs, courseTab, cTab, pTabs2, describe } =
  gallerySection;

const HomeCourses = ({ className = "", carousel = "", courses = [] }:any) => {
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (courses.length > 0) {
      setCurrent(courses[0].id);
    }
  }, [courses.length]);

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
                {courses.map((item:any) => {
                  const { id, name, tab, count } = item;
                  return(
                  <li
                    key={id}
                    onClick={() => setCurrent(id)}
                    className={`p-tab-btn${
                      current === tab ? " active-btn" : ""
                    }`}
                  >
                    {name}
                  </li>
                )})}
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
            <ProductTab carousel={carousel} tab={courses} current={current} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
