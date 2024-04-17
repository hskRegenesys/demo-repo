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
import { wpService } from "src/services";
import { IPostTypes } from "@/components/blogsBody/dataTypes";

interface PostsByCategoryProps {
  slug: string;
  resolvedUrl: string;
  postResponse: Array<IPostTypes>;
}

const Post: React.FC<PostsByCategoryProps> = ({
  slug,
  resolvedUrl,
  postResponse,
}) => {
  const router = useRouter();
  // const { slug } = router.query;
  const [blogList, setBlogList] = useState<any>(postResponse);

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
    <Layout
      pageTitle="blog"
      blogList={blogList}
      slug={resolvedUrl}
      slugCourse={slug}
    >
      <Style />
      <HeaderOne variant="blog" />
      <MobileMenu />
      <SearchPopup />
      {slug && (
        <BlogContainer
          slug={slug.toString()}
          setBlogList={setBlogList}
          postResponse={postResponse}
        />
      )}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const { resolvedUrl } = context;

  const response = await wpService.allPosts({ slug });

  return {
    props: {
      slug,
      resolvedUrl,
      postResponse: response,
    },
  };
};

export default Post;
