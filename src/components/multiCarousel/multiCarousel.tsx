import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  centerPadding: "10",
  slidesToScroll: 1,
  cssEase: "ease",
  prevArrow: <BsFillArrowLeftSquareFill />,
  nextArrow: <BsFillArrowRightSquareFill />,
};
const MultiCarousel = (props: any) => {
  settings = { ...settings, ...props.childSettings };
  return <Slider {...settings}>{props.children}</Slider>;
};

export default MultiCarousel;
