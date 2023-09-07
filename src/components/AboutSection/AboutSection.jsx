import React from "react";
import Introduction from "./Introduction/Introduction";
import styles from "./AboutSection.module.css";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

const AboutSection = () => {
  return (
    <div className={styles.wrapper}>
      <Introduction />
      <ProfilePicture />
    </div>
  );
};

export default AboutSection;
