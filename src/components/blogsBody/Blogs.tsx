import React from "react";

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
      {Object.keys(blogsData).map((value) => (
        <div key={value}>
          <h5>{value}</h5>
          <div className="row">
            {blogsData[value].map((item, index) => (
              <div className="col" key={index}>
                <div
                  style={{
                    border: "gray 1px solid",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
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
