// NavItemWithSubItem.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Image from "next/image";
import {
  trainingProgrammesData,
  degreeProgrammesData,
  mobileIcons,
} from "../NewComponents/navProgramData/NavProgramData";

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
  //const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileView, setIsMobileView] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const [isIconActive, setIsIconActive] = useState(false);

  const handleHoverIcon = () => {
    setIsIconActive(true);
  };

  const handleLeaveIcon = () => {
    setIsIconActive(false);
  };

  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleDropdownToggle = (programName: string) => {
    setSelectedProgram((prevSelectedProgram) =>
      prevSelectedProgram === programName ? null : programName
    );
  };

  return (
    <>
      {isMobileView === true ? (
        <li className="mobile-nav-new">
          {newNavItems.map((navItem: any, id: any) => (
            <div
              key={navItem.id}
              className={`mobile-nav-item-new ${
                activeDropdown === navItem.name ? "active" : ""
              }`}
            >
              <div className="nav-link new-mobile-nav-wrapper">
                <Link href={navItem.href} passHref>
                  <div className="mobile-nav-img-title">
                    <Image
                      layout="fixed"
                      width="24"
                      height="24"
                      alt="Mobile Icon"
                      src={mobileIcons[id]}
                    />
                    <span
                      className="m-2"
                      style={{
                        color: activeDropdown === navItem.name ? "#008554" : "",
                      }}
                    >
                      {navItem.name}
                    </span>
                  </div>
                </Link>
                {navItem.subNavItems && navItem?.subNavItems?.length > 0 && (
                  <div>
                    <span
                      className="fa fa-angle-right me-2"
                      onClick={() => handleDropdownClick(navItem.name)}
                      style={{
                        marginLeft: "122px",
                      }}
                    ></span>
                  </div>
                )}
              </div>
              {activeDropdown === navItem.name && (
                <div className="drop-down-1">
                  <ul>
                    <li
                      style={{
                        listStyle: "block",
                        listStyleType: "disc !important",
                      }}
                      className={
                        activeDropdown === navItem.name && showCoursesDropdown1
                          ? "drop-down-li colorActiveGreen"
                          : "drop-down-li"
                      }
                      onClick={toggleCoursesDropdown1}
                    >
                      <div className="inner-dropdown-li-dot">
                        <span
                          className="fa fa-circle"
                          style={{
                            fontSize: "8px",
                            paddingRight: "10px",
                          }}
                        ></span>
                        Certificate Courses
                      </div>
                      <span className="fa fa-angle-right"></span>
                    </li>
                    {showCoursesDropdown1 && (
                      <div>
                        {navItem.subNavItems &&
                          navItem.subNavItems.length > 0 && (
                            <ul className="drop-down-container-new">
                              {navItem.subNavItems.map((subNavItem: any) => (
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
                                    {/* <span className="newAnimation blink-soft">
                                            New
                                          </span> */}

                                    {subNavItem.name ===
                                    "Digital Marketing with GenAI" ? (
                                      <span className="newAnimation blink-soft">
                                        New
                                      </span>
                                    ) : null}
                                    <div>
                                      <span
                                        className="fa fa-circle"
                                        style={{
                                          fontSize: "6px",
                                          paddingRight: "10px",
                                        }}
                                      ></span>
                                      <Link
                                        href={
                                          subNavItem.name ===
                                          "Digital Marketing with GenAI"
                                            ? "/all-courses/digital-marketing-course"
                                            : subNavItem.href
                                        }
                                      >
                                        <a onClick={toggleMenu}>
                                          {subNavItem.name}
                                        </a>
                                      </Link>
                                    </div>

                                    {subNavItem.subItems &&
                                      subNavItem.subItems?.length > 0 && (
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
                                  {activeSubDropdown === subNavItem.name &&
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
                                                <Link href={subSubItem.href}>
                                                  <a>{subSubItem.name}</a>
                                                </Link>
                                              </div>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    )}
                  </ul>
                  <ul>
                    <li
                      className={
                        activeDropdown === navItem.name && showCoursesDropdown2
                          ? "drop-down-li colorActiveGreen"
                          : "drop-down-li"
                      }
                      onClick={toggleCoursesDropdown2}
                    >
                      <div className="inner-dropdown-li-dot">
                        <span
                          className="fa fa-circle"
                          style={{
                            fontSize: "8px",
                            paddingRight: "10px",
                          }}
                        ></span>
                        Academic Programmes
                      </div>
                      <span className="fa fa-angle-right"></span>
                    </li>
                    {showCoursesDropdown2 && (
                      <div className="drop-down-2">
                        <div className="degreeCoursesData mobile-academic-programme">
                          <ul>
                            {degreeProgrammesData.map((program, index) => (
                              <li
                                className={
                                  selectedProgram === program.courseName
                                    ? "active"
                                    : ""
                                }
                                style={{ padding: "10px 0px" }}
                                key={index}
                                onClick={() =>
                                  handleDropdownToggle(program.courseName)
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "12px",
                                    alignItems: "center",
                                  }}
                                  className={
                                    selectedProgram === program.courseName
                                      ? "colorActiveGreen"
                                      : ""
                                  }
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <span
                                      className="fa fa-circle"
                                      style={{
                                        fontSize: "7px",
                                        paddingRight: "10px",
                                      }}
                                    ></span>
                                    <a
                                      key={index}
                                      href={program.courseUrl}
                                      rel="nofollow"
                                    >
                                      {program.courseName}
                                    </a>
                                  </div>
                                  <span className="fa fa-angle-down"></span>
                                </div>
                                {selectedProgram === program.courseName && (
                                  <a className="inlineDegreeCourse">
                                    {program.subDegreePrograms.map(
                                      (subProgram, subIndex) => (
                                        <span key={subIndex}>
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              paddingBottom: "10px",
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
                                              key={subIndex}
                                              href={subProgram.subCourseUrl}
                                            >
                                              {subProgram.subCourseName}
                                            </Link>
                                          </div>
                                        </span>
                                      )
                                    )}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </ul>
                  <ul>
                    <li
                      className={
                        activeDropdown === navItem.name && showCoursesDropdown3
                          ? "drop-down-li colorActiveGreen"
                          : "drop-down-li"
                      }
                      onClick={toggleCoursesDropdown3}
                    >
                      <div className="inner-dropdown-li-dot">
                        <span
                          className="fa fa-circle"
                          style={{
                            fontSize: "8px",
                            paddingRight: "10px",
                          }}
                        ></span>
                        Training Programmes
                      </div>
                      <span className="fa fa-angle-right"></span>
                    </li>
                    {showCoursesDropdown3 && (
                      <div className="drop-down-3">
                        {trainingProgrammesData?.map((item, index) => (
                          <div
                            key={index}
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
                            <Link key={item.courseName} href={item.courseUrl}>
                              {item.courseName}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </li>
      ) : isMobileView === false ? (
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
              {subNavItems.map((subItem: any, index: any) => (
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
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    index === 0 && (
                      <li onMouseEnter={() => handleHover(subNavItems?.name)}>
                        <div className="mainMegaMenu">
                          <div className="megamenuCourses">
                            <p className="mainMegaMenuHeading">
                              Certificate Courses
                            </p>
                            <ul>
                              {subNavItems?.map((subItem: any) => (
                                <li
                                  key={subItem.id}
                                  className={`${
                                    subItem.subItems?.length ? "dropdown" : ""
                                  } ${
                                    pathname === subItem.href ? "current" : ""
                                  }`}
                                  onMouseEnter={() => {
                                    handleHoverIcon();
                                    handleHover(subItem.name);
                                  }}
                                  onMouseLeave={() => {
                                    handleLeaveIcon();
                                    handleLeave();
                                  }}
                                >
                                  <a
                                    href={
                                      subItem?.name ===
                                      "Digital Marketing with GenAI"
                                        ? "/all-courses/digital-marketing-course"
                                        : subItem.href
                                    }
                                  >
                                    {subItem.name}

                                    {subItem.name ===
                                    "Digital Marketing with GenAI" ? (
                                      <span className="newAnimation blink-soft">
                                        New
                                      </span>
                                    ) : (
                                      !!subItem.subItems?.length && (
                                        <span
                                          className={`fa ${
                                            isIconActive
                                              ? "fa-angle-up"
                                              : "fa-angle-down"
                                          }`}
                                        ></span>
                                      )
                                    )}
                                    {/* {subItem.isNew && <span>new</span>} */}
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
                                        (item: any) =>
                                          item.name !== "Full-Stack"
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
                                            {item.name}
                                            {item.isNew && <span>new</span>}
                                          </a>
                                        </li>
                                      ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="degreeCoursesData">
                            <p className="mainMegaMenuHeading">
                              {" "}
                              Academic Programmes
                            </p>
                            <ul>
                              {degreeProgrammesData.map((program, index) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    handleDropdownToggle(program.courseName)
                                  }
                                  className={
                                    selectedProgram === program.courseName
                                      ? "colorActiveGreen"
                                      : ""
                                  }
                                >
                                  <p
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      fontSize: "14px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <Link key={index} href={program.courseUrl}>
                                      {program.courseName}
                                    </Link>
                                    <span className="fa fa-angle-down"></span>
                                  </p>
                                  {selectedProgram === program.courseName && (
                                    <ul className="inlineDegreeCourse">
                                      {program.subDegreePrograms.map(
                                        (subProgram, subIndex) => (
                                          <li
                                            key={subIndex}
                                            style={{
                                              listStyle: "none",
                                              listStyleType: "disc",
                                            }}
                                            className="DegreeProgram-li"
                                          >
                                            <Link
                                              key={subIndex}
                                              href={subProgram.subCourseUrl}
                                            >
                                              <a
                                                style={{
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {subProgram.subCourseName}
                                              </a>
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="trainingProgrammeData">
                            <p className="mainMegaMenuHeading">
                              Training Programmes
                            </p>
                            {trainingProgrammesData?.map((item) => (
                              <Link key={item.courseName} href={item.courseUrl}>
                                {item.courseName}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </>
              ))}
            </ul>
          )}
        </li>
      ) : null}
    </>
  );
};

export default NavItem;
