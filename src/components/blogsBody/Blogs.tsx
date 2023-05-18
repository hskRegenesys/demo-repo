import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostListTypes } from "./dataTypes";
import { shuffleArray } from "src/utils/common";
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

  const postByCategory = async (
    response: Array<{
      [key: string]: number | string;
    }>
  ) => {
    shuffleArray(response);

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
                  <p
                    className="h6 p-0 m-0"
                    dangerouslySetInnerHTML={{
                      __html: values?.category.toString(),
                    }}
                  />

                  <div>
                    <Link href={`/blog/category/${values?.slug}`} passHref>
                      <a>
                        <b
                          role="button"
                          className="btn px-1 py-0 text-dark-green m-0"
                        >
                          View more
                        </b>
                      </a>
                    </Link>
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
