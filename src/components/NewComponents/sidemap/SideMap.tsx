import React, { useEffect, useRef, useState } from "react";
import Styles from "./SideMap.module.css";
import Sidemapdata from "./SideMapData";

interface MenuItem {
  title: string;
  link: string;
}

interface SidemapItem {
  Heading: string;
  items: MenuItem[];
}

interface SidemapData {
  [key: string]: {
    SideHeading: string;
    content: SidemapItem[];
  };
}

interface SidebarProps {
  headings: string[];
  activeHeading: string;
  onItemClick: (heading: string) => void;
}

interface ContentProps {
  contentDataSelect: SidemapItem[];
}

const SidemapComponent: React.FC = () => {
  const [activeHeading, setActiveHeading] =
    useState<string>("Digital Regenesys");
  const [activeItems, setActiveItems] = useState<SidemapItem[]>([]);
  const [sidebarData, setSidebarData] = useState<SidemapData | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State to track open dropdown

  useEffect(() => {
    setSidebarData(Sidemapdata);
  }, []);

  useEffect(() => {
    if (sidebarData) {
      const firstHeading = Object.keys(sidebarData)[0];
      setActiveHeading(firstHeading);
      setActiveItems(sidebarData[firstHeading]?.content || []);
    }
  }, [sidebarData]);

  const handleHeadingClick = (heading: string) => {
    if (openDropdown !== heading) {
      setOpenDropdown(heading);
      setActiveHeading(heading);
      const items = sidebarData?.[heading]?.content || [];
      setActiveItems(items);
    } else {
      setOpenDropdown(null);
      setActiveItems([]);
    }
  };

  const allTitles = Object.keys(Sidemapdata);

  return (
    <div className={Styles.Sidemap}>
      <div className={Styles.SidemapDesktop}>
        <div className={Styles.containerCard}>
          {sidebarData && (
            <Sidebar
              headings={Object.keys(sidebarData)}
              activeHeading={activeHeading}
              onItemClick={handleHeadingClick}
            />
          )}
          <Content contentDataSelect={activeItems} />
        </div>
      </div>
      <div className={Styles.SidemapMobile}>
        <h2>Digital Regenesys Sitemap</h2>

        {allTitles.map((title, index) => (
          <MobileDropdown
            key={index}
            title={title}
            contentDataSelect={
              sidebarData ? sidebarData[title]?.content || [] : []
            }
            isOpen={openDropdown === title}
            onItemClick={handleHeadingClick}
          />
        ))}
      </div>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  headings,
  activeHeading,
  onItemClick,
}) => {
  const [addPadding, setAddPadding] = useState(false);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (sidebarContainerRef.current) {
  //       const rect = sidebarContainerRef.current.getBoundingClientRect();
  //       if (rect.top <= 50) {
  //         setAddPadding(true);
  //       } else {
  //         setAddPadding(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      ref={sidebarContainerRef}
      className={`${Styles.sidebarContainer} ${
        addPadding ? Styles.addPadding : ""
      }`}
    >
      <h1>Digital Regenesys Sitemap</h1>
      <div className={Styles.sidebar}>
        {headings.map((heading: string) => (
          <div
            key={heading}
            onClick={() => onItemClick(heading)}
            className={heading === activeHeading ? Styles.active : ""}
          >
            {heading}
          </div>
        ))}
      </div>
    </div>
  );
};

const Content: React.FC<ContentProps> = ({ contentDataSelect }) => {
  return (
    <div className={Styles.content}>
      {contentDataSelect.map((item, index) => (
        <div key={index} className={Styles.card}>
          <h3>{item.Heading}</h3>
          <div>
            <ul>
              {item.items.map((menuItem, innerIndex) => (
                <li key={innerIndex}>
                  <a href={menuItem.link}>{menuItem.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const MobileDropdown: React.FC<{
  title: string;
  contentDataSelect: SidemapItem[]; // Changed prop name to match the expected name
  isOpen: boolean;
  onItemClick: (title: string) => void;
}> = ({ title, contentDataSelect, isOpen, onItemClick }) => {
  const toggleDropdown = () => {
    if (!isOpen) {
      onItemClick(title);
    } else {
      onItemClick(""); // Close dropdown when already open
    }
  };

  return (
    <div className={Styles.DropdownContainer}>
      <div
        className={`${Styles.Dropdown} ${
          isOpen ? Styles.DropdownHeaderactive : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className={Styles.DropdownHeader}>{title}</div>

        <span
          className={` ${isOpen ? "fa fa-angle-up" : "fa fa-angle-down"}`}
          style={{ fontSize: "20px" }}
        ></span>
      </div>
      {isOpen && (
        <div className={Styles.DropdownList}>
          {contentDataSelect.map((item, index) => (
            <div key={index}>
              <h3>{item.Heading}</h3>
              <div>
                <ul>
                  {item.items.map((menuItem, innerIndex) => (
                    <li key={innerIndex} className={Styles.ListMobile}>
                      <a href={menuItem.link}>{menuItem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidemapComponent;
