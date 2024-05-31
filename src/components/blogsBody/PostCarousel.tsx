import { Carousel } from "antd";
import PostContainer from "./PostContainer";
import { IPostCarouselTypes, postToShow } from "./dataTypes";

const PostCarousel = ({ values, screen }: IPostCarouselTypes) => {
  return (
    <div>
      {values?.posts?.length > postToShow[screen] ? (
        <div className="d-flex justify-content-center">
          <div style={{ width: "90%" }}>
            <Carousel
              className="horizontal-slider"
              autoplaySpeed={6000}
              slidesToShow={postToShow[screen]}
              slidesToScroll={1}
              dots={false}
              nextArrow={<div className="nextArrow" />}
              prevArrow={<div className="prevArrow" />}
              autoplay
              arrows
              infinite
              swipeToSlide
            >
              {values?.posts?.map((item) => (
                <PostContainer post={item} key={item.id} />
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center ">
          <div style={{ width: "90%" }}>
            <div className="row">
              {values?.posts?.map((item) => (
                <PostContainer post={item} key={item.id} restPost />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCarousel;
