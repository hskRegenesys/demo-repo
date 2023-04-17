import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import Image from "next/image";
import ApplyNow from "./ApplyNow";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
interface IRecommendPost {
  image: string;
  title: string;
  date: string;
}

const links = [
  { name: "Author Name", value: "(Name)" },
  { name: "Updated On", value: new Date().toLocaleDateString() },
  { name: "", value: "04 Min Read", icon: <PersonIcon /> },
  { name: "", value: "427 Views", icon: <RemoveRedEyeIcon /> },
  {
    name: "",
    value: "Share",
    icon: <ShortcutIcon />,
  },
];

const recommentPosts: IRecommendPost[] = [
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
  { image: "", title: "blog 1", date: new Date().toLocaleDateString() },
];

const Pointer = () => {
  const content = Array(10)
    .fill(`0`)
    .map((_, index) => {
      text: index > 10 ? index : `0${index}`;
    });
  console.log({ content });
  return (
    <>
      {content.map((text, index) => (
        <p className="mb-0" key={index}>
          {" "}
          {">"}Pointer {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
        </p>
      ))}
    </>
  );
};

const ImageWithBtnBox = ({
  handleClickApplyClick,
  button,
  imgHeight = 400,
  imgWidth = 600,
}: any) => {
  return (
    <>
      <div className="img-content position-relative w-100 mt-2">
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

const blogIntroductionData = [
  {
    heading: "Blog Introduction",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.",
  },
  {
    heading: "Blog Includes",
    customContent: <Pointer />,
  },
];

const BlogIntroduction = ({ text, heading, customContent = "" }: any) => {
  return (
    <>
      <div>
        <h5 className="fw-bold">{heading}</h5>
        {text && <p>{text}</p>}
        {customContent && <p>{customContent}</p>}
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
        {posts.map(({ image, title, date }, index) => (
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

const BlogContainer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="ps-5 col-8">
            <div className="breadCrums">
              <p>
                Home {">"} Blog Category {">"} Digital Marketing Blog
              </p>
            </div>
            <div className="content d-flex flex-column">
              <h4 className="text-uppercase">
                <strong>digital marketing blog (Title)</strong>
              </h4>
              <div className="d-flex flex-column">
                <div>
                  {" "}
                  <ul className="d-flex justify-content-around">
                    {links.map(({ name, value, icon }, index) => (
                      <li key={index} className="fw-bold me-4">
                        <span className="">{icon}</span>
                        {name}
                        <span className="fw-normal">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ImageWithBtnBox />
                </div>
                <div className="blog-introducton mt-3">
                  {blogIntroductionData.map(
                    ({ text, heading, customContent }, index) => (
                      <>
                        <BlogIntroduction
                          key={index}
                          text={text}
                          heading={heading}
                          customContent={customContent}
                        />
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here.
                        </p>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here.
                        </p>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here.
                        </p>
                      </>
                    )
                  )}
                </div>
                <div className="feedback-form">
                  <FeedBackForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ApplyNow yellowBtn />
            <br />
            <RecomendPosts
              posts={recommentPosts}
              handleExpand={() => undefined}
            />
            <br />
            <ImageWithBtnBox button={"center"} imgHeight={700} imgWidth={400} />
          </div>
        </div>
        <div className="w-100">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default BlogContainer;
