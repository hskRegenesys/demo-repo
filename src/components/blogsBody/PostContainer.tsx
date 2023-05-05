import Image from "next/image";
import { IPostContainerTypes } from "./dataTypes";
import Link from "next/link";

const PostContainer = ({ post, restPost }: IPostContainerTypes) => {
  return (
    <div className={`p-2 ${restPost ? " col-12 col-sm-6 col-lg-4" : ""}`}>
      <Link href={`/blogs/${post?.slug}`} passHref>
        <div className="blog-grid-column">
          <div
            className="w-100 rounded position-relative overflow-hidden"
            style={{ height: "150px" }}
          >
            {post?.yoast_head_json?.og_image?.map((img) => (
              <Image
                key={img.url}
                src={img.url.toString()}
                alt={post?.yoast_head_json?.og_title}
                layout="fill"
                objectFit="cover"
              />
            ))}
          </div>
          <div className="p-3 blog-grid-content">
            <p
              className="blog-grid-title m-0 py-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={post?.yoast_head_json?.og_title}
            >
              {post?.yoast_head_json?.og_title}
            </p>
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
      </Link>
    </div>
  );
};

export default PostContainer;
