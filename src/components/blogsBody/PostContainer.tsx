import Image from "next/image";
import { IPostContainerTypes, bannerImages } from "./dataTypes";
import Link from "next/link";
import { getOneRandom } from "src/utils/common";
import Styles from "../../components/NewComponents/blogSection/blogSection.module.css";

const PostContainer = ({ post, restPost }: IPostContainerTypes) => {
  const blogBaseUrl = "https://www.digitalregenesys.com/blog";

  return (
    <>
      <div className={Styles.blogCard}>
        <Image
          // src={`${imageUrl}${card.blogImg}`}
          src="/assets/images/allImages/brand-blog-online-course.webp"
          alt="Blog"
          className={Styles.blogImage}
          width={384}
          height={187}
          layout="responsive"
          loading="lazy"
        />

        <div className={Styles.blogContent}>
          <div>
            <h3 className={Styles.blogQuestion}>
              What Are the Benefits of Taking Online Courses?
            </h3>
            <h2 className={Styles.blogText}>TESt</h2>
          </div>
          <div className={Styles.knowMore}>
            <a
              href="https://www.digitalregenesys.com/blog/machine-learning-engineer-salary-south-africa"
              className={Styles.knowMoreLink}
              target="_blank"
              rel="noreferrer"
            >
              Know More
              <span className={Styles.arrowIcon}>
                <Image
                  // src={`${imageUrl}Icons/Readmore.svg`}
                  src="/assets/images/allImages/read-more-new.svg"
                  alt="card Star"
                  className={Styles.img}
                  width={12}
                  height={12}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={`p-2 ${restPost ? " col-12 col-sm-6 col-lg-4" : ""}`}>
        {/* <Link > */}
        <a
          href="https://www.digitalregenesys.com/blog/machine-learning-engineer-salary-south-africa"
          rel="noreferrer"
          target="_blank"
          className="blog-links-style"
        >
          <div className="blog-grid-column">
            <div
              className="w-100 rounded position-relative overflow-hidden"
              style={{ height: "108px" }}
            >
              {post?.yoast_head_json?.og_image ? (
                post?.yoast_head_json?.og_image?.map((img) => (
                  <Image
                    key={img.url}
                    src={img.url.toString()}
                    alt="icon"
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
                  alt="Banner Blog"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              )}
            </div>
            <div className="p-3 blog-grid-content">
              <p
                className="blog-grid-title m-0 py-1"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={post?.title?.rendered}
                dangerouslySetInnerHTML={{
                  __html: post?.title?.rendered,
                }}
              />

              <p className="blog-grid-desc py-1 m-0 w-100">
                <small>{post?.yoast_head_json?.og_description}</small>
              </p>
              <p className="m-0">
                <b role="button" className="btn p-0 text-dark-green m-0">
                  Read More.
                </b>
              </p>
            </div>
          </div>
        </a>
        {/* </Link> */}
      </div>
    </>
  );
};

export default PostContainer;
