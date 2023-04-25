import Image from "next/image";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import Link from "next/link";
import { IPostTypes } from "./dataTypes";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";
import TrendingSection from "../TrendingSection/TrendingSection";
import NewsLetter from "./NewsLetter";
import { LeftOutlined } from "@ant-design/icons";
import RightSidePanel from "./RightSidePanel";

const carasoulProps = [
  {
    image: "Sample-Banner-01.jpeg",
    label: "Title",
    caption: "Caption",
  },
  {
    image: "Sample-Banner-02.jpeg",
    label: "Title",
    caption: "Caption",
  },
  {
    image: "Sample-Blog-Card-Image.png",
    label: "Title",
    caption: "Caption",
  },
];

const BlogsByCategories = ({ categoryId }: { categoryId: number }) => {
  const [postList, setPostList] = useState<Array<IPostTypes>>([]);

  const getPostList = async () => {
    const response = await wpService.allPosts({
      per_page: 20,
      categories: categoryId,
    });
    if (response?.length > 0) {
      setPostList(response);
    }
  };
  useEffect(() => {
    getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="carasoul-container my-5 position-relative">
            <CarouselComponent carouselProps={carasoulProps} />
            <div className="apply-now-form-box position-absolute">
              <LandingForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Link href={`/blogs/`} passHref>
          <p
            role="button"
            className="btn btn-hover px-1 py-0 d-flex align-items-center text-dark-green m-0"
          >
            <LeftOutlined className="pe-2" />
            Back to list
          </p>
        </Link>
        <div className="row">
          <div className="col-9">
            {postList.length > 0 ? (
              <div className="py-5">
                <div className="row">
                  {postList?.map((item) => (
                    <div key={item.id} className="p-2 col-4">
                      <div className="blog-grid-column">
                        <div>
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
                        <div className="px-3 blog-grid-content">
                          <p
                            className="blog-grid-title m-0 py-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={item?.yoast_head_json?.og_title}
                          >
                            {item?.yoast_head_json?.og_title}
                          </p>
                          <p className="blog-grid-desc py-1 m-0 w-100">
                            <small>
                              {item?.yoast_head_json?.og_description?.slice(
                                0,
                                100
                              )}
                              ...
                            </small>
                            <Link
                              href={`/blogs/${item?.slug}/${item?.id}`}
                              passHref
                            >
                              <a>
                                <b
                                  role="button"
                                  className="btn px-1 py-0 text-dark-green m-0"
                                >
                                  Read More.
                                </b>
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-3">
            <RightSidePanel />
          </div>
        </div>
      </div>
      <TrendingSection />
      <NewsLetter />
    </div>
  );
};

export default BlogsByCategories;
