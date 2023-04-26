import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogsByCategories from "@/components/blogsBody/BlogsByCategories";

const PostsByCategory = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout pageTitle="Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      {slug && <BlogsByCategories categorySlug={slug.toString()} />}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default PostsByCategory;
