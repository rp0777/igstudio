import React from "react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.circle} ${styles.left}`}>
        <LeftArrow />
      </div>
      <div className={`${styles.circle} ${styles.right}`}>
        <RightArrow />
      </div>
    </div>
  );
};

export default NavigationButtons;
