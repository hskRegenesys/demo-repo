import Link from "next/link";
import React from "react";

const CallToSection = ({ className = "", container = true }) => {
  return (
    <section className={`call-to-section ${className}`}>
      <div className={container ? "auto-container" : "inner clearfix"}>
        <div className={container ? "inner clearfix" : ""}>        
          <div className={container ? "" : "auto-container clearfix"}>
            <h2>Revolutionise your career with future{container ? <br /> : ""}
              ready skills
            </h2>
            <div className="link-box">
              <Link href="/contact">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Request a Call</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
