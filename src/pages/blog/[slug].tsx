import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogContainer from "@/components/blogsBody/BlogContainer";
import { useEffect, useState } from "react";
import { wpService } from "src/services";
import { IPostTypes } from "@/components/blogsBody/dataTypes";
import { parse } from "node-html-parser";

interface PostsByCategoryProps {
  slug: string;
  resolvedUrl: string;
  postResponse: Array<IPostTypes>;
  faqsSchemaData: any;
}

const Post: React.FC<PostsByCategoryProps> = ({
  slug,
  resolvedUrl,
  postResponse,
  faqsSchemaData,
}) => {
  const [blogList, setBlogList] = useState<any>(postResponse);
  const [isBlogDetail, setIsBlogDetail] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);

  useEffect(() => {
    setIsBlogDetail(true);
    setIsBlogPage(true);
  }, []);
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
          isBlogDetail={isBlogDetail}
          faqsSchemaData={faqsSchemaData}
        />
      )}
      <MainFooter isBlogPage={isBlogPage} />
      <StickyBar />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const { resolvedUrl } = context;

  const response = await wpService.allPosts({ slug });

  const processedData = response.flatMap((item: any) => {
    if (item.content) {
      const htmlString = item.content.rendered;
      const root = parse(htmlString);

      const result: Array<{ question: string; answer: string }> = [];

      root.querySelectorAll(".eb-accordion-inner").forEach((element) => {
        element.querySelectorAll(".eb-accordion-title").forEach((h3, index) => {
          const question = h3.text.trim();
          const answer =
            element.querySelectorAll("p")[index]?.text.trim() || "";
          result.push({ question, answer });
        });
      });

      return result;
    }
    return [];
  });

  return {
    props: {
      slug,
      resolvedUrl,
      postResponse: response,
      faqsSchemaData: processedData,
    },
  };
};

export default Post;
