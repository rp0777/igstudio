import React from "react";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";
import Menu from "./Menu/Menu";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menu links={["Home", "Attorneys", "Practice Areas", "About Us"]} />
      <Button children={"Contact Now"} />
    </nav>
  );
};

export default Navbar;
