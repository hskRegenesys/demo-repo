import Link from "next/link";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import { getRandom } from "src/utils/common";

const Categories = () => {
  const [categoryList, setCategoryList] = useState<Array<any>>([]);

  const getCategoryList = async () => {
    const response = await wpService.allCategories({ per_page: 40 });
    if (response?.length > 0) {
      getRandom(response);
      setCategoryList(response.slice(0, 6));
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="row">
      {categoryList?.length > 0
        ? categoryList?.map((item) => {
            const { slug, name } = item;
            return (
              <Link key={item} href={`/blogs/category/${slug}`} passHref>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="inline-button w-100 text-truncate">
                    <a className="theme-btn btn-style-two category-btn  w-100">
                      <i className="btn-curve" />
                      <span className="btn-title">{name}</span>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Categories;
