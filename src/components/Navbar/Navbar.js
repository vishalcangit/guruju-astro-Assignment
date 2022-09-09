import React from "react";
import LeftFrame from "./LeftFrame";
import styles from "./Navbar.module.css";
import RightFrame from "./RightFrame";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <LeftFrame />
      <RightFrame />
    </div>
  );
};

export default Navbar;
