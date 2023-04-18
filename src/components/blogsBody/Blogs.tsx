import React, { useEffect, useState } from "react";
import { wpService } from "src/services";

const Blogs = () => {
  const [response, setResponse] = useState<Array<any>>([]);

  const getAllPosts = async () => {
    const response = await wpService.allPosts();
    !!response ? setResponse(response) : setResponse([]);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <div>
        {response.length > 0 && response?.map((item: any) => {
          return (
            <>
              <h3>{item?.title?.rendered} </h3>
              <div
                key={item.id}
                dangerouslySetInnerHTML={{ __html: item?.content?.rendered }}
              />
              <div
                dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
              />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
