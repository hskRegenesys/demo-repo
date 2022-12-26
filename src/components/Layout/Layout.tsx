import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {canonicalConstants} from "@/components/config/constant"

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
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Online Certificate Courses for Professionals | {pageTitle}
        </title>

        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Upskill yourself with Digital Regensys online courses for digital-age skills to become future-ready for the dynamic workplace in the disruptive digital age."
        />
      </Head>
      <Preloader className={preloaderClass} loading={loading} bg={preloader} />
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
