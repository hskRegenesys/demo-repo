import { shopPage } from "@/data/shopPage";

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import GallerySectionOne from "@/components/HomeCourses/GallerySectionOne";

const options = ["Sort by Price", "Sort by Date", "Sort by Ratings"]?.map(
  (it) => ({
    value: it,
    label: it,
  })
);

const { categories, products } = shopPage;

const CoursesWithFilter = () => {
  const [sliderValue, setSliderValue] = useState([30, 150]);

  const [sortBy, setSortBy] = useState("Sort by Price");

  const handleSelectSortBy = (props: any) => {
    setSortBy(props.value);
  };

  const handleSlideChange = (value: any) => {
    setSliderValue(value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <section className="shop-page gallery-section-two">
      <div className="FluidSection">
        <Row>
          <Col lg={3}>
            <div className="shop-sidebar">
              <div className="shop-search shop-sidebar__single">
                <form onSubmit={handleSearch}>
                  <input type="text" placeholder="Search" name="search" />
                  <button type="submit">
                    <i className="flaticon-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="shop-range shop-sidebar__single">
                <h3 className="shop-sidebar__title">Price</h3>
                <div className="product-sidebar__price-range">
                  {/* <Slider
                    range
                    allowCross={false}
                    value={sliderValue}
                    onChange={handleSlideChange}
                    max={200}
                    min={10}
                    className="range-slider-price"
                    draggableTrack
                  /> */}
                  <div className="form-group">
                    <div className="left">
                      <p>
                        $
                        <span id="min-value-rangeslider">{sliderValue[0]}</span>
                      </p>
                      <span>-</span>
                      <p>
                        $
                        <span id="max-value-rangeslider">{sliderValue[1]}</span>
                      </p>
                    </div>
                    <div className="right">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Filter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-category shop-sidebar__single">
                <h3 className="shop-sidebar__title">Categories</h3>
                <ul className="list-unstyled">
                  {categories?.map((category, i) => (
                    <li key={i}>
                      <a href="#">{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <GallerySectionOne portfolio />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoursesWithFilter;
