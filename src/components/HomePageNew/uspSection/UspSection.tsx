import React, { useState, useEffect } from "react";
import UspSectionData from "./UspSectionData";
import Styles from "./uspSection.module.css";

const UspSection = () => {
  const { part1, part2, part3 } = UspSectionData;

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(part2.enrollmentCount.substring(0, 3));

    if (start === end) return;

    // Fix the duration to 2000 milliseconds (2 seconds)
    let incrementTime = 2000 / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + part2.enrollmentCount.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [part2.enrollmentCount]);

  return (
    <div className={Styles["usp-section-container"]}>
      <div className={Styles["usp-card"]}>
        <img src={part1.iconImage1} alt="Icon 1" />
        <p className={Styles["card-text"]}>{part1.card1text}</p>
      </div>
      <div className={`${Styles["usp-card"]} ${Styles["enrollment-card"]}`}>
        <img src={part2.iconImage2} alt="Icon 2" />
        <div className={Styles["enrollment-container"]}>
          <p className={Styles["enrollment-count"]}>{count}</p>
          <p className={Styles["card-text"]}>{part2.card2text}</p>
        </div>
      </div>
      <div className={Styles["usp-card"]}>
        <img src={part3.iconImage3} alt="Icon 3" />
        <p className={Styles["card-text"]}>{part3.card3text}</p>
      </div>
    </div>
  );
};

export default UspSection;
