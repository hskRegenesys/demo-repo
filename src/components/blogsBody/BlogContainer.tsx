import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import ApplyNow from "./ApplyNow";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
import { wpService } from "src/services";
import { IPostTypes } from "./dataTypes";
import Link from "next/link";
interface IRecommendPost {
  image: string;
  title: string;
  date: string;
}

const recommentPosts: IRecommendPost[] = [
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
];

const ImageWithBtnBox = ({
  handleClickApplyClick,
  button,
  imgHeight = 400,
  imgWidth = 1100,
}: any) => {
  return (
    <>
      <div className="img-content position-relative w-100 mt-2 ">
        <Image
          src={"/assets/images/background/full-video-bg.webp"}
          alt="test"
          width={imgWidth}
          height={imgHeight}
        />
        {!button && (
          <div
            onClick={ImageWithBtnBox}
            className="applyNow-btn position-absolute"
            style={{ bottom: "35px", left: "40%" }}
          >
            <button
              style={{ background: "#ffde59", color: "black" }}
              onClick={handleClickApplyClick}
              className="theme-btn btn-style-two mt-5"
              type="submit"
            >
              <i className="btn-curve"></i>
              <span className="btn-title">Apply</span>
            </button>
          </div>
        )}
        {button === "center" && (
          <div
            onClick={ImageWithBtnBox}
            className="applyNow-btn position-absolute"
            style={{ bottom: "35px", left: "30%" }}
          >
            <button
              style={{ background: "#ffde59", color: "black" }}
              onClick={handleClickApplyClick}
              className="theme-btn btn-style-two mt-5 yellow-btn"
              type="submit"
            >
              <i className="btn-curve"></i>
              <span className="btn-title">Apply</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const RecomendPosts = ({
  posts,
  handleExpand,
}: {
  posts: IRecommendPost[];
  handleExpand: () => void;
}) => {
  return (
    <>
      <div className="text-center bg-light p-3 rounded m-3">
        <h6>Recommended Posts</h6>
        {posts?.map(({ image, title, date }, index) => (
          <div className="row" key={index}>
            <div className="col-6">
              <Image
                src={"/assets/images/background/full-video-bg.webp"}
                alt="test"
                width={100}
                height={60}
              />
            </div>
            <div className="col-6">
              <p className="fw-bold mb-0">{title}</p>
              <p className="fw-bold">
                Date: <span className="fw-regualr">{date}</span>
              </p>
            </div>
          </div>
        ))}
        {posts.length > 7 && (
          <div>
            <ExpandCircleDownOutlinedIcon
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              color="success"
              onClick={handleExpand}
            />
          </div>
        )}
      </div>
    </>
  );
};

const BlogContainer = ({ slug }: { slug: string }) => {
  const [postResponse, setPostResponse] = useState<Array<IPostTypes>>([]);

  const getPost = async () => {
    const response = await wpService.allPosts({ slug: slug });
    !!response && setPostResponse(response);
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  return (
    <div style={{ paddingTop: "150px" }}>
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
          <div className="col-8">
            {postResponse?.length > 0 ? (
              postResponse?.map((item) => (
                <div key={item.id}>
                  <h4>{item?.title?.rendered}</h4>
                  <div className="w-100 position-relative">
                    {item?.yoast_head_json?.og_image?.map((img) => (
                      <Image
                        key={img.url}
                        src={img.url.toString()}
                        width={img.width}
                        height={img.height}
                        alt={item?.yoast_head_json?.og_title}
                      />
                    ))}
                  </div>
                  <div
                    className="link-title"
                    dangerouslySetInnerHTML={{
                      __html: item?.content?.rendered,
                    }}
                  />
                </div>
              ))
            ) : (
              <p>Loading</p>
            )}
          </div>
          <div className="col-4">
            <ApplyNow yellowBtn />
            <br />
            <RecomendPosts
              posts={recommentPosts}
              handleExpand={() => undefined}
            />
            <br />
            <div style={{ marginLeft: 90 }}>
              <ImageWithBtnBox
                button={"center"}
                imgHeight={700}
                imgWidth={400}
              />
            </div>
          </div>
        </div>
        <div className="feedback-form">
          <FeedBackForm />
        </div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default BlogContainer;
