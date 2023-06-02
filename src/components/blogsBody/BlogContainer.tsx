import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
import { wpService } from "src/services";
import { IPostTypes, bannerImages } from "./dataTypes";
import Link from "next/link";
import RightSidePanel from "./RightSidePanel";
import ApplyNow from "./ApplyNow";
import BreadCrumb from "./BreadCrumb";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";

const BlogContainer = ({ slug }: { slug: string }) => {
  const [postResponse, setPostResponse] = useState<Array<IPostTypes>>([]);
  const randomIndex = Math.floor(Math.random() * bannerImages.length);

  const getPost = async () => {
    const response = await wpService.allPosts({ slug: slug });
    !!response && setPostResponse(response);
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  return (
    <>
      <Schemas type={Constants.article} data={postResponse} />
      <div style={{ paddingTop: "85px" }}>
        <div>
          <div
            className="d-lg-grid w-100 d-none blog-container-bg-image"
            style={{
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% auto",
              backgroundImage: `url(${postResponse[0]?.yoast_head_json.og_image[0].url})`,
            }}
          >
            <div
              className="d-none d-lg-block align-self-center pe-5 col-3"
              style={{ justifySelf: "end" }}
            >
              <ApplyNow yellowBtn isBlack />
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container-fluid px-5">
            <BreadCrumb
              title={slug?.toString().replaceAll("-", " ")}
              parent="Blog"
              parentHref="/blog"
            />
            {postResponse?.length && (
              <div className="link-title d-flex justify-content-left mb-3">
                <div className="p-2 ">
                  Author : {postResponse[0]?.yoast_head_json?.author}
                </div>
                <div className="p-2 ">
                  Published Date :
                  {new Date(
                    postResponse[0]?.yoast_head_json?.article_published_time
                  ).toLocaleDateString()}
                </div>
                <div className="p-2 ">
                  Publisher :{postResponse[0]?.yoast_head_json?.og_site_name}
                </div>
              </div>
            )}
            <Link href={`/blog/`} passHref>
              <p
                role="button"
                className="btn btn-hover px-1 py-0 d-flex align-items-center text-dark-green m-0"
              >
                <LeftOutlined className="pe-2" />
                Back to list
              </p>
            </Link>
            <div className="row py-3">
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
                <RightSidePanel isRecommendedPost yellowBtn />
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </>
  );
};

export default BlogContainer;
