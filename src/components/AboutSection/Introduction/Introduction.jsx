import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.slogan}>
        <div>You don't have to</div>
        <div>Fight them alone.</div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </div>
    </div>
  );
};

export default Introduction;
