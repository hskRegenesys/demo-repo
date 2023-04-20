import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingCourse from "./TrendingCourse";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";

const carasoulProps = [
  {
    image: "Sample-Banner-01.jpeg",
    label: "test label",
    caption: "test caption",
  },
  {
    image: "Sample-Banner-02.jpeg",
    label: "test",
    caption: "test",
  },
  {
    image: "Sample-Blog-Card-Image.png",
    label: "test",
    caption: "test",
  },
];

const BlogsBody = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="carasoul-container my-5 position-relative">
            <CarouselComponent carouselProps={carasoulProps} />
            <div className="apply-now-form-box position-absolute">
              <LandingForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Categories />
            <Blogs />
          </div>
          <div className="col-3">
            <RightSidePanel />
          </div>

          <TrendingCourse />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default BlogsBody;
