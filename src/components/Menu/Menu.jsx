import React from "react";
import styles from "../Menu/Menu.module.css";

const Menu = ({ links }) => {
  return (
    <ul className={styles.wrapper}>
      {links.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default Menu;
