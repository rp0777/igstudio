import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ client, status }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        status ? styles.active : styles.inactive
      }`}
    >
      <img
        className={styles.clientImg}
        src={client.img}
        alt={client.name}
      ></img>
      <p className={styles.clientName}>{client.name}</p>
      <p className={styles.clientRole}>{client.role}</p>
      <p className={styles.clientComment}>{client.comment}</p>
    </div>
  );
};

export default TestimonialCard;
