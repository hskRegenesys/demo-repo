import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingCourse from "./TrendingCourse";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";
import BlogContainer from "./BlogContainer";

const carasoulProps = [
  {
    image: "image-1",
    label: "test label",
    caption: "test caption",
  },
  {
    image: "image-1",
    label: "test",
    caption: "test",
  },
  {
    image: "image-1",
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
            <BlogContainer />
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
          <NewsLetter />
          <TrendingCourse />
        </div>
      </div>
    </div>
  );
};

export default BlogsBody;
