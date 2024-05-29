import Link from "next/link";
import React from "react";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";
import AllPageStickyData from "@/data/stickyData";

interface PageBannerProps {
  title?: string;
  page?: string;
  parent?: string;
  parentHref?: string;
  parentToParent?: string;
  parentToParentHref?: string;
  pageTitle?: string; // Explicitly define the type for pageTitle
}

const PageBanner: React.FC<PageBannerProps> = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
  parentToParent = "",
  parentToParentHref = "/",
  pageTitle, // Specify the type for pageTitle
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

  const stickyDataKeys = Object.keys(AllPageStickyData); // Store the keys

  return (
    <section className="page-banner">
      <Schemas type={Constants.breadCrumb} data={breadCrumbs} />
      <div className="banner-inner">
        <div className="auto-container">
          <div
            className={`${
              pageTitle && stickyDataKeys.includes(pageTitle)
                ? "inner-container"
                : "sticky-remove-space"
            } clearfix`}
          >
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
