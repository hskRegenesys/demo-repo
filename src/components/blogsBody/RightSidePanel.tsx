import React from "react";
import ApplyNow from "./ApplyNow";
import About from "./About";
import Ads from "./Ads";
import RecommendedPost from "./RecommendedPost";
import { useRouter } from "next/router";

type IRightSidePanelTypes = {
  isRecommendedPost?: boolean;
  yellowBtn?: boolean;
  isBlogDetail?: boolean;
};

const RightSidePanel = ({
  isRecommendedPost,
  yellowBtn,
  isBlogDetail,
}: IRightSidePanelTypes) => {
  const router = useRouter();
  return (
    <div className="row">
      {!isBlogDetail && (
        <div
          className={`col-12 col-sm-4 col-lg-12 py-3 pt-5 _ps-lg-5 new-apply-now-btn ${
            router.pathname === "/blog" && "main-blog-page-apply"
          }`}
        >
          <ApplyNow yellowBtn={yellowBtn} />
        </div>
      )}

      <div
        className={`col-12 col-sm-4 col-lg-12 py-5 _ps-lg-5 bottom-apply-btn ${
          isBlogDetail && "blog-right-side-panel"
        }`}
      >
        {isRecommendedPost ? <RecommendedPost /> : <About />}
      </div>

      {/* <div className="col-12 col-sm-4 col-lg-12 py-5 _ps-lg-5 ads-new-style">
        <Ads />
      </div> */}
    </div>
  );
};

export default RightSidePanel;
