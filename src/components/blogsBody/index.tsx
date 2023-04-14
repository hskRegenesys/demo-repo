import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingCourse from "./TrendingCourse";

const BlogsBody = () => {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      BlogsBody
      <div className="row">
        <div className="col-9">
          Left Side Panel
          <Categories />
          <Blogs />
        </div>
        <div className="col-3">
          Right Side Panel
          <RightSidePanel />
        </div>
        <NewsLetter />
        <TrendingCourse />
      </div>
    </div>
  );
};

export default BlogsBody;
