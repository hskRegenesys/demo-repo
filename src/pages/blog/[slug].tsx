import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogContainer from "@/components/blogsBody/BlogContainer";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blogList, setBlogList] = useState<any>([]);

  // const xmlOperation = async (sitemapData: any) => {
  //   if (!(sitemapData.length > 0)) return;

  //   try {
  //     await fetch("/api/sitemapDynamicUrls", {
  //       method: "POST",
  //       body: JSON.stringify({ sitemapData }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   xmlOperation(blogList);
  // }, [blogList]);
  return (
    <Layout pageTitle="blog" blogList={blogList}>
      <Style />
      <HeaderOne variant="blog" />
      <MobileMenu />
      <SearchPopup />
      {slug && (
        <BlogContainer slug={slug.toString()} setBlogList={setBlogList} />
      )}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default Post;
