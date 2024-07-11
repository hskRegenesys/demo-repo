import React, { useEffect, useState } from "react";
import Image from "next/image";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
import { IPostTypes } from "./dataTypes";
import RightSidePanel from "./RightSidePanel";
import ApplyNow from "./ApplyNow";
import BreadCrumb from "./BreadCrumb";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";

const BlogContainer = ({
  slug,
  setBlogList,
  postResponse,
  isBlogDetail,
}: {
  slug: string;
  setBlogList: (value: any) => void;
  postResponse: Array<IPostTypes>;
  isBlogDetail?: boolean;
}) => {
  // const [postResponse, setPostResponse] = useState<Array<IPostTypes>>([]);
  // const getPost = async () => {
  //   const response = await wpService.allPosts({ slug: slug });
  //   !!response && setPostResponse(response);
  //   !!response && setBlogList(response);
  // };
  // useEffect(() => {
  //   getPost();
  // }, [slug]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl = postResponse[0]?.yoast_head_json?.og_image[0]?.url;

  return (
    <>
      <Schemas type={Constants?.article} data={postResponse} />
      <div style={{ paddingTop: "80px" }}>
        <div>
          {imageUrl && typeof imageUrl === "string" && (
            <Image
              src={imageUrl}
              width={isMobileView ? 360 : 1920}
              height={isMobileView ? 200 : 800}
              alt="Blog Image"
              layout="responsive"
              objectPosition="center"
              className="BlogImg"
            />
          )}
          <div className="BlogForm">
            <ApplyNow yellowBtn isBlack />
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid px-5 blog-detail-container">
          {postResponse?.length && (
            <div className="link-title mb-3 p-2 bg-light ">
              <div className="p-1  text-dark rounded-left">
                Author : {postResponse[0]?.yoast_head_json?.author}
              </div>
              <div className="p-1 text-dark">
                Published Date :{" "}
                {new Date(
                  postResponse[0]?.yoast_head_json?.article_published_time
                )?.toLocaleDateString()}
              </div>
              {/* <div className="p-2 bg-light text-dark rounded-right">
                Publisher : {postResponse[0]?.yoast_head_json?.og_site_name}
              </div> */}
            </div>
          )}
          <BreadCrumb
            title={slug?.toString()?.replaceAll("-", " ")}
            parent="Blog"
            parentHref="/blog"
          />

          <div className="row py-3 blog-content-container">
            <div className="col-12 col-lg-9">
              {postResponse?.length > 0 ? (
                postResponse?.map((item) => (
                  <div key={item.id}>
                    {item?.title && (
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: item?.title?.rendered,
                        }}
                        className="blog-h1"
                      />
                    )}
                    {item?.content && (
                      <div
                        className="link-title"
                        dangerouslySetInnerHTML={{
                          __html: item?.content?.rendered,
                        }}
                      />
                    )}
                    <FeedBackForm />
                  </div>
                ))
              ) : (
                <p>Loading</p>
              )}
            </div>
            <div className="col-12 col-lg-3">
              <RightSidePanel
                isRecommendedPost
                yellowBtn
                isBlogDetail={isBlogDetail}
              />
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
    </>
  );
};

export default BlogContainer;
