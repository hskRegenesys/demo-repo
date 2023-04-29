import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { Image } from "react-bootstrap";
import Image from "next/image";
import NavItem from "./NavItem";
import { courseService } from "src/services";
import _ from "lodash";
import { programBaseUrl } from "../config/constant";
import { urlInfo } from "../config/helper";
import { url } from "inspector";
import StickyForm from "../StickyHeaderForm/StickyForm";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ThankYouPopup from "../Modal/ThankYouPopup";
import Loader from "../Loader/Loader";
import StickyData from "../StickyHeaderForm/StickyData";
import { Input, Space } from "antd";

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
}) => {
  const { scrollTop } = useScroll(120);
  const [show, setShow] = useState(false);
  const [thankYouShow, setThankYouShow] = useState<boolean>(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

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

  const onSearch = (value: string) => router.push(`/blogs/search?q=${value}`);

  const allCourses = async () => {
    const allData = await courseService.allCourses();
    allData ? setIsLoading(false) : setIsLoading(true);
    const filterData = _.filter(
      allData,

      (item) =>
        item?.parent_id === null &&
        item?.mode_id === 1 &&
        item?.isAddon === false
    );

    const course = ["DSCI", "DM", "PM", "CS", "BDM"];
    const coursesSubItem: any = [];

    course.forEach((courseCode) => {
      if (filterData?.length) {
        filterData?.forEach((item) => {
          if (item.code === courseCode) {
            if (_.find(allData, (course) => course.parent_id === item.id)) {
              coursesSubItem?.push({
                id: item?.id,
                name: item?.name,

                href: `/${programBaseUrl}/${urlInfo(item?.name)}`,
              });
            } else {
              const courseName = _.find(
                filterData,
                (courseItem) => courseItem === item?.parent_id
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

    const data2 = blogsNavItem?.map((item: any) => {
      if (item.id === 4 && item.name === "Courses") {
        item.subNavItems = coursesSubItem;
        item.subNavItems?.map((data: any) => {
          const filterData = _.filter(
            allData,
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
    const data = navItems?.map((item: any) => {
      if (item.id === 4 && item.name === "Courses") {
        item.subNavItems = coursesSubItem;
        item.subNavItems?.map((data: any) => {
          const filterData = _.filter(
            allData,
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
        {pageTitle !== "allCourse" && <StickyData pageTitle={pageTitle} />}

        <div className="auto-container d-flex clearfix">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <a title={title}>
                  {/* <Image id="thm-logo" src={Logo} alt={title} title={title} /> */}
                  <div>
                    <Image
                      src={Logo}
                      layout="intrinsic"
                      width="237"
                      height="60"
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

            <nav className="main-menu navbar-expand-md navbar-light">
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
                  />
                </Space>
              </div>
            </div>
          ) : (
            links && (
              <div className="other-links clearfix">
                <div className="link-box">
                  <Link href="https://mydigital.regenesys.net/login/index.php">
                    <a className="theme-btn btn-style-two">
                      <i className="btn-curve"></i>
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
