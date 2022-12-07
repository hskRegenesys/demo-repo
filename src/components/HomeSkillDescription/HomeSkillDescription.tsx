import Link from "next/link";
import React from "react";

const HomeSkillDescription = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">

          <div className="sec-title animated fadeInLeft text-center">
            <h4>
              Revolutionise your career with<br/>
              future ready skills
            </h4>
          </div>
          <p className="para-text">
            Learn the next-gen digital skills with India’s leading EdTech platform introduced by Regenesys Business School, an international business school with campuses in
            Johannesburg, Mumbai, and Lagos. Digital Regenesys is here to provide career transforming, skill-enhancing, and upgrading online courses in many digital fields.
            The self-paced online courses offered by Digital Regenesys are in sync with the demands of almost every industry and their digital and technological needs. The
            instructor-led training gives students a advantage in getting placed within top MNCs and organisations. Expose yourself to content within our certificate courses
            taught by a highly experienced and world-recognised faculty. Come and be a part of the digital revolution.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HomeSkillDescription;
