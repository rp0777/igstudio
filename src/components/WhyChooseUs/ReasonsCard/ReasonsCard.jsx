import React from "react";
import styles from "./ReasonsCard.module.css";

const Card = ({ reason, status }) => {
  return (
    <div
      className={
        status
          ? `${styles.wrapper} ${styles.active}`
          : `${styles.wrapper} ${styles.inactive}`
      }
    >
      <div className={styles.profile}>
        <img src={reason.img} alt="gift pic" />
      </div>
      <div className={styles.successRate}>{reason.successRate}</div>
      <div className={styles.description}>{reason.description}</div>
      <button className={styles.btn}>{reason.buttonLabel}</button>
    </div>
  );
};

export default Card;
