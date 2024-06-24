import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostListTypes } from "./dataTypes";
import TrendingSection from "../TrendingSection/TrendingSection";
import NewsLetter from "./NewsLetter";
import { LeftOutlined } from "@ant-design/icons";
import RightSidePanel from "./RightSidePanel";
import { Spinner } from "react-bootstrap";
import PostContainer from "./PostContainer";
import BreadCrumb from "./BreadCrumb";

const BlogsByCategories = ({
  categorySlug,
  setCategoryList,
  category,
  postList,
  isLoading,
}: {
  categorySlug: string;
  setCategoryList: (value: any) => void;
  category: string | number;
  postList: Array<IPostListTypes>;
  isLoading: Boolean;
}) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [category, setCategory] = useState<string | number>("");

  // const [postList, setPostList] = useState<Array<IPostListTypes>>([]);
  // const getCategoryList = async () => {
  //   const response = await wpService.allCategories({ slug: categorySlug });
  //   if (response?.length > 0) {
  //     postByCategory(response);
  //   }
  // };
  // useEffect(() => {
  //   getCategoryList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const postByCategory = async (
  //   response: Array<{
  //     [key: string]: number | string;
  //   }>
  // ) => {
  //   const apiResponse = await Promise.all(
  //     response?.map(
  //       async (category) => (
  //         setCategory(category.name),
  //         {
  //           category: category.name,
  //           yoast_head_json: category.yoast_head_json,
  //           posts: await wpService.allPosts({
  //             per_page: 12,
  //             categories: category.id,
  //           }),
  //         }
  //       )
  //     )
  //   );
  //   if (apiResponse.length > 0) {
  //     setIsLoading(false);
  //     setPostList(apiResponse);
  //     setCategoryList(apiResponse);
  //   }
  // };

  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="d-flex justify-content-center text-center py-5 bg-light-green">
        <div>
          <div>
            <p className="h5 p-0">Category</p>
          </div>
          <div>
            <p className="h3 p-0">{category}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
        <BreadCrumb
          title={`Category - ${categorySlug?.toString().replaceAll("-", " ")}`}
          parent="Blog"
          parentHref="/blog"
        />

        <div className="row">
          <div className="col-12 col-lg-9">
            <h1 className="h5 p-0 m-0 fw-bold mt-3">{category} Blog</h1>
            {postList?.length > 0 &&
              postList?.map((values) => {
                return isLoading ? (
                  <div className="d-flex justify-content-center align-items-center h-25">
                    <Spinner animation={"border"} />
                  </div>
                ) : values?.posts?.length > 0 ? (
                  <div key={values?.category} className="py-3">
                    {/* <h2
                      className="h6 p-0 m-0 fw-bold"
                      dangerouslySetInnerHTML={{
                        __html: values?.category.toString(),
                      }}
                    /> */}
                    {values?.posts?.length > 0 ? (
                      <div className="row py-3">
                        {values?.posts?.map((item) => (
                          <PostContainer post={item} key={item.id} restPost />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null;
              })}
          </div>
          <div className="col-12 col-lg-3">
            <RightSidePanel />
          </div>
        </div>
      </div>
      <TrendingSection />
      <NewsLetter />
    </div>
  );
};

export default BlogsByCategories;
