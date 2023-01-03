import { useRootContext } from "@/context/context";
import React from "react";

const SearchPopup = () => {
  const rootContext: any = useRootContext();
  const { openSearch, toggleSearch } = rootContext;

  const handleSearch = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    toggleSearch();
  };

  return (
    <div className={`search-popup${openSearch ? " active" : ""}`}>
      <div
        onClick={toggleSearch}
        className="search-popup__overlay custom-cursor__overlay"
      >
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="search-popup__inner">
        <form onSubmit={handleSearch} className="search-popup__form">
          <input
            type="text"
            name="search"
            placeholder="Type here to Search...."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
