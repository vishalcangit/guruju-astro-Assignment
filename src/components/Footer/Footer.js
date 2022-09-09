import React from "react";
import About from "./About";
import Community from "./Community";
import styles from "./Footer.module.css";
import Host from "./Host";
import Support from "./Support";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <About />
      <Community />
      <Host />
      <Support />
    </div>
  );
};

export default Footer;
