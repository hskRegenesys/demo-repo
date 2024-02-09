// BreadcrumbsDR.jsx

import Link from "next/link";
import React from "react";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";
import Styles from "./breadcrumbsDR.module.css";

const BreadcrumbsDR = ({
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
    <section className={Styles.BreadcrumbsDR}>
      <Schemas type={Constants.breadCrumb} data={breadCrumbs} />
      <div className={Styles.BreadcrumbsInner}>
        <div className={Styles.autoContainer}>
          <div className={Styles.innerContainer}>
            {/* <h1>{title}</h1> */}
            <div className={Styles.pagePath}>
              <ul className={Styles.breadCrumbHome}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {parent && (
                  <>
                    <li className={Styles.separator}>
                      <img
                        className={Styles.arrowIcon}
                        src="/assets/images/HomeNew/arrowGray.svg"
                        alt="Arrow Icon"
                      />
                    </li>
                    <li>
                      <Link href={parentHref}>{parent}</Link>
                    </li>
                  </>
                )}
                {parentToParent && (
                  <>
                    <li className={Styles.separator}>
                      <img
                        className={Styles.arrowIcon}
                        src="/assets/images/HomeNew/arrowGray.svg"
                        alt="Arrow Icon"
                      />
                    </li>
                    <li className={Styles.fontCapitalized}>
                      <Link href={parentToParentHref}>{parentToParent}</Link>
                    </li>
                  </>
                )}
                <li className={Styles.separator}>
                  <img
                    className={Styles.arrowIcon}
                    src="/assets/images/HomeNew/arrowGray.svg"
                    alt="Arrow Icon"
                  />
                </li>
                <li className={`${Styles.fontCapitalized} ${Styles.active}`}>
                  {page || title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbsDR;
