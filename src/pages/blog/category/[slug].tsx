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

const PostsByCategory = () => {
  const router = useRouter();
  const { slug } = router.query;

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
      <Layout pageTitle="Blogs">
        <Style />
        <HeaderOne variant="blog" />
        <MobileMenu />
        <SearchPopup />
        {slug && <BlogsByCategories categorySlug={slug.toString()} />}
        <MainFooter />
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

export default PostsByCategory;
