import { useRouter } from "next/router";
import React from "react";

const About = () => {
  const router = useRouter();
  const handleReadMore = () => router.push("/about");

  return (
    <div className="rounded bg-light-green p-3 rounded">
      <div className="py-3 px-1 text-center bg-dark-green rounded">
        <p className="h6 p-0 m-0">About Digital Regenesys</p>
      </div>
      <div className="px-1 py-2">
        <p>
          <small>
            Upgrade Your Career with Digital Regenesys Learn the next-gen
            digital skills with India&apos;s leading EdTech platform introduced
            by Regenesys Business School, an international business school with
            campuses in Johannesburg, Mumbai, and Lagos.
          </small>
          <b onClick={handleReadMore} className="btn  read-more-text" role="button">
            Read More.
          </b>
        </p>
      </div>
    </div>
  );
};

export default About;
