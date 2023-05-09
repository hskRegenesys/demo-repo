import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";
import { carousalProps } from "./dataTypes";

const BlogsBody = () => {
  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="position-relative">
        <div className="border border-dark">
          <CarouselComponent carouselProps={carousalProps} />
        </div>
        <div className="apply-now-form-box position-absolute">
          <LandingForm />
        </div>
      </div>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Categories />
            <Blogs />
          </div>
          <div className="col-12 col-lg-3">
            <RightSidePanel />
          </div>
        </div>
      </div>
      <TrendingSection />
      <NewsLetter />
    </div>
  );
};

export default BlogsBody;
