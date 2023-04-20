import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { wpService } from "src/services";

const Blogs = () => {
  const [postList, setPostList] = useState<Array<any>>([]);
  const getCategoryList = async () => {
    const response = await wpService.allCategories({ per_page: 10 });
    if (response?.length > 0) {
      postByCategory(response);
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);

  const postByCategory = async (response: any) => {
    const apiResponse = await Promise.all(
      response?.map(async (category: any) => ({
        category: category.name,
        posts: await wpService.allPosts({
          per_page: 10,
          categories: category.id,
        }),
      }))
    );

    setPostList(apiResponse);
  };

  console.log(postList);

  return (
    <div>
      <div>
        {postList.length > 0 &&
          postList?.map((values) => {
            return values?.posts?.length > 0 ? (
              <div key={values?.category}>
                <h6>{values?.category}</h6>
                <Carousel arrows slidesPerRow={3}>
                  {values?.posts?.map((item: any) => (
                    <div key={item.id} className="px-2">
                      <div className="blog-grid-column">
                        <div>
                          {item?.yoast_head_json?.og_image?.map((img: any) => (
                            <Image
                              key={img.url}
                              src={img.url}
                              width={img.width}
                              height={img.height}
                              alt={item?.yoast_head_json?.og_title}
                            />
                          ))}
                        </div>
                        <div className="blog-grid-content">
                          <p
                            className="blog-grid-title px-3 py-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={item?.yoast_head_json?.og_title}
                          >
                            {item?.yoast_head_json?.og_title}
                          </p>
                          <p className="blog-grid-desc px-3 w-100">
                            <small>
                              {item?.yoast_head_json?.og_description}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
                <div className="row py-5"></div>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Blogs;
