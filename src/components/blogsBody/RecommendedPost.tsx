import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { wpService } from "src/services";
import { IPostTypes, bannerImages } from "./dataTypes";
import { getOneRandom } from "src/utils/common";

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
  }, []);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-25">
      <Spinner animation="border" />
    </div>
  ) : (
    <div className="bg-light-green recommend-wrapper">
      <p className="text-center pt-4">
        <b>Recommended Posts</b>
      </p>
      {postList?.length > 0 && (
        <Carousel
          autoplay
          autoplaySpeed={6000}
          arrows={false}
          infinite
          dots={false}
          slidesToShow={postList.length < 6 ? postList.length - 1 : 6}
          slidesToScroll={1}
          swipeToSlide
          vertical
        >
          {postList.map((values) => (
            <div
              key={values.id}
              className="m-2 w-100 rounded btn"
              role="button"
            >
              <Link href={`/blog/${values?.slug}`}>
                <div className="row align-items-center">
                  <div
                    className="col-5 position-relative rounded"
                    style={{ height: "80px " }}
                  >
                    {values?.yoast_head_json?.og_image ? (
                      values?.yoast_head_json?.og_image.map((img) => (
                        <Image
                          key={img.url}
                          src={img.url.toString()}
                          alt="Blog"
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      ))
                    ) : (
                      <Image
                        src={`/assets/images/background/${
                          bannerImages[getOneRandom(bannerImages)]
                        }`}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    )}
                  </div>
                  <div className="col-7 text-start">
                    <p className="m-0 py-1">
                      <b>
                        {values?.title && (
                          <small
                            style={{
                              lineHeight: "1.2em",
                              height: "5em",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 4,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: values?.title?.rendered,
                            }}
                          />
                        )}
                      </b>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default RecommendedPost;
