import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.label}>Contact Now</span>
    </button>
  );
};

export default Button;
