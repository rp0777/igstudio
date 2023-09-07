import React from "react";
import styles from "./EmailInput.module.css";
import MessageImg from "../../../assets/message.png";

const EmailInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={MessageImg} alt="Email message icon" />
      </div>
      <input
        className={styles.emailInput}
        placeholder="Enter your email address"
      />
      <button className={styles.btn}>Let's Talk</button>
    </div>
  );
};

export default EmailInput;
