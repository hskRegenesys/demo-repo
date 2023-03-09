import Link from "next/link";
import React from "react";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";

const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
  parentToParent = "",
  parentToParentHref = "/",
}) => {
  const breadCrumbs = [
    {
      title: "Home",
      href: "/",
    },
  ];
  if (parent) {
    breadCrumbs.push({
      title: parent,
      href: parentHref,
    });
  }

  if (parentToParent) {
    breadCrumbs.push({
      title: parentToParent,
      href: parentToParentHref,
    });
  }
  return (
    <section className="page-banner">
      <Schemas type={Constants.breadCrumb} data={breadCrumbs} />
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
                  <li className="font-capitalized">
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
