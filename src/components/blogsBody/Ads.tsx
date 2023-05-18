import Image from "next/image";
import React from "react";

const Ads = () => {
  return (
    <div className="overflow-hidden rounded">
      <div
        className="w-100 position-relative rounded"
        style={{ minHeight: "400px" }}
      >
        <Image
          className="d-block w-100"
          src={`/assets/images/background/Sample-Verticle-Banner-02.jpeg`}
          alt="Advertisement"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Ads;
