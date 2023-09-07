import React from "react";
import styles from "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Navbar />
        <AboutSection />
        <p>Hello</p>
      </div>
    </React.Fragment>
  );
}

export default App;
