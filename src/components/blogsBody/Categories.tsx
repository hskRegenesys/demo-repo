import Link from "next/link";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";

const Categories = () => {
  const [categoryList, setCategoryList] = useState<Array<any>>([]);

  const getCategoryList = async () => {
    const response = await wpService.allCategories({ per_page: 40 });
    if (response?.length > 0) {
      setCategoryList(response.slice(0, 6));
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const blogBaseUrl = "https://www.digitalregenesys.com/blog/category";

  return (
    <>
      <div className="row">
        <div className="blog-title-heading">
          <h1 className="h1 pt-2 pb-4 title-home">Digital Regenesys Blog</h1>
        </div>
      </div>
      <div className="row">
        {categoryList?.length > 0
          ? categoryList?.map((item) => {
              const { slug, name } = item;
              return (
                // <Link key={item} href={`${blogBaseUrl}/${slug}`}>
                <>
                  <a
                    href={`${blogBaseUrl}/${slug}`}
                    rel="noreferrer"
                    target="_blank"
                    className="col-12 col-sm-6 col-lg-4"
                  >
                    <div className="inline-button w-100 text-truncate">
                      <div className="theme-btn btn-style-two category-btn  w-100">
                        <i className="btn-curve" />
                        <span className="btn-title">{name}</span>
                      </div>
                    </div>
                  </a>
                </>
                // </Link>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Categories;
