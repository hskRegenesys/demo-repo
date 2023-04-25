import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogsByCategories from "@/components/blogsBody/BlogsByCategories";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BlogsByCategories categoryId={Number(id)} />
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default Post;
