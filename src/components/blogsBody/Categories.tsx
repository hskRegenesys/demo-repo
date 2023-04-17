import React from "react";

let rows: Array<JSX.Element> = [];
for (let i = 0; i < 6; i++) {
  rows.push(
    <div className="col-4">
      <div className="inline-button w-100">
        <a className="theme-btn btn-style-two w-100">
          <i className="btn-curve" />
          <span className="btn-title">Category {i + 1}</span>
        </a>
      </div>
    </div>
  );
}

const Categories = () => {
  return <div className="row">{rows}</div>;
};

export default Categories;
