import bg1 from "@/images/icons/preloader.png";
import React from "react";

const Preloader = (props: any) => {
  const { loading, bg = bg1, className = "" } = props;
  return (
    <div
      style={{
        zIndex: loading ? 9999 : -1,
      }}
      className={`preloader animated${loading ? "" : " fadeOut"} ${className}`}
    >
      <div style={{ backgroundImage: `url(${bg.src})` }} className="icon"></div>
    </div>
  );
};

export default Preloader;
