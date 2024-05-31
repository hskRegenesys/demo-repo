import Image from "next/image";
import { IPostContainerTypes, bannerImages } from "./dataTypes";
import Link from "next/link";
import { getOneRandom } from "src/utils/common";

const PostContainer = ({ post, restPost }: IPostContainerTypes) => {
  return (
    <div className={`p-2 ${restPost ? " col-12 col-sm-6 col-lg-4" : ""}`}>
      <Link href={`/blog/${post?.slug}`} passHref>
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
      </Link>
    </div>
  );
};

export default PostContainer;
