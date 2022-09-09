import React from "react";
import styles from "./Body.module.css";
import CallNow from "./Call/CallNow";
import Profile from "./Profile/Profile";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <Profile />
      <CallNow />
    </div>
  );
};

export default Body;
