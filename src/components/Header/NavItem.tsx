import { useRootContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loader from "../Loader/Loader";

const SubItem = (props: any) => {
  const [active, setActive] = useState(false);
  const contextRoot: any = useRootContext();
  const { menuStatus } = contextRoot;
  const { subItems, href, name, isNew } = props.subItem;
  const { pathname } = useRouter();

  const handleActive = (e: any) => {
    e.preventDefault();
    setActive((preActive) => !preActive);
  };

  return (
    <li
      className={`${subItems?.length ? "dropdown" : ""} ${
        pathname === href ? "current" : ""
      }`}
    >
      <a href={href}>
        {name} {isNew && <span>new</span>}
        {!!subItems?.length && (
          <div
            onClick={handleActive}
            className={`dropdown-btn${active ? " open" : ""}`}
          >
            <span className="fa fa-angle-right"></span>
          </div>
        )}
      </a>

      <ul
        style={{
          display: !menuStatus || active ? "block" : "none",
        }}
        className={name === "Blog Categories" ? "sub-nav-items" : ""}
      >
        {subItems
          ?.filter((item: any) => item.name !== "Full-Stack")
          ?.map((item: any) => (
            <li key={item.id} className={`dropdown`}>
              <a
                href={item.href}
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                {item.name} {item.isNew && <span>new</span>}
              </a>
            </li>
          ))}
      </ul>
    </li>
  );
};

const NavItem = (props: any) => {
  const { navItem = {}, mobile = false, onePage = false, isLoading } = props;
  const [active, setActive] = useState(false);
  const { pathname } = useRouter();
  const contextRoot: any = useRootContext();
  const { menuStatus, toggleMenu, currentActive } = contextRoot;
  const { name, href, subNavItems = [] } = navItem;
  const subHref = subNavItems?.map((item: any) => item.href);

  const current = !onePage
    ? pathname === href || subHref.includes(pathname)
    : currentActive === href;
  const handleActive = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setActive((preActive) => !preActive);
  };
  //degree programmes
  const degreeProgrammesData = [
    {
      courseName: "MBA",
      courseUrl: "https://www.regenesys.net/master-of-business-administration",
    },
    {
      courseName: "BPM",
      courseUrl: "https://www.regenesys.net/master-of-business-administration",
    },
    {
      courseName: "DBM",
      courseUrl: "",
    },
    {
      courseName: "NDPA",
      courseUrl: "",
    },
    {
      courseName: "PDBM",
      courseUrl: "",
    },
    {
      courseName: "HCPM",
      courseUrl: "",
    },
    {
      courseName: "BBA",
      courseUrl: "",
    },
    {
      courseName: "BBAB",
      courseUrl: "",
    },
    {
      courseName: "BBAR",
      courseUrl: "",
    },
  ];

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        <a
          onClick={() => mobile && href.includes("#") && toggleMenu()}
          href={href}
        >
          {name}
          {subNavItems?.length > 0 && (
            <div
              onClick={handleActive}
              className={`dropdown-btn${active ? " open" : ""}`}
            >
              <span className="fa fa-angle-right"></span>
            </div>
          )}
        </a>
      </Link>

      {subNavItems?.length > 0 && (
        <ul
          style={{
            display: !menuStatus || active ? "inline-block" : "none",
          }}
        >
          <div className="row">
            <div className="col-md-4">
              {subNavItems?.map((subItem: any) => (
                <SubItem className="block" key={subItem.id} subItem={subItem} />
              ))}
            </div>
            <div className="col-md-4">
              <div className="degreeCoursesData">
                {degreeProgrammesData?.map((item) => {
                  return (
                    <>
                      <Link href={item.courseUrl}>{item.courseName}</Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">sjbvhjws</div>
          </div>
        </ul>
      )}
    </li>
  );
};

export default NavItem;
