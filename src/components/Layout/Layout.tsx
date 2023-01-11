import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { canonicalConstants } from "@/components/config/constant";
import Data from "@/data/commonData";

const Layout = (props: any) => {
  const { children, pageTitle, preloader, mainClass, preloaderClass } = props;
  const [loading, setLoading] = useState(true);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);
  const router = useRouter();
  const canonicalUrl = (
    `${canonicalConstants}` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const metaData: any = Data;
  const title = metaData?.metaInfo?.title?.[pageTitle]
    ? metaData?.metaInfo?.title?.[pageTitle]
    : metaData?.metaInfo?.title?.["home"];
  const description = metaData?.metaInfo?.description?.[pageTitle]
    ? metaData?.metaInfo?.description?.[pageTitle]
    : metaData?.metaInfo?.description?.["home"];
  const keywords = metaData?.metaInfo?.keywords?.[pageTitle]
    ? metaData?.metaInfo?.keywords?.[pageTitle]
    : metaData?.metaInfo?.keywords?.["home"];
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        {process.env.ENV_NAME === "PRODUCTION" && (
          <meta name="robots" content="index, follow" />
        )}
        {process.env.ENV_NAME !== "PRODUCTION" && (
          <meta name="robots" content="no-index, no-follow" />
        )}
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="w06PzLIca_7IZncYeLM5ZmYMOa8tuE0Kj_QdmpZ1Fr0"
        />
      </Head>
      <Preloader className={preloaderClass} loading={loading} bg={preloader} />
      <a id="chat" className="chat d-inline-block fadeIn animated"><i className="chat-icon"></i></a>
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className={`page-wrapper ${mainClass}`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
