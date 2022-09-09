import React from "react";
import LeftFrame from "./Frames/LeftFrame";
import RightFrame from "./Frames/RightFrame";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <LeftFrame />
      <RightFrame />
    </div>
  );
};

export default Navbar;
