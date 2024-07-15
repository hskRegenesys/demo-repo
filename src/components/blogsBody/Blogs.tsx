import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostListTypes } from "./dataTypes";
import { Spinner } from "react-bootstrap";
import PostCarousel from "./PostCarousel";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<Array<IPostListTypes>>([]);

  const getCategoryList = async () => {
    const response = await wpService.allCategories({ per_page: 40 });
    if (response?.length > 0) {
      postByCategory(response);
    }
  };
  useEffect(() => {
    getCategoryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sitemapData = postList?.flatMap((item) => item.posts);
  const xmlOperation = async (sitemapData: any) => {
    if (!(sitemapData.length > 0)) return;

    try {
      await fetch("/api/sitemapDynamicUrls", {
        method: "POST",
        body: JSON.stringify({ sitemapData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    xmlOperation(sitemapData);
  }, [sitemapData]);

  const postByCategory = async (
    response: Array<{
      [key: string]: number | string;
    }>
  ) => {
    const apiResponse = await Promise.all(
      response?.slice(0, 12).map(async (category) => ({
        category: category.name,
        slug: category.slug.toString(),
        posts: await wpService.allPosts({
          per_page: 12,
          categories: category.id,
        }),
      }))
    );
    if (apiResponse.length > 0) {
      setIsLoading(false);
      setPostList(apiResponse);
    }
  };

  const blogBaseUrl = "https://www.digitalregenesys.com/blog/category";

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-25">
      <Spinner animation={"border"} />
    </div>
  ) : (
    <div className="py-5">
      <div>
        {postList.length > 0 &&
          postList?.map((values) => {
            return values?.posts?.length > 0 ? (
              <div key={values?.category} className="py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h2
                    className="h6 p-0 m-0 fw-bold new-heading-title"
                    dangerouslySetInnerHTML={{
                      __html: values?.category.toString(),
                    }}
                  />

                  <div>
                    {/* <Link  passHref> */}
                    <a href={`${blogBaseUrl}/${values?.slug}`} rel="noreferrer">
                      <b
                        role="button"
                        className="btn px-1 py-0 text-dark-green m-0 new-view-more-title"
                      >
                        View more
                      </b>
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="d-none d-lg-block">
                  <PostCarousel values={values} screen="lg" />
                </div>
                <div className="d-none d-md-block d-lg-none">
                  <PostCarousel values={values} screen="md" />
                </div>
                <div className="d-block d-md-none d-lg-none">
                  <PostCarousel values={values} screen="sm" />
                </div>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Blogs;
