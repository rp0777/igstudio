import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import MyIntroduction from "./components/MyIntroduction/MyIntroduction";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices";
import Testimonials from "./components/Testimonials/Testimonials";
import OurTeam from "./components/OurTeam/OurTeam";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.landingPage}>
        <Navbar />

        <AboutSection />
      </div>

      <MyIntroduction />

      <WhyChooseUs />

      <AreaOfPractices />

      <Testimonials />

      <OurTeam />

      <Faq />
    </div>
  );
}

export default App;
