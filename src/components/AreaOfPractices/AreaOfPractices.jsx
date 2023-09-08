import React from "react";
import PracticesGrid from "./PracticesGrid/PracticesGrid";
import styles from "./AreaOfPractices.module.css";

const AreaOfPractices = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Area Of Practices</div>
      <PracticesGrid />
    </div>
  );
};

export default AreaOfPractices;
