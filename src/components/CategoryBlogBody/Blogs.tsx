import React from "react";
import { Button } from "react-bootstrap";

const blogsData: { [key: string]: Array<{ [key: string]: string }> } = {
  "Popular Post": [
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
  ],
  "Data Science Article": [
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
  ],
  "3": [
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
  ],
  "4": [
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
    {
      title: "Title 1",
      desc: "Description",
      img: "https://placehold.co/600x400?text=Image",
    },
  ],
};

const Blogs = () => {
  return (
    <div>
      <div
        className="col-12 d-flex"
        style={{ marginBottom: 15, marginTop: 20 }}
      >
        <h6 style={{ marginLeft: 10 }}>All Blogs</h6>
        <div className="ms-auto" style={{ width: 350 }}>
          <button
            style={{
              backgroundColor: "#289665",
              width: 150,
              marginRight: 10,
              color: "white",
            }}
          >
            Topic Filter
          </button>
          <button
            style={{
              backgroundColor: "#289665",
              width: 150,
              marginRight: 10,
              color: "white",
            }}
          >
            Sort By
          </button>
        </div>
      </div>
      {Object.keys(blogsData).map((value) => (
        <div key={value}>
          <div className="row">
            {blogsData[value].map((item, index) => (
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
                  }}
                >
                  <div>
                    <img src={item.img} />
                  </div>
                  <div>{item.title}</div>
                  <div>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
