import React from "react";
import styles from "./footerDR.module.css";
import Image from "next/image";
import imageBaseUrl from "src/utils/imageBaseUrl";

interface FooterContent1Props {
  handleEnrollButtonClick: (title?: string) => void;
}

const FooterContent1: React.FC<FooterContent1Props> = ({
  handleEnrollButtonClick,
}) => {
  // const imageUrl = imageBaseUrl();

  return (
    <div className={styles.footerContent1}>
      <div className={styles.footerLogo}>
        <Image
          // src={`${imageUrl}Icons/DR-logo.webp`}
          src="/assets/images/allImages/DR_Logo.svg"
          alt="Logo footer"
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
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/data-science">
            Data Science
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/cyber-security">
            Cybersecurity
          </a>
        </li>
        {/* <a href="https://www.digitalregenesys.com/all-courses/digital-marketing-course">
          <li>Digital Marketing</li>
        </a> */}
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/artificial-intelligence">
            Artificial Intelligence
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/project-management">
            Project Management
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/full-stack-development">
            Full Stack Development
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/digital-marketing-course">
            Digital Marketing
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/design-thinking">
            Design Thinking
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/data-and-business-analytics">
            Data and Business Analytics
          </a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/management-advancement-programme">
          Management Advancement Programme
          </a>
        </li>
        {/* <a href="https://www.digitalregenesys.com//all-courses/operations-and-supply-chain-management">
          <li>Operations and supply chain management</li>
        </a> */}
        <li>
          <a href="https://www.digitalregenesys.com/all-courses/product-management">
            Product Management
          </a>
        </li>
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
        <li>
          <a href="https://www.digitalregenesys.com/about">Our Story</a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/blog">Blogs</a>
        </li>
        <li>
          <a href="https://www.digitalregenesys.com/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

const FooterContent4: React.FC = () => {
  // const imageUrl = `${process.env.awsImage_url}`;

  return (
    <div className={styles.footerContent4}>
      <div className={styles.footerContent4}>
        <p>
          <strong className={styles.strong}>Follow Us</strong>
        </p>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.facebook.com/digitalregenesys"
            rel="noreferrer"
          >
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  // src={`${imageUrl}Icons/facebook-icon.svg`}
                  src="/assets/images/allImages/facebook-icon.svg"
                  alt="Facebook icon"
                  width={14}
                  height={14}
                  priority
                />
              </span>
              <span>Facebook</span>
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCPQNtnWidXkTSxDYJLkRY1A"
            rel="noreferrer"
          >
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  // src={`${imageUrl}Icons/youtube-icon.svg`}
                  src="/assets/images/allImages/youtube-icon.png"
                  alt="Youtube icon"
                  width={14}
                  height={14}
                  priority
                />
              </span>
              <span>Youtube</span>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/digital_regenesys/"
            className={styles.Icons}
            rel="noreferrer"
          >
            <div className={styles.socialIconsText}>
              <span className={styles.Icons}>
                <Image
                  // src={`${imageUrl}Icons/insta-icon.svg`}
                  src="/assets/images/allImages/insta-icon.svg"
                  alt="Instagram icon"
                  width={14}
                  height={14}
                  priority
                />
              </span>
              <span>Instagram</span>
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
          Copyright © 2024 | Regenesys Business School (Pty) Ltd | All Rights
          Reserved
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
            Copyright © 2024 | Regenesys Business School (Pty) Ltd | All Rights
            Reserved
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
