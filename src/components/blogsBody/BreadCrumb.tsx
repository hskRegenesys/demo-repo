import Link from "next/link";
import React from "react";

const BreadCrumb = ({
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
      <ul className="bread-crumb ">
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
    </section>
  );
};

export default BreadCrumb;
