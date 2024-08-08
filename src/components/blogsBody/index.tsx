import React from "react";
import Categories from "./Categories";
import RightSidePanel from "./RightSidePanel";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import CarouselComponent from "./Carousel";
import LandingForm from "../commonForm/AllForms";
import { carousalProps } from "./dataTypes";
import { Toaster } from "react-hot-toast";
import Styles from "../../components/NewComponents/blogSection/blogSection.module.css";
import Image from "next/image";

const BlogsBody = (props: any) => {
  return (
    <div className="blog-body-wrapper" style={{ paddingTop: "57px" }}>
      <CarouselComponent carouselProps={carousalProps} />
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Categories categories={props?.postData} />

            <Blogs response={props?.postData} />
          </div>
          <div className="col-12 col-lg-3">
            <RightSidePanel />
          </div>
        </div>
      </div>
      <TrendingSection />
      <NewsLetter />
      <Toaster />
    </div>
  );
};

export default BlogsBody;
