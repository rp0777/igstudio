import React from "react";
import styles from "./SocialHandles.module.css";

const SocialHandles = ({ socialHandlesData }) => {
  return (
    <div className={styles.wrapper}>
      {socialHandlesData.map((socialHandle) => (
        <img
          key={socialHandle.id}
          src={socialHandle.img}
          alt={socialHandle.name}
        />
      ))}
    </div>
  );
};

export default SocialHandles;
