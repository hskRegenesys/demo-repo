import React, { useEffect, useState } from "react";
import { wpService } from "src/services";
import { types } from "util";
import Image from "next/image";

interface filterOptions {
  name: string;
}

interface postResponse {
  yoast_head_json: any;
}

const Blogs = () => {
  const [response, setResponse] = useState<Array<filterOptions>>([]);
  const [responsePost, setResponsePost] = useState<Array<postResponse>>([]);

  const getAllCatogries = async () => {
    const response = await wpService.allCategories();
    !!response ? setResponse(response) : setResponse([]);
  };
  const getAllPosts = async () => {
    const response = await wpService.allPosts();
    !!response ? setResponsePost(response) : setResponsePost([]);
  };

  useEffect(() => {
    getAllPosts();
    getAllCatogries();
  }, []);

  const [topicOpen, setTopicOpen] = React.useState(false);
  const [sortOpen, setSortOpen] = React.useState(false);

  const handleTopicOpen = () => {
    setTopicOpen(!topicOpen);
  };

  const handleSortOpen = () => {
    setSortOpen(!sortOpen);
  };
  return (
    <div>
      <div className="col-12 d-flex" style={{ zIndex: 100 }}>
        <h6 style={{ marginLeft: 10 }}>All Blogs</h6>
        <div
          className="d-flex p-2 ms-auto col-17"
          style={{
            width: 300,
            justifyContent: "flex-end",
          }}
        >
          <div className="col-17" style={{ position: "absolute", width: 300 }}>
            <button
              onClick={handleTopicOpen}
              style={{
                position: "relative",
                backgroundColor: "#289665",
                width: 150,
                marginRight: 10,
                color: "white",
                zIndex: 100,
              }}
            >
              Topic Filter
            </button>
            {topicOpen ? (
              <div
                style={{
                  borderStyle: "solid",
                  backgroundColor: "white",
                }}
              >
                <ul>
                  {response.map((item, index) => (
                    <li className=" d-flex flex-row" key={index}>
                      <div>{item.name}</div>
                      <div className="p-2 ms-auto">
                        <input type="checkbox" value="Bike"></input>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div
            className="col-17"
            style={{ position: "absolute", width: 300, paddingLeft: 160 }}
          >
            <button
              onClick={handleSortOpen}
              style={{
                position: "relative",
                backgroundColor: "#289665",
                width: 150,
                marginRight: 10,
                color: "white",
              }}
            >
              Sort
            </button>
            {sortOpen ? (
              <div
                style={{
                  borderStyle: "solid",
                  backgroundColor: "white",
                }}
              >
                <ul>
                  <li className=" d-flex flex-row">
                    <div>jo</div>
                    <div className="p-2 ms-auto">
                      <input type="checkbox" value="Bike"></input>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          {responsePost.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div
                  style={{
                    border: "gray 1px solid",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                    backgroundColor: "#cae7d8",
                  }}
                >
                  <div>
                    <Image
                      src={item.yoast_head_json.og_image[0].url}
                      alt="Blogs Image"
                      style={{
                        height: item.yoast_head_json.og_image[0].height,
                        width: item.yoast_head_json.og_image[0].width,
                      }}
                    />
                  </div>
                  <div>{item.yoast_head_json.title}</div>
                  <div>{item.yoast_head_json.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
