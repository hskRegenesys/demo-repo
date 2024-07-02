import React, { useEffect, useRef, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostListTypes } from "./dataTypes";
import TrendingSection from "../TrendingSection/TrendingSection";
import NewsLetter from "./NewsLetter";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9;
  const postContainerRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (
    pageNumber: number,
    totalPosts: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(pageNumber);
      if (postContainerRef.current) {
        postContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNextPage = (
    totalPosts: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      if (postContainerRef.current) {
        postContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrevPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (postContainerRef.current) {
        postContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderPagination = (totalPosts: number) => {
    if (totalPosts <= postsPerPage) return null;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className="pagination-container">
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={(event) => handlePrevPage(event)}
              className={`pagination-btn prev-button ${
                currentPage === 1 && "prev-disable-btn"
              }`}
              disabled={currentPage === 1}
            >
              <span className="icon fas fa-angle-left"></span>
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={(event) => handlePageChange(number, totalPosts, event)}
                className={`pagination-btn ${
                  currentPage === number ? "active" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              onClick={(event) => handleNextPage(totalPosts, event)}
              className={`pagination-btn next-button ${
                currentPage === pageNumbers?.length && "next-disable-btn"
              }`}
              disabled={currentPage === pageNumbers?.length}
            >
              <span className="icon fas fa-angle-right"></span>
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  useEffect(() => {
    if (postContainerRef.current) {
      postContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

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
      <div className="container-fluid p-5" ref={postContainerRef}>
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
                const indexOfLastPost = currentPage * postsPerPage;
                const indexOfFirstPost = indexOfLastPost - postsPerPage;
                const currentPosts = values?.posts?.slice(
                  indexOfFirstPost,
                  indexOfLastPost
                );
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
                    {currentPosts?.length > 0 ? (
                      <div className="row py-3">
                        {currentPosts?.map((item) => (
                          <PostContainer post={item} key={item.id} restPost />
                        ))}
                      </div>
                    ) : null}
                    {renderPagination(values?.posts?.length)}
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
