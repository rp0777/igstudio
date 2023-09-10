import React from "react";
import styles from "./OurTeam.module.css";
import { attorneys } from "../../cardData/cardData";
import AttorneyCard from "./AttorneyCard/AttorneyCard";

const OurTeam = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Our Team</div>
      <div className={styles.attorneyCards}>
        {attorneys.map((attorney, index) => (
          <AttorneyCard
            attorney={attorney}
            key={attorney.id}
            status={attorney.id === "1" ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
