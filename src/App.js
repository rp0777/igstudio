import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import MyIntroduction from "./components/MyIntroduction/MyIntroduction";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <AboutSection />
      <MyIntroduction />
    </div>
  );
}

export default App;
