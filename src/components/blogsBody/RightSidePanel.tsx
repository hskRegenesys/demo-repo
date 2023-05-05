import React from "react";
import ApplyNow from "./ApplyNow";
import About from "./About";
import Ads from "./Ads";
import RecommendedPost from "./RecommendedPost";

type IRightSidePanelTypes = {
  isRecommendedPost?: boolean;
  yellowBtn?: boolean;
};

const RightSidePanel = ({
  isRecommendedPost,
  yellowBtn,
}: IRightSidePanelTypes) => {
  return (
    <div className="row">
      <div className="col-12 col-sm-4 col-lg-12 py-3 _ps-lg-5">
        <ApplyNow yellowBtn={yellowBtn} />
      </div>
      <div className="col-12 col-sm-4 col-lg-12 py-5 _ps-lg-5">
        {isRecommendedPost ? <RecommendedPost /> : <About />}
      </div>
      <div className="col-12 col-sm-4 col-lg-12 py-5 _ps-lg-5">
        <Ads />
      </div>
    </div>
  );
};

export default RightSidePanel;
