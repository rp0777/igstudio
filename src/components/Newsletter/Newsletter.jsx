import React from "react";
import styles from "./Newsletter.module.css";
import UserInput from "./UserInput/UserInput";

const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.newsletterTitle}>Subscribe Out Newsletter</div>
      <UserInput />
    </div>
  );
};

export default Newsletter;
