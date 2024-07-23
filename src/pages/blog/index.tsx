import React, { useEffect, useState } from "react";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import StickyBar from "@/components/StickyFooter/Sticky";
import BlogsBody from "@/components/blogsBody";
import { wpService } from "src/services";
import Script from "next/script";

const Blogs = (props: any) => {
  const [searchData, setSearchData] = useState([]);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const search = (val: string) => {
    searchAPI(val);
  };
  const searchAPI = async (value: any) => {
    const response = await wpService.allPosts({
      search: value,
    });
    setSearchData(response);
  };

  useEffect(() => {
    setIsBlogPage(true);
  }, []);

  return (
    <>
      <Script
        id="google-tag-manager"
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
      <Layout pageTitle="Blog">
        <Style />
        <HeaderOne variant="blog" />
        <MobileMenu />
        <SearchPopup />
        <BlogsBody postData={props?.response} />
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

export const getServerSideProps = async () => {
  const response = await wpService.allCategories({ per_page: 40 });

  return {
    props: {
      response: response,
    },
  };
};

export default Blogs;
