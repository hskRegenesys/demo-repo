import React from "react";
import styles from "./footerDR.module.css";

interface FooterContent1Props {
  handleEnrollButtonClick: () => void;
}

const FooterContent1: React.FC<FooterContent1Props> = ({
  handleEnrollButtonClick,
}) => (
  <div className={styles.footerContent1}>
    <div className={styles.footerLogo}>
      <img src="/assets/images/HomeNew/DR_Logo.svg" alt="LogoIpsum" />
    </div>
    <div className={styles.footerTextheader}>
      <p>Ready to get started</p>
      <button
        className={styles.getStartedButton}
        onClick={handleEnrollButtonClick}
      >
        Get Started
      </button>
    </div>
  </div>
);

const FooterContent2: React.FC = () => (
  <div className={styles.footerContent2}>
    <div className={styles.footerContent2}>
      <p>
        <a href="https://www.digitalregenesys.com/all-courses">
          <strong className={styles.strong}>Courses</strong>
        </a>
      </p>
      <ul>
        <a href="https://www.digitalregenesys.com/all-courses/data-science">
          <li>Data Science</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/cyber-security">
          <li>Cybersecurity</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/digital-marketing">
          <li>Digital Marketing</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/artificial-intelligence">
          <li>Artificial Intelligence</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/project-management">
          <li>Project Management</li>
        </a>
      </ul>
    </div>
  </div>
);

const FooterContent3: React.FC = () => (
  <div className={styles.footerContent3}>
    <div className={styles.footerContent3}>
      <p>
        <strong className={styles.strong}>About</strong>
      </p>
      <ul>
        <a href="https://www.digitalregenesys.com/about">
          <li>Our Story</li>{" "}
        </a>

        <li>Benefits</li>
        <li>Our Tutors</li>
        <a href="https://www.digitalregenesys.com/blog">
          <li>Blogs</li>
        </a>
        <li>FAQ's</li>
        <a href="https://www.digitalregenesys.com/contact">
          <li>Contacts</li>
        </a>
      </ul>
    </div>
  </div>
);

const FooterContent4: React.FC = () => (
  <div className={styles.footerContent4}>
    <div className={styles.footerContent4}>
      <p>
        <strong className={styles.strong}>Follow Us</strong>
      </p>
      <div className={styles.socialIcons}>
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/RegenesysBusinessSchool"
          >
            {" "}
            <img
              src="/assets/images/HomeNew/facebook-icon.svg"
              alt="Facebook"
            />
            <span>Facebook</span>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://twitter.com/RegenesysB">
            {" "}
            <img src="/assets/images/HomeNew/twiter-icon.svg" alt="Twitter" />
            <span>Twitter</span>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/regenesysbusinessschool/"
          >
            {" "}
            <img src="/assets/images/HomeNew/insta-icon.svg" alt="Instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

interface FooterDRProps {
  handleEnrollButtonClick: () => void;
}

const FooterDR: React.FC<FooterDRProps> = ({ handleEnrollButtonClick }) => (
  <div className={styles.footerContainer}>
    <div className={styles.footerSectionDesktop}>
      <div className={styles.footerSection}>
        <div className={styles.content1}>
          <FooterContent1 handleEnrollButtonClick={handleEnrollButtonClick} />
        </div>
        <div className={styles.content2}>
          <FooterContent2 />

          <FooterContent3 />

          <FooterContent4 />
        </div>
      </div>
      <div className={styles.footerTextDesktop}>
        <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
        <div className={styles.footerTextInside}>
          <a href="https://www.digitalregenesys.com/terms-and-conditions">
            Terms & Conditions
          </a>
          <a href="https://www.digitalregenesys.com/privacy-policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
    <div className={styles.footerSectionMobile}>
      <div className={styles.footerSection}>
        <div className={styles.content1}>
          <FooterContent3 />

          <FooterContent2 />
        </div>
        <div className={styles.content2}>
          <FooterContent4 />
          <FooterContent1 handleEnrollButtonClick={handleEnrollButtonClick} />
        </div>
        <div className={styles.footerText}>
          <p>
            Copyright © 2020. LogoIpsum. All rights reserved.|
            <a href="https://www.digitalregenesys.com/terms-and-conditions">
              Terms & Conditions
            </a>
            |
            <a href="https://www.digitalregenesys.com/privacy-policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FooterDR;
