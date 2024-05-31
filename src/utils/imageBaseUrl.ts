import { useMemo } from "react";

const imageBaseUrl = () => {
  return useMemo(() => `${process.env.awsImage_url}`, []);
};

export default imageBaseUrl;
