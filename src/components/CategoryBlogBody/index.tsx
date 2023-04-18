import React from "react";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
const CategoryBlogsBody = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-9">
          <Blogs />
        </div>
        <div className="col-3">
          <RightSidePanel />
        </div>
      </div>
    </div>
  );
};

export default CategoryBlogsBody;
