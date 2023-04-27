import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostListTypes } from "./dataTypes";
import { getRandom } from "src/utils/common";
import { Spinner } from "react-bootstrap";

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
    getRandom(response);

    const apiResponse = await Promise.all(
      response?.map(async (category) => ({
        category: category.name,
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
      <Spinner />
    </div>
  ) : (
    <div className="py-5">
      <div>
        {postList.length > 0 &&
          postList?.map((values) => {
            return values?.posts?.length > 0 ? (
              <div key={values?.category} className="py-3">
                <h6>{values?.category}</h6>

                {values?.posts?.length > 3 ? (
                  <div className="d-flex justify-content-space-between align-items-center">
                    <div>
                      <button className="btn">Prev</button>
                    </div>
                    <div style={{ width: "90%" }}>
                      <Carousel
                        lazyLoad="ondemand"
                        autoplay
                        autoplaySpeed={6000}
                        arrows
                        infinite
                        dots={false}
                        slidesToShow={3}
                        slidesToScroll={1}
                        swipeToSlide
                      >
                        {values?.posts?.map((item) => (
                          <div key={item.id} className="px-2">
                            <div className="blog-grid-column">
                              <div>
                                {item?.yoast_head_json?.og_image?.map((img) => (
                                  <div key={img.url}>
                                    <img
                                      src={img.url.toString()}
                                      height={350}
                                      width={300}
                                      alt={item?.yoast_head_json?.og_title}
                                    />
                                  </div>
                                ))}
                              </div>
                              <div className="px-3 blog-grid-content">
                                <p
                                  className="blog-grid-title m-0 py-1"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title={item?.yoast_head_json?.og_title}
                                >
                                  {item?.yoast_head_json?.og_title}
                                </p>
                                <p className="blog-grid-desc py-1 m-0 w-100">
                                  <small>
                                    {item?.yoast_head_json?.og_description?.slice(
                                      0,
                                      80
                                    )}
                                    ...
                                  </small>
                                  <Link href={`/blogs/${item?.slug}`} passHref>
                                    <a>
                                      <b
                                        role="button"
                                        className="btn px-1 py-0 text-dark-green m-0"
                                      >
                                        Read More.
                                      </b>
                                    </a>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div>
                      <button className="btn">Next</button>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center ">
                    <div style={{ width: "90%" }}>
                      <div className="row">
                        {values?.posts?.map((item) => (
                          <div key={item.id} className="px-2 col-4">
                            <div className="blog-grid-column">
                              <div>
                                {item?.yoast_head_json?.og_image?.map((img) => (
                                  <div
                                    key={img.url}
                                    style={{
                                      height: "120px",
                                      width: "100%",
                                      overflow: "hidden",
                                      position: "relative",
                                    }}
                                  >
                                    <Image
                                      key={img.url}
                                      src={img.url.toString()}
                                      layout="fill"
                                      objectFit="contain"
                                      alt={item?.yoast_head_json?.og_title}
                                    />
                                  </div>
                                ))}
                              </div>
                              <div className="p-3">
                                <p
                                  className="blog-grid-title m-0 py-1"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title={item?.yoast_head_json?.og_title}
                                >
                                  {item?.yoast_head_json?.og_title}
                                </p>
                                <p className="blog-grid-desc py-1 m-0 w-100">
                                  <small>
                                    {item?.yoast_head_json?.og_description?.slice(
                                      0,
                                      80
                                    )}
                                    ...
                                  </small>
                                  <Link href={`/blogs/${item?.slug}`} passHref>
                                    <a>
                                      <b
                                        role="button"
                                        className="btn px-1 py-0 text-dark-green m-0"
                                      >
                                        Read More.
                                      </b>
                                    </a>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Blogs;
