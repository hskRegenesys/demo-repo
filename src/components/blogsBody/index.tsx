import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingCourse from "./TrendingCourse";

const BlogsBody = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="w-100" style={{ overflow: "hidden", height: "50vh" }}>
        <img src="https://placehold.co/4000x1000?text=Slider" />
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
