import React from "react";
import Description from "./Description/Description";
import styles from "./MyIntroduction.module.css";

const MyIntroduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subHeading} style={{ fontWeight: "600" }}>
        Let's Introduce <br /> Ourself
      </div>
      <Description />
    </div>
  );
};

export default MyIntroduction;
