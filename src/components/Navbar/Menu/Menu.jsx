import React from "react";
import styles from "../Menu/Menu.module.css";

const Menu = ({ titles }) => {
  return (
    <ul className={styles.wrapper}>
      {titles.map((item) => {
        return (
          <li className={styles.titles} key={item.id}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
