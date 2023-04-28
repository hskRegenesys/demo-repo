import { useRouter } from "next/router";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import SearchBlog from "@/components/blogsBody/SearchBlog";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Layout pageTitle="Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <h1>Search</h1>
      {q && <SearchBlog query={q.toString()} />}
      <MainFooter />
      <StickyBar />
    </Layout>
  );
};

export default Search;
