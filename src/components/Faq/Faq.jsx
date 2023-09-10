import React from "react";
import styles from "./Faq.module.css";
import FaqAccordion from "./FaqAccordion/FaqAccordion";
import { accordionData } from "../../cardData/cardData";

const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.faqHeading}>FAQ</div>
      <div className={styles.faqContainer}>
        <p className={styles.faqIntro}>
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </p>
        <FaqAccordion accordionData={accordionData} />
      </div>
    </div>
  );
};

export default FAQ;
