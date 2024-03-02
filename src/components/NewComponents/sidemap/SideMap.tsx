import React, { useState } from "react";
import Sidemapdata from "./SideMapData";
import Styles from "./SideMap.module.css";

interface MenuItem {
  title: string;
  link: string;
}

interface SidebarProps {
  titles: string[];
  activeTitle: string;
  onItemClick: (title: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  titles,
  activeTitle,
  onItemClick,
}) => {
  return (
    <div className={Styles.sidebar}>
      {titles.map((title: string) => (
        <div
          key={title}
          onClick={() => onItemClick(title)}
          className={title === activeTitle ? Styles.active : ""}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

interface ContentProps {
  data: { title: string; link: string }[];
  selectedTitle: string;
}

const Content: React.FC<ContentProps> = ({ data, selectedTitle }) => {
  return (
    <div className={Styles.content}>
      {selectedTitle === "All pages" ? (
        Object.keys(Sidemapdata).map((key: string) => (
          <div key={key} className={Styles.card}>
            <h2 className={Styles.titleHeading}>{Sidemapdata[key].Heading}</h2>
            {Sidemapdata[key].items.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        ))
      ) : (
        <div className={Styles.card}>
          <h2 className={Styles.titleHeading}>{selectedTitle}</h2>
          {data.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const SidemapComponent: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("All pages");
  const [selectedData, setSelectedData] = useState<MenuItem[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleItemClick = (title: string) => {
    if (openDropdown !== title) {
      setOpenDropdown(title);
    } else {
      setOpenDropdown(null);
    }
    setSelectedTitle(title);
    setSelectedData(
      title === "All pages" ? getAllItems() : Sidemapdata[title]?.items || []
    );
  };

  const allTitles = Object.keys(Sidemapdata);

  const getAllItems = (): MenuItem[] => {
    let allItems: MenuItem[] = [];
    Object.keys(Sidemapdata).forEach((key) => {
      allItems = allItems.concat(Sidemapdata[key].items);
    });
    return allItems;
  };

  const MobileDropdown: React.FC<{
    title: string;
    items: MenuItem[];
    onItemClick: (title: string) => void;
  }> = ({ title, items, onItemClick }) => {
    const isOpen = openDropdown === title;

    const toggleDropdown = () => {
      if (isOpen) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(title);
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
          <ul className={Styles.DropdownList}>
            {items.map((item, index) => (
              <li
                key={index}
                className={Styles.ListMobile}
                onClick={() => onItemClick(title)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className={Styles.Sidemap}>
      <div className={Styles.SidemapDesktop}>
        <div className={Styles.containerCard}>
          <h1>Digital Regenesys Sitemap</h1>
          <div className={Styles.container}>
            <Sidebar
              titles={["All pages", ...allTitles]}
              activeTitle={selectedTitle}
              onItemClick={handleItemClick}
            />
            <Content data={selectedData} selectedTitle={selectedTitle} />
          </div>
        </div>
      </div>
      <div className={Styles.SidemapMobile}>
        <h2>Digital Regenesys Sitemap</h2>
        <MobileDropdown
          title="All pages"
          items={getAllItems()}
          onItemClick={handleItemClick}
        />
        {allTitles.map((title, index) => (
          <MobileDropdown
            key={index}
            title={title}
            items={Sidemapdata[title]?.items || []}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SidemapComponent;
