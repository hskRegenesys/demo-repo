// ConnectContainer.js
import React from "react";
import NewHomeData from "../../../data/newHomeData";
import styles from "./connectContainer.module.css";

const ConnectContainer = () => {
  const {
    connectContainerHeader,
    connectContainerTittle,
    connectContainerText,
    icon1,
    icon2,
    icon3,
  } = NewHomeData.connectContainerData;

  return (
    <div className={styles.connectContainer}>
      <div className={styles.leftSection}>
        <div className={styles.heading}>{connectContainerHeader}</div>
        <div className={styles.title}>{connectContainerTittle}</div>
        <ul className={styles.textList}>
          {connectContainerText.map((text, index) => (
            <div key={index} className={styles.icontext}>
              <img
                src={index === 0 ? icon1 : index === 1 ? icon2 : icon3}
                alt={`Icon ${index + 1}`}
                className={styles.icon}
              />

              <li>{text}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.applyNowHeading}>Apply Now</div>
        <form className={styles.form}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
          />

          <select
            id="program"
            name="program"
            placeholder="Select Program"
            required
          >
            <option value="program1">Program 1</option>
            <option value="program2">Program 2</option>
            {/* Add more options as needed */}
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConnectContainer;
