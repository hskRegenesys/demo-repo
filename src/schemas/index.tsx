import React from "react";
import Head from "next/head";
import { Template } from "./data";

interface props {
  type: any;
  data?: any;
}

const Schemas = ({ type, data }: props) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Template[type](data)),
        }}
      ></script>
    </Head>
  );
};

export default Schemas;
