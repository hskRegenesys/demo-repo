
import React from "react";

const Preloader = (props: any) => {
  const { loading, className = "" } = props;
  return (
    <div
      style={{
        zIndex: loading ? 9999 : -1,
      }}
      className={`preloader animated${loading ? "" : " fadeOut"} ${className}`}
    >
      <div style={{ backgroundImage: `url(/assets/images/icons/preloader.png)` }} className="icon"></div>
    </div>
  );
};

export default Preloader;
