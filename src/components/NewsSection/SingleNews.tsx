import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = (props:any) => {
  const { image, date, admin, comments, header, text } = props.news;

  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box">
          <Link href="/blog-single">
            <a>
              <Image
                src={require(`/src/assets/images/resource/${image}`).default.src}
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {date}
              </li>
              <li>
                <span className="far fa-user-circle"></span> {admin}
              </li>
              <li>
                <span className="far fa-comments"></span> {comments} Comments
              </li>
            </ul>
          </div>
          <h5>
            <Link href="/blog-single">{header}</Link>
          </h5>
          <div className="text">{text}</div>
          <div className="link-box">
            <Link href="/blog-single">
              <a className="theme-btn">
                <span className="flaticon-next-1"></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
