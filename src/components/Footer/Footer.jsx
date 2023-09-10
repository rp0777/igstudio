import React from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo/Logo";
import FooterMenu from "./FooterMenu/FooterMenu";
import { menuTitles } from "../../cardData/cardData";
import SocialHandles from "./SocialHandles/SocialHandles";
import { socialHandlesData } from "../../cardData/cardData";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerNav}>
        <Logo />
        <FooterMenu titles={menuTitles} />
        <SocialHandles socialHandlesData={socialHandlesData} />
      </div>
      <div className={styles.copyrights}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
