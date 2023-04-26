import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogContainer from "@/components/blogsBody/BlogContainer";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout pageTitle="Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      {slug && <BlogContainer slug={slug.toString()} />}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default Post;
