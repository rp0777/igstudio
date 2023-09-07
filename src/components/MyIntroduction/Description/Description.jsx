import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <div className={styles.heading}>Criminal Lawyer</div>
      <div className={styles.content}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exercitation.
      </div>
    </div>
  );
};

export default Description;
