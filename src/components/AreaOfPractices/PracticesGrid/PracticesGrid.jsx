import React from "react";
import styles from "./PracticesGrid.module.css";
import { practices } from "../../../cardData/cardData";

const PracticesGrid = ({ odd }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOne}>
        <img
          className={styles.gridImg}
          src={practices[0].img}
          alt={practices[0].title}
        />
        <div className={styles.title}>{practices[0].title}</div>
      </div>
      <div className={styles.imgTwo}>
        <img
          className={styles.gridImg}
          src={practices[1].img}
          alt={practices[1].title}
        />
        <div className={styles.title}>{practices[1].title}</div>
      </div>
      <div className={styles.imgThree}>
        <img
          className={styles.gridImg}
          src={practices[2].img}
          alt={practices[2].title}
        />
        <div className={styles.title}>{practices[2].title}</div>
      </div>
      <div className={styles.imgFour}>
        <img
          className={styles.gridImg}
          src={practices[3].img}
          alt={practices[3].title}
        />
        <div className={styles.title}>{practices[3].title}</div>
      </div>
      <div className={styles.imgFive}>
        <img
          className={styles.gridImg}
          src={practices[4].img}
          alt={practices[4].title}
        />
        <div className={styles.title}>{practices[4].title}</div>
      </div>
      <div className={styles.imgSix}>
        <img
          className={styles.gridImg}
          src={practices[5].img}
          alt={practices[5].title}
        />
        <div className={styles.title}>{practices[5].title}</div>
      </div>
    </div>
  );
};

export default PracticesGrid;
