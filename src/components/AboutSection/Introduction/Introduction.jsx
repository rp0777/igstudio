import React from "react";
import styles from "./Introduction.module.css";
import EmailInput from "../EmailInput/EmailInput";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.slogan}>
        <p>You don't have to</p>
        <p>Fight them Alone.</p>
      </div>
      <div className={styles.content}>
        Legal battles can be daunting, but you're not alone. Our dedicated law
        firm is here to provide unwavering support, expert guidance, and fierce
        advocacy. Together, we'll navigate the complexities of the law.
      </div>
      <EmailInput />
    </div>
  );
};

export default Introduction;
