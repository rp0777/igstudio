import React from "react";
import styles from "./ReasonsCard.module.css";

const Card = ({ cardData, status }) => {
  return (
    <div
      className={
        status
          ? `${styles.card} ${styles.active}`
          : `${styles.card} ${styles.inactive}`
      }
    >
      <div className={styles.profile}>
        <img src={cardData.img} alt="gift pic" />
      </div>
      <div className={styles.successRate}>{cardData.successRate}</div>
      <div className={styles.description}>{cardData.description}</div>
      <button className={styles.btn}>{cardData.buttonLabel}</button>
    </div>
  );
};

export default Card;
