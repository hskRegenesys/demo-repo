import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavItem from "./NavItem";
import { courseService, wpService } from "src/services";
import _ from "lodash";
import { programBaseUrl } from "../config/constant";
import { urlInfo } from "../config/helper";
import { url } from "inspector";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import StickyData from "../StickyHeaderForm/StickyData";
import { Input, Space } from "antd";
import { allCourseList } from "@/data/courseData";
import imageBaseUrl from "src/utils/imageBaseUrl";

const { Search } = Input;
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
  blogsNavItem,
  navItemsTwo,
} = headerData;

const HeaderOne = ({
  variant = "",
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
  pageTitle = "",
  courseCode = "",
}) => {
  const { scrollTop } = useScroll(120);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const contextRoots: any = useRootContext();
  const [nav, setNav] = useState<any>(navItems);
  const { toggleMenu, toggleSearch } = contextRoots;
  const newNavItems = onePage ? navItemsTwo : nav;
  const imageUrl = imageBaseUrl();

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

  const onSearch = (value: string) => {
    router.pathname !== "/blog/search" && setIsSearching(true);
    router.push(`/blog/search?q=${value}`);
  };

  const allCourses = async () => {
    // const allData = await courseService.allCourses();
    allCourseList ? setIsLoading(false) : setIsLoading(true);

    const allCategories = await wpService.allCategories({ per_page: 100 });
    allCategories ? setIsLoading(false) : setIsLoading(true);

    const filterData = _.filter(
      allCourseList,

      (item) =>
        item?.parent_id === null &&
        item?.mode_id === 1 &&
        item?.isAddon === false
    );

    //const course = ["DSCI", "DM", "PM", "CSC", "DTC", "AI"];
    const course = [
      // "FSD",
      // "DSN",
      // "DSCI",
      // "AIN",
      // "CSC",
      // "PM",
      // "DM",
      // "DMN",
      // "DTC",
      // "DT",
      // "AI",
      "PDM",
      // "OSCM",
      "MD",
      "DSCI",

      "FSD",
      "DBA",
      "DSN",
      "AIN",
      "CSC",
      "PM",
      "DM",
      "DMN",
      "DTC",
      "DT",
      "AI",
    ];
    const coursesSubItem: any = [];
    course.forEach((courseCode) => {
      if (filterData?.length) {
        filterData?.forEach((item) => {
          if (item.code === courseCode) {
            if (
              _.find(allCourseList, (course) => course.parent_id === item.id)
            ) {
              coursesSubItem?.push({
                id: item?.id,
                name: item?.name,
                href: `/${programBaseUrl}/${urlInfo(item?.name)}`,
              });
            } else {
              const courseName = _.find(
                filterData,
                (courseItem) => courseItem.id === item?.parent_id
              );
              coursesSubItem?.push({
                id: item?.id,
                name: item?.name,
                href: `/${programBaseUrl}${urlInfo(courseName?.name)}/${urlInfo(
                  item?.name
                )}`,
              });
            }
          }
        });
      }
    });
    const data = navItems?.map((item: any) => {
      if (item.id === 4 && item.name === "All Courses") {
        item.subNavItems = coursesSubItem;
        item.subNavItems?.map((data: any) => {
          const filterData = _.filter(
            allCourseList,
            (item) => item?.parent_id === data?.id
          ).map((subCourse) => {
            return {
              id: subCourse?.id,
              name: subCourse?.name,
              href: `/${programBaseUrl}/${urlInfo(data?.name)}/${urlInfo(
                subCourse?.name
              )}`,
            };
          });
          if (filterData) {
            data.subItems = filterData;
          }
        });
      }

      return item;
    });

    const data2 = blogsNavItem?.map((item: any) => {
      if (item.id === 4 && item.name === "All Courses") {
        item.subNavItems = coursesSubItem;
        item.subNavItems?.map((data: any) => {
          const filterData = _.filter(
            allCourseList,
            (item) => item?.parent_id === data?.id
          ).map((subCourse) => {
            return {
              id: subCourse?.id,
              name: subCourse?.name,
              href: `/${programBaseUrl}/${urlInfo(data?.name)}/${urlInfo(
                subCourse?.name
              )}`,
            };
          });
          if (filterData) {
            data.subItems = filterData;
          }
        });
      }
      const categorySubItem: any = [];
      if (allCategories?.length > 0 && item.id === 3 && item.name === "Blog") {
        categorySubItem.push({
          id: 1,
          name: "Blog Categories",
          href: "/blog",
          subItems: [],
        });
        item.subNavItems = categorySubItem;
        item.subNavItems?.map((data: any) => {
          const subCategories = allCategories.map((categories: any) => {
            return {
              id: categories?.id,
              name: categories?.name,
              href: `/blog/category/${categories?.slug}`,
            };
          });
          if (subCategories) {
            data.subItems = subCategories;
          }
        });
      }
      return item;
    });

    variant === "blog" ? setNav(data2) : setNav(data);
  };
  useEffect(() => {
    allCourses();
  }, []);
  const [scroll, setScroll] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 38) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <header
      className={`main-header ${scroll ? "fixed-header" : ""} ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
          </div>
        </div>
      )}
      <div className="header-upper">
        {pageTitle !== "allCourse" && (
          <StickyData pageTitle={pageTitle} courseCode={courseCode} />
        )}

        <div className="auto-container d-flex clearfix new-container-style">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <a title={title}>
                  {/* <Image id="thm-logo" src={Logo} alt={title} title={title} /> */}
                  <div>
                    <Image
                      src={`${imageUrl}Icons/DR-Logo-black.webp`}
                      layout="intrinsic"
                      width="116"
                      height="40"
                      title={title}
                      alt={title}
                    ></Image>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            <div onClick={toggleMenu} className="mobile-nav-toggler">
              <span className="icon flaticon-menu-2"></span>
              <span className="txt">Menu</span>
            </div>

            <nav
              className={`main-menu navbar-expand-md navbar-light ${
                variant === "blog" ? " blog-menu" : ""
              }`}
            >
              <div
                className={
                  autoContainer ? "" : "collapse navbar-collapse show clearfix"
                }
                id={autoContainer ? "" : "navbarSupportedContent"}
              >
                <ul className="navigation clearfix">
                  {variant === "blog"
                    ? blogsNavItem?.map((navItem: any) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                          isLoading={isLoading}
                        />
                      ))
                    : newNavItems?.map((navItem: any) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                          isLoading={isLoading}
                        />
                      ))}
                </ul>
              </div>
            </nav>
          </div>
          {variant === "blog" ? (
            <div className="other-links clearfix">
              <div className="link-box">
                <Space direction="vertical">
                  <Search
                    placeholder="Search Topics"
                    onSearch={onSearch}
                    style={{ width: 200 }}
                    loading={isSearching}
                  />
                </Space>
              </div>
            </div>
          ) : (
            links && (
              <div className="other-links clearfix">
                <div className="link-box">
                  <Link href="https://mydigital.regenesys.net/login/index.php">
                    <a className="new-log-in-butten">
                      {/* <i className="btn-curve"></i> */}
                      <span className="btn-title">Login</span>
                    </a>
                  </Link>
                </div>
              </div>
            )
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
      <Modal show={show}>
        <ModalPopup setShows={setShow} thankYouShow={setThankYouShow} />
      </Modal>
      <Modal show={thankYouShow}>
        <ThankYouPopup setShows={setThankYouShow} />
      </Modal>
    </header>
  );
};

export default HeaderOne;
