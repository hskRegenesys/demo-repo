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
      courseName: "Business",
      courseUrl: "https://www.regenesys.net/all-programmes/business",
    },
    {
      courseName: "Public Management",
      courseUrl: "https://www.regenesys.net/all-programmes/public-management",
    },
    {
      courseName: "Finance      ",
      courseUrl: "https://www.regenesys.net/all-programmes/finance      ",
    },
    {
      courseName: "Technology      ",
      courseUrl: "https://www.regenesys.net/all-programmes/technology",
    },
    {
      courseName: "Law      ",
      courseUrl: "https://www.law.regenesys.net/      ",
    },

    // {
    //   courseName: "MBA",
    //   courseUrl: "https://www.regenesys.net/master-of-business-administration",
    // },
    // // ... (other degree programs)
    // {
    //   courseName: "DBM",
    //   courseUrl: "https://www.regenesys.net/doctor-of-business-management",
    // },
    // {
    //   courseName: "PDBM",
    //   courseUrl:
    //     "https://www.regenesys.net/postgraduate-diploma-in-business-management",
    // },
    // {
    //   courseName: "BBA",
    //   courseUrl:
    //     "https://www.regenesys.net/bachelor-of-business-administration",
    // },
    // {
    //   courseName: "BBAR",
    //   courseUrl:
    //     "https://www.regenesys.net/bachelor-of-business-administration-in-retail",
    // },
    // {
    //   courseName: "HCBM",
    //   courseUrl:
    //     "https://www.regenesys.net/higher-certificate-in-business-management",
    // },
    // {
    //   courseName: "HCBRM",
    //   courseUrl:
    //     "https://www.regenesys.net/higher-certificate-in-business-management-in-retail",
    // },
    // {
    //   courseName: "MPM",
    //   courseUrl: "https://www.regenesys.net/master-of-public-management",
    // },
    // {
    //   courseName: "PDPM",
    //   courseUrl:
    //     "https://www.regenesys.net/postgraduate-diploma-in-public-management",
    // },
    // {
    //   courseName: "BPM",
    //   courseUrl: "https://www.regenesys.net/bachelor-of-public-management",
    // },
    // {
    //   courseName: "NDPA",
    //   courseUrl:
    //     "https://www.regenesys.net/national-diploma-in-public-administration",
    // },
    // {
    //   courseName: "HCPM",
    //   courseUrl:
    //     "https://www.regenesys.net/higher-certificate-in-public-management",
    // },
    // {
    //   courseName: "BBAB",
    //   courseUrl:
    //     "https://www.regenesys.net/bachelor-of-business-administration-in-banking",
    // },
    // {
    //   courseName: "HCBMB",
    //   courseUrl:
    //     "https://www.regenesys.net/higher-certificate-in-business-management-in-credit-banking",
    // },
    // {
    //   courseName: "BCOMPT",
    //   courseUrl: "https://www.regenesys.net/bachelor-of-accounting-science",
    // },
    // {
    //   courseName: "BSCS",
    //   courseUrl:
    //     "https://www.regenesys.net/bachelor-of-science-in-computer-science",
    // },
    // {
    //   courseName: "LLB",
    //   courseUrl: "https://www.law.regenesys.net/",
    // },
  ];
  const trainingProgrammesData = [
    {
      courseName: "International Leadership Development",
      courseUrl:
        "https://corporateeducation.regenesys.net/international-leadership-development-programme/",
    },
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

  const toggleCoursesDropdown1 = () => {
    setShowCoursesDropdown1(!showCoursesDropdown1);
    setShowCoursesDropdown2(false);
    setShowCoursesDropdown3(false);
  };
  const toggleCoursesDropdown2 = () => {
    setShowCoursesDropdown2(!showCoursesDropdown2);
    setShowCoursesDropdown1(false);
    setShowCoursesDropdown3(false);
  };

  const toggleCoursesDropdown3 = () => {
    setShowCoursesDropdown3(!showCoursesDropdown3);
    setShowCoursesDropdown2(false);
    setShowCoursesDropdown1(false);
  };
  const mobileIcons = [
    "/assets/images/icons/icon_Home.png",
    "/assets/images/icons/Icon_courses.png",
    "/assets/images/icons/icon_about.png",
    "/assets/images/icons/icon_blog.png",
    "/assets/images/icons/icon_contact.png",
  ];

  const [isIconActive, setIsIconActive] = useState(false);

  const handleHoverIcon = () => {
    setIsIconActive(true);
  };

  const handleLeaveIcon = () => {
    setIsIconActive(false);
  };

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
                      className="nav-link"
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
                      <span
                        className="m-2 "
                        style={{
                          color:
                            activeDropdown === navItem.name ? "#008554" : "",
                        }}
                      >
                        {navItem.name}
                      </span>
                      {navItem.subNavItems &&
                        navItem.subNavItems.length > 0 && (
                          <span
                            className="fa fa-angle-right me-2"
                            onClick={() => handleDropdownClick(navItem.name)}
                            style={{
                              marginLeft: "122px",
                            }}
                          ></span>
                        )}
                    </a>
                  </Link>
                  {activeDropdown === navItem.name && (
                    <div className="drop-down-1">
                      <ul>
                        <li
                          style={{
                            listStyle: "block",
                            listStyleType: "disc !important",
                          }}
                          className={
                            activeDropdown === navItem.name &&
                            showCoursesDropdown1
                              ? "drop-down-li colorActiveGreen"
                              : "drop-down-li"
                          }
                          onClick={toggleCoursesDropdown1}
                        >
                          <span
                            className="fa fa-circle"
                            style={{
                              fontSize: "8px",
                              paddingRight: "10px",
                            }}
                          ></span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "59px",
                              fontSize: "14px",
                            }}
                          >
                            Certificate Courses
                            <span className="fa fa-angle-right"></span>
                          </div>
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
                                            width: "100%",
                                            maxWidth: "230px",
                                          }}
                                        >
                                          <div>
                                            <span
                                              className="fa fa-circle"
                                              style={{
                                                fontSize: "6px",
                                                paddingRight: "10px",
                                              }}
                                            ></span>
                                            <Link href={subNavItem.href}>
                                              {subNavItem.name}
                                            </Link>
                                          </div>

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
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                      }}
                                                    >
                                                      <span
                                                        className="fa fa-circle"
                                                        style={{
                                                          fontSize: "4px",
                                                          paddingRight: "10px",
                                                        }}
                                                      ></span>
                                                      <Link
                                                        href={subSubItem.href}
                                                      >
                                                        <a>{subSubItem.name}</a>
                                                      </Link>
                                                    </div>
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
                          className={
                            activeDropdown === navItem.name &&
                            showCoursesDropdown2
                              ? "drop-down-li colorActiveGreen"
                              : "drop-down-li"
                          }
                          onClick={toggleCoursesDropdown2}
                        >
                          <span
                            className="fa fa-circle"
                            style={{
                              fontSize: "8px",
                              paddingRight: "10px",
                            }}
                          ></span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "11px",
                              fontSize: "14px",
                            }}
                          >
                            Accreditated Programmes{" "}
                            <span className="fa fa-angle-right"></span>
                          </div>
                        </li>
                        {showCoursesDropdown2 && (
                          <div className="drop-down-2">
                            <div className="degreeCoursesData">
                              {degreeProgrammesData?.map((item) => (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "8px 0px",
                                    fontSize: "12px",
                                  }}
                                >
                                  <span
                                    className="fa fa-circle"
                                    style={{
                                      fontSize: "6px",
                                      paddingRight: "10px",
                                    }}
                                  ></span>
                                  <Link
                                    key={item.courseName}
                                    href={item.courseUrl}
                                  >
                                    {item.courseName}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </ul>
                      <ul>
                        <li
                          className={
                            activeDropdown === navItem.name &&
                            showCoursesDropdown3
                              ? "drop-down-li colorActiveGreen"
                              : "drop-down-li"
                          }
                          onClick={toggleCoursesDropdown3}
                        >
                          <span
                            className="fa fa-circle"
                            style={{
                              fontSize: "8px",
                              paddingRight: "10px",
                            }}
                          ></span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "44px",
                              fontSize: "14px",
                            }}
                          >
                            Training Programmes{" "}
                            <span className="fa fa-angle-right"></span>
                          </div>
                        </li>
                        {showCoursesDropdown3 && (
                          <div className="drop-down-3">
                            {trainingProgrammesData?.map((item) => (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "8px 0px",
                                  fontSize: "12px",
                                }}
                              >
                                <span
                                  className="fa fa-circle"
                                  style={{
                                    fontSize: "6px",
                                    paddingRight: "10px",
                                  }}
                                ></span>
                                <Link
                                  key={item.courseName}
                                  href={item.courseUrl}
                                >
                                  {item.courseName}
                                </Link>
                              </div>
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
                              onMouseEnter={() => {
                                handleHoverIcon();
                                handleHover(subItem.name);
                              }}
                              onMouseLeave={() => {
                                handleLeaveIcon();
                                handleLeave();
                              }}
                            >
                              <a href={subItem.href}>
                                {subItem.name}{" "}
                                {subItem.isNew && <span>new</span>}
                                {!!subItem.subItems?.length && (
                                  <span
                                    className={`fa ${
                                      isIconActive
                                        ? "fa-angle-up"
                                        : "fa-angle-down"
                                    }`}
                                  ></span>
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
                          <h2> Accreditated Programmes</h2>
                          {degreeProgrammesData?.map((item) => (
                            <Link key={item.courseName} href={item.courseUrl}>
                              {item.courseName}
                            </Link>
                          ))}
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
