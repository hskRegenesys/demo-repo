import React from "react";
import styles from "./footerDR.module.css";
import Image from "next/image";

interface FooterContent1Props {
  handleEnrollButtonClick: (title?: string) => void;
}

const FooterContent1: React.FC<FooterContent1Props> = ({
  handleEnrollButtonClick,
}) => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={styles.footerContent1}>
      <div className={styles.footerLogo}>
        <Image
          src={`${imageUrl}Icons/DR-logo.webp`}
          // src="/assets/images/new-component-assets/DR_Logo.svg"
          alt="LogoIpsum"
          width={174}
          height={60}
        />
      </div>
      <div className={styles.footerTextheader}>
        {/* <h2>Ready to get started</h2> */}
        <button
          className={styles.getStartedButton}
          onClick={() => {
            handleEnrollButtonClick("Enrol Now!");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const FooterContent2: React.FC = () => (
  <div className={styles.footerContent2}>
    <div className={styles.footerContent2}>
      <p>
        <a href="https://www.digitalregenesys.com/all-courses">
          <strong className={styles.strong}>All Courses</strong>
        </a>
      </p>
      <ul>
        <a href="https://www.digitalregenesys.com/all-courses/data-science">
          <li>Data Science</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/cyber-security">
          <li>Cybersecurity</li>
        </a>
        {/* <a href="https://www.digitalregenesys.com/all-courses/digital-marketing">
          <li>Digital Marketing</li>
        </a> */}
        <a href="https://www.digitalregenesys.com/all-courses/artificial-intelligence">
          <li>Artificial Intelligence</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/project-management">
          <li>Project Management</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/full-stack-development">
          <li>Full Stack Development</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/digital-marketing">
          <li>Digital Marketing</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/design-thinking">
          <li>Design Thinking</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/data-and-business-analytics">
          <li>Data and Business Analytics</li>
        </a>
        <a href="https://www.digitalregenesys.com/all-courses/management-advancement">
          <li>Management Advancement</li>
        </a>
        {/* <a href="https://www.digitalregenesys.com//all-courses/operations-and-supply-chain-management">
          <li>Operations and supply chain management</li>
        </a> */}
        <a href="https://www.digitalregenesys.com/all-courses/product-management">
          <li> Product Management</li>
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

        <a href="https://www.digitalregenesys.com/blog">
          <li>Blogs</li>
        </a>
        <a href="https://www.digitalregenesys.com/contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  </div>
);

const FooterContent4: React.FC = () => {
  const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={styles.footerContent4}>
      <div className={styles.footerContent4}>
        <p>
          <strong className={styles.strong}>Follow Us</strong>
        </p>
        <div className={styles.socialIcons}>
          <a target="_blank" href="https://www.facebook.com/digitalregenesys">
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  src={`${imageUrl}Icons/facebook-icon.svg`}
                  // src="/assets/images/new-component-assets/facebook-icon.svg"
                  alt="Facebook"
                  width={14}
                  height={14}
                />
              </span>
              <span>Facebook</span>{" "}
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCPQNtnWidXkTSxDYJLkRY1A"
          >
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  src={`${imageUrl}Icons/youtube-icon.svg`}
                  // src="/assets/images/new-component-assets/youtube-icon.png"
                  alt="Youtube"
                  width={14}
                  height={14}
                />
              </span>
              <span>Youtube</span>{" "}
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/digital_regenesys/"
            className={styles.Icons}
          >
            {" "}
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  src={`${imageUrl}Icons/insta-icon.svg`}
                  // src="/assets/images/new-component-assets/insta-icon.svg"
                  alt="Instagram"
                  width={14}
                  height={14}
                />{" "}
              </span>
              <span>Instagram</span>{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
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
        <p>
          Copyright © 2024 | Digital Regenesys (Pvt) Ltd | All Rights Reserved
        </p>
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
        <div className={styles.content2}>
          <FooterContent3 />
          <FooterContent4 />
        </div>
        <div className={styles.content1}>
          <FooterContent2 />
          {/* <FooterContent1 handleEnrollButtonClick={handleEnrollButtonClick} /> */}
        </div>
        <div className={styles.footerText}>
          <p>
            Copyright © 2024 | Digital Regenesys (Pvt) Ltd | All Rights Reserved
            <a href="https://www.digitalregenesys.com/terms-and-conditions">
              | Terms & Conditions
            </a>
            |
            <a href="https://www.digitalregenesys.com/privacy-policy">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FooterDR;
