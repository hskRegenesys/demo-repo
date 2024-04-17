import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { canonicalConstants } from "@/components/config/constant";
import Data from "@/data/commonData";
import { useRouter } from "next/router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CancelIcon from "@mui/icons-material/Cancel";
import ModalPopup from "../Modal/ModalPopup";
import { Modal } from "react-bootstrap";
import mixpanel from "mixpanel-browser";

const Layout = (props: any) => {
  const [show, setShow] = useState(false);
  const { asPath } = useRouter();

  const {
    children,
    pageTitle,
    preloader,
    mainClass,
    preloaderClass,
    categoryList,
    blogList,
    context,
    slug,
    slugCourse,
  } = props;

  const [loading, setLoading] = useState(true);
  const [canonicalData, setCanonicalData] = useState("");
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
      ? metaData?.metaInfo?.keywords?.[
          pageTitle[0]?.toUpperCase() + pageTitle.substring(1)
        ]?.[slugCourse]
      : pageTitle === "category"
      ? metaData?.metaInfo?.keywords?.[pageTitle]?.[slugCourse]
      : metaData?.metaInfo?.keywords?.[pageTitle]
      ? metaData?.metaInfo?.keywords?.[pageTitle]
      : metaData?.metaInfo?.keywords?.["home"];

  const ogImg =
    pageTitle === "blog"
      ? blogList?.[0]?.yoast_head_json?.og_image[0]?.url
      : pageTitle === "category"
      ? categoryList?.[0]?.posts?.[0]?.yoast_head_json?.og_image[0]?.url
      : metaData?.metaInfo?.ogImg?.[pageTitle]
      ? metaData?.metaInfo?.ogImg?.[pageTitle]
      : metaData?.metaInfo?.ogImg?.["home"];

  const canonicalBaseUrl = (() => {
    const isProduction = process.env.ENV_NAME === "PRODUCTION";
    return isProduction
      ? `https://www.digitalregenesys.com${slug ? `${slug}` : asPath}`
      : `https://uat-new.digitalregenesys.com${slug ? `${slug}` : asPath}`;
  })();

  useEffect(() => {
    const linkElement = document.getElementById("dynamic-url");
    if (linkElement) {
      linkElement.setAttribute("href", canonicalBaseUrl);
    }
  }, [canonicalBaseUrl]);

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

      let canonicalUrl = "https://www.digitalregenesys.com" + asPath;

      if (process.env.ENV_NAME !== "PRODUCTION") {
        canonicalUrl = "https://uat-new.digitalregenesys.com" + asPath;
      }
      const regex = /\/([^\/]+)\/?$/;
      const match = asPath.match(regex);
      let slugUrl = "";
      if (match) {
        slugUrl = match[1];
      }
      setSlugUrlData(slugUrl);
      if (!canonicalUrl.includes("slug")) {
        setCanonicalData(canonicalUrl);
      }
    } catch (error) {}
  }
  useEffect(() => {
    setCanonicalBaseUrl();
  }, [asPath]);

  // Mixpanel Integration
  const captureSessionEnd = () => {
    mixpanel.track("Session End");
  };
  useEffect(() => {
    mixpanel.init("54f723cb0066c4c06a2102ffdbefe23b", {
      // debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
    mixpanel.track("Session Start");
    mixpanel.track("page_view");

    window.addEventListener("beforeunload", captureSessionEnd);
    return () => {
      window.removeEventListener("beforeunload", captureSessionEnd);
    };
  }, []);

  // Scroll depth mix-panel
  const trackScrollDepth = () => {
    let maxScrollDepth = 0;
    let isScrollTriggered = false;

    const calculateScrollDepth = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      const currentScrollDepth = scrollPosition / totalHeight;

      if (currentScrollDepth > maxScrollDepth) {
        maxScrollDepth = currentScrollDepth;
      }

      isScrollTriggered = true;
    };

    window.addEventListener("scroll", calculateScrollDepth);

    const trackWhenLeave = () => {
      if (isScrollTriggered) {
        const scrollPercentage = maxScrollDepth * 100;
        mixpanel.track("Page-Scrolled", {
          depth: `${scrollPercentage.toFixed(2)}%`,
        });
      }
    };

    window.addEventListener("beforeunload", trackWhenLeave);

    return () => {
      window.removeEventListener("scroll", calculateScrollDepth);
      window.removeEventListener("beforeunload", trackWhenLeave);
    };
  };
  useEffect(() => {
    trackScrollDepth();
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "lxj4wy0m9f");
              `,
          }}
        />
        <title>{title}</title>
        {canonicalBaseUrl && (
          <link rel="canonical" href={canonicalBaseUrl} id="dynamic-url" />
        )}

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
        {/* <!-- Facebook Meta Tags --> */}
        {canonicalBaseUrl && (
          <meta property="og:url" content={canonicalBaseUrl} />
        )}
        <meta property="og:type" content="website" />
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {ogImg && <meta property="og:image" content={ogImg} />}
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="digitalregenesys.com" />
        {canonicalBaseUrl && (
          <meta property="twitter:url" content={canonicalBaseUrl} />
        )}
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {ogImg && <meta name="twitter:image" content={ogImg} />}
        {/* <link
          rel="alternate"
           hrefLang="x-default"
          href="https://uat-new.digitalregenesys.com"
        /> */}
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
