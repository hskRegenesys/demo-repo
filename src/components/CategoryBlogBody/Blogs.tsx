import React, { useEffect, useState } from "react";
import { wpService } from "src/services";

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
  const [response, setResponse] = useState<Array<any>>([]);

  const getAllPosts = async () => {
    const response = await wpService.allCategories();
    !!response ? setResponse(response) : setResponse([]);
    console.log(response);
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="col-12 d-flex" style={{ zIndex: 100 }}>
        <h6 style={{ marginLeft: 10 }}>All Blogs</h6>
        <div className="d-flex flex-row  ms-auto p-2" style={{ zIndex: 100 }}>
          <div className="dropdown" style={{ zIndex: 100 }}>
            <button
              onClick={handleOpen}
              style={{
                backgroundColor: "#289665",
                width: 150,
                marginRight: 10,
                color: "white",
              }}
            >
              Topic Filter
            </button>
            {open ? (
              <div style={{ borderStyle: "solid" }}>
                <ul className="menu">
                  {response.map((item) => (
                    <li className="menu-item">
                      <div>{item.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="dropdown">
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
      </div>
      {Object.keys(blogsData)?.map((value) => (
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
