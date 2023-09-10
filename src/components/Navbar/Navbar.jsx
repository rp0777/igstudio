import React from "react";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";
import Menu from "./Menu/Menu";
import styles from "../Navbar/Navbar.module.css";
import { menuTitles } from "../../cardData/cardData";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menu titles={menuTitles} />
      <Button children={"Contact Now"} />
    </nav>
  );
};

export default Navbar;
