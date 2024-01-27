// NavItemWithSubItem.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRootContext } from "@/context/context";

const NavItem = (props: any) => {
  const { navItem = {}, mobile = false, onePage = false, isLoading } = props;
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const { pathname } = useRouter();
  const contextRoot: any = useRootContext();
  const { menuStatus, toggleMenu, currentActive } = contextRoot;
  const { name, href, subNavItems = [] } = navItem;
  const subHref = subNavItems?.map((item: any) => item.href);

  const current = !onePage
    ? pathname === href || subHref.includes(pathname)
    : currentActive === href;

  const handleHover = (subItemName: string) => {
    setActiveSubItem(subItemName);
  };

  const handleLeave = () => {
    setActiveSubItem(null);
  };

  // Degree programmes data
  const degreeProgrammesData = [
    {
      courseName: "MBA",
      courseUrl: "https://www.regenesys.net/master-of-business-administration",
    },
    // ... (other degree programs)
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
    <li
      className={`dropdown${current ? " current" : ""}`}
      onMouseLeave={handleLeave}
    >
      <Link href={href}>
        <a
          onMouseEnter={() => mobile && href.includes("#") && toggleMenu()}
          href={href}
        >
          {name}
          {subNavItems?.length > 0 && (
            <div
              onMouseEnter={() => handleHover(subNavItems[0].name)}
              className={`dropdown-btn${
                activeSubItem === subNavItems[0].name ? " open" : ""
              }`}
            >
              <span className="fa fa-angle-right"></span>
            </div>
          )}
        </a>
      </Link>

      {subNavItems?.length > 0 && (
        <ul onMouseEnter={() => handleHover(subNavItems[0].name)}>
          <div className="mainMegaMenu">
            <div className="megamenuCourses">
              <h2>Certificate Courses</h2>

              {subNavItems?.map((subItem: any) => (
                <li
                  key={subItem.id}
                  className={`${subItem.subItems?.length ? "dropdown" : ""} ${
                    pathname === subItem.href ? "current" : ""
                  }`}
                  onMouseEnter={() => handleHover(subItem.name)}
                >
                  <a href={subItem.href}>
                    {subItem.name} {subItem.isNew && <span>new</span>}
                    {!!subItem.subItems?.length && (
                      <div>
                        <span className="fa fa-angle-right"></span>
                      </div>
                    )}
                  </a>

                  <ul
                    style={{
                      display:
                        activeSubItem === subItem.name ? "block" : "none",
                      opacity: activeSubItem === subItem.name ? 1 : 0,
                      transition: "opacity 0.6s ease",
                    }}
                    className={
                      subItem.name === "Blog Categories" ? "sub-nav-items" : ""
                    }
                  >
                    {subItem.subItems
                      ?.filter((item: any) => item.name !== "Full-Stack")
                      ?.map((item: any) => (
                        <li
                          key={item.id}
                          className={`dropdown`}
                          style={{
                            listStyle: "block",
                            listStyleType: "circle",
                            marginLeft: "30px",
                          }}
                        >
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
              ))}
            </div>

            <div className="degreeCoursesData">
              <h2>Training Programmes</h2>
              {degreeProgrammesData?.map((item) => (
                <Link key={item.courseName} href={item.courseUrl}>
                  {item.courseName}
                </Link>
              ))}
            </div>
            <div className="degreeCoursesData">
              <h2>Training Programmes</h2>
              {degreeProgrammesData?.map((item) => (
                <Link key={item.courseName} href={item.courseUrl}>
                  {item.courseName}
                </Link>
              ))}
            </div>
          </div>
        </ul>
      )}
    </li>
  );
};

export default NavItem;
