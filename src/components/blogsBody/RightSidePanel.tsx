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
    <div>
      <div className="my-3 ms-5">
        <ApplyNow yellowBtn={yellowBtn} />
      </div>
      <div className="my-5 ms-5">
        {isRecommendedPost ? <RecommendedPost /> : <About />}
      </div>
      <div className="my-5 ms-5">
        <Ads />
      </div>
    </div>
  );
};

export default RightSidePanel;
