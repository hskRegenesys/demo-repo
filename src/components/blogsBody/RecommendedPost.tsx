import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostTypes } from "./dataTypes";
import { Spinner } from "react-bootstrap";
import { ChevronRight } from "@mui/icons-material";

const RecommendedPost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<Array<IPostTypes>>([]);
  const getPostList = async () => {
    const response = await wpService.allPosts({ per_page: 12 });
    if (response?.length > 0) {
      setIsLoading(false);
      setPostList(response);
    }
  };
  useEffect(() => {
    getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-25">
      <Spinner animation="border" />
    </div>
  ) : (
    <div className="bg-light-green ">
      <p className="text-center pt-4">
        <b>Recommended Posts</b>
      </p>

      <Carousel
        lazyLoad="ondemand"
        autoplay
        autoplaySpeed={6000}
        arrows={false}
        infinite
        dots={false}
        slidesToShow={6}
        slidesToScroll={1}
        swipeToSlide
        vertical
      >
        {postList.length > 0 &&
          postList?.map((values) => (
            <Link key={values.id} href={`/blogs/${values?.slug}`} passHref>
              <div className="m-2 rounded  btn" role="button">
                <div className="row align-items-center">
                  <div
                    className="col-6 position-relative rounded "
                    style={{ height: "80px" }}
                  >
                    {values?.yoast_head_json?.og_image?.map((img) => (
                      <Image
                        key={img.url}
                        src={img.url.toString()}
                        alt={values?.yoast_head_json?.og_title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    ))}
                  </div>
                  <div className="col-6">
                    <p
                      className="m-0 py-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={values?.yoast_head_json?.og_title}
                    >
                      <b>
                        <small
                          dangerouslySetInnerHTML={{
                            __html: values?.title?.rendered,
                          }}
                        />
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default RecommendedPost;
