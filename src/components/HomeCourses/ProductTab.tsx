import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const responsive1 = {
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
  1500: {
    items: 4,
    gutter: 30,
  },
  1600: {
    items: 5,
    gutter: 30,
  },
};

const responsive2 = {
  600: {
    items: 1,
    gutter: 30,
  },
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
};

const settings = {
  loop: false,
  lazyload: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const ProductTab = ({ tab = [], current, carousel = "", CourseCard = [] }:any) => {
  function getWeeksDiff(start_date:any, end_date:any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(
      Math.abs(new Date(end_date).getTime() - new Date(start_date).getTime()) /
        msInWeek
    );
  }

  const listRef = useRef(null);
  const id = 29;

  return (
    <div className={`p-tab${current === id ? " active-tab" : ""}`}>
      <div className={carousel || "project-carousel"}>
        <TinySlider
          options={{
            ...settings,
            container: `.my-slider-${id}`,
            nav: !carousel,
            responsive: carousel ? responsive2 : responsive1,
          }}
          ref={listRef}
        >
          {tab.map(({ id, name, courseMode, batches }:any) => (
            <div ref={listRef} className="gallery-item" key={id}>
              <div className="inner-box">
                <div className="icon">
                  <i className="fa fa-share-alt" aria-hidden="true"></i>
                </div>
                <figure className="image">
                  <Image src={`/assets/images/gallery/1.jpg`} alt="" />
                </figure>
                <a
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                ></a>
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="title">
                      <h5>
                        <Link href="/portfolio-single">
                          <a>{name}</a>
                        </Link>
                      </h5>
                    </div>

                    <div className="cat">
                      <ul className="about-seven__list list-unstyled">
                        <li>{courseMode.name}</li>
                        <li>
                          {batches.map((item:any) => (
                            <>
                              {getWeeksDiff(item.start_date, item.end_date)}
                              &nbsp;Week
                            </>
                          ))}
                        </li>
                        <li>Internation certification </li>
                        <li>Capstone projects </li>
                      </ul>
                    </div>
                    {batches.map((item:any) => (
                      <div className="batch">{item.description}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </div>
  );
};

export default ProductTab;
