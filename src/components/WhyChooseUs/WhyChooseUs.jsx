import React from "react";
import styles from "./WhyChooseUs.module.css";
import Card from "./Card/Card";
import { cardData } from "../../cardData/cardData";

const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.cards}>
        <Card cardData={cardData[0]} status={false} />
        <Card cardData={cardData[1]} status={true} />
        <Card cardData={cardData[2]} status={false} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
