import Link from "next/link";
import React, { forwardRef } from "react";


const SingleTeam = ({ team = {}, className = "" }, ref) => {
  const { name } = team;

  return (
    <div ref={ref} className={`team-block ${className}`}>
      <div className="inner-box">   
        <div className="lower-box">
          <h5>
            <a href="#">{name}</a>
          </h5>         
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTeam);
