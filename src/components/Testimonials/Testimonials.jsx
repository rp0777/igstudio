import React from "react";
import Heading from "./Heading/Heading";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import styles from "./Testimonials.module.css";
import { testimonialsData } from "../../cardData/cardData";

const Testimonials = () => {
  const middleIndex = Math.ceil(testimonialsData.length / 2);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Heading />
        <NavigationButtons />
      </div>
      <div className={styles.cards}>
        {testimonialsData.map((client, index) => (
          <TestimonialCard
            key={index}
            client={client}
            status={index === middleIndex - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
