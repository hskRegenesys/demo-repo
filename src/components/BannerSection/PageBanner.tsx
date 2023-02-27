import Link from "next/link";
import React from "react";

const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
  parentToParent = "",
  parentToParentHref = "/",
}) => {
  return (
    <section className="page-banner">
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            {/* <h1>{title}</h1> */}
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>{parent}</Link>
                  </li>
                )}
                {parentToParent && (
                  <li className=" font-capitalized">
                    <Link href={parentToParentHref}>{parentToParent}</Link>
                  </li>
                )}
                <li className="active font-capitalized">{page || title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
