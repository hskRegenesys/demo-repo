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

const BlogsBody = () => {
  return (
    <div className="blog-body-wrapper" style={{ paddingTop: "57px" }}>
      <CarouselComponent carouselProps={carousalProps} />

      <div className={Styles.blogCard}>
        <Image
          // src={`${imageUrl}${card.blogImg}`}
          src="/assets/images/allImages/brand-blog-online-course.webp"
          alt="Blog"
          className={Styles.blogImage}
          width={384}
          height={187}
          layout="responsive"
          loading="lazy"
        />

        <div className={Styles.blogContent}>
          <div>
            <h3 className={Styles.blogQuestion}>
              What Are the Benefits of Taking Online Courses?
            </h3>
            <h2 className={Styles.blogText}>TESt</h2>
          </div>
          <div className={Styles.knowMore}>
            <a
              href="https://www.digitalregenesys.com/blog/machine-learning-engineer-salary-south-africa"
              className={Styles.knowMoreLink}
              target="_blank"
              rel="noreferrer"
            >
              Know More
              <span className={Styles.arrowIcon}>
                <Image
                  // src={`${imageUrl}Icons/Readmore.svg`}
                  src="/assets/images/allImages/read-more-new.svg"
                  alt="card Star"
                  className={Styles.img}
                  width={12}
                  height={12}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Categories />

            <Blogs />
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
