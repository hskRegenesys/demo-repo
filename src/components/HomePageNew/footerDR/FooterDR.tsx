// FooterDR.js
import React from "react";
import styles from "./footerDR.module.css";

const FooterDR = () => {
  const FooterContent1 = () => (
    <div className={styles.footerContent1}>
      <div className={styles.footerLogo}>
        <img src="./assets/images/HomeNew/DR_Logo.svg" alt="LogoIpsum" />
      </div>
      <div className={styles.footerTextheader}>
        <p>Ready to get started</p>
        <button className={styles.getStartedButton}>Get Started</button>
      </div>
    </div>
  );

  const FooterContent2 = () => (
    <div className={styles.footerContent2}>
      <div className={styles.footerContent2}>
        <p>
          <strong className={styles.strong}>Courses</strong>
        </p>
        <ul>
          <li>Digital Marketing</li>
          <li>Cybersecurity</li>
          <li>Digital Marketing</li>
          <li>Artificial Intelligence</li>
          <li>Project Management</li>
        </ul>
      </div>
    </div>
  );

  const FooterContent3 = () => (
    <div className={styles.footerContent3}>
      <div className={styles.footerContent3}>
        <p>
          <strong className={styles.strong}>About</strong>
        </p>
        <ul>
          <li>Our Story</li>
          <li>Benefits</li>
          <li>Our Tutors</li>
          <li>Blogs</li>
          <li>FAQ's</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );

  const FooterContent4 = () => (
    <div className={styles.footerContent4}>
      <div className={styles.footerContent4}>
        <p>
          <strong className={styles.strong}>Follow Us</strong>
        </p>
        <div className={styles.socialIcons}>
          <div>
            <img
              src="./assets/images/HomeNew/facebook-icon.svg"
              alt="Facebook"
            />
            <span>Facebook</span>
          </div>
          <div>
            <img src="./assets/images/HomeNew/twiter-icon.svg" alt="Twitter" />
            <span>Twitter</span>
          </div>
          <div>
            <img src="./assets/images/HomeNew/insta-icon.svg" alt="Instagram" />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSectionDesktop}>
        <div className={styles.footerSection}>
          <div className={styles.content1}>
            <FooterContent1 />
          </div>
          <div className={styles.content2}>
            <FooterContent2 />

            <FooterContent3 />

            <FooterContent4 />
          </div>
          <div className={styles.footerText}>
            <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
            <div className={styles.footerTextInside}>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
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
            <FooterContent1 />
          </div>
          <div className={styles.footerText}>
            <p>
              Copyright © 2020. LogoIpsum. All rights reserved.|
              <a href="#"> Terms & Conditions</a> |
              <a href="#"> Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Other content within FooterDR */}
    </div>
  );
};

export default FooterDR;
