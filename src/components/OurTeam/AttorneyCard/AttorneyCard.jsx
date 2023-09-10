import React from "react";
import styles from "./AttorneyCard.module.css";

const AttorneyCard = ({ attorney, status }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        status ? styles.active : styles.inactive
      }`}
    >
      <img src={attorney.img} alt={`${attorney.name} profile pic`} />
      <div className={styles.container}>
        <div className={styles.attorneyName}>{attorney.name}</div>
        <div className={styles.cases}>{`${attorney.cases} Cases`}</div>
      </div>
    </div>
  );
};

export default AttorneyCard;
