import React, { useState } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogsBody from "@/components/blogsBody";
import { wpService } from "src/services";

const Blogs = () => {
  const [searchData, setSearchData] = useState([]);
  const search = (val: string) => {
    searchAPI(val);
  };
  const searchAPI = async (value: any) => {
    const response = await wpService.allPosts({
      search: value,
    });
    setSearchData(response);
    console.log("response", response);
  };

  return (
    <Layout pageTitle="blog">
      <Style />
      <HeaderOne variant="blog" />
      <MobileMenu />
      <SearchPopup />
      <BlogsBody />
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default Blogs;
