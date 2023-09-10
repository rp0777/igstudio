import React from "react";
import styles from "./FooterMenu.module.css";

const FooterMenu = ({ titles }) => {
  console.log(titles);
  return (
    <ul className={styles.wrapper}>
      {titles.map((item) => {
        console.log(item);
        return (
          <li className={styles.titleName} key={item.id}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenu;
