import React, { useEffect, useState } from "react";
import Styles from "./SiteMap.module.css";
import Sitemapdata from "./SideMapData";

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
    content: SidemapItem[] | SidemapItem;
  };
}

interface SidebarProps {
  headings: string[];
  activeHeading: string;
  onItemClick: (heading: string) => void;
}

interface ContentProps {
  contentDataSelect: SidemapItem[] | SidemapItem;
}

const SitemapComponent: React.FC = () => {
  const [activeHeading, setActiveHeading] =
    useState<string>("Digital Regenesys");
  const [activeItems, setActiveItems] = useState<SidemapItem[] | SidemapItem>(
    []
  );
  const [sidebarData, setSidebarData] = useState<SidemapData | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setSidebarData(Sitemapdata);
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
        {Object.keys(Sitemapdata).map((title, index) => (
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
  return (
    <div className={Styles.sidebarContainer}>
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
      {Array.isArray(contentDataSelect) ? (
        contentDataSelect.map((item, index) => (
          <div key={index} className={Styles.cardArray}>
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
        ))
      ) : (
        <div className={Styles.cardObject}>
          <h3>{contentDataSelect.Heading}</h3>
          <div>
            <ul>
              {contentDataSelect.items.map((menuItem, innerIndex) => (
                <li key={innerIndex}>
                  <a href={menuItem.link}>{menuItem.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileDropdown: React.FC<{
  title: string;
  contentDataSelect: SidemapItem[] | SidemapItem; // Accepts either array or single item
  isOpen: boolean;
  onItemClick: (title: string) => void;
}> = ({ title, contentDataSelect, isOpen, onItemClick }) => {
  const toggleDropdown = () => {
    if (!isOpen) {
      onItemClick(title);
    } else {
      onItemClick("");
    }
  };

  const dataArray = Array.isArray(contentDataSelect)
    ? contentDataSelect
    : [contentDataSelect];

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
          {dataArray.map(
            (
              item,
              index // Mapping over dataArray
            ) => (
              <div key={index}>
                <h3>{item.Heading}</h3>
                <div>
                  <ul>
                    {item.items.map(
                      (menuItem: MenuItem, innerIndex: number) => (
                        <li key={innerIndex} className={Styles.ListMobile}>
                          <a href={menuItem.link}>{menuItem.title}</a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SitemapComponent;
