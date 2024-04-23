import Link from "next/link";
import React from "react";

const HomeSkillDescription = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two mobile-hide ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="sec-title animated fadeInLeft text-center">
            <h2 className="small-heading color-black">
              Revolutionise your career with <br />
              Future-Ready Skills
            </h2>
          </div>
          <p className="para-text">
            Embark on a next-generation digital skills journey. Digital
            Regenesys, the renowned EdTech platform by Regenesys Business
            School, an international business school with campuses in
            Johannesburg, Mumbai, and Lagos. Experience career-transforming,
            skill-enhancing, and cutting-edge online courses across various
            digital domains. Our online courses are meticulously designed to
            align with the evolving digital and technological requirements of
            diverse industries. Gain a competitive edge through instructor-led
            training, increasing your chances of securing prestigious positions
            in top MNCs and organisations. Immerse yourself in the comprehensive
            content of our certificate courses, delivered by a highly
            experienced and globally recognised faculty. Join us now and become
            a vital part of the digital revolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSkillDescription;
