import React from "react";
import styles from "./UserInput.module.css";

const UserInput = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.userInput}
        type="text"
        id="name"
        name="name"
        placeholder="Name :"
        required
      />
      <input
        className={styles.userInput}
        type="email"
        id="email"
        pattern=".+@globex\.com"
        placeholder="Enter your Email"
        required
      />
      <button class={styles.sendBtn} type="button">
        SEND
      </button>
    </div>
  );
};

export default UserInput;
