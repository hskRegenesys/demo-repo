import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
import { wpService } from "src/services";
import { IPostTypes } from "./dataTypes";
import Link from "next/link";
import RightSidePanel from "./RightSidePanel";
import ApplyNow from "./ApplyNow";

const bannerImages = [
  "Project-Management-Banner.png",
  "digital-marketing.jpeg",
  "data-science.jpeg",
  "cyber-security.jpg",
];

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
    <div style={{ paddingTop: "85px" }}>
      <div className="">
        <div
          className="w-100 d-grid blog-container-bg-image"
          style={{
            height: "500px",
            background: `no-repeat url(/assets/images/background/${bannerImages[randomIndex]})`,
          }}
        >
          <div
            className="d-none d-lg-block align-self-center pe-5 col-3 ps-5"
            style={{ justifySelf: "end" }}
          >
            <ApplyNow yellowBtn isBlack />
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container-fluid px-5">
          <Link href={`/blogs/`} passHref>
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
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item?.title?.rendered,
                        }}
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
  );
};

export default BlogContainer;
