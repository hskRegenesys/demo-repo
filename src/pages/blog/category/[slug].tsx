import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogsByCategories from "@/components/blogsBody/BlogsByCategories";
import Script from "next/script";
import { useEffect, useState } from "react";
import { wpService } from "src/services";
import { IPostListTypes } from "@/components/blogsBody/dataTypes";

interface PostsByCategoryProps {
  slug: string;
  resolvedUrl: string;
  initialCategory: string | number;
  initialPostList: Array<IPostListTypes>;
}

interface CategoryType {
  name: string;
  yoast_head_json: object;
  id: number | string;
}

const PostsByCategory: React.FC<PostsByCategoryProps> = ({
  slug,
  resolvedUrl,
  initialCategory,
  initialPostList,
}) => {
  const router = useRouter();
  // const { slug } = router.query;
  const [categoryList, setCategoryList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string | number>(initialCategory);
  const [isBlogPage, setIsBlogPage] = useState(false);

  const [postList, setPostList] =
    useState<Array<IPostListTypes>>(initialPostList);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [postList]);

  useEffect(() => {
    setIsBlogPage(true);
  }, []);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MSZ536C5');
              `,
        }}
      />
      <Layout
        pageTitle="category"
        categoryList={postList}
        slug={resolvedUrl}
        slugCourse={slug}
      >
        <Style />
        <HeaderOne variant="blog" />
        <MobileMenu />
        <SearchPopup />
        {slug && (
          <BlogsByCategories
            categorySlug={slug?.toString()}
            setCategoryList={setCategoryList}
            category={category}
            postList={postList}
            isLoading={isLoading}
          />
        )}
        <MainFooter isBlogPage={isBlogPage} />
        <StickyBar />
      </Layout>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MSZ536C5"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const { resolvedUrl } = context;

  const response = await wpService.allCategories({ slug: slug });
  let initialCategory = "";
  let initialPostList = [];

  if (response?.length > 0) {
    initialCategory = response[0].name;
    initialPostList = await Promise.all(
      response.map(async (category: CategoryType) => ({
        category: category.name,
        yoast_head_json: category.yoast_head_json,
        posts: await wpService.allPosts({
          per_page: 12,
          categories: category.id,
        }),
      }))
    );
  }

  return {
    props: {
      slug,
      resolvedUrl,
      initialCategory,
      initialPostList,
    },
  };
};
export default PostsByCategory;
