import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const LeftFrame = () => {
  return (
    <div className={styles.leftFrameContainer}>
      <Link to="/">
        <div className={styles.logo}>GURUJI</div>
      </Link>
      <Link to="/">
        <div className={styles.talk}>Talk with astrologers</div>
      </Link>
    </div>
  );
};

export default LeftFrame;
