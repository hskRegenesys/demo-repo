import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { courseService } from "src/services";
import _ from "lodash";

const {
  title,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo9,
  title2,
  navItems,
  navItemsTwo,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { scrollTop } = useScroll(120);
  const contextRoots: any = useRootContext();
  const [nav, setNav] = useState<any>(navItems);
  const { toggleMenu, toggleSearch } = contextRoots;
  const newNavItems = onePage ? navItemsTwo : nav;
  let Logo: any =
    logo === 2
      ? logo2
      : logo === 3
      ? logo3
      : logo === 5
      ? logo5
      : logo === 9
      ? logo9
      : logo1;

  if (logo === 4) {
    if (scrollTop) {
      Logo = logo1;
    } else {
      Logo = logo4;
    }
  }
  const allCourses = async () => {
    const allData = await courseService.allCourses();
    const filterData = _.filter(
      allData,
      (item) =>
        item?.parent_id === null &&
        item?.mode_id === 1 &&
        item?.isAddon === false
    );
    const coursesSubItem: any = [];
    if (filterData?.length) {
      filterData?.forEach((item) => {
        if (_.find(allData, (course) => course.parent_id === item.id)) {
          coursesSubItem?.push({
            id: item?.id,
            name: item?.name,
            href: `/${item?.name?.split(" ").join("-")}`,
          });
        } else {
          coursesSubItem?.push({
            id: item?.id,
            name: item?.name,
            href: `/${item?.name?.split(" ").join("-")}/${item?.id}`,
          });
        }
      });
    }
    const data = navItems?.map((item: any) => {
      if (item.id === 4 && item.name === "Courses") {
        item.subNavItems = coursesSubItem;
      }
      return item;
    });
    setNav(data);
  };
  useEffect(() => {
    allCourses();
  }, []);

  return (
    <header
      className={`main-header${
        scrollTop ? " fixed-header" : ""
      } ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
              </div>
              <ul className="list-unstyled social-links">
                {socials?.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="header-upper">       
          <div className="auto-container d-flex clearfix">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <a title={title}>
                    <Image id="thm-logo" src={Logo} alt={title} title={title} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={
                    autoContainer
                      ? ""
                      : "collapse navbar-collapse show clearfix"
                  }
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  <ul className="navigation clearfix">
                    {newNavItems?.map((navItem: any) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                {/* <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    {" "}
                    <span className="flaticon-loupe"></span>
                  </button>
                </div> */}

                <div className="link-box">
                  <Link href="https://mydigital.regenesys.net/login/index.php">
                    <a className="theme-btn btn-style-two">
                      <i className="btn-curve"></i>
                      <span className="btn-title">Login</span>
                    </a>
                  </Link>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className="right-menu">
                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-loupe"></span>
                  </button>
                </div>
                <div onClick={toggleMenu} className="mobile-nav-toggler">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="txt">Menu</span>
                </div>
              </div>
            )}
          </div>
      </div>
    </header>
  );
};

export default HeaderOne;
