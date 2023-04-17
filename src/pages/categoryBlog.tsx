import React from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import CategoryBlogsBody from "@/components/CategoryBlogBody";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import NewsLetter from "@/components/blogsBody/NewsLetter";
const CategoryBlog = () => {
  return (
    <Layout pageTitle="Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <CategoryBlogsBody />
      <NewsLetter />
      <TrendingSection />
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default CategoryBlog;
