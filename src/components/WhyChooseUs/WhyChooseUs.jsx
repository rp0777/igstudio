import React from "react";
import styles from "./WhyChooseUs.module.css";
import ReasonsCard from "./ReasonsCard/ReasonsCard";
import { reasons } from "../../cardData/cardData";

const WhyChooseUs = () => {
  const middleIndex = Math.ceil(reasons.length / 2);
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.cards}>
        {reasons.map((reason, index) => (
          <ReasonsCard
            key={index}
            reason={reason}
            status={index === middleIndex - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
