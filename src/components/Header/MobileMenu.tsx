import NavItem from "@/components/Header/NavItem";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import ModalPopup from "@/components/Modal/ModalPopup";
import ImageLogin from "next/image";

const { icon, navItems, navItemsTwo } = headerData;

const MobileMenu = ({ onePage = false }) => {
  const contextRoot: any = useRootContext();
  const { menuStatus, toggleMenu } = contextRoot;
  const newNavItems = onePage ? navItemsTwo : navItems;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                {/* <Link href="/">
                  <a>
                    <Image
                      alt="Digital Regenesys"
                      id="thm-logo"
                      src="/assets/images/logo.png"
                    />
                  </a>
                </Link> */}
              </div>
            </div>

            <a
              onClick={toggleMenu}
              className="side-menu__toggler side-menu__close-btn text-black"
              style={{ fontSize: "30px" }}
            >
              &times;
            </a>
          </div>

          <nav className="mobile-nav-new">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              {/* <ul className="navigation clearfix">
                {newNavItems?.map((navItem) => (
                  <NavItem navItem={navItem} key={navItem.id} mobile />
                ))}
              </ul> */}
              <div>
                <NavItem />
              </div>
            </div>
          </nav>
          <div>
            <div className="login-mobile">
              <Link href="https://mydigital.regenesys.net/login/index.php">
                <a target="_blank" className="login-mobile-link">
                  {/* <i className="btn-curve"></i> */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 20px",
                    }}
                  >
                    <ImageLogin
                      layout="intrinsic"
                      width="24"
                      height="24"
                      src={"/assets/images/icons/icon_login.svg"}
                    />
                    <span className="btn-title-Mobile m-2">Login</span>
                  </span>
                </a>
              </Link>
              {/* request url */}

              {/* <a
                className="theme-btn btn-style-two w100 mt-5"
                onClick={handleShow}
              >
                <i className="btn-curve"></i>
                <span className="btn-title">Request a call</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <ModalPopup setShows={setShow} />
      </Modal>
    </>
  );
};

export default MobileMenu;
