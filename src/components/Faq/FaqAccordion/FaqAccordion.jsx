import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./FaqAccordion.module.css";

export default function BasicAccordion({ accordionData }) {
  const [accordionExpanded, setAccordionExpanded] = useState(
    new Array(4).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedAccordionState = [...accordionExpanded];
    updatedAccordionState[index] = !updatedAccordionState[index];
    setAccordionExpanded(updatedAccordionState);
  };

  return (
    <div className={styles.wrapper}>
      {accordionData.map((data, index) => (
        <Accordion
          key={index}
          className={styles.accordion}
          expanded={accordionExpanded[index]}
          onChange={() => toggleAccordion(index)}
        >
          <AccordionSummary
            expandIcon={
              <span className={styles.icons}>
                {accordionExpanded[index] ? "-" : "+"}
              </span>
            }
            className={styles.accordionSummary}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography className={styles.question}>{data.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.answer}>{data.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

// const accordionData = [
//   {
//     question: "Do I need a personal injury report?",
//     answer:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
//   },
//   {
//     question: "How much is my case worth?",
//     answer:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
//   },
//   {
//     question: "What should I do right after a car accident?",
//     answer:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
//   },
//   {
//     question: "How much is my case worth?",
//     answer:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
//   },
// ];
