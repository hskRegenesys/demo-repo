import React, { useEffect, useState } from "react";
import { wpService } from "src/services";

const Categories = () => {
  const [categoryList, setCategoryList] = useState<Array<any>>([]);

  const getCategoryList = async () => {
    const response = await wpService.allCategories({ per_page: 6 });
    if (response?.length > 0) {
      setCategoryList(response);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="row">
      {categoryList?.length > 0
        ? categoryList?.map((item) => {
            const { yoast_head_json } = item;
            const { title } = yoast_head_json;
            return (
              <div key={item} className="col-6">
                <div className="inline-button w-100 text-truncate">
                  <a className="theme-btn btn-style-two w-100">
                    <i className="btn-curve" />
                    <span className="btn-title">{title}</span>
                  </a>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Categories;
