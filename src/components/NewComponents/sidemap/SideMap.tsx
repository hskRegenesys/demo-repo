import React, { useState, useEffect } from "react";
import Sidemapdata from "./SideMapData";
import Styles from "./SideMap.module.css";

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
  const [paddingTop, setPaddingTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setPaddingTop(0);
      } else {
        setPaddingTop(120);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={Styles.sidebarContainer}
      style={{ paddingTop: `${paddingTop}px` }}
    >
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
            <h2 className={Styles.titleHeding}>{Sidemapdata[key].Heading}</h2>
            {Sidemapdata[key].items.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        ))
      ) : (
        <div className={Styles.card}>
          <h2 className={Styles.titleHeding}>{selectedTitle}</h2>
          {data.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const SidemapComponent: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("All pages"); // Set default selection to "All pages"

  const handleItemClick = (title: string) => {
    setSelectedTitle(title);
  };

  const allTitles = Object.keys(Sidemapdata);

  let selectedData: { title: string; link: string }[] = [];

  if (selectedTitle === "All pages") {
    selectedData = allTitles.reduce(
      (acc: { title: string; link: string }[], current: string) => {
        return acc.concat(Sidemapdata[current].items);
      },
      []
    );
  } else {
    selectedData = selectedTitle
      ? Sidemapdata[selectedTitle as keyof typeof Sidemapdata]?.items || []
      : [];
  }

  return (
    <div className={Styles.Sidemap}>
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
  );
};

export default SidemapComponent;
