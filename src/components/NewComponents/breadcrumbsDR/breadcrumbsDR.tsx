// BreadcrumbsDR.jsx

import Link from "next/link";
import React from "react";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";
import Styles from "./breadcrumbsDR.module.css";
import Image from "next/image";

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
  const imageUrl = `${process.env.awsImage_url}`;

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
                      <Image
                        className={Styles.arrowIcon}
                        // src={`${imageUrl}Icons/arrowGray.svg`}
                        src="/assets/images/new-component-assets/arrowGray.svg"
                        alt="Arrow Icon"
                        width={16}
                        height={16}
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
                      <Image
                        className={Styles.arrowIcon}
                        // src={`${imageUrl}Icons/arrowGray.svg`}
                        src="/assets/images/new-component-assets/arrowGray.svg"
                        alt="Arrow Icon"
                        width={16}
                        height={16}
                      />
                    </li>
                    <li className={Styles.fontCapitalized}>
                      <Link href={parentToParentHref}>{parentToParent}</Link>
                    </li>
                  </>
                )}
                <li className={Styles.separator}>
                  <Image
                    className={Styles.arrowIcon}
                    // src={`${imageUrl}Icons/arrowGray.svg`}
                    src="/assets/images/new-component-assets/arrowGray.svg"
                    alt="Arrow Icon"
                    width={16}
                    height={16}
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
