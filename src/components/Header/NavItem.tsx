// NavItemWithSubItem.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Image from "next/image";

const { icon, navItems, navItemsTwo } = headerData;

const NavItem = (props: any) => {
  const { navItem = {}, mobile = false, onePage = false, isLoading } = props;
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const { pathname } = useRouter();
  const contextRoot: any = useRootContext();
  const { menuStatus, toggleMenu, currentActive } = contextRoot;
  const { name, href, subNavItems = [] } = navItem;
  const subHref = subNavItems?.map((item: any) => item.href);
  const newNavItems = onePage ? navItemsTwo : navItems;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );

  const current = !onePage
    ? pathname === href || subHref?.includes(pathname)
    : currentActive === href;

  const handleHover = (subItemName: string) => {
    setActiveSubItem(subItemName);
  };

  const handleLeave = () => {
    setActiveSubItem(null);
  };

  // const isMobileView = typeof window !== "undefined" && window.innerWidth < 920;
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Degree programmes data
  const degreeProgrammesData = [
    {
      courseName: "MBA",
      courseUrl: "https://www.regenesys.net/master-of-business-administration",
    },
    // ... (other degree programs)
    {
      courseName: "DBM",
      courseUrl: "https://www.regenesys.net/doctor-of-business-management",
    },
    {
      courseName: "PDBM",
      courseUrl:
        "https://www.regenesys.net/postgraduate-diploma-in-business-management",
    },
    {
      courseName: "BBA",
      courseUrl:
        "https://www.regenesys.net/bachelor-of-business-administration",
    },
    {
      courseName: "BBAR",
      courseUrl:
        "https://www.regenesys.net/bachelor-of-business-administration-in-retail",
    },
    {
      courseName: "HCBM",
      courseUrl:
        "https://www.regenesys.net/higher-certificate-in-business-management",
    },
    {
      courseName: "HCBRM",
      courseUrl:
        "https://www.regenesys.net/higher-certificate-in-business-management-in-retail",
    },
    {
      courseName: "MPM",
      courseUrl: "https://www.regenesys.net/master-of-public-management",
    },
    {
      courseName: "PDPM",
      courseUrl:
        "https://www.regenesys.net/postgraduate-diploma-in-public-management",
    },
    {
      courseName: "BPM",
      courseUrl: "https://www.regenesys.net/bachelor-of-public-management",
    },
    {
      courseName: "NDPA",
      courseUrl:
        "https://www.regenesys.net/national-diploma-in-public-administration",
    },
    {
      courseName: "HCPM",
      courseUrl:
        "https://www.regenesys.net/higher-certificate-in-public-management",
    },
    {
      courseName: "BBAB",
      courseUrl:
        "https://www.regenesys.net/bachelor-of-business-administration-in-banking",
    },
    {
      courseName: "HCBCM",
      courseUrl:
        "https://www.regenesys.net/higher-certificate-in-business-management-in-credit-banking",
    },
    {
      courseName: "BCOMPT",
      courseUrl: "https://www.regenesys.net/bachelor-of-accounting-science",
    },
    {
      courseName: "BSCS",
      courseUrl:
        "https://www.regenesys.net/bachelor-of-science-in-computer-science",
    },
    {
      courseName: "LLB",
      courseUrl: "https://www.law.regenesys.net/",
    },
  ];
  const trainingProgrammesData = [
    {
      courseName: "International Leadership Development",
      courseUrl:
        "https://corporateeducation.regenesys.net/international-leadership-development-programme/",
    },
    // ... (other degree programs)
    {
      courseName: "Leadership Development",
      courseUrl:
        "https://corporateeducation.regenesys.net/leadership-development-programme/",
    },
    {
      courseName: "New Managers",
      courseUrl:
        "https://corporateeducation.regenesys.net/new-managers-programme/",
    },
    {
      courseName: "Middle Managers ",
      courseUrl:
        "https://corporateeducation.regenesys.net/middle-managers-programme/",
    },
    {
      courseName: "Professional Communications",
      courseUrl:
        "https://corporateeducation.regenesys.net/professional-communications-bootcamp/",
    },
    {
      courseName: "Women in Leadership",
      courseUrl:
        "https://corporateeducation.regenesys.net/customised-programmes/",
    },
    {
      courseName: "Environmental, Social and Governance",
      courseUrl:
        "https://corporateeducation.regenesys.net/customised-programmes/",
    },
  ];

  const handleDropdownClick = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleSubDropdownClick = (subDropdownName: string) => {
    if (activeSubDropdown === subDropdownName) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(subDropdownName);
    }
  };

  const [showCoursesDropdown1, setShowCoursesDropdown1] = useState(false);
  const [showCoursesDropdown2, setShowCoursesDropdown2] = useState(false);

  const [showCoursesDropdown3, setShowCoursesDropdown3] = useState(false);

  // Toggle the visibility of the courses dropdown
  const toggleCoursesDropdown1 = () => {
    setShowCoursesDropdown1(!showCoursesDropdown1);
  };
  const toggleCoursesDropdown2 = () => {
    setShowCoursesDropdown2(!showCoursesDropdown2);
  };

  const toggleCoursesDropdown3 = () => {
    setShowCoursesDropdown3(!showCoursesDropdown3);
  };
  const mobileIcons = [
    "/assets/images/icons/icon_Home.png",
    "/assets/images/icons/Icon_courses.png",
    "/assets/images/icons/icon_about.png",
    "/assets/images/icons/icon_blog.png",
    "/assets/images/icons/icon_contact.png",
  ];
  return (
    <>
      {isMobileView ? (
        <div>
          <ul className="mobile-nav-new">
            {newNavItems.map((navItem: any, id: any) => (
              <>
                <li
                  key={navItem.id}
                  className={`mobile-nav-item-new ${
                    activeDropdown === navItem.name ? "active" : ""
                  }`}
                >
                  <Link href={navItem.href}>
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        layout="intrinsic"
                        width="24"
                        height="24"
                        src={mobileIcons[id]}
                      />
                      <span className="m-2">{navItem.name}</span>
                      {navItem.subNavItems &&
                        navItem.subNavItems.length > 0 && (
                          <span
                            className="fa fa-angle-right me-2"
                            onClick={() => handleDropdownClick(navItem.name)}
                            style={{
                              marginLeft: "150px",
                            }}
                          ></span>
                        )}
                    </a>
                  </Link>
                  {activeDropdown === navItem.name && (
                    <div className="drop-down-1">
                      <ul>
                        <li
                          className="drop-down-li"
                          onClick={toggleCoursesDropdown1}
                        >
                          Certificate Courses
                          <span className="fa fa-angle-right"></span>
                        </li>
                        {showCoursesDropdown1 && (
                          <div>
                            {navItem.subNavItems &&
                              navItem.subNavItems.length > 0 && (
                                <ul className="drop-down-container-new">
                                  {navItem.subNavItems.map(
                                    (subNavItem: any) => (
                                      <li
                                        key={subNavItem.id}
                                        className="drop-down-subNavItem"
                                      >
                                        <a
                                          style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <Link href={subNavItem.href}>
                                            {subNavItem.name}
                                          </Link>

                                          {subNavItem.subItems &&
                                            subNavItem.subItems.length > 0 && (
                                              <span
                                                className="fa fa-angle-right"
                                                onClick={() =>
                                                  handleSubDropdownClick(
                                                    subNavItem.name
                                                  )
                                                }
                                              ></span>
                                            )}
                                        </a>
                                        {activeSubDropdown ===
                                          subNavItem.name &&
                                          subNavItem.subItems &&
                                          subNavItem.subItems.length > 0 && (
                                            <ul className="mobile-sub-nav-new">
                                              {subNavItem.subItems.map(
                                                (subSubItem: any) => (
                                                  <li
                                                    key={subSubItem.id}
                                                    className="mobile-sub-nav-item-new"
                                                  >
                                                    <Link
                                                      href={subSubItem.href}
                                                    >
                                                      <a>{subSubItem.name}</a>
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </div>
                        )}
                      </ul>
                      <ul>
                        <li
                          className="drop-down-li"
                          onClick={toggleCoursesDropdown2}
                        >
                          Degree Programs{" "}
                          <span className="fa fa-angle-right"></span>
                        </li>
                        {showCoursesDropdown2 && (
                          <div className="drop-down-2">
                            <div className="degreeCoursesData">
                              <div className="inlineDegreeCourse">
                                {degreeProgrammesData?.map((item) => (
                                  <Link
                                    key={item.courseName}
                                    href={item.courseUrl}
                                  >
                                    {item.courseName}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </ul>
                      <ul>
                        <li
                          className="drop-down-li"
                          onClick={toggleCoursesDropdown3}
                        >
                          Training Programmes{" "}
                          <span className="fa fa-angle-right"></span>
                        </li>
                        {showCoursesDropdown3 && (
                          <div className="drop-down-3">
                            {trainingProgrammesData?.map((item) => (
                              <Link key={item.courseName} href={item.courseUrl}>
                                {item.courseName}
                              </Link>
                            ))}
                          </div>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <li
          className={`dropdown${current ? " current" : ""}`}
          onMouseLeave={handleLeave}
        >
          {href ? (
            <Link href={href}>
              <a
                onMouseEnter={() =>
                  mobile && href.includes("#") && toggleMenu()
                }
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
                    <span className="fa fa-angle-down"></span>
                  </div>
                )}
              </a>
            </Link>
          ) : (
            <a></a>
          )}
          {/* Sub navigation */}
          {subNavItems?.length > 0 && (
            <ul onMouseEnter={() => handleHover(subNavItems[0].name)}>
              {subNavItems.map((subItem: any) => (
                <>
                  {subItem.name === "Blog Categories" ? (
                    <li
                      key={subItem.id}
                      className={`${
                        subItem.subItems?.length ? "dropdown" : ""
                      } ${pathname === subItem.href ? "current" : ""}`}
                      onMouseEnter={() => handleHover(subItem.name)}
                    >
                      <a href={subItem.href}>{subItem.name}</a>

                      <ul
                        style={{
                          display:
                            activeSubItem === subItem.name ? "block" : "none",
                          opacity: activeSubItem === subItem.name ? 1 : 0,
                          transition: "opacity 0.6s ease",
                        }}
                      >
                        {subItem.subItems?.map((item: any) => (
                          <li key={item.id} style={{ marginLeft: "30px" }}>
                            <a
                              href={item.href}
                              style={{ fontSize: "14px", fontWeight: "400" }}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <ul onMouseEnter={() => handleHover(subNavItems?.name)}>
                      <div className="mainMegaMenu">
                        <div className="megamenuCourses">
                          <h2>Certificate Courses</h2>

                          {subNavItems?.map((subItem: any) => (
                            <li
                              key={subItem.id}
                              className={`${
                                subItem.subItems?.length ? "dropdown" : ""
                              } ${pathname === subItem.href ? "current" : ""}`}
                              onMouseEnter={() => handleHover(subItem.name)}
                            >
                              <a href={subItem.href}>
                                {subItem.name}{" "}
                                {subItem.isNew && <span>new</span>}
                                {!!subItem.subItems?.length && (
                                  <span className="fa fa-angle-down"></span>
                                )}
                              </a>

                              <ul
                                style={{
                                  display:
                                    activeSubItem === subItem.name
                                      ? "block"
                                      : "none",
                                  opacity:
                                    activeSubItem === subItem.name ? 1 : 0,
                                  transition: "opacity 0.6s ease",
                                }}
                                className={
                                  subItem.name === "Blog Categories"
                                    ? "sub-nav-items"
                                    : ""
                                }
                              >
                                {subItem.subItems
                                  ?.filter(
                                    (item: any) => item.name !== "Full-Stack"
                                  )
                                  ?.map((item: any) => (
                                    <li
                                      key={item.id}
                                      className={`dropdown`}
                                      style={{
                                        listStyle: "none",
                                        listStyleType: "disc",
                                        marginLeft: "30px",
                                        marginBottom: "5px",
                                        color: "#697386 ",
                                      }}
                                    >
                                      <a
                                        href={item.href}
                                        style={{
                                          fontSize: "14px",
                                          fontWeight: "400",
                                        }}
                                      >
                                        {item.name}{" "}
                                        {item.isNew && <span>new</span>}
                                      </a>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          ))}
                        </div>
                        <div className="degreeCoursesData">
                          <h2>Degree Programmes</h2>
                          <div className="inlineDegreeCourse">
                            {degreeProgrammesData?.map((item) => (
                              <Link key={item.courseName} href={item.courseUrl}>
                                {item.courseName}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="trainingProgrammeData">
                          <h2>Training Programmes</h2>
                          {trainingProgrammesData?.map((item) => (
                            <Link key={item.courseName} href={item.courseUrl}>
                              {item.courseName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </ul>
                  )}
                </>
              ))}
            </ul>
          )}
        </li>
      )}
    </>
  );
};

export default NavItem;
