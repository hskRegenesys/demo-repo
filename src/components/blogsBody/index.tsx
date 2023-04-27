import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";
import { wpService } from "src/services";

const carasoulProps = [
  {
    image: "data-0_awU-za2-transformed.jpeg",
    label: "",
    caption: "",
  },
  {
    image: "Digital_(2)-transformed.jpeg",
    label: "",
    caption: "",
  },
  {
    image: "Project-Management-Banner.png",
    label: "",
    caption: "",
  },
  {
    image: "1634114902599.jpg",
    label: "",
    caption: "",
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
        </div>
      </div>
      <TrendingSection />
      <NewsLetter />
    </div>
  );
};

export default BlogsBody;
