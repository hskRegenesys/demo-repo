import NavItem from "@/components/Header/NavItem";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const { icon, navItems, navItemsTwo } = headerData;

const MobileMenu = ({ onePage = false }) => {
  const contextRoot: any = useRootContext();
  const { menuStatus, toggleMenu } = contextRoot;
  const newNavItems = onePage ? navItemsTwo : navItems;

  return (
    <div className={`side-menu__block${menuStatus ? " active" : ""}`}>
      <div
        onClick={toggleMenu}
        className="side-menu__block-overlay custom-cursor__overlay"
      >
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner">
        <div className="side-menu__top">
          <div className="logo-box-mobile">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image id="thm-logo" src="/assets/images/logo.png" />
                </a>
              </Link>
            </div>
          </div>

          <a
            onClick={toggleMenu}
            className="side-menu__toggler side-menu__close-btn"
          >
            <Image src={icon} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <div
            className="collapse navbar-collapse show clearfix"
            id="navbarSupportedContent"
          >
            <ul className="navigation clearfix">
              {newNavItems?.map((navItem) => (
                <NavItem navItem={navItem} key={navItem.id} mobile />
              ))}
            </ul>
          </div>
        </nav>
        <div className="side-menu__content">
          <div className="link-box mt-5">
            <Link href="https://mydigital.regenesys.net/login/index.php">
              <a target="_blank" className="theme-btn btn-style-four w100">
                <i className="btn-curve"></i>
                <span className="btn-title">Login</span>
              </a>
            </Link>

            <Link href="https://mydigital.regenesys.net/login/index.php">
              <a target="_blank" className="theme-btn btn-style-two w100 mt-5">
                <i className="btn-curve"></i>
                <span className="btn-title">Request a call</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
