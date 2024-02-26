import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";

import React, { useEffect, useState } from "react";
import { canonicalConstants } from "@/components/config/constant";
import Data from "@/data/commonData";
import { useRouter } from "next/router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CancelIcon from "@mui/icons-material/Cancel";
import ModalPopup from "../Modal/ModalPopup";
import { Modal } from "react-bootstrap";

const Layout = (props: any) => {
  const [show, setShow] = useState(false);
  const { asPath, pathname } = useRouter();
  const {
    children,
    pageTitle,
    preloader,
    mainClass,
    preloaderClass,
    categoryList,
    blogList,
    context,
  } = props;

  const [loading, setLoading] = useState(true);
  const [clonicalData, setClonicalData] = useState("");
  const [slugUrlData, setSlugUrlData] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);
  const metaData: any = Data;

  const title =
    pageTitle === "blog"
      ? blogList?.[0]?.yoast_head_json?.og_title
      : pageTitle === "category"
      ? // ? categoryList?.[0]?.posts?.[0]?.yoast_head_json?.og_title
        categoryList?.[0]?.yoast_head_json?.og_title
      : metaData?.metaInfo?.title?.[pageTitle]
      ? metaData?.metaInfo?.title?.[pageTitle]
      : metaData?.metaInfo?.title?.["home"];
  const description =
    pageTitle === "blog"
      ? blogList?.[0]?.yoast_head_json?.og_description
      : pageTitle === "category"
      ? categoryList?.[0]?.yoast_head_json?.og_description
      : // categoryList?.[0]?.posts?.[0]?.yoast_head_json?.og_description
      metaData?.metaInfo?.description?.[pageTitle]
      ? metaData?.metaInfo?.description?.[pageTitle]
      : metaData?.metaInfo?.description?.["home"];
  const keywords =
    pageTitle === "blog"
      ? metaData?.metaInfo?.keywords?.[pageTitle]?.[slugUrlData]
      : pageTitle === "category"
      ? metaData?.metaInfo?.keywords?.[pageTitle]?.[slugUrlData]
      : metaData?.metaInfo?.keywords?.[pageTitle]
      ? metaData?.metaInfo?.keywords?.[pageTitle]
      : metaData?.metaInfo?.keywords?.["home"];

  function fetchAsPath() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(asPath);
      });
    });
  }
  async function setCanonicalBaseUrl() {
    try {
      const asPath: any = await fetchAsPath();

      let canonicalBaseUrl = "https://www.digitalregenesys.com" + asPath;

      if (process.env.ENV_NAME !== "PRODUCTION") {
        canonicalBaseUrl = "https://uat-new.digitalregenesys.com" + asPath;
      }
      const regex = /\/([^\/]+)\/?$/;
      const match = asPath.match(regex);
      let slugUrl = "";
      if (match) {
        slugUrl = match[1];
      }
      setSlugUrlData(slugUrl);
      if (!canonicalBaseUrl.includes("slug")) {
        setClonicalData(canonicalBaseUrl);
      }
    } catch (error) {}
  }
  useEffect(() => {
    setCanonicalBaseUrl();
  }, [asPath]);

  return (
    <>
      <Head>
        <title>{title}</title>
        {clonicalData && <link rel="canonical" href={clonicalData} />}

        {description && <meta name="description" content={description} />}

        {keywords && <meta name="keywords" content={keywords} />}

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

        <link
          rel="alternate"
          // hrefLang="x-default"
          href="https://uat-new.digitalregenesys.com"
        />
      </Head>

      <Preloader className={preloaderClass} loading={loading} bg={preloader} />

      <div className={`whatsapp-form-modify ${show ? "d-block" : "d-none"}`}>
        <ModalPopup
          setShows={setShow}
          submitTitle="WhatsApp Chat"
          isWhatsapp
          title="Initiate a Chat"
        />
      </div>

      {/* <a
        id="chat"
        onClick={() => setShow(!show)}
        className="chat d-inline-block fadeIn animated"
      >
        {show ? <CancelIcon /> : <WhatsAppIcon />}
      </a> */}
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className={` ${mainClass} ${
          context === "multiple-page"
            ? ["page-wrapper-multiple"]
            : ["page-wrapper"]
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
