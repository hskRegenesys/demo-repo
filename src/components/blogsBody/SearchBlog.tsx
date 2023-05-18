import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostTypes } from "./dataTypes";
import TrendingSection from "src/components/TrendingSection/TrendingSection";
import NewsLetter from "./NewsLetter";
import { LeftOutlined } from "@ant-design/icons";
import RightSidePanel from "./RightSidePanel";
import { Spinner } from "react-bootstrap";
import PostContainer from "./PostContainer";

const SearchBlog = ({ query }: { query: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<Array<IPostTypes>>([]);

  const getPostList = async () => {
    const response = await wpService.allPosts({ search: query, per_page: 30 });
    if (response) {
      setIsLoading(false);
      setPostList(response);
    }
  };
  useEffect(() => {
    getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="d-flex justify-content-center text-center py-5 bg-light-green">
        <div>
          <div>
            <p className="h5 p-0">Search Results</p>
          </div>
          <div>
            <p className="h3 p-0">{query}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-5">
        <Link href={`/blog/`} passHref>
          <p
            role="button"
            className="btn btn-hover px-1 py-0 d-flex align-items-center text-dark-green m-0"
          >
            <LeftOutlined className="pe-2" />
            Back to list
          </p>
        </Link>
        <div className="row">
          <div className="col-12 col-lg-9">
            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center h-25">
                <Spinner animation={"border"} />
              </div>
            ) : postList?.length > 0 ? (
              <div className="row">
                {postList?.map((values) => (
                  <PostContainer post={values} key={values.id} restPost />
                ))}
              </div>
            ) : (
              <div
                className="w-100 h-25 d-grid"
                style={{ placeContent: "center" }}
              >
                <h4>No post here</h4>
              </div>
            )}
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

export default SearchBlog;
