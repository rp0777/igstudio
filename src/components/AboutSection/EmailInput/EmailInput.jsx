import React from "react";
import styles from "./EmailInput.module.css";
import MessageImg from "../../../assets/message.png";

const EmailInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={MessageImg} alt="Email message icon" />
      </div>
      <input placeholder="Enter your email address" />
      <button>Let's Talk</button>
    </div>
  );
};

export default EmailInput;
