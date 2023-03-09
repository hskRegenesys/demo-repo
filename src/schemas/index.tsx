import React from "react";
import Head from "next/head";
import { Template } from "./data";

interface props {
  type: string;
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
      />
    </Head>
  );
};

export default Schemas;
