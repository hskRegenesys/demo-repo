import React from "react";
import dynamic from "next/dynamic";

//import HeaderOne from "@/components/Header/HeaderOne";
//import MobileMenu from "@/components/Header/MobileMenu";
//import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
//import SearchPopup from "@/components/SearchPopup/SearchPopup";
//import MainFooter from "@/components/MainFooter/MainFooter";
//import StickyBar from "@/components/StickyFooter/Sticky";
//import CategoryBlogsBody from "@/components/CategoryBlogBody";
//import TrendingSection from "@/components/TrendingSection/TrendingSection";
//import NewsLetter from "@/components/blogsBody/NewsLetter";

const HeaderOne = dynamic(() => import("@/components/Header/HeaderOne"));
const StickyBar = dynamic(() => import("@/components/StickyFooter/Sticky"));

const CategoryBlogsBody = dynamic(
  () => import("@/components/CategoryBlogBody")
);

const SearchPopup = dynamic(
  () => import("@/components/SearchPopup/SearchPopup")
);
const MainFooter = dynamic(() => import("@/components/MainFooter/MainFooter"));
const NewsLetter = dynamic(() => import("@/components/blogsBody/NewsLetter"));
const Layout = dynamic(() => import("@/components/Layout/Layout"));
const MobileMenu = dynamic(() => import("@/components/Header/MobileMenu"));
const TrendingSection = dynamic(
  () => import("@/components/TrendingSection/TrendingSection")
);

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
