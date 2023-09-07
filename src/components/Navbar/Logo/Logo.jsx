import React from "react";
import LogoImg from "../../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={LogoImg} alt="logo" width={67} />;
};

export default Logo;
